import React from "react"

const QtyButtons = ({ minusClick, plusClick, qty, total }) => {
  return (
    <>
      <div className="wrap">
        <p className="labels">Кількість бутлів</p>
        <div className="wrap-btn-add">
          <button type="button"
            id="quantity-bottles-minus"
            className="btn-add"
            onClick={minusClick}>
            -</button>
          <input type="number"
            name="quantity-bottles"
            id="quantity-bottles"
            className="numbers"
            value={qty}
            min="1"
            readOnly />
          <button type="button"
            id="quantity-bottles-plus"
            className="btn-add"
            onClick={plusClick}>
            +</button>
        </div>
      </div>
      <div className="wrap">
        <p className="labels">До сплати</p>
        <input type="number"
          value={total}
          name="total"
          id="total"
          className="numbers"
          readOnly />
      </div>
    </>

  )
}

export default QtyButtons