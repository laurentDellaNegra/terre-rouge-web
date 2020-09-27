import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import PageTransition from 'components/PageTransition';

import theme from '../styles/theme';
import Header from 'components/Header';
import MainContainer from 'components/layout/MainContainer';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Normalize />
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Header />
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </MainContainer>
    </ThemeProvider>
  </>
);

export default App;
