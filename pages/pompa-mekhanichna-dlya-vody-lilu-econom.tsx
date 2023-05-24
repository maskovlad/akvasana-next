import Layout from "@/components/Layout";
import { getAccessory } from "@/lib/dbService";
import { Accessories } from '@/types/AkvasanaData';

const index = ({ accessory }: { accessory: Accessories }) => {
  return (
    <Layout
      title="Помпа механічна для води 'LILU'-економ (УКРАЇНА) — Аква Сана"
      description="Помпа механічна для води «LiLu» Econom - це недорогий і ефективний засіб для отримання води з 19 літрових бутлів."
    >
      <header className="page-header">
        <h1 className="entry-title">
          Помпа механічна для води &#8216;LILU&#8217;-економ (УКРАЇНА) &#8212;
          {accessory[1].cost} грн.
        </h1>
      </header>
      <div className="page-content">
        <figure className="wp-block-image size-large is-resized">
          <img
            decoding="async"
            src="/assets/accessory/pomp.jpg"
            alt="Помпа механічна для води «LiLu» Econom"
            width="210"
            height="317"
          />
        </figure>

        <p>
          Помпа механічна для води «LiLu» Econom &#8212; це недорогий і
          ефективний засіб для отримання води з 19 літрових бутлів.<br />Підходить
          до всіх видів стандартних бутлів 11 і 19 л.<br />Помпа
          сертифікована, і відповідає всім санітарним нормам і гігієнічним
          вимогам. Проста і зручна в експлуатації, має гарну продуктивність,
          ергономічна, має оптимальне зусилля натискання і тривалий термін
          експлуатації.<br />Помпа представлена ​​в біло-синьому колірному
          виконанні.
        </p>
        <div className="post-tags"></div>
      </div>

    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const accessory = await getAccessory();
  if (!accessory) console.error("Не вдалося завантажити дані з БД");

  return {
    props: {
      accessory,
    },
  };
}
