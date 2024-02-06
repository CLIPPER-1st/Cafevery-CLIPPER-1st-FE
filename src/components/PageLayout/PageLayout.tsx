import React, { useState } from 'react';
import * as S from './style';
import NavBar from '@/components/NavBar'

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {

  return (
    <>
      <S.Layout>
        <S.Wrapper>
          {children}
          <NavBar />
        </S.Wrapper>
      </S.Layout>
    </>

  );
}