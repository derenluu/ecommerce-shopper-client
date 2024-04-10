'use client';

import Breadcrum from '@/components/Breadcrum';
import ProductDisplay from '@/components/ProductDisplay';
import { ShopContext } from '@/contexts/ShopContext';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

const ProductID = () => {
  const { all_product } = useContext(ShopContext);

  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID.toString()));
  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </>
  );
};

export default ProductID;
