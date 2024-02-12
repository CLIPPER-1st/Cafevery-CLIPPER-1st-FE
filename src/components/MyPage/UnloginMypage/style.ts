import theme from '@/theme';
import styled from 'styled-components';

export const UnloginText = styled.div`
    font-size: 18px;
    color: ${theme.colors.darkBrown};
    width: 250px;
    height: 45px;
    margin: 20px 0 20px 0px;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const SocialButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    position: relative;
`;

export const ProfileImage = styled.img`
    width: 183px;
    height: 183px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    border-radius: 100%;
`;

export const Line = styled.div`
    width: 340px;
    height: 2.5px;
    background-color: ${theme.colors.darkBrown};
    position: relative;
`;