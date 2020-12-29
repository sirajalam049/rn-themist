import * as React from 'react';
import { ViewProps } from 'react-native';
export interface ContainerProps extends ViewProps {
    flex?: boolean;
    topOnly?: boolean;
    bottomOnly?: boolean;
    children?: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<ContainerProps>;
export default _default;
