interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface CartItemProps {
  id: number;
  quantity: number;
  product: ProductProps;
}

interface UseProductsResult {
  products: ProductProps[];
  isLoading: boolean;
  error: Error | null;
  fetchNextPage: () => void;
  isLastPage: boolean;
  setSortOption: (sortOption: string) => void;
  setCategory: (category: string) => void;
  resetPage: () => void;
  selectedCategory: string;
  selectedSort: string;
  page: number;
}
