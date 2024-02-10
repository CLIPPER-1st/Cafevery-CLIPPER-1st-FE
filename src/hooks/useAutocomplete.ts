import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mapCenterState } from '@/atoms/location';

interface Suggestion {
    id: string;
    title: string;
}

export function useAutocomplete(searchTerm: string) {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [, setCenterLocation] = useRecoilState(mapCenterState);

    useEffect(() => {
        if (!window.google || !searchTerm.trim()) {
        setSuggestions([]);
        return;
        }

        const service = new window.google.maps.places.AutocompleteService();

        if (service && searchTerm) {
        service.getPlacePredictions({ input: searchTerm }, (results: any) => {
            if (results) {
            const formattedSuggestions = results.map((item: any, index: number) => ({
                id: item.place_id,
                title: item.description,
            }));

            setSuggestions(formattedSuggestions);
            } else {
            setSuggestions([]);
            }
        });
        }
    }, [searchTerm]);

    const handleSuggestionClick = (suggestion: Suggestion) => {
        const placeId = suggestion.id;
        
        // 예제: placeId를 사용하여 위치 정보 가져오기
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ placeId }, (results: any, status: any) => {
        if (status === 'OK' && results.length > 0) {
            const locationData = results[0].geometry.location;
            const latitude = locationData.lat();
            const longitude = locationData.lng();

            setCenterLocation({ latitude, longitude });
        }
        });
    };

    return { suggestions, handleSuggestionClick };
}
