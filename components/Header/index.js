import Box from 'components/primitives/Box';
import Flex from 'components/primitives/Flex';
import Link from 'components/Link';

const Header = () => (
  <Flex flexDirection="row" alignItems="center" justifyContent="space-evenly">
    {/* Logo */}
    <Flex flex={2}>
      <img src="/logo-terre-rouge.svg" alt="Terre rouge" height="auto" width={250} />
    </Flex>

    {/* Links */}
    <Flex flex={3} justifyContent="space-evenly">
      <Link href="/">Accueil</Link>
      <Link href="/products">Epices</Link>
      <Link href="/contact">Contact</Link>
    </Flex>

    {/* Cart button */}
    <Flex flex={2} justifyContent="flex-end">
      <Box>Panier</Box>
    </Flex>
  </Flex>
);
export default Header;
