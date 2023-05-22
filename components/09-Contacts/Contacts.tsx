import { css, cx } from "@emotion/css";
import { Montserrat } from "next/font/google";
import { comfortaaFont } from "@/styles/ComfortaaFont";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

const Contacts = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className={cx(montserrat.className, css`text-align: center;`)}>
      <h1 className={cx(comfortaaFont, css`
        margin: 2rem 0;
        text-align: center;
      `)}>Контакти</h1>
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

      <address className={css`
      margin: 3rem 0;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 3rem;

        @media (max-width: 650px) {
          grid-template-columns: 1fr;
        }
      `}>
        <div className={css`
          text-align: center;
          padding: 1rem 0;
        `}>
          <b><a href="tel:+380680085009">📞{" "}068-008-5-009</a></b><br />
          <b><a href="tel:+380504580838">📞{" "}050-458-08-38</a></b><br /><br />
          <b><a title="Пошта Аква Сана Кривий Ріг" href="mailto:akvasana@ukr.net">📨{" "}akvasana@ukr.net</a></b><br /><br />
          Офіційний пункт розливу очищеної води ‘Аква Сана Кривий Ріг’ знаходиться за адресою:<br /><br />
          <b>вул. Десантна, 7а</b><br />
          <b><u><i>(територія ринку,</i></u></b><br />
          <b><u><i>центральний павільйон)</i></u></b><br />
          <b>м. Кривий Ріг</b><br />
          <b>Дніпропетровська обл.</b><br />
        </div>
        <Map />
      </address>
    </section>
  )
};

function Map() {
  const center = useMemo(() => ({ lat: 47.999011820799154, lng: 33.47324719736604 }), []);

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}


export default Contacts;
