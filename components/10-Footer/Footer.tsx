import { css, cx } from "@emotion/css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

const Footer = () => {
  return <footer className={cx(montserrat.className, css``)}>Footer</footer>;
};

export default Footer;
