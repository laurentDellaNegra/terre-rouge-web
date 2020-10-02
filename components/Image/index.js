import PropTypes from 'prop-types';

const Link = ({ src, alt }) => <img src={src} alt={alt} width="100%" height="100%" />;
Link.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Link;
