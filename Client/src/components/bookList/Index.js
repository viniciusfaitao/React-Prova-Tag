import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GoodReadsContext } from "../../contexts/goodReads/Index";
import { TagBooksContext } from "../../contexts/tagBooks/Index";
import { LoadingPage } from "../loadingPage/Index";
import {
  BookListBackground,
  BookListHeader,
  BookListMain,
  BookListSection,
  BookListFooter,
} from "./Style";

export const BookListComponent = () => {
  const { books, setIsbnBook } = useContext(TagBooksContext);
  const { goodReads } = useContext(GoodReadsContext);

  return (
    <>
      <BookListBackground>
        <BookListHeader></BookListHeader>
        <BookListMain>
          {books ? (
            books.map((book) => (
              <BookListSection>
                <img src={book.cover.url} />
                <h3>{book.name}</h3>
                <h6>
                  {book.author} - {book.edition}
                </h6>
                <div></div>
                <div>
                  Média Tag:{" "}
                  <h4>{(book.totalRatings / book.numRatings).toFixed(2)}</h4>
                </div>
                <div>
                  Média GoodRead:{" "}
                  {goodReads &&
                    goodReads.map(
                      (gr) =>
                        gr.isbn13 === book.isbn && <h4>{gr.average_rating}</h4>
                    )}
                </div>
                <Link to={`/livro/${book.objectId}`}>
                  <button onClick={() => setIsbnBook(book.isbn)}>
                    Detalhes
                  </button>
                </Link>
              </BookListSection>
            ))
          ) : (
            <LoadingPage />
          )}
        </BookListMain>
        <BookListFooter></BookListFooter>
      </BookListBackground>
    </>
  );
};
