import React, { createContext, useContext, useEffect, useState } from "react";
import { UseGoodReads } from "../../services/goodReadsApi/Index";
import { TagBooksContext } from "../tagBooks/Index";

export const GoodReadsContext = createContext();

export const GoodReadsProvider = (props) => {
  const { books, isbnBook } = useContext(TagBooksContext);

  const [goodReads, setGoodReads] = useState([]);
  const [actualGR, setActualGR] = useState();

  const fetchData = async (book) => {
    const result = await UseGoodReads(book);

    if (goodReads.length <= books.length) {
      setGoodReads((prevState) => [...prevState, result]);
    }
  };

  useEffect(() => {
    books.map((book) => {
      return fetchData(book);
    });
  }, [books]);

  useEffect(() => {
    const result = goodReads.filter((gr) => isbnBook === gr.isbn13);
    setActualGR(result);
  }, [isbnBook]);

  return (
    <GoodReadsContext.Provider value={{ actualGR, goodReads, setGoodReads }}>
      {props.children}
    </GoodReadsContext.Provider>
  );
};
