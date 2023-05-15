import React, { useState, useEffect } from 'react'
import Region from '../RegionSelect/RegionSelect'
import ApiService from '../../ApiService'
import Checkbox from '../Checkbox/Checkbox'
import Address from '../Address/Address'
import Phone from '../Phone/Phone'
import Client from '../Client/Client'
import QtyButtons from '../QtySum'
import ButtonSubmit from '../ButtonSubmit'

const OrderForm = () => {
  const apiService = new ApiService()

  const [dataList, setDataList] = useState(null)
  const [region, setRegion] = useState(null)
  const [client, setClient] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [bottle, setBottle] = useState(0)
  const [pomp, setPomp] = useState(0)
  const [qty, setQty] = useState(0)
  const [total, setTotal] = useState(0)             // 9
  const [minQty, setMinQty] = useState(0)

  useEffect(() => requestData(), [])
  // при изменении стейта указанных комп-тов useEffect пересчитает сумму 
  useEffect(() => {
    // console.log('useEffect 1');
    if (!region) return
    return countSum()
  }, [region, qty, bottle, pomp])

  const countSum = () => {
    const cost = qty >= 2 ? region.cost : region.cost1
    setTotal(() => qty * cost + qty * bottle + pomp)
  }

  const regionChange = (reg) => {
    setRegion(() => reg)
    setQty(reg.minQty * 1)
    setMinQty(reg.minQty * 1)
  }

  const requestData = () => {
    apiService
      .getAllData()
      .then((response) => {
        // console.log('=========OrderForm==response.regSelect====');
        // console.log(response.regSelect);
        setDataList(response)
        // console.log('====OrderForm=requestData=dataList==');
        // console.log(dataList);
      })
  }

  //трансформация данных для отправки на сервер
  const dataReq = () => {
    return {
      region: region.regionName,
      address,
      phone,
      is_client: client,
      bottle_need: bottle,
      pomp_need: pomp,
      quantity_bottles: qty,
      total
    }
  }

  function orderSubmit(event) {
    console.log('orderSubmit', dataReq());
    apiService.postRequest(dataReq())
    event.preventDefault();
  }

  const addressChange = (addr) => {
    setAddress(addr)
  }

  const phoneChange = (ph) => {
    setPhone(ph)
  }

  const clientChange = (cl) => {
    setClient(cl)
  }

  const bottleChange = (chk) => {
    setBottle(chk ? dataList.bottle[0].cost * 1 : 0)
  }

  const pompChange = (chk) => {
    setPomp(chk ? dataList.pomp[0].cost * 1 : 0)
  }

  const minusClick = () => {
    if (qty > minQty) {
      setQty(() => qty - 1)
    }
  }

  const plusClick = () => {
    setQty(() => qty + 1)
  }

  if (!dataList) {
    return <span>Loading...</span>
  }

  return (
    <div className="as-form-container">
      <form className="as-form" id="as-form" onSubmit={orderSubmit}>
        <div className='row'>
          <Region regSelect={dataList.regSelect} onChange={regionChange} />
          <Address onChange={addressChange} />
          <Phone onChange={phoneChange} />
        </div>

        <div className="row">
          <Client onChange={clientChange} />
        </div>

        <div className="row">
          <Checkbox
            label={`Чи потрібна Вам тара?(${dataList.bottle[0].cost})грн/бутиль`}
            value={dataList.bottle[0].cost}
            onChange={bottleChange} />
          <Checkbox
            label={`Чи потрібна Вам помпа?(${dataList.pomp[0].cost})грн/бутиль`}
            value={dataList.pomp[0].cost}
            onChange={pompChange} />
        </div>

        <QtyButtons
          qty={qty}
          minusClick={minusClick}
          plusClick={plusClick}
          total={total} />

        <ButtonSubmit />

      </form>
    </div>
  )
}
export default OrderForm
