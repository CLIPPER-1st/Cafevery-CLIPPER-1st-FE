import useInput from '@/hooks/useInput';
import React from 'react';
import * as Styled from './style';

export function SuggestionsList({ suggestions, onSuggestionClick }) {
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