import { useCallback, useEffect, useState } from "react";
import { PRODUCTS_ENDPOINT } from "../api/endpoints";
import { PAGE } from "../constants";
import { useError } from "../context/errorContext";

const sortOptionsMap: Record<SortOrder, string> = {
  asc: "낮은 가격순",
  desc: "높은 가격순",
};

export default function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { setErrorStatus } = useError();
  const [page, setPage] = useState<number>(PAGE.FIRST_PAGE);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<SortOrder>("asc");
  const [category, setCategory] = useState<string>("전체");

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const size = page === PAGE.FIRST_PAGE ? PAGE.FIRST_PAGE_LIMIT : PAGE.OTHER_PAGE_LIMIT;
      const categoryQuery = category === "전체" ? "" : `category=${category}`;

      const response = await fetch(
        `${PRODUCTS_ENDPOINT}?${categoryQuery}&page=${page}&size=${size}&sort=price,${sortOption}`
      );

      if (!response.ok) {
        setErrorStatus(response.status);
        throw new Error("에러 발생");
      }
      const data = await response.json();

      setProducts((prevProducts) =>
        page === PAGE.FIRST_PAGE ? data.content : [...prevProducts, ...data.content]
      );

      setIsLastPage(data.last);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [setErrorStatus, page, sortOption, category]);

  const fetchNextPage = useCallback(() => {
    if (!isLastPage && !isLoading) {
      page === PAGE.FIRST_PAGE
        ? setPage(PAGE.SECOND_PAGE_STD)
        : setPage((prevPage) => prevPage + PAGE.NEXT_PAGE_STEP);
    }
  }, [isLastPage, isLoading]);

  const resetPage = () => {
    setProducts([]);
    setPage(PAGE.FIRST_PAGE);
    setIsLastPage(false);
  };

  return {
    products,
    isLoading,
    error,
    page,
    isLastPage,
    fetchNextPage,
    setSortOption,
    setCategory,
    resetPage,
    selectedCategory: category,
    selectedSort: sortOptionsMap[sortOption],
  };
}
