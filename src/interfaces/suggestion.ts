export interface Suggestion {
    id: string;
    title: string;
}

export interface SuggestionsListProps {
    suggestions: Suggestion[];
    onSuggestionClick: (suggestion: Suggestion) => void;
}