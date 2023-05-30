import { css } from "@emotion/css";
import NumberFormat from "react-number-format";

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

export const RegionSelect = ({ regSelect, value,onChange }) => {
  const regItems = (regSelect) => {
    return regSelect.map((reg) => (
      <option key={reg.id} value={JSON.stringify(reg)}>
        {reg.regionName}
      </option>
    ));
  };

  if (!regSelect) {
    return <span> </span>;
  }

  return (
    <div className={wrap}>
      <label htmlFor="as-regions" className={label}>
        Район <span style={{ color: "red" }}>*</span>
      </label>
      <select
        name="regions"
        id="as-regions"
        className={input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        <option value="" hidden>
          Виберіть район
        </option>
        {regItems(regSelect)}
      </select>
    </div>
  );
};

export const Address = ({ value, onChange }) => {
  return (
    <div className={wrap}>
      <label htmlFor="as-address" className={label}>
        Адреса <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id="as-address"
        name="as-address"
        className={input}
        maxLength="40"
        placeholder="Введіть адресу (квартира/офіс)"
        required
      />
    </div>
  );
};

export const Phone = ({ value, onChange }) => {
  return (
    <div className={wrap}>
      <label htmlFor="phone" className={label}>
        Телефон <span style={{ color: "red" }}>*</span>
      </label>
      <NumberFormat
        id="phone"
        name="phone"
        className={input}
        value={value}
        format="(###)-###-##-##"
        mask="_"
        onValueChange={onChange}
        placeholder="(000)-000-00-00"
        required
      />
    </div>
  );
};
