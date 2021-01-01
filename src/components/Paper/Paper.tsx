import Box, { BoxProps } from "../Box";
import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { makeStyles } from '../../styles';

export interface PaperProps extends Omit<BoxProps, 'elevation' | 'style'> {
    elevation?: ViewStyle['elevation'],
    style?: ViewStyle,
}

const Paper: React.FC<PaperProps> = (props) => {

    const style = useStyle();

    const { elevation = 1, style: styles, ...boxProps } = props;
    const elevationKey = `elevation${elevation}` as keyof typeof style;
    return (
        <Box
            style={StyleSheet.flatten([
                style.root,
                style[elevationKey],
                { ...(styles || {}) },
            ])}
            {...boxProps}
        >
            {props.children}
        </Box>
    );
}

const useStyle = makeStyles((theme) => {
    return (StyleSheet.create({
        root: {
            backgroundColor: '#fff',
            borderRadius: 2,
            shadowOpacity: 0.29,
            shadowColor: '#000',
            shadowRadius: 2,
        },
        elevation0: {
            elevation: 0,
            shadowOpacity: 0,
        },
        elevation1: {
            elevation: 1,
            shadowOffset: { width: 0, height: 1, },
            marginBottom: 1
        },
        elevation2: {
            elevation: 2,
            shadowOffset: { width: 0, height: 2 },
            shadowColor: '#000',
            shadowRadius: 4,
        },
        elevation3: {
            elevation: 3,
            shadowOffset: { width: 0, height: 3 },
            shadowColor: '#000',
            shadowRadius: 6,
        }
    }));
})

export default React.memo(Paper);