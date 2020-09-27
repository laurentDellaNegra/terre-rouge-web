import Head from 'next/head';
import ContactContent from 'components/Contact';
import Header from 'components/Header';
import MainContainer from 'components/layout/MainContainer';

const Contact = () => (
  <MainContainer>
    <Head>
      <title>Terre Rouge - Contact</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <ContactContent />
  </MainContainer>
);
export default Contact;
