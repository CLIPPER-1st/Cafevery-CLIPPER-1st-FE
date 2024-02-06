import styled from 'styled-components';
import theme from '@/theme';
import { ButtonProps } from '@/interfaces/button';

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.background && `url(${props.background})`};
  background-color: ${(props) => props.backgroundColor};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  margin: ${(props) => `${props.margin}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : 0)};
  border-radius : ${(props) => props.borderRadius};
  height: ${(props) => `${props.height}`};
  outline: none;
  border: none;
  z-index: ${(props) => `${props.zIndex}`};
  box-shadow: none;
  color: ${(props) => `${props.color}`};
  font-size: ${(props) => `${props.fontSize}px`};
  cursor: ${(props) => (props.disabled || props.dark ? 'cursor' : 'pointer')};
  filter: ${(props) => (props.disabled || props.dark) && 'brightness(0.7)'};
`;
