import { css, cx } from "@emotion/css";
import { mailOrder, postOrder } from "@/lib/apiService";
import { useState, useEffect } from "react";
import Client from "./Client";
import Checkbox from "./Checkbox";
import QtyButtons from "./QtyButtons";
import { Accessories, AkvasanaOrder, Region } from "@/types/AkvasanaData";
import { RegionSelect, Address, Phone } from './TextInputs';
import { comfortaaFont } from '@/styles/ComfortaaFont';
import NumberFormat from "react-number-format";


const Order = ({
  regions,
  accessory,
}: {
  regions: Region[];
  accessory: Accessories;
}) => {

  const [region, setRegion] = useState<Region>({
    id: 0,
    regionName: "",
    minQty: 0,
    cost: 0,
    cost1: 0,
    delivery: "",
  }); // об'єкт з даними по вибраному району
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isClient, setIsClient] = useState("Так");
  const [bottle, setBottle] = useState(false);
  const [pomp, setPomp] = useState(false);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0); // 9
  const [minQty, setMinQty] = useState(0);
  const [sentStatus, setSentStatus] = useState("undef")

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

  // трансформация данных для отправки на сервер
  const orderData = () => {
    const data: AkvasanaOrder = {
      id: undefined,
      createdAt: undefined,
      app: "SITE",
      regionName: region.regionName,
      address,
      phone,
      isClient,
      bottle: bottle ? "Так" : "Ні",
      pomp: pomp ? "Так" : "Ні",
      qty,
      total,
    }
    return data
  };

  async function orderSubmit(event: any) {
    event.preventDefault();

    const data = orderData()

    await postOrder(data);
    const status = await mailOrder(data)

    if (status === 202) { setSentStatus("success") } else { 
      setSentStatus("success") 
      console.log(status)
    }
    setRegion({
      id: 0,
      regionName: "",
      minQty: 0,
      cost: 0,
      cost1: 0,
      delivery: "",
    });
    setAddress("")
    setPhone("")
    setIsClient("Так")
    setBottle(false)
    setPomp(false)
    setQty(0)
    setTotal(0)
    setMinQty(0)

    setTimeout(() => setSentStatus("done"), 3000)
  }

  return (
    <section className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      id="order">
      <h2 className={cx(comfortaaFont, css`
          text-align: center;
          margin: 3rem 0 2rem;

          @media (max-width: 600px) {
            margin: 2rem 0 1rem;
          }
        `)}>
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
          margin: 50px 0 0;
          max-width: 100%;
          border-radius: 20px;
          padding: 0.5rem 2rem;
          filter: var(--block-shadow);

          @media (max-width: 600px) {
            margin: 30px 0;
            padding: 0.5rem 1.5rem;
          }
        `}>
        <form onSubmit={orderSubmit} className={css``}>
          <div className={row}>
            <RegionSelect regSelect={regions} value={JSON.stringify(region)} onChange={regionChange} />
            <Address value={address} onChange={(event: any) => setAddress(event.target.value)} />
            <Phone value={phone} onChange={(inputObj: any) => setPhone(inputObj.value)} />
          </div>

          <div className={row}>
            <Client
              onChange={(event: any) => setIsClient(event.target.value)}
              checked={isClient} />
          </div>

          <div className={row}>
            <Checkbox
              label={`Чи потрібна Вам тара?(${accessory[0].cost})грн/бутель`}
              value={accessory[0].cost}
              name={accessory[0].item}
              onChange={(event: any) => setBottle(event.target.checked)}
              checked={bottle}
            />
            <Checkbox
              label={`Чи потрібна Вам помпа?(${accessory[1].cost})грн/бутель`}
              value={accessory[1].cost}
              name={accessory[0].item}
              onChange={(event: any) => setPomp(event.target.checked)}
              checked={pomp}
            />
          </div>

          <div className={cx(
            row,
            css`
                justify-content: space-around;
                flex-wrap: nowrap;
                padding: 0;
              `
          )}>
            <QtyButtons
              qty={qty}
              minusClick={() => {
                if (qty > minQty) setQty(qty - 1);
              }}
              plusClick={() => setQty(qty + 1)}
              total={total}
            />
          </div>

          <div className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 1rem 0 2rem;
            `}>
            <button type="submit" className={cx("btn", css`
              margin: 20px 0;
            `)}>
              <span>ЗАМОВИТИ</span>
            </button>
            {sentStatus === "success"
              ? <p className={css`
                  font-weight: 600;
                  color: var(--color-white);
                `}>
                Дякуємо за замовлення!
                Незабаром ми зв&apos;яжемося з вами.</p>
              : sentStatus === "error"
                ? <p className={css`
                  font-weight: 600;
                  color: red;
                `}>
                  Щось пішло не так. Спробуйте перезавантажити
                  сторінку зробити замовлення ще раз.
                </p>
                : null
            }
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
  padding: 1rem 0;
  border-bottom: #365aab solid 2px;

  @media (max-width: 768px) {
  }

  @media (max-width: 575px) {
  }
`;

const wrap = css`
  display: block;
  padding: 20px;
  width: 33%;
  @media (max-width: 768px) {
    padding: 10px;
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const label = css`
  max-width: 100%;
  font-weight: 500;
  color: var(--color-white);
`;
const input = css`
  margin-top: 5px;
  height: 35px;
  width: 100%;
  padding: 6px 12px;
  border: 2px solid var(--color-blue);
  font-size: 14px;
  border-radius: 10px;
  text-align: left;
  background-color: #dddddd;
  color: #222222;

  ::placeholder {
    color: #666666;
  }
  :focus {
    outline: none;
  }
`;



export default Order;
