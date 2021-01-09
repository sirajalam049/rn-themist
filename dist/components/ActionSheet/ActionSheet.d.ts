import * as React from 'react';
import { ActionSheetIOSOptions } from 'react-native';
interface ActionSheetState {
    isVisible: boolean;
    config: {
        title?: string;
        options?: string[];
        cancelButtonIndex?: number;
        message?: string;
        anchor?: number;
        tintColor?: string;
        onCancelPress?: (cancelIndex: number) => void;
    };
    callback?: (index: number) => void;
}
export interface ActionSheetProps {
}
declare class ActionSheet extends React.Component<ActionSheetProps, ActionSheetState> {
    constructor(props: ActionSheetProps);
    /**
     * It is initialized in the root file where it is mounted
     */
    static actionSheetInstance: ActionSheet;
    static show: (config: ActionSheetIOSOptions, cb?: ActionSheetState['callback']) => void;
    static hide: () => void;
    hideActionSheet: () => void;
    showActionSheet: (config: any, cb: any) => void;
    onItemPress: (index: number) => void;
    render(): JSX.Element;
}
export default ActionSheet;
