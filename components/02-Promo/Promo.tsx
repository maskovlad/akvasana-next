import { css, cx } from "@emotion/css";
import Image from "next/image";
import {
  drinkGirl,
  telegramIcon,
  phoneIcon,
  logoBottle,
} from "@/public/assets";

const Promo = () => {
  return (
    <section
      className={css`
        position: relative;
        margin: 3rem 0;
        width: 100%;
        background-image: url(/assets/slider-5-min.jpg);
        height: 500px;
        border-radius: 50% 100px 100px;
        border: 1px solid var(--color-light-blue);
        filter: drop-shadow(2px 2px 6px blue);

        @media (max-width: 690px) {
          height: 450px;
        }
        @media (max-width: 540px) {
          height: 400px;
          border-radius: 50px;
        }
        @media (max-width: 430px) {
          height: 380px;
        }
      `}
    >
      {/** Дівчинка п'є воду */}
      <div
        className={css`
          position: absolute;
          width: 480px;
          height: 542px;
          border-radius: 0 0 0 100px;
          bottom: 0;
          left: 0;
          overflow: hidden;

          @media (max-width: 690px) {
            width: 400px;
            height: 452px;
          }
          @media (max-width: 600px) {
            width: 363px;
            height: 410px;
          }
          @media (max-width: 540px) {
            width: 240px;
            height: 270px;
            border-radius: 0 0 0 50px;
          }
          @media (max-width: 430px) {
            width: 178px;
            height: 200px;
          }
        `}
      >
        <Image
          className={css`
            filter: drop-shadow(2px 2px 4px white);

            width: inherit;
            height: inherit;
          `}
          src={drinkGirl}
          width={480}
          height={542}
          alt="Дівчинка п'є воду"
        />
      </div>

      {/** Заголовок */}
      <div
        className={css`
          position: absolute;
          right: 30px;
          top: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: inherit;
          background: transparent;

          @media (max-width: 430px) {
            align-items: flex-end;
            right: 10px;
          }
        `}
      >
        <h1
          className={css`
            margin: 10% 0;
            color: var(--color-white);
            filter: drop-shadow(2px 2px 2px black);
          `}
        >
          Доставка води
          <br />у Кривому Розі
        </h1>
        <p
          className={css`
            align-self: flex-end;
            font-size: 2rem;
            line-height: 1.4rem;
            font-weight: 600;
            color: var(--color-blue);
            filter: drop-shadow(2px 2px 2px white);
            text-align: center;

            @media (max-width: 840px) {
              font-size: 1.5rem;
              line-height: 1.2rem;
            }
            @media (max-width: 600px) {
              font-size: 1.2rem;
              line-height: 1rem;
            }
          `}
        >
          <a
            className={css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
            `}
            href="tel:+380680085009"
          >
            <img
              className={css`
                margin-right: 0.6rem;
              `}
              width={30}
              height={30}
              src={phoneIcon.src}
              alt="Phone Icon"
            />
            068-008-50-09
          </a>
          <br />
          <a
            className={css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
            `}
            href="tel:+380504580838"
          >
            <img
              className={css`
                margin-right: 0.6rem;
              `}
              width={30}
              height={30}
              src={phoneIcon.src}
              alt="Phone Icon"
            />
            050-458-08-38
          </a>
          <br />
          <a
            className={css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-left: 1rem;
            `}
            href="https://t.me/akvasanakr_bot"
          >
            <img
              className={css`
                margin-right: 0.6rem;
              `}
              width={30}
              height={30}
              src={telegramIcon.src}
              alt="Telegram Icon"
            />
            Telegram бот
          </a>
        </p>

        <div
          className={css`
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 2rem;
          `}
        >
          <Image
            className={css`
              opacity: 0;
            `}
            src={logoBottle}
            width={100}
            height={123}
            alt="Бутель 19,8 л"
          />
          <button className={cx("btn", css``)}>Замовити зараз</button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
