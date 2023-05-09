import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Montserrat } from 'next/font/google';

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
        <link rel="canonical" href={`https://www.akvasana.com.ua${pathname}`} />
      </Head>
      <main className={`main ${montserrat.className}`}>{children}</main>
    </>
  );
};

export default Layout;
