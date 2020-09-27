import Grid from 'components/layout/Grid';
import Box from 'components/primitives/Box';

const Products = () => (
  <Grid
    gridGap={{ _: 0, sm: 1, md: 2 }}
    gridTemplateColumns={{ _: '1fr 1fr', md: '1fr 1fr 1fr' }}
    gridAutoRows="300px"
  >
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
    <Box bg="blue">Product 1</Box>
  </Grid>
);
export default Products;
