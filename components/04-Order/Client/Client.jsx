import React from "react"

const Client = ({ onChange }) => {
  return (
    <React.StrictMode>
      <div className="wrap-toggle">
        <p className="labels">Чи є ви клієнтом Аква Сана <span className="red-star">*</span></p>
        <div className="wrap-radio-items">
          <label className="radio">
            <input type="radio"
              name="as-is-client"
              className="as-is-client as-is-client-yes"
              value="+"
              onChange={onChange} />
            <svg viewBox="0 0 24 24" filter="url(#goo-light)">
              <circle className="top" cx="12" cy="-12" r="8" />
              <circle className="dot" cx="12" cy="12" r="5" />
              <circle className="drop" cx="12" cy="12" r="2" />
            </svg>
          </label>

          <label className="radio">
            <input type="radio"
              name="as-is-client"
              className="as-is-client as-is-client-no"
              value="-"
              onChange={onChange} />
            <svg viewBox="0 0 24 24" filter="url(#goo-light)">
              <circle className="top" cx="12" cy="-12" r="8" />
              <circle className="dot" cx="12" cy="12" r="5" />
              <circle className="drop" cx="12" cy="12" r="2" />
            </svg>
          </label>
        </div>
      </div>

      <div className="wrap-toggle">
        <label><span className="red-star">*</span> Зірочкою позначені поля, обов&apos;язкові для заповнення</label>
      </div>

    </React.StrictMode>
  )
}

export default Client