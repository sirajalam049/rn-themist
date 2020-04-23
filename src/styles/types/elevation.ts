import { ViewProps } from "react-native"

export type ElevationVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type ElevationOptions = Record<ElevationVariant, ViewProps['style']>