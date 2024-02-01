// useNaverAutocomplete.ts
import { useState, useEffect } from 'react';

interface Suggestion {
    id: string; // 각 제안의 고유 식별자
    title: string;
    // 다른 필드...
}

const useNaverAutocomplete = (searchTerm: string) => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
        if (!searchTerm.trim()) {
            setSuggestions([]);
            return;
        }
        try {

            const response = await fetch(`https://cafevery-clipper-1st-fe.vercel.app/api/search?query=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
            throw new Error(`Error from serverless API: ${response.statusText}`);
            }
            const data = await response.json();
            setSuggestions(
            data.items.map((item, index) => ({ ...item, id: `suggestion-${index}` }))
            );
        } catch (error) {
            console.error(error);
            setSuggestions([]);
        }
    };

        fetchSuggestions();
    }, [searchTerm]);   

    return suggestions;
};

export default useNaverAutocomplete;
