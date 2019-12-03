import RNTheme from './RNTheme';

const Font1 = {
    light: 'Quicksand-Light',
    regular: 'Quicksand-Regular',
    medium: 'Quicksand-Medium',
    semibold: 'Quicksand-SemiBold',
    bold: 'Quicksand-Bold',

    300: 'Quicksand-Light',
    400: 'Quicksand-Regular',
    500: 'Quicksand-Medium',
    600: 'Quicksand-SemiBold',
    700: 'Quicksand-Bold'
}

const Light = "300";
const Regular = "400";
const Medium = "500";
const SemoBold = "600";
const Bold = "700";

export const DefaultPallete: Pick<RNTheme, 'pallete'> = {
    pallete: {
        primary: {
            light: "#7986cb",
            main: "#3f51b5",
            dark: "#303f9f",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff4081",
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        success: {
            light: '#82e573',
            main: '#28c748',
            dark: "#2fd355",
            contrastText: "#fff",
        },
        text: {
            primary: '#4D4D4D',
            secondary: '#707070',
        },
        contrast: {
            dark: '#fff',
            light: '#000',
            main: '#fff'
        },
        red: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
        green: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
        blue: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        },
        grey: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
            400: "#bdbdbd",
            500: "#9e9e9e",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
        }
    },
}

export const DefaultTypography: Pick<RNTheme, 'typography'> = {
    typography: {
        fontSize: 14,
        fontFamily: Font1.semibold,
        color: DefaultPallete.pallete.text.primary,
        fontWeight: "600",
        h1: {
            fontSize: 32,
            lineHeight: 36
        },
        h2: {
            fontSize: 28,
            lineHeight: 32
        },
        h3: {
            fontSize: 24,
            lineHeight: 28
        },
        h4: {
            fontSize: 20,
            lineHeight: 24
        },
        h5: {
            fontSize: 18,
            lineHeight: 22
        },
        h6: {
            fontSize: 16,
            lineHeight: 20
        },
        body1: {
            fontSize: 14,
            lineHeight: 18,
            fontFamily: Font1.regular,
            fontWeight: Regular
        },
        body2: {
            fontSize: 12,
            lineHeight: 16,
            fontFamily: Font1.medium,
            fontWeight: Medium
        },
        subtitle1: {
            fontSize: 14,
            lineHeight: 20,
        },
        subtitle2: {
            fontSize: 12,
            lineHeight: 18,
            fontFamily: Font1.bold,
            fontWeight: Bold
        },
        error: {
            fontSize: 14,
            lineHeight: 18,
            color: 'red'
        },
        button: {
            fontSize: 14,
            lineHeight: 14,
            fontFamily: Font1.bold,
            textTransform: 'uppercase',
            fontWeight: Bold
        },
        caption: {
            fontSize: 12,
            lineHeight: 16,
            textTransform: 'uppercase'
        },
        overline: {
            fontSize: 10,
            lineHeight: 14
        },
    },
}

export const DefaultTheme: RNTheme = {

    ...DefaultPallete,

    ...DefaultTypography,

    gutters: {
        typography: {
            low: 8,
            medium: 16,
            high: 24
        },
    }
}

export default DefaultTheme;