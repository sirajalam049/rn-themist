import React from 'react';
import ThemeContext from "../ThemeContext";
import { StyleSheet } from 'react-native';
import { RNTheme } from '../RNTheme';

export type StylesHook<T> = () => StyleSheet.NamedStyles<T>;

export type StyleFunction<T> = (theme: RNTheme) => StyleSheet.NamedStyles<T>;

export function makeStyles<T>(styleFunction: StyleFunction<T>): StylesHook<T> {
    return (() => {
        const theme = React.useContext<RNTheme>(ThemeContext);
        return styleFunction(theme);
    })
}