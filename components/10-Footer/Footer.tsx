import { css, cx } from "@emotion/css";
import { Montserrat } from "next/font/google";
import Copyright from './Copyright/Copyright';

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

const Footer = () => {
  return (
    <footer className={cx(montserrat.className, css``)}>
      <Copyright background={"transparent"} company={"Аквасанакр"} color={"#032e7f"} />
    </footer>
  )
};

export default Footer;
