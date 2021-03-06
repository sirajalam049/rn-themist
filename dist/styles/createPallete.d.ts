export declare type PaletteShadeOptions = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export declare type ColorPalette = Record<PaletteShadeOptions, string>;
export interface PaletteColorOptions {
    main: string;
    light: string;
    dark: string;
    contrastText?: string;
}
export interface PaletteTextColor {
    primary: string;
    secondary: string;
}
export interface PaletteOptions {
    primary: PaletteColorOptions;
    secondary: PaletteColorOptions;
    text: PaletteTextColor;
    error: PaletteColorOptions;
    success: PaletteColorOptions;
    contrast: Pick<PaletteColorOptions, 'dark' | 'light' | 'main'>;
    background: PaletteColorOptions;
    red: ColorPalette;
    green: ColorPalette;
    blue: ColorPalette;
    grey: ColorPalette;
}
