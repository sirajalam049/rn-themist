import { RNTheme } from '../RNTheme';
export declare const createTheme: <T extends {
    palette?: {
        primary?: {
            main?: string | undefined;
            light?: string | undefined;
            dark?: string | undefined;
            contrastText?: string | undefined;
        } | undefined;
        secondary?: {
            main?: string | undefined;
            light?: string | undefined;
            dark?: string | undefined;
            contrastText?: string | undefined;
        } | undefined;
        text?: {
            primary?: string | undefined;
            secondary?: string | undefined;
        } | undefined;
        error?: {
            main?: string | undefined;
            light?: string | undefined;
            dark?: string | undefined;
            contrastText?: string | undefined;
        } | undefined;
        success?: {
            main?: string | undefined;
            light?: string | undefined;
            dark?: string | undefined;
            contrastText?: string | undefined;
        } | undefined;
        contrast?: {
            dark?: string | undefined;
            light?: string | undefined;
            main?: string | undefined;
        } | undefined;
        red?: {
            50?: string | undefined;
            100?: string | undefined;
            200?: string | undefined;
            300?: string | undefined;
            400?: string | undefined;
            500?: string | undefined;
            600?: string | undefined;
            700?: string | undefined;
            800?: string | undefined;
            900?: string | undefined;
        } | undefined;
        green?: {
            50?: string | undefined;
            100?: string | undefined;
            200?: string | undefined;
            300?: string | undefined;
            400?: string | undefined;
            500?: string | undefined;
            600?: string | undefined;
            700?: string | undefined;
            800?: string | undefined;
            900?: string | undefined;
        } | undefined;
        blue?: {
            50?: string | undefined;
            100?: string | undefined;
            200?: string | undefined;
            300?: string | undefined;
            400?: string | undefined;
            500?: string | undefined;
            600?: string | undefined;
            700?: string | undefined;
            800?: string | undefined;
            900?: string | undefined;
        } | undefined;
        grey?: {
            50?: string | undefined;
            100?: string | undefined;
            200?: string | undefined;
            300?: string | undefined;
            400?: string | undefined;
            500?: string | undefined;
            600?: string | undefined;
            700?: string | undefined;
            800?: string | undefined;
            900?: string | undefined;
        } | undefined;
    } | undefined;
    typography?: {
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
        color?: string | undefined;
        error?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        button?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        overline?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        caption?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h1?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h2?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h3?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h4?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h5?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        h6?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        subtitle1?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        subtitle2?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        body1?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
        body2?: {
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined;
            textDecorationLine?: "none" | "line-through" | "underline" | "underline line-through" | undefined;
            textDecorationStyle?: "dashed" | "dotted" | "double" | "solid" | undefined;
            textDecorationColor?: string | undefined;
            textShadowColor?: string | undefined;
            textShadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "lowercase" | "uppercase" | undefined;
            testID?: string | undefined;
            fontVariant?: ("lining-nums" | "oldstyle-nums" | "proportional-nums" | "small-caps" | "tabular-nums" | undefined)[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "hidden" | "visible" | undefined;
            backgroundColor?: string | undefined;
            borderBottomColor?: string | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: string | undefined;
            borderEndColor?: string | undefined;
            borderLeftColor?: string | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: string | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: string | undefined;
            borderStyle?: "dashed" | "dotted" | "solid" | undefined;
            borderTopColor?: string | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "space-around" | "space-between" | "stretch" | "center" | "flex-end" | "flex-start" | undefined;
            alignItems?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | undefined;
            alignSelf?: "stretch" | "center" | "flex-end" | "flex-start" | "baseline" | "auto" | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex?: number | undefined;
            flexBasis?: string | number | undefined;
            flexDirection?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "hidden" | "visible" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: string | undefined;
            shadowOffset?: {
                width?: number | undefined;
                height?: number | undefined;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: ({
                perspective?: number | undefined;
            } | {
                rotate?: string | undefined;
            } | {
                rotateX?: string | undefined;
            } | {
                rotateY?: string | undefined;
            } | {
                rotateZ?: string | undefined;
            } | {
                scale?: number | undefined;
            } | {
                scaleX?: number | undefined;
            } | {
                scaleY?: number | undefined;
            } | {
                translateX?: number | undefined;
            } | {
                translateY?: number | undefined;
            } | {
                skewX?: string | undefined;
            } | {
                skewY?: string | undefined;
            } | undefined)[] | undefined;
            transformMatrix?: (number | undefined)[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "center" | "auto" | "bottom" | "top" | undefined;
            includeFontPadding?: boolean | undefined;
        } | undefined;
    } | undefined;
    gutters?: {
        typography?: {
            low?: number | undefined;
            medium?: number | undefined;
            high?: number | undefined;
        } | undefined;
    } | undefined;
}>(theme: T) => RNTheme;
export default createTheme;
