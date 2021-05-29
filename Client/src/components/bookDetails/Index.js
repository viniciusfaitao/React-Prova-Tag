import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TagBooksContext } from "../../contexts/tagBooks/Index";
import { GoodReadsContext } from "../../contexts/goodReads/Index";
import { LoadingPage } from "../loadingPage/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  BookDetailsBackground,
  BookDetailsHeader,
  BookDetailsMain,
  BookDetailsSection,
  BookDetailsImage,
  BookDetailsDescription,
  BookDetailsFooter,
} from "./Style";

export const BookDetailsComponent = () => {
  const { books } = useContext(TagBooksContext);
  const { actualGR } = useContext(GoodReadsContext);

  const params = window.location.href;

  return (
    <>
      <BookDetailsBackground>
        <BookDetailsHeader></BookDetailsHeader>
        <BookDetailsMain>
          {books ? (
            books.map(
              (book) =>
                params.includes(book.objectId) && (
                  <>
                    <BookDetailsSection>
                      <Link to={`/`}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Voltar
                      </Link>
                    </BookDetailsSection>
                    <BookDetailsSection>
                      <BookDetailsImage>
                        <img src={book.cover.url} />
                      </BookDetailsImage>
                      <BookDetailsDescription>
                        <h2>{book.name}</h2>
                        <div>
                          Autor: <h4>{book.author}</h4>
                        </div>
                        <div>
                          Data edição: <h4>{book.edition}</h4>
                        </div>
                        <div>
                          Curador(a): <h4>{book.curator}</h4>
                        </div>
                        <div>
                          Nº de páginas: <h4>{book.pages}</h4>
                        </div>
                        <div>
                          Total avaliações na TAG: <h4> {book.totalRatings}</h4>
                        </div>
                        {actualGR[0] ? (
                          <div>
                            Total avaliações na GoodReads:{" "}
                            <h4>{actualGR[0].ratings_count}</h4>
                          </div>
                        ) : (
                          <h4>----</h4>
                        )}
                      </BookDetailsDescription>
                    </BookDetailsSection>
                  </>
                )
            )
          ) : (
            <LoadingPage />
          )}
        </BookDetailsMain>
        <BookDetailsFooter></BookDetailsFooter>
      </BookDetailsBackground>
    </>
  );
};
