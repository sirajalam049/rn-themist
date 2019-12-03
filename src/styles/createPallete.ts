export type PalleteShadeOptions = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type ColorPallete = Record<PalleteShadeOptions, string>

export interface PalleteColorOptions {
    main: string;
    light: string;
    dark: string;
    contrastText?: string;
}

export interface PalleteTextColor {
    primary: string;
    secondary: string;
}

export interface PalleteOptions {
    primary: PalleteColorOptions;
    secondary: PalleteColorOptions;
    text: PalleteTextColor;
    error: PalleteColorOptions;
    success: PalleteColorOptions;
    contrast: Pick<PalleteColorOptions, 'dark' | 'light' | 'main'>

    red: ColorPallete
    green: ColorPallete
    blue: ColorPallete
    grey: ColorPallete

}