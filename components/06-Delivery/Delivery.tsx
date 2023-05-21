import { krogSchema } from "@/public/assets"
import { comfortaaFont } from "@/styles/ComfortaaFont";
import { css, cx } from "@emotion/css";
import Image from 'next/image';

const Delivery = () => {
  return (
    <section className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      id="delivery" >
      <h2 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Доставка води у Кривому Розі по районах</h2>
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

      <div className={css`
        margin: 2rem 0 0 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5vw;
        align-items: center;

        @media (max-width: 650px) {
          grid-template-columns: 1fr;
        }
      `}>
        <div className={css`
        `}>
          <Image className={css`
            @media (max-width: 900px) {
              width: 100%;
              height: auto;
              object-fit: contain;}
            `} src={krogSchema} width={400} height={565} alt="Схема районів Кривого Рогу" />
        </div>

        <div>
          <div className={cx(regionStyle, css`
            :before {
              content: "1";
              background-color: #996600;
              padding: 10px 19px;
            }
          `)}>
            <div>
              Тернівський (від 2-х бутлів)<br />
              <span>понеділок, четвер</span> 50 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            :before {
              content: "2";
              background-color: #ccf4cc;
            }
          `)}>
            <div>
              Покровський (від 1-го бутля)<br />
              <span>понеділок - п&apos;ятниця</span> 48 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            :before {
              content: "3";
              background-color: #003399;
            }
          `)}>
            <div>
              Саксаганський (від 2-х бутлів)<br />
              <span>вівторок, п&apos;ятниця</span> 50 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            :before {
              content: "4";
              background-color: #99ff66;
            }
          `)}>
            <div>
              Довгинцівський (від 2-х бутлів)<br />
              <span>вівторок, п&apos;ятниця</span> 50 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            :before {
              content: "5";
              background-color: #cc9900;
            }
          `)}>
            <div>
              Центрально-Міський (від 2-х бутлів)<br />
              <span>вівторок, п&apos;ятниця</span> 50 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            :before {
              content: "6";
              background-color: #ff794b;
            }
          `)}>
            <div>
              Металургійний (від 2-х бутлів)<br />
              <span>вівторок, п&apos;ятниця</span> 50 грн/шт
            </div>
          </div>
          <div className={cx(regionStyle, css`
            border: none;

            :before {
              content: "7";
              background-color: #990000;
            }
          `)}>
            <div>
              Інгулецький (від 2-х бутлів)<br />
              <span>тимчасово не доставляється</span> 50 грн/шт
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery

const regionStyle = css`
  display: flex;
  align-items: center;
  color: var(--color-blue);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-light-blue);

  @media (max-width: 840px) {
    font-size: 1rem;
  }

  @media (max-width: 650px) {
      font-size: 1.2rem;
  }

  @media (max-width: 380px) {
      font-size: 1rem;
  }

  span {
    font-weight: 300;
  }

  :before {
    content: "1";
    background-color: #996600;
    color: #111111;
    padding: 10px 17px;
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #0e9f10;
  }  
`