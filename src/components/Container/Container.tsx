import * as React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';
import { makeStyles } from 'styles';

export interface ContainerProps extends ViewProps {
    flex?: boolean;
    topOnly?: boolean;
    bottomOnly?: boolean;

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {

    const { flex = true, bottomOnly = false, topOnly = false, ...viewProps } = props;



    const styles = useStyle();

    if (topOnly) {
        return (
            <>
                <SafeAreaView {...viewProps} />
                {props.children}
            </>
        )
    }

    if (bottomOnly) {
        { props.children }
        <SafeAreaView {...viewProps} />
    }

    return (
        <SafeAreaView
            {...viewProps}
            style={StyleSheet.flatten([
                ...(flex ? [styles.flex] : []),
                viewProps.style
            ])}
        >
            {props.children}
        </SafeAreaView>
    )
}

const useStyle = makeStyles((theme) => {
    return (StyleSheet.create({
        flex: {
            flex: 1
        }
    }))
})

export default React.memo(Container);