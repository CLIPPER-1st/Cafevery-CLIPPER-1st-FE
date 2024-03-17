import {styled} from 'styled-components';
import DefaultCafeThumbImg from '@/assets/Icons/DefaultCafeThumb.png'
import theme from '@/theme';

export const CafeAddress = styled.div`
    width: 100%;
    height: 16px;
    font-size: 12px;
    margin: 6px 0 6px 0;
    color: ${theme.colors.lightBrown};
`;

export const SectionTitle = styled.div`
    width: 100%;
    height: 24px;
    font-size: 24px;
    margin: 0 0 6px 0;
`;

export const CafeInBusiness = styled.div`
    width: 65px;
    height: 17px;
    font-size: 13px;
    border-radius: 20px;
    color: ${theme.colors.brown};
    background-color: ${theme.colors.textMain};
    margin: 6px 0 15px 0;
    text-align: center;
`;

export const CafeInfo = styled.div`
    width: 100%;
    height: 14px;
    font-size: 14px;
    margin: 0 0 6px 0;
`;

export const Line = styled.div`
    width: 290px;
    height: 2px;
    background-color: ${theme.colors.lightBrown};
    margin: 20px 0 20px 0;
`;

export const CafeThumb = styled.div`
    background-image: url(${DefaultCafeThumbImg});
    width: 120px;
    height: 120px;
    background-size: 120px 120px;
    font-size: 24px;
    margin-top: 10px;
`;

export const CafeBusinessHoursWrapper = styled.div`
    margin-top: 20px;
`;

export const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 145px;
    right: 15px;
`;