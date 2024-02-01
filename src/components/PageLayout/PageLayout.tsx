import React, { useState } from 'react';
import * as S from './style';
import NavBar from '@/components/NavBar'

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
          <NavBar />
        </S.Wrapper>
      </S.Layout>
    </>

  );
}