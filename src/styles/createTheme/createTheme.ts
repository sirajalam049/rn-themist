import _ from 'lodash';
import { DefaultTheme, RNTheme } from '../RNTheme';
import { DeepPartial } from '../../typings';

export const createTheme = <T extends DeepPartial<RNTheme>>(theme: T): RNTheme => _.merge(DefaultTheme, theme);

export default createTheme