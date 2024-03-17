import useInput from '@/hooks/useInput';
import React from 'react';
import * as Styled from './style';
import { SuggestionsListProps } from '@/interfaces/suggestion';

export function SuggestionsList({ suggestions, onSuggestionClick }: SuggestionsListProps) {
    const { setValue: setSearchTerm } = useInput();

    return (
        <Styled.SuggestionsList>
            {suggestions.map((suggestion) => (
                <Styled.SuggestionItem
                    key={suggestion.id}
                    onClick={() => {
                        onSuggestionClick(suggestion);
                        setSearchTerm(suggestion.title);
                    }}
                >
                    {suggestion.title}
                </Styled.SuggestionItem>
            ))}
        </Styled.SuggestionsList>
    );
};