import React, { useState } from 'react';
import useNaverAutocomplete from '@/hooks/useNaverAutocomplete';
import * as Styled from './style';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const suggestions = useNaverAutocomplete(searchTerm);

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  // 검색창의 UI와 함께 자동완성 제안목록 렌더링
  return (
    <Styled.Container>
      <Styled.SearchInput
        type="text"
        placeholder="위치를 검색하세요."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Styled.SuggestionsList>
        {suggestions.map((suggestion) => (
          <Styled.SuggestionItem key={suggestion.id}>
            {suggestion.title}
          </Styled.SuggestionItem>
        ))}
      </Styled.SuggestionsList>
    </Styled.Container>
  );
}
