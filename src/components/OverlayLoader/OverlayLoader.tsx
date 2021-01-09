import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Box from '../Box';

interface OverlayLoaderState {
	isVisible: boolean;
}
export interface OverlayLoaderProps {}

class OverlayLoader extends React.Component<OverlayLoaderProps, OverlayLoaderState> {
	constructor(props: OverlayLoaderProps) {
		super(props);
		this.state = {
			isVisible: false,
		};
	}

	/**
	 * It is initialized in the root file where it is mounted
	 */
	static overlayLoaderInstance: OverlayLoader;

	static withLoader = async <T extends any>(cb: () => Promise<T>) => {
		try {
			OverlayLoader.overlayLoaderInstance.showLoader();
			const res = await cb();
			return res;
		} catch (error) {
			throw new Error(error);
		} finally {
			OverlayLoader.overlayLoaderInstance.hideLoader();
		}
	};

	showLoader = () => this.setState({ isVisible: true });

	hideLoader = () => this.setState({ isVisible: false });

	render() {
		return this.state.isVisible ? (
			<Box style={STYLES.root}>
				<ActivityIndicator />
			</Box>
		) : null;
	}
}

const STYLES = StyleSheet.create({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: `rgba(0, 0, 0, .7)`,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default OverlayLoader;
