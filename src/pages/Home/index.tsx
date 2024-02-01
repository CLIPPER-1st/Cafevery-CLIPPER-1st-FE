import React from 'react'
import { NaverMap } from '@/components/NaverMap'
import PageLayout from '@/components/PageLayout/PageLayout'
import SearchBar from '@/components/SearchBar'
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton/GoToMyLocationButton'
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton/GetCafeLocationButton'
import * as Styled from './style'

export default function Home() {
  return (
    <PageLayout>
      <SearchBar />
      <Styled.ButtonContainer>
        <GoToMyLocationButton />
        <Styled.CenteredButton>
          <GetCafeLocationButton />
        </Styled.CenteredButton>
      </Styled.ButtonContainer>
      <NaverMap />
    </PageLayout>
  );
}
