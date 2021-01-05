import * as React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';
import { makeStyles } from '../../styles';

export interface ContainerProps extends ViewProps {
    flex?: boolean;
    topOnly?: boolean;
    bottomOnly?: boolean;

    topBackgroundColor?: string;
    bottomBackgroundColor?: string;
    backgroundColor?: string;

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {

    const { flex = true, bottomOnly = false, topOnly = false, style, topBackgroundColor = '#fff', bottomBackgroundColor = '#fff', backgroundColor = '#fff', children, ...viewProps } = props;



    const styles = useStyle();

    if (topOnly) {
        return (
            <>
                <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                    {backgroundColor: topBackgroundColor || backgroundColor},
                style
            ])} />
                {children}
            </>
        )
    }

    if (bottomOnly) {
        return (
            <>
                { children}
                <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                    {backgroundColor: bottomBackgroundColor || backgroundColor},
                style
            ])} />
            </>
        )
    }

    if (topBackgroundColor || bottomBackgroundColor) {
        return <>
            <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                {backgroundColor: topBackgroundColor || backgroundColor},
                style
            ])} />
                {children}
            <SafeAreaView {...viewProps} style={StyleSheet.flatten([
                {backgroundColor: bottomBackgroundColor || backgroundColor},
                style
            ])} />
        </>
    }

    return (
        <SafeAreaView
            {...viewProps}
            style={StyleSheet.flatten([
                ...(flex ? [styles.flex] : []),
                {backgroundColor},
                style
            ])}
        >
            {children}
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