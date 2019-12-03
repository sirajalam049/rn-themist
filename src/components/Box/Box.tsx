import * as React from 'react'
import { StyleSheet, View, ViewStyle, ViewProps } from 'react-native';

export interface BoxProps extends ViewStyle {
    m?: number //margin
    mx?: number; my?: number
    ml?: number; mr?: number; mt?: number; mb?: number
    p?: number
    px?: number; py?: number
    pl?: number; pr?: number; pt?: number; pb?: number
    bgColor?: string

    bw?: number
    bc?: string; blc?: string; brc?: string
    br?: number

    style?: ViewStyle
    viewProps?: ViewProps

    //https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33602
    children?: React.ReactNode

}

const Box: React.FC<BoxProps> = (props) => {
    let { pb, bgColor, br, px, p, py, pl, pt, bw, m, mt, ml, mr, mb, my, mx, bc, style = {}, viewProps, children, ...viewStyle } = props;
    return (
        <View
            style={{
                paddingBottom: pb,
                paddingLeft: pl,
                paddingTop: pt,
                paddingHorizontal: px,
                paddingVertical: py,
                padding: p,

                borderRadius: br,
                borderColor: bc,

                backgroundColor: bgColor,

                margin: m,
                marginTop: mt,
                marginLeft: ml,
                marginRight: mr,
                marginBottom: mb,
                marginVertical: my,
                marginHorizontal: mx,

                borderWidth: bw,

                ...viewStyle,
                ...style
            }}
            {...(viewProps || {})}
        >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({

})

export default React.memo(Box);