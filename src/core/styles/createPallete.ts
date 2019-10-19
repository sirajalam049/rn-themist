import { TypographyColors } from './createTypography';

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
}