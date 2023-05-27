import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { css, cx } from "@emotion/css";
import { comfortaaFont } from "@/styles/ComfortaaFont";
import { post1img, post2img, post3img, post4img, post5img, post6img, post7img, postPomp, postBottle } from '@/public/assets'

const Blog = () => {
  return (
    <section className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
      id="blog">
      <h2 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Блог - корисні статті</h2>
      <svg
        width="1.8133296in"
        height="0.093333147in"
        viewBox="0 0 543.99979 28.000015"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        fill="currentColor"
        className={css`
          color: var(--color-light-blue);
        `}
      >
        <path d="m 0,5 c 5.02,2.58 18.82,5.06 25,6.42 0,0 54,9.85 54,9.85 0,0 53,5.82 53,5.82 0,0 12,0.91 12,0.91 0,0 32,0 32,0 0,0 12,-0.91 12,-0.91 28.95,-2.03 57.39,-6.86 86,-11.66 0,0 65,-9.26 65,-9.26 0,0 20,-1.26 20,-1.26 0,0 12,-0.91 12,-0.91 0,0 22,0 22,0 0,0 18,1 18,1 0,0 19,1.83 19,1.83 26.86,2.69 53.43,6.8 80,11.59 0,0 34,6.58 34,6.58 -4.46,-2.65 -18.2,-5.2 -24,-6.63 0,0 -61,-11.64 -61,-11.64 C 442.09,4.29 412.33,0.03 396,0 c 0,0 -33,0 -33,0 0,0 -12,0.91 -12,0.91 -27.26,1.87 -54.06,6.14 -81,10.66 -28.89,4.84 -57.79,9.48 -87,11.52 0,0 -12,0.91 -12,0.91 0,0 -32,0 -32,0 0,0 -10,-0.91 -10,-0.91 C 98.47,20.99 68.19,16.99 38,11.75 38,11.75 0,5 0,5 Z" />
      </svg>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        id="main"
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          // when window width is >= 320px
          280: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1367px
          1600: {
            slidesPerView: 4,
          },
        }}
        className={css`
          width: 100%;
          height: 100%;
          padding: 2rem 0;
        `}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >

        <SwiperSlide className={swiperSlide}>
          <Link href="vplyv-khimichnykh-rechovyn" className={link}>
            <img
              src={post1img.src}
              alt="Featured Image"
            />
            <h4>Вплив хімічних речовин у воді на організм людини</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="vodoprovidna-voda" className={link}>
            <img
              src={post2img.src}
              alt="Featured Image"
            />
            <h4>Чи можна споживати водопровідну воду?</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="membranni-tekhnolohii" className={link}>
            <img
              src={post3img.src}
              alt="Featured Image"
            />
            <h4>Мембранні технології</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="yaku-zh-vodu-pyty" className={link}>
            <img
              src={post4img.src}
              alt="Featured Image"
            />
            <h4>Яку ж воду пити?</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="ochyshchena-voda-akva-sana" className={link}>
            <img
              src={post5img.src}
              alt="Featured Image"
            />
            <h4>Очищена вода АКВА САНА — КРИВИЙ РІГ</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="shcho-ye-u-vodi-krim-samoi-vody" className={link}>
            <img
              src={post6img.src}
              alt="Featured Image"
            />
            <h4>Хвороби від забруднення води</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="perevagy-ozonuvannia" className={link}>
            <img
              src={post7img.src}
              alt="Featured Image"
            />
            <h4>Переваги озонування води</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="bootle-policarbon" className={link}>
            <img
              src={postBottle.src}
              alt="Featured Image"
            />
            <h4>Бутиль полікарбонатний 18,9 л</h4>
          </Link>
        </SwiperSlide>

        <SwiperSlide className={swiperSlide}>
          <Link href="pompa-mekhanichna-dlya-vody-lilu-econom" className={link}>
            <img
              src={postPomp.src}
              alt="Featured Image"
            />
            <h4>Помпа механічна для води «LiLu» Econom</h4>
          </Link>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

const swiperSlide = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const link = css`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--color-blue);
  filter: var(--block-shadow);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h4 {
    position: absolute;
    bottom: 1em;
    right: 0rem;
    left: 3rem;
    text-align: right;
    padding: 0.5rem 1rem;
    background: #032e7f99;
    border-radius: 1rem 0 0 0rem;
    color: var(--color-white);
    box-shadow: -2px 2px 4px 0px var(--color-white);
  }
`

export default Blog