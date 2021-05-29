import styled from "styled-components";

import library from "../../utils/Images/library.jpg";

export const HeaderBackground = styled.header`
  height: 350px;
  background-image: url(${library});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: inherit;
  color: #fff;
  background-color: #000000b5;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderLeft = styled.div`
  width: 100%;
  margin-top: 30px;
  align-self: flex-start;

  img {
    width: 70px;
  }
`;

export const HeaderCenter = styled.div`
  width: 100%;
  font-size: 18px;
`;

export const HeaderRight = styled.div`
  width: 100%;
`;
