import ProductDetail from "@/app/components/products/ProductDetail"
function DetalleProductos({params}) {
    const {slug} = params
  return (
    <div>
        <ProductDetail slug={slug}/>
    </div>
  )
}

export default DetalleProductos








/*
// ./pages/productos/detail/[slug].js

import ProductDetail from '../../../components/products/ProductDetail';
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "@/app/firebase/config";

const ProductDetailPage = ({ productData }) => {
  return (
    <div>
      <ProductDetail productData={productData} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const productosRef = collection(db, "productos");
  const q = query(productosRef, where('slug', '==', slug));

  try {
    const querySnapshot = await getDocs(q);
    const productData = querySnapshot.docs.map(doc => doc.data());

    return {
      props: {
        productData,
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetailPage;
*/