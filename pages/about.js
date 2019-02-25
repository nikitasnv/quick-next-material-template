import React from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import fetch from "isomorphic-unfetch";
import Head from 'next/head';

const About = ({data}) => (
    <React.Fragment>
        <Head>
            <title>About</title>
        </Head>
        {data === undefined ? (
            <div style={{textAlign: 'center'}}>
                <CircularProgress/>
            </div>
        ) : (
            <Fade in>
                <Paper style={{padding: '15px'}}>
                    <Typography style={{textAlign: 'center', marginBottom: '15px'}} variant="h3">
                        {data.title}
                    </Typography>
                    <Typography variant="h5">
                        {data.body}
                    </Typography>
                </Paper>
            </Fade>
        )}
    </React.Fragment>
);

About.getInitialProps = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await res.json();
    return {data}
}

export default About;
