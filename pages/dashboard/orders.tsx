import { AkvasanaOrder } from '@/types/AkvasanaData'
import { css } from '@emotion/css'
import  prisma  from '@/lib/prisma';

const Orders = ({ orders }: {orders:AkvasanaOrder[]}) => {
  return (
    <section className={css``}>
      <table>
        <thead>
          <tr>
            <th colSpan={1}>app</th>
            <th colSpan={1}>regionName</th>
            <th colSpan={1}>address</th>
            <th colSpan={1}>phone</th>
            <th colSpan={1}>isClient</th>
            <th colSpan={1}>bottle</th>
            <th colSpan={1}>pomp</th>
            <th colSpan={1}>qty</th>
            <th colSpan={1}>total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: AkvasanaOrder) => {
            return (
              <tr key={order.id}>
                <td>{order.app}</td>
                <td>{order.createdAt}</td>
                <td>{order.regionName}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.isClient}</td>
                <td>{order.bottle}</td>
                <td>{order.pomp}</td>
                <td>{order.qty}</td>
                <td>{order.total}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>


  )
}

export default Orders

export async function getServerSideProps() {

  const orders = await prisma.akvasanaOrders.findMany()

  return {
    props: {
      orders,
    },
  }
}