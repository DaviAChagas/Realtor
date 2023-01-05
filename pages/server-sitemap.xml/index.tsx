import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import db from "../../db.json"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locations: any[] = db

  console.log(`Teste: ${locations}`)
  const fields: ISitemapField[] = locations.map((locale) => ({
    loc: `https://www.jairocorretor.cim.br/localidades/${locale.name}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}