import { StyleSheet } from 'react-native';
import { RNTheme } from '../RNTheme';
export declare type StylesHook<T> = () => T;
export declare type StyleFunction<T> = (theme: RNTheme) => T;
export default function makeStyles<T extends StyleSheet.NamedStyles<T> = StyleSheet.NamedStyles<any>>(styleFunction: StyleFunction<T>): StylesHook<T>;
