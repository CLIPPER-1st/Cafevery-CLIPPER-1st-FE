import styled, { keyframes } from 'styled-components';
import theme from '@/theme';

const slideUpAndFade = keyframes`
    0% {
        bottom: 0; // 화면 하단에서 시작
        opacity: 0;
    }
    10% {
        bottom: 100px; // 최종 위치로 이동
        opacity: 1;
    }
    90% {
        bottom: 100px; // 위치 유지
        opacity: 1;
    }
    100% {
        bottom: 0; // 다시 화면 하단으로 사라짐
        opacity: 0;
    }
`;

export const ToastContainer = styled.div`
    position: fixed;
    bottom: 50px; // 초기 위치 지정
    left: 50%;
    transform: translateX(-50%); // 가로 중앙 정렬만 적용
    background: ${theme.colors.white};
    color: ${theme.colors.brown};
    border: 2px solid ${theme.colors.brown};
    padding: 15px;
    width: auto; // 너비를 내용에 따라 자동 조절
    max-width: 400px; // 최대 너비를 화면 너비의 90%로 제한
    min-width: 100px; // 최소 너비 설정
    border-radius: 5px;
    animation: ${slideUpAndFade} 2s ease forwards;
    z-index: 10000;
    text-align: center;
    white-space: nowrap; // 텍스트를 한 줄로 유지
    font-size: 18px;
    @media (min-width: 500px) { // 뷰포트 너비가 500px 이상일 때
        white-space: normal; // 텍스트 줄바꿈 허용
    }
`;
