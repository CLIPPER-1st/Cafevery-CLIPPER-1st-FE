import FilterButton from '@/components/Button/FilterButton/FilterButton';
import {LikeList} from '@/components/Like/LikeList';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar';
import {Toggle} from '@/components/Toggle/Toggle';
import {Likes} from '@/interfaces/likes';
import {useEffect, useState} from 'react';

export default function Like() {
  const [likes, setLikes] = useState<Likes[]>([]);

  useEffect(() => {
    fetch('/test/cafes/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.cafes);
      });
  }, []);

  return (
    <PageLayout>
      <FilterButton />
      <Toggle />
      <SearchBar />
      <LikeList likes={likes} />
    </PageLayout>
  );
}
