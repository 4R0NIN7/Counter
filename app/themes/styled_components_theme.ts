import { rgba } from 'polished'
import { Dimensions, PixelRatio } from 'react-native'
import { ms, vs, mvs } from 'react-native-size-matters'

const wp = (value: number) => PixelRatio.roundToNearestPixel(Dimensions.get('window').width * (value / 100))
const hp = (value: number) => PixelRatio.roundToNearestPixel(Dimensions.get('window').height * (value / 100))

const colors = {
  black: 'black',
  white: '#ffffff',
  dark: '#072739',
  gray_01: '#D6D6D6',
  gray_02: '#898989',
  gray_03: '#4F4F4F',
  gray_04: '#1D1D1D',
  gray_05: '#6a6464',
  teal: '#00B8B9',
  teal_inactive: '#99E3E3',
  orange: '#FA9600',
  red: '#DF0303',
  navy: '#043855',
  navy_inactive: '#6A8FA3',
  blue: '#007AFF',
}

export type TStyledComponentsTheme = {
  colors: typeof colors
  rgba: typeof rgba
  wp: (value: number) => number
  hp: (value: number) => number
  ms: typeof ms
  vs: typeof vs
  mvs: typeof mvs
}

const styledComponentsTheme: TStyledComponentsTheme = {
  colors,
  rgba,
  wp,
  hp,
  ms,
  vs,
  mvs,
}

export { styledComponentsTheme }
