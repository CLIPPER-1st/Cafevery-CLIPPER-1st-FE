import { useRecoilState, useSetRecoilState } from 'recoil';
import { cafeInfoListState } from '@/atoms/cafeInfoListState';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';
import { useLocation } from 'react-router-dom';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';

export const useFetchCafeList = (centerLatitude: number, centerLongitude: number) => {
    const nowUrl = useLocation();
    const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
    const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
    const setCafeState = useSetRecoilState(cafeInfoListState({distance: distance, startTime: minValue, endTime: maxValue})); //TODO: 임시 
    //TODO: 주석 헤제 해야함
    /*
    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfoList', centerLatitude, centerLongitude],
        queryFn: async () => (await fetchCafes(centerLatitude, centerLongitude)),
        staleTime: 100000,
        gcTime: 100,
    });
    setCafeState((prevCafeState) => ({
        ...prevCafeState,
        data: { cafes: data }
    }));
    return data;
    */
    
    return null; //TODO: 서버 연동 후 지워야 함
}