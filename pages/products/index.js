import Head from 'next/head';

import ProductsContent from 'components/Products';
import { getProductsData } from 'lib/products';

const Products = ({ productsData }) => (
  <>
    <Head>
      <title>Terre Rouge - Epices</title>
    </Head>
    <ProductsContent products={productsData.photos} />
  </>
);

export async function getStaticProps({ params }) {
  const productsData = await getProductsData();
  console.log(productsData.photos.length);
  return {
    props: {
      productsData,
    },
  };
}

export default Products;
