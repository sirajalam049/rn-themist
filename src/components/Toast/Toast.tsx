import * as React from 'react';
import { Alert, Animated, Dimensions, StyleSheet } from 'react-native';
import Button from '../Button';
import Typography from '../Typography';
import Box from '../Box';

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
export interface ToastProps {}

class Toast extends React.Component<ToastProps, ToastState> {
	constructor(props: ToastProps) {
		super(props);
		this.state = {
			isVisible: false,
			toastConfig: {
				successToastMessage: '',
				successToastTitle: 'Success',
				errorToastMessage: '',
				fallbackError: 'Error',
				showApiErrorMsg: true,
				showSuccessMessage: false,
			},
			variant: 'default',
		};
	}

	containerTranslateAnimation = new Animated.Value(64);
	containerOpacityAnimation = new Animated.Value(0);

	/**
	 * It is initialized in the root file where it is mounted
	 */
	static toastInstance: Toast;

	static withToast = async <T extends any>(cb: () => Promise<T>, config?: ToastState['toastConfig']) => {
		try {
			const res = await cb();
			if (config?.showSuccessMessage === false) return res;
			const msg = config?.successToastMessage || 'Success';
			Toast.toastInstance.showSuccessToast({ ...config, successToastMessage: msg });
			return res;
		} catch (error) {
			const msg =
				config?.showApiErrorMsg === false
					? config.errorToastMessage || 'Error'
					: error?.response?.data?.error?.message || error.message;
			Toast.toastInstance.showErrorToast({ ...config, errorToastMessage: msg });
		}
	};

	timeout: NodeJS.Timeout | undefined;
	showSuccessToast = (config: ToastState['toastConfig']) => {
		this.setState({ isVisible: true, toastConfig: config, variant: 'default' });
		Animated.parallel([
			Animated.timing(this.containerOpacityAnimation, {
				toValue: 1,
				duration: 200,
				useNativeDriver: true,
			}),
			Animated.timing(this.containerTranslateAnimation, {
				toValue: 0,
				duration: 200,
				useNativeDriver: true,
			}),
		]).start();
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(() => {
			this.hideToast();
		}, 3000);
	};

	hideToast = () => {
		Animated.parallel([
			Animated.timing(this.containerOpacityAnimation, {
				toValue: 0,
				duration: 200,
				useNativeDriver: true,
			}),
			Animated.timing(this.containerTranslateAnimation, {
				toValue: 64,
				duration: 200,
				useNativeDriver: true,
			}),
		]).start(() => {
			this.setState({ isVisible: false });
		});
	};

	showErrorToast = (config?: ToastState['toastConfig']) => {
		Alert.alert('Error', config?.errorToastMessage, [], { cancelable: true });
	};

	render() {
		const { toastConfig, isVisible } = this.state;
		return isVisible ? (
			<Animated.View
				style={StyleSheet.flatten([
					{
						opacity: this.containerOpacityAnimation,
						transform: [{ translateY: this.containerTranslateAnimation }],
					},
					styles.root,
				])}
			>
				<Box flex={1} mr={50}>
					<Typography variant={'body2'} color={'contrast'}>
						{toastConfig?.successToastMessage || ''}
					</Typography>
				</Box>
				<Button onPress={this.hideToast}>
					<Typography color={'secondary'}>CLOSE</Typography>
				</Button>
			</Animated.View>
		) : null;
	}
}

const styles = StyleSheet.create({
	root: {
		minHeight: 48,
		paddingVertical: 16,
		width: Dimensions.get('window').width * 0.9,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		position: 'absolute',
		bottom: Dimensions.get('window').width * 0.05,
		backgroundColor: 'rgba(0, 0, 0, 0.9)',
		zIndex: 9999,
		alignSelf: 'center',
		borderRadius: 6,
	},
	variantError: {},
});

export default Toast;
