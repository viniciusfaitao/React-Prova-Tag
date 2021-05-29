import React from "react";
import {
  HeaderBackground,
  HeaderWrap,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
} from "./Style";

export const HeaderComponent = () => {
  return (
    <HeaderBackground>
      <HeaderWrap>
        <HeaderLeft>
          <img src="https://static.taglivros.com/v7.26.1/assets/images/common/logo_default_white.svg" />
        </HeaderLeft>
        <HeaderCenter>
          <h1>Comparação de livros</h1>
        </HeaderCenter>
        <HeaderRight>{/* espera de codigo */}</HeaderRight>
      </HeaderWrap>
    </HeaderBackground>
  );
};
