import Box from 'components/primitives/Box';
import Flex from 'components/primitives/Flex';

const Header = () => (
  <Flex flexDirection="row" alignItems="center" justifyContent="space-evenly">
    {/* Logo */}
    <Flex flex={2}>
      <img src="/logo-terre-rouge.svg" alt="Terre rouge" height="auto" width={250} />
    </Flex>

    {/* Links */}
    <Flex flex={3} justifyContent="space-evenly">
      <Box>Accueil</Box>
      <Box>Epices</Box>
      <Box>Contact</Box>
    </Flex>

    {/* login button */}
    <Flex flex={2} justifyContent="flex-end">
      <Box>Panier</Box>
    </Flex>
  </Flex>
);
export default Header;
