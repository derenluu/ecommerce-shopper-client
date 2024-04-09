'use client';

import all_product from '@/assets/all_product';
import { createContext, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu của all_product ở đây
interface ShopContextType {
  all_product: any[];
}

export const ShopContext = createContext<ShopContextType>({
  // Khởi tạo giá trị mặc định
  all_product: [],
});

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const contextValue: ShopContextType = { all_product };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
