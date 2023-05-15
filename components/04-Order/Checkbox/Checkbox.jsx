import React from "react"

const Checkbox = ({ label, value, onChange }) => {
  return (
    <div className="wrap-toggle">
      <p className="labels">{label}</p>
      <label className="switch">
        <input type="checkbox"
          // name="bottle-need"
          // id="bottle-need"
          value={value}
          onChange={onChange}
        />
        <svg viewBox="0 0 38 24" filter="url(#goo)">
          <circle className="default" cx="12" cy="12" r="8" />
          <circle className="dot" cx="26" cy="12" r="8" />
          <circle className="drop" cx="25" cy="-1" r="2" />
        </svg>
      </label>
    </div>

  )
}

export default Checkbox