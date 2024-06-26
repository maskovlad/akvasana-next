import Layout from "@/components/Layout";
import Promo from "@/components/02-Promo/Promo";
import Preferences from "@/components/03-Preferences/Preferences";
import Order from "../components/04-Order/Order";
import About from "@/components/05-About/About";
import Delivery from "@/components/06-Delivery/Delivery";
import Accessory from "@/components/07-Accesoory/Accessory";
import Blog from "@/components/08-Blog/Blog";
import Contacts from "@/components/09-Contacts/Contacts";
import { getRegions, getAccessory } from "../lib/dbService";
import { Accessories, Region } from "@/types/AkvasanaData";
import Video from "@/components/05-Video/Video";


export default function Home({
  regions,
  accessory,
}: {
  regions: Region[];
  accessory: Accessories;
}) {

  return (
    <Layout
      title="Аква Сана Кривий Ріг — Доставка води — Замовити воду онлайн"
      description="Офіційне представництво у Кривому Розі. Новітні американські технології очищення води."
    >
      <Promo />
      <Preferences />
      <Order regions={regions} accessory={accessory}/>
      <About />
      <Video />
      <Delivery regions={regions} />
      <Accessory accessory={accessory} />
      <Blog />
      <Contacts />
    </Layout>
  );
}

export async function getStaticProps() {
  const regions = await getRegions();
  const accessory = await getAccessory();
  if (!accessory || !regions) console.error("Не вдалося завантажити дані з БД");
  
  return {
    props: {
      regions,
      accessory,
    },
  };
}
