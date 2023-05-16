import { css, cx } from "@emotion/css";
import { mailOrder, postOrder } from "@/lib/dbService";
import { useState, useEffect } from "react";
// import RegionSelect from "./RegionSelect/RegionSelect";
// import Address from "./Address/Address";
// import Phone from "./Phone/Phone";
import Client from "./Client/Client";
import Checkbox from "./Checkbox/Checkbox";
import ButtonSubmit from "./ButtonSubmit";
import QtyButtons from "./QtyButtons";
import { Accessories, AkvasanaOrder, Region } from "@/types/AkvasanaData";
import { RegionSelect,Address,Phone } from './TextInputs';

const Order = ({
  regions,
  accessory,
}: {
  regions: Region[];
  accessory: Accessories;
}) => {
  const [region, setRegion] = useState<Region | undefined>(undefined); // об'єкт з даними по вибраному району
  const [client, setClient] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [bottle, setBottle] = useState(false);
  const [pomp, setPomp] = useState(false);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0); // 9
  const [minQty, setMinQty] = useState(0);

  // при изменении стейта указанных комп-тов useEffect пересчитает сумму
  useEffect(() => {
    // console.log('useEffect 1');
    if (!region) return;
    countSum();
  }, [region, qty, bottle, pomp]);

  const countSum = () => {
    const cost = qty >= 2 ? region?.cost : region?.cost1;
    setTotal(
      () =>
        qty * (cost ? cost : 0) +
        qty * (bottle ? accessory[0].cost : 0) +
        (pomp ? accessory[1].cost : 0)
    );
  };

  const regionChange = (reg: string) => {
    const selectRegion = JSON.parse(reg);
    setRegion(selectRegion);
    setQty(() => selectRegion.minQty * 1);
    setMinQty(() => selectRegion.minQty * 1);
  };

  //трансформация данных для отправки на сервер
  // const dataReq = () => {
  //   return {
  //     regionName: region.regionName,
  //     address,
  //     phone,
  //     isClient: client,
  //     bottle: bottle,
  //     pomp: pomp,
  //     qty: qty,
  //     total,
  //   } as AkvasanaOrder;
  // };

  function orderSubmit(event: any) {
    // console.log("orderSubmit", dataReq());
    // postOrder(dataReq());
    event.preventDefault();
  }

  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <h2
        className={css`
          text-align: center;
          margin: 3rem 0 2rem;

          @media (max-width: 600px) {
            margin: 2rem 0 1rem;
          }
        `}
      >
        Замовлення води Аква Сана онлайн
      </h2>
      <svg
        width="1.8133296in"
        height="0.093333147in"
        viewBox="0 0 543.99979 28.000015"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        fill="currentColor"
        className={css`
          color: var(--color-light-blue);
        `}
      >
        <path d="m 0,5 c 5.02,2.58 18.82,5.06 25,6.42 0,0 54,9.85 54,9.85 0,0 53,5.82 53,5.82 0,0 12,0.91 12,0.91 0,0 32,0 32,0 0,0 12,-0.91 12,-0.91 28.95,-2.03 57.39,-6.86 86,-11.66 0,0 65,-9.26 65,-9.26 0,0 20,-1.26 20,-1.26 0,0 12,-0.91 12,-0.91 0,0 22,0 22,0 0,0 18,1 18,1 0,0 19,1.83 19,1.83 26.86,2.69 53.43,6.8 80,11.59 0,0 34,6.58 34,6.58 -4.46,-2.65 -18.2,-5.2 -24,-6.63 0,0 -61,-11.64 -61,-11.64 C 442.09,4.29 412.33,0.03 396,0 c 0,0 -33,0 -33,0 0,0 -12,0.91 -12,0.91 -27.26,1.87 -54.06,6.14 -81,10.66 -28.89,4.84 -57.79,9.48 -87,11.52 0,0 -12,0.91 -12,0.91 0,0 -32,0 -32,0 0,0 -10,-0.91 -10,-0.91 C 98.47,20.99 68.19,16.99 38,11.75 38,11.75 0,5 0,5 Z" />
      </svg>

      <div
        className={css`
          background-color: #0a5b88;
          margin: 50px 0;
          max-width: 100%;
          border-radius: 20px;
          padding: 0.5rem 2rem;
          @media (max-width: 600px) {
            margin: 30px 0;
          }
        `}
      >
        <form onSubmit={orderSubmit} className={css``}>
          <div className={row}>
            <RegionSelect regSelect={regions} onChange={regionChange} />
            <Address
              onChange={(event: any) => setAddress(event.target.value)}
            />
            <Phone onChange={(event: any) => setPhone(event.target.value)} />
          </div>

          <div className={row}>
            <Client onChange={(event: any) => setClient(event.target.value)} />
          </div>

          <div className={row}>
            <Checkbox
              label={`Чи потрібна Вам тара?(${accessory[0].cost})грн/бутиль`}
              value={accessory[0].cost}
              onChange={() => setBottle(!bottle)}
            />
            <Checkbox
              label={`Чи потрібна Вам помпа?(${accessory[1].cost})грн/бутиль`}
              value={accessory[1].cost}
              onChange={() => setPomp(!pomp)}
            />
          </div>

          <div
            className={cx(
              row,
              css`
                justify-content: center;
                flex-wrap: nowrap;
              `
            )}
          >
            <QtyButtons
              qty={qty}
              minusClick={() => {
                if (qty > minQty) setQty(qty - 1);
              }}
              plusClick={() => setQty(qty + 1)}
              total={total}
            />
          </div>

          <div className={row}>
            <ButtonSubmit />
          </div>
        </form>
      </div>
    </section>
  );
};

const row = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: #365aab solid 2px;

  @media (max-width: 768px) {
  }

  @media (max-width: 575px) {
  }
`;

export default Order;
