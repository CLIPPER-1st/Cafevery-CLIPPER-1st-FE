import React from 'react'
import { NaverMap } from '@/components/NaverMap'
import PageLayout from '@/components/PageLayout/PageLayout'
import SearchBar from '@/components/SearchBar'
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton/GoToMyLocationButton'
export default function Home() {
  return (
    <PageLayout>
      <SearchBar />
      <NaverMap />
      <GoToMyLocationButton />
    </PageLayout>
  )
}
