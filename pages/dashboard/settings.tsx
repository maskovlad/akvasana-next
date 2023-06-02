import Head from 'next/head';
import { useEffect, useState } from 'react';
import loadingIcon from '@/public/Loading_icon.gif'
import Image from 'next/image';
import prisma from '@/lib/prisma';
import { css } from '@emotion/css';
import { Accessories, Region, Accessory } from '@/types/AkvasanaData';
import Link from 'next/link';

export async function getServerSideProps() {
  // const options = await prisma.akvasanaOptions.findMany()
  const regions = await prisma.akvasanaRegions.findMany({
    orderBy: { id: "asc" }
  })

  const accessories = await prisma.akvasanaAccessory.findMany({
    orderBy: { id: "asc" }
  })

  return {
    props: {
      // options,
      regions,
      accessories,
    },
  }
}

const Settings = ({ 
    settings, regions, accessories 
  }:{ 
    settings: any, 
    regions: Region[],
    accessories: Accessories,
  }) => {

  const [tern, setTern] = useState<Region>(regions[0])
  const [pokr, setPokr] = useState<Region>(regions[1])
  const [saks, setSaks] = useState<Region>(regions[2])
  const [dovg, setDovg] = useState<Region>(regions[3])
  const [cent, setCent] = useState<Region>(regions[4])
  const [meta, setMeta] = useState<Region>(regions[5])
  const [ingu, setIngu] = useState<Region>(regions[6])
  const [bottle, setBottle] = useState(accessories[0])
  const [pomp, setPomp] = useState(accessories[1])

  const [dbUpdated, setDbUpdated] = useState(false)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (!dbUpdated) return
    revalidateHome()
  }, [dbUpdated])

  const updateRegions = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    const data: Region[] = [
      tern,
      pokr,
      saks,
      dovg,
      cent,
      meta,
      ingu,
    ]

    try {
      const response = await fetch('/api/update-regions', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 200) setDbUpdated(true) // запускає revalidate

    } catch (error) {
      console.error(error);
      alert('Щось пішло не так. Перезавантажте, будь ласка сторінку і спробуйте ще раз')
    } finally {
      setLoader(false)
    }
  }

  const updateAccessory = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    const data: Accessories = [
      bottle,
      pomp,
    ]

    try {
      const response = await fetch('/api/update-accessory', {
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 200) setDbUpdated(true) // запускає revalidate

    } catch (error) {
      console.error(error);
      alert('Щось пішло не так. Перезавантажте, будь ласка сторінку і спробуйте ще раз')
    } finally {
      setLoader(false)
    }
  }

  const revalidateHome = async () => {
    try {
      const revalidate: any = await fetch('/api/revalidate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          urlPath: "/",
        }),
      })

      if (revalidate.status !== 200) throw new Error("Помилка revalidate домашньої сторінки status=", revalidate.status)
    } catch (error) {
      console.error("Помилка revalidate домашньої сторінки");
    } finally {
      setDbUpdated(false)
    }
  }

  return (
    <>
      <Head>
        <title>Настройки сайту</title>
        <meta name="robots" content="none" />
        <link rel="icon" href="/favicon-min.png" />
      </Head>
{/*============================== */}
      {loader ? (<div className={css`
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        background: #fff;
        display: flex;
        align-items: center;
        align-content: center;
      `}><Image src={loadingIcon} width={210} height={145} alt='Loading...' />  </div>)
        : (
// ==============================
  <main className={css`
    width: 90vw;
    margin: 0 auto;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
  `}>
    <Link href="/" className={css`
      font-size: 1.2rem;
    `}>Головна</Link>

    <h2 className={css`
      margin: 2rem 0;
    `}>Настройки сайту</h2>

    <h3>Вартість води</h3>

    <form className={css`
      overflow-x: auto;
      width: 100%;
      margin: 1.5rem 0 4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    `}
      onSubmit={updateRegions}>
          <table className={css`
            input {
              font-size: 1rem;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type=number] {
              -moz-appearance: textfield;
            }
          `}>
            <thead>
              <tr>
                <th colSpan={1}>Район</th>
                <th colSpan={1}>Мін.кількість</th>
                <th colSpan={1}>За 2 бутля</th>
                <th colSpan={1}>За 1 бутель</th>
                <th colSpan={1}>Доставка</th>
              </tr>
            </thead>
            <tbody>
              <RegionRow region={tern} setRegion={setTern} />
              <RegionRow region={pokr} setRegion={setPokr} />
              <RegionRow region={saks} setRegion={setSaks} />
              <RegionRow region={dovg} setRegion={setDovg} />
              <RegionRow region={cent} setRegion={setCent} />
              <RegionRow region={meta} setRegion={setMeta} />
              <RegionRow region={ingu} setRegion={setIngu} />
            </tbody>
          </table>
      <button type="submit" value="Send" className="btn">
        ОНОВИТИ
      </button>
    </form>

    <h3>Вартість аксесуарів</h3>

    <form className={css`
      overflow-x: auto;
      width: 100%;
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    `}
      onSubmit={updateAccessory}>
          <table className={css`
            input {
              font-size: 1rem;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type=number] {
              -moz-appearance: textfield;
            }
          `}>
            <thead>
              <tr>
                <th colSpan={1}>Назва</th>
                <th colSpan={1}>Ціна</th>
              </tr>
            </thead>
            <tbody>
              <AccessoryRow accessory={bottle} setAccessory={setBottle} />
              <AccessoryRow accessory={pomp} setAccessory={setPomp} />
            </tbody>
          </table>
      <button type="submit" value="Send" className="btn">
        ОНОВИТИ
      </button>
    </form>

  </main>
        )}

    </>

  )
}

export default Settings

const RegionRow = ({ region, setRegion }: { region: Region, setRegion: any }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={region.regionName}
          onChange={(e: any) => setRegion({ ...region, regionName: e.target.value })}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={region.minQty}
          onChange={(e: any) => setRegion({ ...region, minQty: parseInt(e.target.value) })}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={region.cost}
          onChange={(e: any) => setRegion({ ...region, cost: parseInt(e.target.value) })}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={region.cost1}
          onChange={(e: any) => setRegion({ ...region, cost1: parseInt(e.target.value) })}
          required
        />
      </td>
      <td>
        <input
          type="text"
          value={region.delivery}
          onChange={(e: any) => setRegion({ ...region, delivery: e.target.value })}
          required
        />
      </td>
    </tr>
  )
}

const AccessoryRow = ({ accessory, setAccessory }: { accessory: Accessory, setAccessory:any }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={accessory.title}
          onChange={(e: any) => setAccessory({ ...accessory, title: e.target.value })}
          required
        />
      </td>
      <td>
        <input
          type="number"
          value={accessory.cost}
          onChange={(e: any) => setAccessory({ ...accessory, cost: parseInt(e.target.value) })}
          required
        />
      </td>
    </tr>
  )
}

