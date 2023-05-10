import Layout from '@/components/Layout'
import Header from '@/components/02-Header/Header'
import Preferences from '@/components/03-Preferences/Preferences'
import Order from '../components/04-Order/Order';
import About from '@/components/05-About/About';
import Delivery from '@/components/06-Delivery/Delivery';
import Accessory from '@/components/07-Accesoory/Accessory';
import Blog from '@/components/08-Blog/Blog';

export default function Home() {
  return (
    <Layout title='Головна сторінка' description='Опис головної сторінки'>
      <Header />
      <Preferences />
      <Order />
      <About />
      <Delivery />
      <Accessory />
      <Blog />
    </Layout>
  )
}
