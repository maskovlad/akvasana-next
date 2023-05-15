import { css } from "@emotion/css";
import React from "react";
import styles from "./Client.module.css";

const Client = ({ onChange }) => {
  return (
    <React.StrictMode>
      <div
        id="as-form"
        className={css`
          display: block;
          padding: 20px;
          width: 50%;
          @media (max-width: 768px) {
            width: 50%;
          }
          @media (max-width: 768px) {
            width: 100%;
            padding: 10px 0;
          }
        `}
      >
        <p
          className={css`
            max-width: 100%;
            font-weight: 500;
            color: #c8c8c8;
          `}
        >
          Чи є ви клієнтом Аква Сана <span style={{ color: "red" }}>*</span>
        </p>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          `}
        >
          <label className={styles.radio}>
            <input
              type="radio"
              name="as-is-client"
              className={css`
                :after {
                  content: "ТАК";
                }
              `}
              value="+"
              onChange={onChange}
            />
            <svg viewBox="0 0 24 24" filter="url(#goo-light)">
              <circle className="top" cx="12" cy="-12" r="8" />
              <circle className="dot" cx="12" cy="12" r="5" />
              <circle className="drop" cx="12" cy="12" r="2" />
            </svg>
          </label>

          <label className={styles.radio}>
            <input
              type="radio"
              name="as-is-client"
              className={css`
                :after {
                  content: "НІ";
                }
              `}
              value="-"
              onChange={onChange}
            />
            <svg viewBox="0 0 24 24" filter="url(#goo-light)">
              <circle className="top" cx="12" cy="-12" r="8" />
              <circle className="dot" cx="12" cy="12" r="5" />
              <circle className="drop" cx="12" cy="12" r="2" />
            </svg>
          </label>
        </div>
      </div>

      <div
        className={css`
          display: block;
          padding: 20px;
          width: 50%;
          @media (max-width: 768px) {
            width: 50%;
          }
          @media (max-width: 768px) {
            width: 100%;
            padding: 10px 0;
          }
        `}
      >
        <label>
          <span style={{ color: "red" }}>*</span> Зірочкою позначені поля,
          обов&apos;язкові для заповнення
        </label>
      </div>
    </React.StrictMode>
  );
};

export default Client;

