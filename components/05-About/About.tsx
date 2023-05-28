import { comfortaaFont } from '@/styles/ComfortaaFont'
import { css, cx } from '@emotion/css'
import { aboutImg } from '@/public/assets'

const About = () => {
  return (
    <section className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
      id="about">
      <h2 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Про воду Аква Сана</h2>
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
          margin-bottom: 2rem;
        `}
      >
        <path d="m 0,5 c 5.02,2.58 18.82,5.06 25,6.42 0,0 54,9.85 54,9.85 0,0 53,5.82 53,5.82 0,0 12,0.91 12,0.91 0,0 32,0 32,0 0,0 12,-0.91 12,-0.91 28.95,-2.03 57.39,-6.86 86,-11.66 0,0 65,-9.26 65,-9.26 0,0 20,-1.26 20,-1.26 0,0 12,-0.91 12,-0.91 0,0 22,0 22,0 0,0 18,1 18,1 0,0 19,1.83 19,1.83 26.86,2.69 53.43,6.8 80,11.59 0,0 34,6.58 34,6.58 -4.46,-2.65 -18.2,-5.2 -24,-6.63 0,0 -61,-11.64 -61,-11.64 C 442.09,4.29 412.33,0.03 396,0 c 0,0 -33,0 -33,0 0,0 -12,0.91 -12,0.91 -27.26,1.87 -54.06,6.14 -81,10.66 -28.89,4.84 -57.79,9.48 -87,11.52 0,0 -12,0.91 -12,0.91 0,0 -32,0 -32,0 0,0 -10,-0.91 -10,-0.91 C 98.47,20.99 68.19,16.99 38,11.75 38,11.75 0,5 0,5 Z" />
      </svg>
      <div className={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 780px) {
          grid-template-columns: 1fr;
          justify-content: center;;
        }
      `}>
        <div className={css`
          width: 100%;
          height: auto;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid var(--color-blue);
          filter: var(--block-shadow);

          @media screen and (max-width: 468px) {
            width: 300px;
          }


          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}>
          <img
            src={aboutImg.src}
            alt="Обладнання для очистки води Аква Сана"
          />
        </div>
        <p className={css`
          line-height: 1.4rem;
          color: var(--color-blue);
          font-weight: 500;
        `}>Аква Сана — очищена питна вода. Ми є <strong>офіційним представником</strong> компанії у Кривому Розі.<br /><strong>Мембранна технологія очищення</strong>, без застосування хімічних реагентів. Устаткування провідних американських компаній. Процес очищення повністю автоматизований, що виключає людський фактор. Постійний контроль і регулярні лабораторні дослідження гарантують 100% якість. Очищена від всіх шкідливих домішок, солей жорсткості, бактерій і вірусів. <strong>Процес насичення озоном</strong> — дезінфікує, збагачує киснем і надає нашій воді свіжий і неповторний смак гірського струмка.<u>Придатна для пиття без кип’ятіння і додаткової обробки.</u></p>
      </div>
    </section>
  )
}

export default About