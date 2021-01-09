import * as React from 'react';
interface OverlayLoaderState {
    isVisible: boolean;
}
export interface OverlayLoaderProps {
}
declare class OverlayLoader extends React.Component<OverlayLoaderProps, OverlayLoaderState> {
    constructor(props: OverlayLoaderProps);
    /**
     * It is initialized in the root file where it is mounted
     */
    static overlayLoaderInstance: OverlayLoader;
    static withLoader: <T extends unknown>(cb: () => Promise<T>) => Promise<T>;
    showLoader: () => void;
    hideLoader: () => void;
    render(): JSX.Element | null;
}
export default OverlayLoader;
