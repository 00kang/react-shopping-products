export const ERROR_MESSAGE: { [key: string]: string } = {
  400: "유효하지 않은 요청입니다. 입력한 정보를 다시 확인해주세요.",
  404: "요청한 정보를 찾을 수 없습니다. ",
  500: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요. ",
};

export const categoryOptions = [
  "전체",
  "fashion",
  "beverage",
  "electronics",
  "kitchen",
  "fitness",
  "books",
];

export const sortOptions = ["낮은 가격순", "높은 가격순"];

export const PAGE = {
  FIRST_PAGE: 0,
  FIRST_PAGE_LIMIT: 20,
  SECOND_PAGE_STD: 5,
  NEXT_PAGE_STEP: 1,
  OTHER_PAGE_LIMIT: 4,
  FIRST_PAGE_START: 0,
  OTHER_PAGE_START: 2,
};

export const STYLE_OPTION = {
  HEADER_Z_INDEX: 10,
};

export const COUNTER_BUTTON_TYPES = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
} as const;

export const CART = {
  QUANTITY_CHANGE_STEP: 1,
};

export const CART_KEYS = {
  CART: "cart",
};
