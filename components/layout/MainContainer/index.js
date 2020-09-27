import Box from 'components/primitives/Box';

const Container = ({ children }) => (
  <Box
    px={{ _: 0, sm: 1, md: 2, lg: 3, xl: 4 }}
    maxWidth={{ _: '100%', md: '960px', lg: '1180px' }}
    mx="auto"
  >
    {children}
  </Box>
);

export default Container;
