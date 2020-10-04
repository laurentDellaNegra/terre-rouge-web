import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '../styles/theme';
import PageTransition from 'components/PageTransition';
import Header from 'components/Header';
import MainContainer from 'components/layout/MainContainer';

const App = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Normalize />
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <PageTransition>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </MainContainer>
    </ThemeProvider>
  </>
);
export default App;
