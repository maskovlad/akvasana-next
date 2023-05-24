import Layout from "@/components/Layout";

const index = () => {
  return (
    <Layout
      title="Хвороби від забруднення води — Аква Сана"
      description="Які хімічні речовини містяться у забрудненній воді і як вони впливають на ваш організм. Яка небезпека від вживання неочищеної води."
    >
      <header className="page-header">
        <h1 className="entry-title">Хвороби від забруднення води</h1>
      </header>
      <div className="page-content">
        <figure className="wp-block-table alignfull">
          <table>
            <tbody>
              <tr>
                <td><strong>ЗАБРУДНЕННЯ</strong></td>
                <td><strong>НАСЛІДКИ І ЗАХВОРЮВАННЯ</strong></td>
              </tr>
              <tr>
                <td>
                  Важкі метали: свинець, ртуть, кадмій, цинк, нікель, хром
                </td>
                <td>
                  Атеросклероз, поліневрит, гіпертонія, ураження органів
                  кровопостачання та кісткового мозку, втрата гостроти зору.
                </td>
              </tr>
              <tr>
                <td>Радіонукліди: уран, плутоній, цезій, стронцій, торій</td>
                <td>
                  Онкозахворювання, генетичні мутації, вроджені аномалії,
                  ослаблення імунітету, ламкість і погане зрощення кісток.
                </td>
              </tr>
              <tr>
                <td>Хлорорганіка, неорганічні отруйні речовини</td>
                <td>
                  Нефрит, гепатит, токсикоз вагітності, вроджені аномалії
                  плоду, високе мертвонародження, генетичні мутації,
                  ослаблення імунітету, зниження дітородної функції у
                  чоловіків і жінок, онкозахворювання внутрішніх органів.
                </td>
              </tr>
              <tr>
                <td>Сільськогосподарські добрива: пестициди та нітрати</td>
                <td>
                  Заростання водойм, зменшення вмісту кисню в воді (масова
                  загибель риби), зараження води хвороботворної мікрофлорою,
                  виростання в водопровідних комунікаціях і свердловинах
                  водоростей, що виробляють токсини.
                </td>
              </tr>
              <tr>
                <td>Каналізаційні стоки</td>
                <td>
                  Гастроентерит, гепатит, міокардит, менінгіт, поліомієліт,
                  приховані форми (більше 80%) кишкових розладів.
                </td>
              </tr>
              <tr>
                <td>Жорсткість: солі кальцію і магнію</td>
                <td>
                  Зашлакованість організму, утворення каменів в нирках,
                  сечовому міхурі і на зубах.
                </td>
              </tr>
            </tbody>
          </table>
        </figure>

        <p>
          Що таке пестициди? Пестициди &#8212; це хімічні речовини, часто
          токсичні, що застосовуються для захисту рослин від шкідників, а
          також для знищення бур&#8217;янів. Потрапляють в воду разом з дощем.
        </p>

        <p>
          Що таке нітрати? Нітрати &#8212; це добрива, необхідні для розвитку
          рослин.
        </p>

        <figure className="wp-block-image size-large">
          <img
            decoding="async"
            width="553"
            height="551"
            src="/assets/shcho-ye-u-vodi-krim-samoi-vody/in-water.jpg"
            alt="Що попадає в організм із забрудненою водою"
          />
        </figure>

        <h4 className="has-text-align-center wp-block-heading">
          Головна проблема:
        </h4>

        <h4 className="has-text-align-center wp-block-heading">
          Низька поінформованість населення про якість води різного
          походження.
        </h4>
        <div className="post-tags"></div>
      </div>

    </Layout>
  );
};

export default index;
