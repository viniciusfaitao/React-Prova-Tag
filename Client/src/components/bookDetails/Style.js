import styled from "styled-components";

export const BookDetailsBackground = styled.body`
  margin: 25px;
  align-self: center;
`;

export const BookDetailsHeader = styled.header``;

export const BookDetailsMain = styled.main`
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  background: #f5f7f6;
  box-shadow: 0px 0px 10px #000;
  display: flex;
  flex-flow: wrap !important;
  flex-direction: column;
  justify-content: center;
`;

export const BookDetailsFooter = styled.footer``;

export const BookDetailsSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    white-space: pre;
    align-items: center;
  }

  a {
    height: 35px;
    margin: 10px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    margin-right: auto;
    color: rgb(0, 155, 191);
  }
`;

export const BookDetailsImage = styled.div`
  margin: 0 50px;
`;

export const BookDetailsDescription = styled.div`
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
