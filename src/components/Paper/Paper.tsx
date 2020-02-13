import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Box, { BoxProps } from "../Box";
import makeStyles from '../../styles/makeStyles';
import { useTheme } from '../../styles/ThemeContext'
import { ElevationVariant } from "../../styles";

export interface PaperProps extends Omit<BoxProps, 'elevation' | 'style'> {
    elevation?: ElevationVariant,
    style?: ViewStyle,
}

const Paper: React.FC<PaperProps> = (props) => {

    const style = useStyle();
    const theme = useTheme();

    const { elevation = 1, style: styles, ...boxProps } = props;
    return (
        <Box
            style={StyleSheet.flatten([
                style.root,
                theme.elevations[elevation],
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
        }
    }));
})

export default Paper;