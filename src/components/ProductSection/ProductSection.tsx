import { useError } from "../../context/errorContext";
import { useProducts } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { ProductHeader } from "../ProductHeader/ProductHeader";
import { ProductList } from "../ProductList/ProductList";
import * as S from "./ProductSection.styled";

export const ProductSection = () => {
  const {
    isLoading,
    products,
    isLastPage,
    fetchNextPage,
    resetPage,
    setCategory,
    setSortOption,
    selectedCategory,
    selectedSort,
  } = useProducts();
  const { errorStatus } = useError();

  return (
    <S.StyledProductSection>
      {!errorStatus && (
        <>
          <ProductHeader
            resetPage={resetPage}
            setCategory={setCategory}
            setSortOption={setSortOption}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
          />
          <ProductList
            products={products}
            isLoading={isLoading}
            isLastPage={isLastPage}
            fetchNextPage={fetchNextPage}
          />
        </>
      )}
      {isLoading && <LoadingSpinner />}
    </S.StyledProductSection>
  );
};
