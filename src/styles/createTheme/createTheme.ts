import _ from 'lodash';
import { DefaultTheme, RNTheme } from '../../styles';
import { DeepPartial } from '../../typings';

const createTheme = <T extends DeepPartial<RNTheme>>(theme: T): T => _.merge(DefaultTheme, theme);

export default createTheme