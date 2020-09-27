import { PageTransition as NextPageTransition } from 'next-page-transitions';

const PageTransition = ({ children }) => (
  <>
    <NextPageTransition timeout={300} classNames="page-transition">
      {children}
    </NextPageTransition>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
      }
      .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
      }
    `}</style>
  </>
);
export default PageTransition;
