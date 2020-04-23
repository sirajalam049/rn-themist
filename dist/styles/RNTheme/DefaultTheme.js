"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
};
const Light = "300";
const Regular = "400";
const Medium = "500";
const SemoBold = "600";
const Bold = "700";
exports.DefaultPallete = {
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
};
const getTypography = (fontSize, lineHeight, fontFamily, fontWeight) => ({
    fontSize,
    lineHeight,
    fontFamily,
    fontWeight
});
exports.DefaultTypography = {
    typography: {
        fontSize: 14,
        fontFamily: Font1.semibold,
        color: exports.DefaultPallete.pallete.text.primary,
        fontWeight: "600",
        h1: getTypography(32, 36),
        h2: getTypography(28, 32),
        h3: getTypography(24, 28),
        h4: getTypography(20, 24),
        h5: getTypography(18, 22),
        h6: getTypography(16, 20),
        body1: getTypography(14, 18, Font1.regular, Regular),
        body2: getTypography(12, 16, Font1.medium, Medium),
        subtitle1: getTypography(14, 20),
        subtitle2: getTypography(12, 18, Font1.bold, Bold),
        error: {
            ...getTypography(14, 18),
            color: 'red'
        },
        button: {
            ...getTypography(14, 14, Font1.bold, Bold),
            textTransform: 'uppercase',
        },
        caption: {
            ...getTypography(12, 16),
            textTransform: 'uppercase'
        },
        overline: getTypography(10, 14),
    },
};
const getElevation = (elevation) => ({
    elevation,
    shadowOffset: { width: 0, height: elevation },
    shadowColor: '#000',
    shadowRadius: elevation * 2,
});
exports.DefaultElevations = {
    elevations: {
        "0": getElevation(0),
        "1": getElevation(1),
        "2": getElevation(2),
        "3": getElevation(3),
        "4": getElevation(4),
        "5": getElevation(5),
        "6": getElevation(6),
        "7": getElevation(7),
        "8": getElevation(8),
    }
};
exports.DefaultTheme = {
    ...exports.DefaultPallete,
    ...exports.DefaultTypography,
    ...exports.DefaultElevations,
    gutters: {
        typography: {
            low: 8,
            medium: 16,
            high: 24
        },
    }
};
exports.default = exports.DefaultTheme;
