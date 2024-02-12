// pages/products/[slug].js
import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  return <ProductDetail slug={slug} />;
};

export default ProductDetailPage;
