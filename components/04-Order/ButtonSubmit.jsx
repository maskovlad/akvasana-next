import { css } from '@emotion/css';

const ButtonSubmit = () => {
  return (
    <div className={css`
      display: block;
      padding: 20px;
      width: 50%;
      @media (max-width: 768px) {
        width: 50%;
      }
      @media (max-width: 600px) {
        width: 100%;
        padding: 10px 0;
      }
    `}>
      <button type="submit" className="btn">
        <span>ЗАМОВИТИ</span>
      </button>
    </div>
  )
}

export default ButtonSubmit
