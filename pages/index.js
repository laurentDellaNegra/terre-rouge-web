import Head from 'next/head';
import Content from 'components/Content';
import Header from 'components/Header';

const Home = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Content />
  </>
);
export default Home;
