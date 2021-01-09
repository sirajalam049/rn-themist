import Box from '../Box';
import * as React from 'react';
import { ActionSheetIOS, ActionSheetIOSOptions, Modal, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../Button';
import Typography from '../Typography';

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
export interface ActionSheetProps {}

class ActionSheet extends React.Component<ActionSheetProps, ActionSheetState> {
	constructor(props: ActionSheetProps) {
		super(props);
		this.state = {
			isVisible: false,
			config: {},
			callback: undefined
		};
	}

	/**
	 * It is initialized in the root file where it is mounted
	 */
	static actionSheetInstance: ActionSheet;

	static show = (config: ActionSheetIOSOptions, cb: ActionSheetState['callback'] = () => {}) => {
		ActionSheet.actionSheetInstance.showActionSheet(config, cb);
	};

	static hide = () => {
		ActionSheet.actionSheetInstance.hideActionSheet();
	};

	hideActionSheet = () => {
		this.setState({ isVisible: false });
		if (typeof this.state.config.cancelButtonIndex === 'number')
			this.state.callback?.(this.state.config.cancelButtonIndex);
	};

	showActionSheet = (config: any, cb: any) => {
		if (Platform.OS === 'ios') ActionSheetIOS.showActionSheetWithOptions(config, cb);
		else this.setState({ config, isVisible: true, callback: cb });
	};

	onItemPress = (index: number) => {
		const { callback } = this.state;
		if (callback) {
			callback(index);
		}
		this.setState({ isVisible: false });
	};

	render() {
		const { cancelButtonIndex, options = [] } = this.state.config;

		return (
			<Modal
				transparent
				visible={this.state.isVisible}
				animationType={'slide'}
				onRequestClose={this.hideActionSheet}
			>
				<TouchableOpacity style={STYLES.root} onPress={this.hideActionSheet} />
				<Box style={STYLES.container}>
					{options.map((o, i) => {
						return (
							<Button style={STYLES.button} key={i} onPress={(e) => this.onItemPress(i)}>
								<Typography color={i === cancelButtonIndex ? 'error' : undefined} style={STYLES.option}>
									{o}
								</Typography>
							</Button>
						);
					})}
				</Box>
			</Modal>
		);
	}
}

const STYLES = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#000',
		opacity: 0.7,
	},
	container: {
		backgroundColor: '#fff',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		paddingHorizontal: 30,
		opacity: 1,
	},
	option: {
		fontSize: 14,
	},
	button: {
		height: 56,
		alignItems: 'flex-start',
	},
});

export default ActionSheet;
