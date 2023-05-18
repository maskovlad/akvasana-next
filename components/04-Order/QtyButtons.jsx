import { css } from "@emotion/css";

const QtyButtons = ({ minusClick, plusClick, qty, total }) => {
  return (
    <>
      <div className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 20px 0;
        `}>
        <p className={css`
            max-width: 100%;
            font-weight: 600;
            color: var(--color-white);
          `}>
          Кількість бутлів
        </p>
        <div className={css`
            display: flex;
            flex-direction: row;
          `} >
          <button
            type="button"
            id="quantity-bottles-minus"
            className={css`
              margin: 0;
              background: var(--color-blue);
              border: none;
              padding: 0px 15px;
              font-weight: 700;
              font-size: 30px;
              color: var(--color-yellow);
              border-radius: 30px 5px 5px 30px;
              padding-bottom: 4px;

              :hover {
                color: var(--color-grey, #d2d6e9);
              }
              :focus {
                color: var(--color-yellow);
                outline: none;
              }

              @media (max-width: 425px) {
                font-size: 20px;
                padding: 0 10px;
              }
            `}
            onClick={minusClick}>
            -
          </button>
          <input
            type="number"
            name="quantity-bottles"
            id="quantity-bottles"
            className={css`
              text-align: center;;
              font-size: 30px;
              font-weight: 500;
              border: none;
              border-radius: 5px;
              background: var(--color-blue);
              color: var(--color-yellow, #d2d6e9);
              padding: 0;
              margin: 0 2px;
              width: 3rem;
              line-height: 3rem;

              :focus {
                color: var(--color-yellow);
                outline: none;
              }

              @media (max-width: 425px) {
                font-size: 20px;
                width: 2rem;
                line-height: 2rem;
              }
            `}
            value={qty}
            min="1"
            readOnly
          />
          <button className={css`
              margin: 0;
              background: var(--color-blue);
              border: none;
              padding: 0px 15px;
              font-weight: 700;
              font-size: 30px;
              color: var(--color-yellow);
              border-radius: 5px 30px 30px 5px;

              :hover {
                color: var(--color-grey, #d2d6e9);
              }
              :focus {
                color: var(--color-yellow);
                outline: none;
              }

              @media (max-width: 425px) {
                font-size: 20px;
                padding: 0 10px;
              }`}
            type="button"
            id="quantity-bottles-plus"
            onClick={plusClick}
          >
            +
          </button>
        </div>
      </div>

      <div className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 20px 0;
        `}>
        <p className={css`
            max-width: 100%;
            font-weight: 600;
            color: var(--color-white);
          `}>
          До сплати
        </p>
        <input
          type="number"
          value={total}
          name="total"
          id="total"
          className={css`
            text-align: center;;
            font-size: 30px;
            font-weight: 500;
            border: none;
            border-radius: 30px;
            background: var(--color-blue);
            color: var(--color-yellow, #d2d6e9);
            padding: 0;
            margin: 0 2px;
            width: 140px;
            line-height: 3rem;

            :focus {
                color: var(--color-yellow);
                outline: none;
              }

            @media (max-width: 425px) {
              font-size: 20px;
              width: 94px;
              line-height: 2rem;
            }
          `}
          readOnly
        />
      </div>
    </>
  );
};

export default QtyButtons;
