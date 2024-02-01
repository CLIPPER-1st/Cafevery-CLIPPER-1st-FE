import React from 'react'
import { NaverMap } from '@/components/NaverMap'
import PageLayout from '@/components/PageLayout/PageLayout'
import SearchBar from '@/components/SearchBar'

export default function Home() {
  return (
    <PageLayout>
      <SearchBar />
      <NaverMap />
    </PageLayout>
  )
}
