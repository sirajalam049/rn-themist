import { RNTheme } from '..'
import _ from 'lodash';
import { DefaultTheme } from '../RNTheme/DefaultTheme';

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

const createTheme = <T extends DeepPartial<RNTheme>>(theme: T): T => _.merge(DefaultTheme, theme);

export default createTheme