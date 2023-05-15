import React from "react";
import {PatternFormat} from "react-number-format";

const Phone = ({ onChange }) => {
  return (
    <div className="wrap wrap-text-input">
      <label htmlFor="phone" className="labels">
        Телефон
      </label>
      <PatternFormat
        id="phone"
        name="phone"
        className="as-input"
        format="+38(###)-###-##-##"
        mask="_"
        placeholder="+38(000)-000-00-00"
        onChange={onChange}
      />

      {/* <input
        type="text"
        name="as-phone"
        className="as-input"
        placeholder="+38(000)-000-00-00"
        onChange={onChange}
      /> */}
    </div>
  );
};

export default Phone;
