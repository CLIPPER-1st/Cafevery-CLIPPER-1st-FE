import {styled} from 'styled-components';
import DefaultCafeThumbImg from '@/assets/Icons/DefaultCafeThumb.png'
import theme from '@/theme';

export const ModalInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

export const CafeAddress = styled.div`
    width: 100%;
    height: 24px;
    font-size: 16px;
    margin: 6px 0 0 0;
    color: ${theme.colors.lightBrown};
`;

export const SectionTitle = styled.div`
    width: 100%;
    height: 24px;
    font-size: 24px;
    margin: 0 0 6px 0;
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
    background-color: #A97953;
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
