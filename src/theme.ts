import {DefaultTheme} from 'styled-components';
import 'styled-components';

declare module 'styled-components' {
  export type DefaultThemeColorKey =
    | 'white'
    | 'black'
    | 'textMain'
    | 'brown'
    | 'lightBrown'
    | 'darkBrown'

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
  }
}

const colors = {
  white: '#ffffff',
  black: '#000000',
  textMain: '#FEFFE7',
  brown: '#32281F',
  lightBrown: '#A97953',
  darkBrown: '#32281F'
};
const theme: DefaultTheme = {
  colors,
};
export default theme;
