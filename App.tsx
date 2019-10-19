import React, { Fragment } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createTheme, ThemeProvider } from './src/lib';
import { Typography } from './src/core';
// import Typography from './src/core/Typography';

const Theme = createTheme({
    pallete: {
        primary: {
            main: 'red'
        },
        secondary: {
            main: 'green'
        }
    }
});

const App = () => {
    return (
        <Fragment>
            <SafeAreaView>
                <ThemeProvider theme={Theme} >

                    <Typography variant={'h1'} >Colors</Typography>
                    <Typography color={'primary'} >Color Primary</Typography>
                    <Typography color={'secondary'} >Color Secondary</Typography>
                    <Typography color={'textPrimary'} >Color TextPrimary</Typography>
                    <Typography color={'textSecondary'} >Color TextSecondary</Typography>
                    <Typography color={'error'} >Color Error</Typography>
                    <Typography color={'success'} >Color Success</Typography>

                    <Typography variant={'h1'} >Gutter Bottom</Typography>
                    <Typography gutterButtom={'low'} >Gutter Low</Typography>
                    <Typography gutterButtom={'medium'} >Gutter Meduim</Typography>
                    <Typography gutterButtom={'high'} >Gutter High</Typography>

                    <Typography variant={'h1'} >Variants</Typography>
                    <Typography variant={'h1'} >H1</Typography>
                    <Typography variant={'h2'} >H2</Typography>
                    <Typography variant={'h3'} >H3</Typography>
                    <Typography variant={'h4'} >H4</Typography>
                    <Typography variant={'h5'} >H5</Typography>
                    <Typography variant={'h6'} >H6</Typography>
                    <Typography variant={'body1'} >Body 1</Typography>
                    <Typography variant={'body2'} >Body 2</Typography>
                    <Typography variant={'subtitle1'} >Subtitle 1</Typography>
                    <Typography variant={'subtitle1'} >Subtitle 2</Typography>
                    <Typography variant={'button'} >Button</Typography>
                    <Typography variant={'error'} >Error</Typography>
                    <Typography variant={'caption'} >Caption</Typography>
                    <Typography variant={'overline'} >Overline</Typography>
                </ThemeProvider>
            </SafeAreaView>
        </Fragment>
    );
};

export default App;
