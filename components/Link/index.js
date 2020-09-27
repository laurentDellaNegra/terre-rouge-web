import LinkNext from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children }) => <LinkNext href={href}>{children}</LinkNext>;
Link.propTypes = {
  href: PropTypes.string,
};
export default Link;
