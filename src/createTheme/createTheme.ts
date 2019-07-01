import { RNTheme } from "../RNTheme";


const createTheme = (theme: Partial<RNTheme>): RNTheme => theme as RNTheme;

export default createTheme