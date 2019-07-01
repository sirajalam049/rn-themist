export interface RNTheme {
    Color: {
        primary: string
        secondary: string
        textPrimary: string
        textSecondary: string
        contrast: string
        primaryAccent: string
        secondaryAccent: string
    },

}

const DefaultTheme: RNTheme = {
    Color: {
        primary: '#344955',
        secondary: '#F9AA33',
        textPrimary: '#5A5A5A',
        textSecondary: '#5E6368',
        contrast: '#FFFFF',
        get primaryAccent() {
            return this.primary
        },
        get secondaryAccent() {
            return this.secondary
        }
    }
}

export default DefaultTheme;