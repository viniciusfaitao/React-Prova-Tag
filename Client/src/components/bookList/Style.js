import styled from "styled-components";

export const BookListBackground = styled.body`
  margin: 25px;
`;

export const BookListHeader = styled.header``;

export const BookListMain = styled.main`
  display: flex;
  flex-flow: wrap !important;
  flex-direction: column;
  justify-content: center;

  div {
    height: 25px;
    display: flex;
    white-space: pre;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    height: 300px;
  }
`;

export const BookListFooter = styled.footer``;

export const BookListSection = styled.section`
  width: 300px;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
  background: #f5f7f6;
  box-shadow: 0px 0px 10px #000;

  h6 {
    margin: 0;
  }

  button {
    width: 100px;
    height: 35px;
    margin-top: 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(90deg, rgb(0, 155, 191), rgb(0, 194, 226));
    opacity: 0.6;
    transition: 0.5s;

    &:hover {
      opacity: 1;
      background: linear-gradient(90deg, rgb(28 82 95), rgb(38 165 185));
    }
  }
`;
