import React from "react"

const Address = ({ onChange }) => {
  return (
    <div className="wrap wrap-text-inpaddressut">
      <label htmlFor="as-address" className="labels">Адреса <span className="red-star">*</span></label>
      <input type="text"
        defaultValue=""
        onChange={onChange}
        id="as-address"
        // name="as-address"
        className="as-input"
        maxLength="40"
        placeholder="Введіть адресу (квартира/офіс)" />
    </div>
  )
}

export default Address