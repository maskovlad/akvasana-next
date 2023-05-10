import { css } from "@emotion/css"
import Image from "next/image"
import {logo} from "@/public/assets"
import Link from "next/link"

const Navbar = () => {
  return (
    <section className={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}>
      <div>
        <Link href="/">
          <Image src={logo} width={315} height={59} alt="Логотип Аква Сана Кривий Ріг" />
        </Link>
      </div>
      <div>nav</div>
    </section>
  )
}

export default Navbar