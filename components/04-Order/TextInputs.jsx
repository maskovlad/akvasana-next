import { css } from "@emotion/css";
import { PatternFormat } from "react-number-format";

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
  color: #c8c8c8;
`;
const input = css`
  margin-top: 5px;
  height: 35px;
  width: 100%;
  padding: 6px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 5px;
  text-align: left;
  background-color: #dddddd !important;
  color: #222222;

  ::placeholder {
    color: #666666;
  }
  :focus {
    outline: none;
  }
`;

export const RegionSelect = ({ regSelect, onChange }) => {
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
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" hidden>
          Виберіть район
        </option>
        {regItems(regSelect)}
      </select>
    </div>
  );
};

export const Address = ({ onChange }) => {
  return (
    <div className={wrap}>
      <label htmlFor="as-address" className={label}>
        Адреса <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        defaultValue=""
        onChange={onChange}
        id="as-address"
        name="as-address"
        className={input}
        maxLength="40"
        placeholder="Введіть адресу (квартира/офіс)"
      />
    </div>
  );
};

export const Phone = ({ onChange }) => {
  return (
    <div className={wrap}>
      <label htmlFor="phone" className={label}>
        Телефон <span style={{ color: "red" }}>*</span>
      </label>
      <PatternFormat
        id="phone"
        name="phone"
        className={input}
        format="+38(###)-###-##-##"
        mask="_"
        placeholder="+38(000)-000-00-00"
        onChange={onChange}
      />
    </div>
  );
};
