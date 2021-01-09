import * as React from 'react';
import ThemeContext from '../ThemeContext';
import { RNTheme } from '../RNTheme';
import ActionSheet from '../../components/ActionSheet';
import OverlayLoader from '../../components/OverlayLoader';

export interface ThemeProviderProps {
    theme: RNTheme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    return (
        <ThemeContext.Provider value={props.theme} >
            {props.children}
            <ActionSheet
                ref={(r) => {
                    ActionSheet.actionSheetInstance = r as ActionSheet;
                }}
            />
            <OverlayLoader ref={(r) => {
                    OverlayLoader.overlayLoaderInstance = r as OverlayLoader;
                }} />
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;