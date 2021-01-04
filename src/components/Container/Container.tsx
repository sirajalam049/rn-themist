import * as React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';
import { makeStyles } from '../../styles';

export interface ContainerProps extends ViewProps {
    flex?: boolean;
    topOnly?: boolean;
    bottomOnly?: boolean;

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {

    const { flex = true, bottomOnly = false, topOnly = false, style, ...viewProps } = props;



    const styles = useStyle();

    if (topOnly) {
        return (
            <>
                <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                    ...(flex ? [styles.flex] : []),
                    styles.background,
                style
            ])} />
                {props.children}
            </>
        )
    }

    if (bottomOnly) {
        return (
            <>
                { props.children}
                <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                    ...(flex ? [styles.flex] : []),
                    styles.background,
                style
            ])} />
            </>
        )
    }

    return (
        <SafeAreaView
            {...viewProps}
            style={StyleSheet.flatten([
                ...(flex ? [styles.flex] : []),
                styles.background,
                style
            ])}
        >
            {props.children}
        </SafeAreaView>
    )
}

const useStyle = makeStyles((theme) => {
    return (StyleSheet.create({
        background: {
            backgroundColor: theme.palette.background.main
        },
        flex: {
            flex: 1
        }
    }))
})

export default React.memo(Container);