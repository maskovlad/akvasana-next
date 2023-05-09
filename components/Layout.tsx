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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="веб-студія Sviy.Site: www.sviy.site" />
        <meta name="copyright" content="Аква Сана Кривий Ріг, akvasana.com.ua" />
        <meta name="robots" content="index,follow" />
      </Head>
      <main className={`main ${montserrat.className}`}>{children}</main>
    </>
  );
};

export default Layout;
