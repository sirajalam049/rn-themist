import React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import ThemeContext from '../ThemeContext';
import { RNTheme } from '../RNTheme';

export type StyleRule<C extends string = string> = Record<C, React.CSSProperties>;

export type StyleRulesCallback<C extends string = string> = (theme: RNTheme) => StyleRule<C>;

const withStyles = function <T extends StyleRulesCallback>(stylesFun: T) {
    return (
        function <P>(Component: React.ComponentType<P>) {
            const ComponentWithStyles = React.forwardRef(function ComponentWithStyles(props: any, ref) {
                const styles: Record<string, React.CSSProperties> = stylesFun(React.useContext(ThemeContext))
                return <Component styles={styles} ref={ref} {...props} />
            })
            return hoistStatics(ComponentWithStyles, Component);
        }
    )
}

export interface WithStylesProps<T extends StyleRulesCallback> {
    styles: ReturnType<T>
}

export default withStyles;