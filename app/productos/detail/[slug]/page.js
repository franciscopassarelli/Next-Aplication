// ./pages/productos/detail/[slug].js

import ProductDetail from '../../../components/products/ProductDetail';

const ProductDetailPage = ({ slug }) => {
  return (
    <div>
      <ProductDetail slug={slug} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}

export default ProductDetailPage;
