import { AkvasanaOrder } from '@/types/AkvasanaData'
import { css } from '@emotion/css'
import prisma from '@/lib/prisma';
import Head from 'next/head';

const Orders = ({ orders }: { orders: AkvasanaOrder[] }) => {
  return (
    <>
      <Head>
        <title>Замовлення Аква Сана</title>
        <meta name="robots" content="none" />
        <link rel="icon" href="/favicon-min.png" />
      </Head>

      <section className={css`
        overflow-x: scroll;
        padding: 1rem;
        width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        max-width: 100vw;

        table {
          border-collapse: collapse;
          width: 100%;
          table-layout: auto;
          border: 1px solid var(--color-grey);
        }
        table tbody,
        table tbody tr,
        table tbody tr td {
          border: inherit;
          padding: 0.2rem;
          font-size: 0.9rem;
        }
      `}>
        <table>
          <thead>
            <tr>
              <th colSpan={1}>app</th>
              <th colSpan={1}>createdAt</th>
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
                  <td>{order.createdAt as string}</td>
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
    </>

  )
}

export default Orders

export async function getServerSideProps() {

  const orders = await prisma.akvasanaOrders.findMany({
    orderBy: { id: "desc" },
    take: 200
  })

  return {
    props: {
      orders: JSON.parse(JSON.stringify(orders)),
    },
  }
}