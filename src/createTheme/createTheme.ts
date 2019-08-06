import { RNTheme } from '..'

const createTheme = <T extends RNTheme>(theme: T): T => theme;

export default createTheme