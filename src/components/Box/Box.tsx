import React, { FC, memo } from 'react'
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
}

const Box: FC<BoxProps> = memo((props) => {
    let { pb, bgColor, br, px, p, py, pl, pt, bw, m, mt, ml, mr, mb, my, mx, bc, style = {}, viewProps, ...viewStyle } = props;
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
            {props.children}
        </View>
    )
})

const styles = StyleSheet.create({

})

export default Box