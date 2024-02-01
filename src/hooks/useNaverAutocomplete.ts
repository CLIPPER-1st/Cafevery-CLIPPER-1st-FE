import { useState, useEffect } from 'react';

const useNaverAutocomplete = (searchTerm) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!searchTerm) {
                setSuggestions([]);
                return;
            }
            try {
                const response = await fetch(`https://openapi.naver.com/v1/search/local.json?query=${searchTerm}`, {
                headers: {
                    'X-Naver-Client-Id': import.meta.env.VITE_APP_NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': import.meta.env.VITE_APP_NAVER_CLIENT_SECRET,
                },
                });
                const data = await response.json();
                setSuggestions(data.items);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [searchTerm]);

    return suggestions;
};

export default useNaverAutocomplete;
