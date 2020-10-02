import Grid from 'components/layout/Grid';
import Box from 'components/primitives/Box';
import Image from 'components/Image';

const Products = ({ products }) => {
  return (
    <Grid
      gridGap={{ _: 0, sm: 1, md: 2 }}
      gridTemplateColumns={{ _: '1fr 1fr', md: '1fr 1fr 1fr' }}
      gridAutoRows="300px"
    >
      {products.map((product) => (
        <Box key={product.id}>
          <Image src={product.src.original} />
          {product.photographer}
        </Box>
      ))}
    </Grid>
  );
};
export default Products;
