import { comfortaaFont } from '@/styles/ComfortaaFont';
import { Accessories } from '@/types/AkvasanaData';
import { css, cx } from '@emotion/css';
import { postPomp, postBottle } from '@/public/assets'
import Link from 'next/link';

const Accessory = ({ accessory }: { accessory: Accessories }) => {
  const bootle = accessory[0].cost
  const pomp = accessory[1].cost

  return (
    <section className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
      id="accessory">
      <h1 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Додаткові аксесуари</h1>
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
          margin-bottom: 2rem;
        `}
      >
        <path d="m 0,5 c 5.02,2.58 18.82,5.06 25,6.42 0,0 54,9.85 54,9.85 0,0 53,5.82 53,5.82 0,0 12,0.91 12,0.91 0,0 32,0 32,0 0,0 12,-0.91 12,-0.91 28.95,-2.03 57.39,-6.86 86,-11.66 0,0 65,-9.26 65,-9.26 0,0 20,-1.26 20,-1.26 0,0 12,-0.91 12,-0.91 0,0 22,0 22,0 0,0 18,1 18,1 0,0 19,1.83 19,1.83 26.86,2.69 53.43,6.8 80,11.59 0,0 34,6.58 34,6.58 -4.46,-2.65 -18.2,-5.2 -24,-6.63 0,0 -61,-11.64 -61,-11.64 C 442.09,4.29 412.33,0.03 396,0 c 0,0 -33,0 -33,0 0,0 -12,0.91 -12,0.91 -27.26,1.87 -54.06,6.14 -81,10.66 -28.89,4.84 -57.79,9.48 -87,11.52 0,0 -12,0.91 -12,0.91 0,0 -32,0 -32,0 0,0 -10,-0.91 -10,-0.91 C 98.47,20.99 68.19,16.99 38,11.75 38,11.75 0,5 0,5 Z" />
      </svg>
      <div className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;

        @media screen and (max-width: 540px) {
          grid-template-columns: 1fr;
        }
      `}>

        <div className={card}>
          <Link href="bootle-policarbon" className={link}>
            <img
              src={postBottle.src}
              alt="Featured Image"
            />
            <h4>Бутиль полікарбонатний 18,9 л</h4>
          </Link>
          <div className={css`
            position: absolute;
            width: 88px;
            height: 88px;
            top: -3px;
            right: -3px;
            overflow: hidden;
            z-index: 1;
          `}>
            <div className={css`
              text-align: center;
              transform: rotate(45deg);
              position: relative;
              padding: 6px 0;
              left: -4px;
              top: 15px;
              width: 120px;
              color: #ffffff;
              box-shadow: 0px 0px 7px #000;
              text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px;
              background: var(--green-gradient);

              :before,
              :after {
                content: "";
                border-top: 3px solid #50504f;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                position: absolute;
                bottom: -3px;
              }

              :before {
                left: 0;
              }

              :after {
                right: 0;
              }
            `}>{bootle}грн</div>
          </div>
        </div>

        <div className={card}>
          <Link href="pompa-mekhanichna-dlya-vody-lilu-econom" className={link}>
            <img
              src={postPomp.src}
              alt="Featured Image"
            />
            <h4>Помпа механічна для води «LiLu» Econom</h4>
          </Link>
          <div className={css`
            position: absolute;
            width: 88px;
            height: 88px;
            top: -3px;
            right: -3px;
            overflow: hidden;
            z-index: 1;
          `}>
            <div className={css`
              text-align: center;
              transform: rotate(45deg);
              position: relative;
              padding: 6px 0;
              left: -4px;
              top: 15px;
              width: 120px;
              color: #ffffff;
              box-shadow: 0px 0px 7px #000;
              text-shadow: rgba(255, 255, 255, 0.5) 0px 1px 0px;
              background: var(--green-gradient);

              :before,
              :after {
                content: "";
                border-top: 3px solid #50504f;
                border-left: 3px solid transparent;
                border-right: 3px solid transparent;
                position: absolute;
                bottom: -3px;
              }

              :before {
                left: 0;
              }

              :after {
                right: 0;
              }
            `}>{bootle}грн</div>
          </div>
        </div>

      </div>
    </section>
  )
}

const card = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const link = css`
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--color-blue);
  filter: var(--block-shadow);

  @media screen and (max-width: 840px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 720px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 610px) {
    width: 220px;
    height: 220px;
  }
  @media screen and (max-width: 540px) {
    width: 300px;
    height: 300px;
  }


  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    bottom: 1em;
    right: 0rem;
    left: 3rem;
    text-align: right;
    padding: 0.5rem 1rem;
    background: #032e7f99;
    border-radius: 1rem 0 0 0rem;
    color: var(--color-white);
    box-shadow: -2px 2px 4px 0px var(--color-white);
  }
`



export default Accessory