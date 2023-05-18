import { css } from "@emotion/css";

const Checkbox = ({ label, value, name, onChange, checked }) => {
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
      <p className={css`
        max-width: 100%;
        font-weight: 600;
        color: var(--color-white);
      `}>
        {label}
      </p>
      <label className={css`
        margin-right: 20px;
        margin-left: 10px;
        color: var(--color-white);
      `}
      >
        <input type="checkbox"
          className={options}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        Так
      </label>
    </div>
  );
};

export default Checkbox;

const options = css`
  appearance: none;
  position: relative;
  top: 13px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all 0.3s ease-out 0s;
  background: #dddddd;
  border: 2px solid var(--color-blue);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  margin: 0.3em 0.8em;
  outline: none;
  position: relative;
  border-radius: 50%;
  z-index: 1000;

  :hover {
    background: #9faab7;
  }

  :checked {
    background: var(--color-light-blue);
  }

  :checked::before {
    width: 30px;
    height: 30px;
    content: url(/assets/done.svg);
    position: absolute;
    bottom: 10px;
    left: -6px;
  }

  :checked::after {
    animation: click-wave 0.65s;
    background: #40e0d0;
    content: "";
    display: block;
    position: relative;
    border-radius: 50%;
    z-index: 100;
  }

  @keyframes click-wave {
    0% {
      height: 40px;
      width: 40px;
      opacity: 0.35;
      position: relative;
    }

    100% {
      height: 200px;
      width: 200px;
      margin-left: -80px;
      margin-top: -80px;
      opacity: 0;
    }
  }
`;
