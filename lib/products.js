import Header from 'components/Header';

export const getProductsData = async () => {
  const headers = new Headers();
  headers.append('Authorization', '563492ad6f917000010000015efe542472fc4c4fb90e132b2b82cc1e');
  const res = await fetch('https://api.pexels.com/v1/search?query=people', { headers });
  return res.json();
};
