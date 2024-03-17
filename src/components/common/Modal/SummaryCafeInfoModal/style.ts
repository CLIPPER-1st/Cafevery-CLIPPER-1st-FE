import {styled} from 'styled-components';
import DefaultCafeThumbImg from '@/assets/Icons/DefaultCafeThumb.png'
import theme from '@/theme';

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const CafeAddress = styled.div`
    width: 100%;
    height: 16px;
    font-size: 12px;
    margin: 6px 0 6px 0;
    color: ${theme.colors.lightBrown};
`;

export const SectionTitle = styled.div`
    width: 100%;
    height: 22px;
    font-size: 20px;
`;

export const CafeInBusiness = styled.div`
    width: 65px;
    height: 17px;
    font-size: 13px;
    border-radius: 20px;
    color: ${theme.colors.brown};
    background-color: ${theme.colors.textMain};
    margin: 10px 0 10px 0;
    text-align: center;
`;

export const CafeInfo = styled.div`
    width: 100%;
    height: 14px;
    font-size: 20px;
    margin: 0 0 16px 0;
`;

export const CafeThumb = styled.div`
    background-image: url(${DefaultCafeThumbImg});
    width: 60px;
    height: 60px;
    background-size: 60px 60px;
    font-size: 24px;
`;

export const LikeButtonWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 15px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;
