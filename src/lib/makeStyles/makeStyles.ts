import React from 'react';
import ThemeContext from "../ThemeContext";
import { StyleSheet } from 'react-native';
import { RNTheme } from '..';

// // typeof hook return by the makeStyles function
// export type StylesHook<T extends StyleSheet.NamedStyles<T>> = () => StyleSheet.NamedStyles<T>

// // typeof function that is passed inside the makeStyles
// export type StyleFunction<Theme, T> = (theme: Theme) => StyleSheet.NamedStyles<any>;

// export function makeStyles<T, Theme = RNTheme>(styleFun: StyleFunction<Theme, T>): StylesHook<T> {
//     return (() => {
//         const theme = React.useContext<Theme>(ThemeContext);
//         return styleFun(theme);
//     })
// }

export type StylesHook<T> = () => StyleSheet.NamedStyles<T>;

export type StyleFunction<T> = (theme: RNTheme) => StyleSheet.NamedStyles<T>;

export function makeStyles<P = {}, T extends StyleSheet.NamedStyles<T> = StyleSheet.NamedStyles<any>>(styleFunction: StyleFunction<T>): StylesHook<T> {
    return (() => {
        const theme = React.useContext<RNTheme>(ThemeContext);
        return styleFunction(theme);
    })
}