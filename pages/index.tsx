import Layout from '@/components/Layout'
import Promo from '@/components/02-Promo/Promo'
import Preferences from '@/components/03-Preferences/Preferences'
import Order from '../components/04-Order/Order';
import About from '@/components/05-About/About';
import Delivery from '@/components/06-Delivery/Delivery';
import Accessory from '@/components/07-Accesoory/Accessory';
import Blog from '@/components/08-Blog/Blog';

export default function Home() {
  return (
    <Layout title='Головна сторінка' description='Опис головної сторінки'>
      <Promo />
      <Preferences />
      <Order />
      <About />
      <Delivery />
      <Accessory />
      <Blog />
    </Layout>
  )
}
