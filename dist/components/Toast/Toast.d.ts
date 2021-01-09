/// <reference types="node" />
import * as React from 'react';
import { Animated } from 'react-native';
interface ToastState {
    isVisible?: boolean;
    toastConfig?: {
        successToastMessage?: string;
        successToastTitle?: string;
        errorToastMessage?: string;
        showApiErrorMsg?: boolean;
        showSuccessMessage?: boolean;
        fallbackError?: string;
    };
    variant: 'error' | 'default';
}
export interface ToastProps {
}
declare class Toast extends React.Component<ToastProps, ToastState> {
    constructor(props: ToastProps);
    containerTranslateAnimation: Animated.Value;
    containerOpacityAnimation: Animated.Value;
    /**
     * It is initialized in the root file where it is mounted
     */
    static toastInstance: Toast;
    static withToast: <T extends unknown>(cb: () => Promise<T>, config?: ToastState['toastConfig']) => Promise<T | undefined>;
    timeout: NodeJS.Timeout | undefined;
    showSuccessToast: (config: ToastState['toastConfig']) => void;
    hideToast: () => void;
    showErrorToast: (config?: ToastState['toastConfig']) => void;
    render(): JSX.Element | null;
}
export default Toast;
