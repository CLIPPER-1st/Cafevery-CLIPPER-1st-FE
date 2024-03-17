import React from 'react';
import * as Style from './style';
import NavBar from '@/components/common/NavBar'

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {

  return (
    <>
      <Style.Layout>
        <Style.Wrapper>
          {children}
          <NavBar />
        </Style.Wrapper>
      </Style.Layout>
    </>
  );
}