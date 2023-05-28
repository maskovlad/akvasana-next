import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import Header from "./01-Header/Header";
import Footer from "./10-Footer/Footer";

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

const Layout = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) => {
  const router = useRouter();
  const pathname = router.pathname === "/" ? "" : router.pathname;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon-min.png" />
        <meta name="author" content="Веб-студія Sviy.Site: www.sviy.site" />
        <meta
          name="copyright"
          content="Аква Сана Кривий Ріг, akvasana.com.ua"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={`https://akvasana.com.ua${pathname}`} />
      </Head>
      <Header />
      <main className={montserrat.className}>
        <article className="article">{children}</article>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
