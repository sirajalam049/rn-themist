import React from 'react';
import ThemeContext from "../ThemeContext";
import { StyleSheet } from 'react-native';
import { RNTheme } from '..';

// typeof hook return by the makeStyles function
export type StylesHook<T extends StyleSheet.NamedStyles<T>> = () => StyleSheet.NamedStyles<T>

// typeof function that is passed inside the makeStyles
export type StyleFunction<T> = (theme: RNTheme) => StyleSheet.NamedStyles<T>;

export function makeStyles<T>(styleFun: StyleFunction<T>): StylesHook<T> {
    return () => {
        const theme = React.useContext(ThemeContext);
        return styleFun(theme);
    }
}