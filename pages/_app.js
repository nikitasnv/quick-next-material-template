import React from 'react'
import App, {Container} from 'next/app'
import JssProvider from 'react-jss/lib/JssProvider'
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout'
import getPageContext from '../lib/getPageContext'

export default class MyApp extends App {
    constructor() {
        super();
        this.pageContext = getPageContext();
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps, router} = this.props
        const RenderLayout = router.route === '/login' ? 'div' : Layout;
        return (
            <JssProvider
                registry={this.pageContext.sheetsRegistry}
                generateClassName={this.pageContext.generateClassName}
            >
                <MuiThemeProvider
                    theme={this.pageContext.theme}
                    sheetsManager={this.pageContext.sheetsManager}
                >
                    <CssBaseline/>
                    <style global jsx>{`
     html, body, #__next {
    height: 100%;
}
    `}</style>
                    <Container>
                        <RenderLayout style={{height: 'inherit'}}>
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </RenderLayout>
                    </Container>
                </MuiThemeProvider>
            </JssProvider>
        )
    }
}