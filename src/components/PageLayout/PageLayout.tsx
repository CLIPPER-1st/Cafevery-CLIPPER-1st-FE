import React, { useState } from 'react';
import * as S from './style';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: Props) {

  return (
    <>
    <S.Layout>
      <S.Wrapper>
        <S.Title>
          {title}
        </S.Title>
        {children}
      </S.Wrapper>
    </S.Layout>

    </>

  );
}