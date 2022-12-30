import 'styled-components'
import { Theme } from './src/pages/_app'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
