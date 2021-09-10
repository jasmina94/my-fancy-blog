import styles from '../styles/Layout.module.css';
import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { createTheme, ThemeProvider, AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core';

const Layout = ({ title, description, children }) => {

    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0'
            }
        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000'
            },
            secondary: {
                main: '#208080'
            }
        }
    });


    return (
        <>
            <Head>
                <title>{title ? `${title} - join the club` : 'MyFancy blog'}</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position='static'>
                    <Toolbar>
                        <NextLink href='/' passHref>
                            <Link>
                                <Typography className={styles.brand}>MyFancy blog</Typography>
                            </Link>
                        </NextLink>
                    </Toolbar>
                </AppBar>
                <Container>
                    {children}
                </Container>
                <footer className={styles.footer}>
                    <Typography>All rights reserved</Typography>
                </footer>
            </ThemeProvider>
        </>
    )
}

export default Layout;