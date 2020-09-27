import Head from 'next/head';
import ProductsContent from 'components/Products';
import Header from 'components/Header';
import MainContainer from 'components/layout/MainContainer';

const Contact = () => (
  <MainContainer>
    <Head>
      <title>Terre Rouge - Epices</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <ProductsContent />
  </MainContainer>
);
export default Contact;
