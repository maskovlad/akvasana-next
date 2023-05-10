import { css } from "@emotion/css";
import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { navLinks } from "@/constants/NavLinks";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
x      `}
    >
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={220}
            height={41}
            alt="Логотип Аква Сана Кривий Ріг"
            priority
          />
        </Link>
      </div>

      {/** горизонтальне меню */}
      <ul
        className={css`
          display: flex;
          justify-content: space-between;
          list-style: none;
          font-weight: 400;
          width: 100%;
          margin-left: 10%;

          @media screen and (max-width: 900px) {
            display: none;
          }
        `}
      >
        {navLinks.map((item) => (
          <li
            key={item.link}
            className={css`
              position: relative;
            `}
          >
            <a
              className={css`
                :after {
                  opacity: 0;
                  background-color: var(--color-light-blue);
                  content: "";
                  bottom: 0;
                  height: 2px;
                  width: 100%;
                  left: 0;
                  z-index: 2;
                  display: block;
                  position: absolute;
                  transition: 0.3s;
                  line-height: 1;
                  transform: scale(1);
                }

                :hover:after {
                  bottom: -8px;
                  opacity: 1;
                }
              `}
              href={item.link}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/** крестик */}
      <div
        className={css`
          display: none;

          @media screen and (max-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        <AiOutlinePlusCircle
          className={css`
            width: 2rem;
            height: auto;
            border-radius: 50%;
            color: var(--color-green);
            cursor: pointer;
            ${toggle ? "transform: rotate(45deg);" : ""}
            transition: 0.2s;
          `}
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/** вертикальне меню */}
      {toggle ? (
        <div
          className={css`
            padding: 0.7rem;
            position: absolute;
            right: 0;
            top: 2.5rem;
            z-index: 2;
            border: 1px solid var(--color-light-blue);
            background: var(--color-white);
            border-radius: 0.2rem;
            animation: ani 0.5s ease;

            @keyframes ani {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}
        >
          <ul
            className={css`
              display: flex;
              flex-direction: column;
              flex: 1;
              justify-content: flex-end;
              align-items: flex-start;
              gap: 0.6rem;
              list-style: none;
            `}
          >
            {navLinks.map((item) => (
              <li key={item.link} className={css``}>
                <a href={item.link} onClick={() => setToggle((prev) => !prev)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Navbar;
