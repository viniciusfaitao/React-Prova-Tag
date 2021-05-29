import React, { createContext, useEffect, useState } from "react";
import { orderBy } from "../../components/orderBy/Index";
import { UseTagBooks } from "../../services/tagBooksApi/Index";

export const TagBooksContext = createContext();

export const TagBooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [isbnBook, setIsbnBook] = useState();

  const fetchData = async () => {
    const result = await UseTagBooks();
    const orderedBooks = result.sort(orderBy);

    setBooks(orderedBooks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TagBooksContext.Provider value={{ books, isbnBook, setIsbnBook }}>
      {props.children}
    </TagBooksContext.Provider>
  );
};
