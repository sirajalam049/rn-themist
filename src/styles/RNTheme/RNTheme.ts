import type { Overrides } from '../../styles/overrides';
import { PaletteOptions, TypographyOptions, GutterOptions } from '../';

export interface RNTheme {
    palette: PaletteOptions;
    typography: TypographyOptions;
    gutters: GutterOptions;
    overrides: Overrides;
};

export default RNTheme;
