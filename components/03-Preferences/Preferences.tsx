import { comfortaaFont } from '@/styles/ComfortaaFont'
import { css, cx } from '@emotion/css'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { FaVials, FaTruck, FaClock } from 'react-icons/fa'

const Preferences = () => {
  return (
    <section className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
      id="preferences">
      <h2 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Чому варто замовляти воду саме у нас?</h2>
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
      ><path d="m 0,5 c 5.02,2.58 18.82,5.06 25,6.42 0,0 54,9.85 54,9.85 0,0 53,5.82 53,5.82 0,0 12,0.91 12,0.91 0,0 32,0 32,0 0,0 12,-0.91 12,-0.91 28.95,-2.03 57.39,-6.86 86,-11.66 0,0 65,-9.26 65,-9.26 0,0 20,-1.26 20,-1.26 0,0 12,-0.91 12,-0.91 0,0 22,0 22,0 0,0 18,1 18,1 0,0 19,1.83 19,1.83 26.86,2.69 53.43,6.8 80,11.59 0,0 34,6.58 34,6.58 -4.46,-2.65 -18.2,-5.2 -24,-6.63 0,0 -61,-11.64 -61,-11.64 C 442.09,4.29 412.33,0.03 396,0 c 0,0 -33,0 -33,0 0,0 -12,0.91 -12,0.91 -27.26,1.87 -54.06,6.14 -81,10.66 -28.89,4.84 -57.79,9.48 -87,11.52 0,0 -12,0.91 -12,0.91 0,0 -32,0 -32,0 0,0 -10,-0.91 -10,-0.91 C 98.47,20.99 68.19,16.99 38,11.75 38,11.75 0,5 0,5 Z" />
      </svg>

      <div className={css`
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 2rem;
        margin-top: 3rem;
        justify-content: center;
        align-items: center;
      `}>

        <div className={cx(card, css`animation-delay: 1s`)}>
          <BsHandThumbsUpFill size={32} />
          <h3>Висока якість очищення</h3>
          <svg
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 160px;
              height: auto;
              z-index: -1;
            `}
            version="1.1"
            viewBox="0 0 223.14537 265.58832"
            width="223.14537"
            height="265.58832"
            filter="var(--block-shadow)"
            fillOpacity="0.3"
            fill="var(--color-light-blue)">
            <path
              id="path14"
              d="M 110.1833,1.4082031 C 83.11816,28.406241 55.992094,55.344612 29.023981,82.438993 12.029019,100.64546 1.5145887,124.85865 0.1890167,149.75846 c -1.427999,23.8591 5.266807,48.18682 19.0134933,67.7734 15.063989,21.74164 38.079932,37.86511 63.71907,44.42712 27.65967,7.18605 58.0785,3.66614 83.10306,-10.25037 22.68296,-12.42575 40.93258,-32.95794 50.08425,-57.19775 8.9257,-23.39113 9.40852,-49.9221 1.16983,-73.57866 C 211.63484,104.52189 201.9374,89.558031 189.39465,77.577997 163.46159,51.718646 137.52838,25.859444 111.59541,0 c -0.4707,0.469401 -0.9414,0.9388021 -1.41211,1.4082031 z" />
            <g
              fill="white"
              fillOpacity="0.3"
              id="g2937"><path
                d="m 169.30135,91.036391 c 1.25,1.089 30.407,27.458999 24.031,70.489999 -0.609,4.037 -4.133,6.921 -8.202,6.921 -0.384,0 -0.769,-0.032 -1.186,-0.064 -4.518,-0.641 -7.658,-4.774 -6.985,-9.164 5.127,-34.604 -18.52,-55.975 -18.744,-56.2 -3.396,-2.98 -3.653,-8.105999 -0.609,-11.406999 3.076,-3.331 8.299,-3.588 11.695,-0.576 z"
                fill="white"
                id="path6" /><path
                d="m 27.78335,111.07539 c -7.696,13.656 -11.797,29.039 -11.797,45.037 0,24.96 9.933,48.446 28.004,66.1 18.039,17.654 42.07,27.395 67.606,27.395 20,0 39.042,-5.998 55.046,-17.071 -109.104,6.292 -137.252,-65.742 -138.859,-121.461 z"
                id="path23" /></g>
          </svg>
        </div>

        <div className={cx(card, css`align-self: flex-end; animation-delay: 0.75s`)}>
          <FaVials size={32} />
          <h3>Лабораторний контроль</h3>
          <svg
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 160px;
              height: auto;
              z-index: -1;
            `}
            version="1.1"
            viewBox="0 0 223.14537 265.58832"
            width="223.14537"
            height="265.58832"
            filter="var(--block-shadow)"
            fillOpacity="0.3"
            fill="var(--color-light-blue)">
            <path
              id="path14"
              d="M 110.1833,1.4082031 C 83.11816,28.406241 55.992094,55.344612 29.023981,82.438993 12.029019,100.64546 1.5145887,124.85865 0.1890167,149.75846 c -1.427999,23.8591 5.266807,48.18682 19.0134933,67.7734 15.063989,21.74164 38.079932,37.86511 63.71907,44.42712 27.65967,7.18605 58.0785,3.66614 83.10306,-10.25037 22.68296,-12.42575 40.93258,-32.95794 50.08425,-57.19775 8.9257,-23.39113 9.40852,-49.9221 1.16983,-73.57866 C 211.63484,104.52189 201.9374,89.558031 189.39465,77.577997 163.46159,51.718646 137.52838,25.859444 111.59541,0 c -0.4707,0.469401 -0.9414,0.9388021 -1.41211,1.4082031 z" />
            <g
              fill="white"
              fillOpacity="0.3"
              id="g2937"><path
                d="m 169.30135,91.036391 c 1.25,1.089 30.407,27.458999 24.031,70.489999 -0.609,4.037 -4.133,6.921 -8.202,6.921 -0.384,0 -0.769,-0.032 -1.186,-0.064 -4.518,-0.641 -7.658,-4.774 -6.985,-9.164 5.127,-34.604 -18.52,-55.975 -18.744,-56.2 -3.396,-2.98 -3.653,-8.105999 -0.609,-11.406999 3.076,-3.331 8.299,-3.588 11.695,-0.576 z"
                fill="white"
                id="path6" /><path
                d="m 27.78335,111.07539 c -7.696,13.656 -11.797,29.039 -11.797,45.037 0,24.96 9.933,48.446 28.004,66.1 18.039,17.654 42.07,27.395 67.606,27.395 20,0 39.042,-5.998 55.046,-17.071 -109.104,6.292 -137.252,-65.742 -138.859,-121.461 z"
                id="path23" /></g>
          </svg>
        </div>

        <div className={cx(card)}>
          <FaTruck size={32} />
          <h3>Безкоштовна доставка</h3>
          <svg
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 160px;
              height: auto;
              z-index: -1;
            `}
            version="1.1"
            viewBox="0 0 223.14537 265.58832"
            width="223.14537"
            height="265.58832"
            filter="var(--block-shadow)"
            fillOpacity="0.3"
            fill="var(--color-light-blue)">
            <path
              id="path14"
              d="M 110.1833,1.4082031 C 83.11816,28.406241 55.992094,55.344612 29.023981,82.438993 12.029019,100.64546 1.5145887,124.85865 0.1890167,149.75846 c -1.427999,23.8591 5.266807,48.18682 19.0134933,67.7734 15.063989,21.74164 38.079932,37.86511 63.71907,44.42712 27.65967,7.18605 58.0785,3.66614 83.10306,-10.25037 22.68296,-12.42575 40.93258,-32.95794 50.08425,-57.19775 8.9257,-23.39113 9.40852,-49.9221 1.16983,-73.57866 C 211.63484,104.52189 201.9374,89.558031 189.39465,77.577997 163.46159,51.718646 137.52838,25.859444 111.59541,0 c -0.4707,0.469401 -0.9414,0.9388021 -1.41211,1.4082031 z" />
            <g
              fill="white"
              fillOpacity="0.3"
              id="g2937"><path
                d="m 169.30135,91.036391 c 1.25,1.089 30.407,27.458999 24.031,70.489999 -0.609,4.037 -4.133,6.921 -8.202,6.921 -0.384,0 -0.769,-0.032 -1.186,-0.064 -4.518,-0.641 -7.658,-4.774 -6.985,-9.164 5.127,-34.604 -18.52,-55.975 -18.744,-56.2 -3.396,-2.98 -3.653,-8.105999 -0.609,-11.406999 3.076,-3.331 8.299,-3.588 11.695,-0.576 z"
                fill="white"
                id="path6" /><path
                d="m 27.78335,111.07539 c -7.696,13.656 -11.797,29.039 -11.797,45.037 0,24.96 9.933,48.446 28.004,66.1 18.039,17.654 42.07,27.395 67.606,27.395 20,0 39.042,-5.998 55.046,-17.071 -109.104,6.292 -137.252,-65.742 -138.859,-121.461 z"
                id="path23" /></g>
          </svg>
        </div>

        <div className={cx(card, css`align-self: flex-end; animation-delay: 0.5s`)}>
          <FaClock size={32} />
          <h3>Замовлення онлайн 24/7</h3>
          <svg
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 160px;
              height: auto;
              z-index: -1;
            `}
            version="1.1"
            viewBox="0 0 223.14537 265.58832"
            width="223.14537"
            height="265.58832"
            filter="var(--block-shadow)"
            fillOpacity="0.3"
            fill="var(--color-light-blue)">
            <path
              id="path14"
              d="M 110.1833,1.4082031 C 83.11816,28.406241 55.992094,55.344612 29.023981,82.438993 12.029019,100.64546 1.5145887,124.85865 0.1890167,149.75846 c -1.427999,23.8591 5.266807,48.18682 19.0134933,67.7734 15.063989,21.74164 38.079932,37.86511 63.71907,44.42712 27.65967,7.18605 58.0785,3.66614 83.10306,-10.25037 22.68296,-12.42575 40.93258,-32.95794 50.08425,-57.19775 8.9257,-23.39113 9.40852,-49.9221 1.16983,-73.57866 C 211.63484,104.52189 201.9374,89.558031 189.39465,77.577997 163.46159,51.718646 137.52838,25.859444 111.59541,0 c -0.4707,0.469401 -0.9414,0.9388021 -1.41211,1.4082031 z" />
            <g
              fill="white"
              fillOpacity="0.3"
              id="g2937"><path
                d="m 169.30135,91.036391 c 1.25,1.089 30.407,27.458999 24.031,70.489999 -0.609,4.037 -4.133,6.921 -8.202,6.921 -0.384,0 -0.769,-0.032 -1.186,-0.064 -4.518,-0.641 -7.658,-4.774 -6.985,-9.164 5.127,-34.604 -18.52,-55.975 -18.744,-56.2 -3.396,-2.98 -3.653,-8.105999 -0.609,-11.406999 3.076,-3.331 8.299,-3.588 11.695,-0.576 z"
                fill="white"
                id="path6" /><path
                d="m 27.78335,111.07539 c -7.696,13.656 -11.797,29.039 -11.797,45.037 0,24.96 9.933,48.446 28.004,66.1 18.039,17.654 42.07,27.395 67.606,27.395 20,0 39.042,-5.998 55.046,-17.071 -109.104,6.292 -137.252,-65.742 -138.859,-121.461 z"
                id="path23" /></g>
          </svg>
        </div>

      </div>
    </section>
  )
}

export default Preferences

const card = css`
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 180px;
          gap: 1em;
          padding: 1em;
          color: var(--color-blue);
          text-align: center;
          animation: bounceIn 1.25s;

          @keyframes bounceIn {
            20%, 40%, 60%, 80%, 0%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
            }
            0% {
                opacity: 0;
                transform: scale3d(.3,.3,.3);
            }
            20% {
                transform: scale3d(1.1,1.1,1.1);
            }
            40% {
                transform: scale3d(.9,.9,.9);
            }
            60% {
                opacity: 1;
                transform: scale3d(1.03,1.03,1.03);
            }
            80% {
                transform: scale3d(.97,.97,.97);
            }
            100% {
                opacity: 1;
                transform: scale3d(1,1,1);
            }
          }`