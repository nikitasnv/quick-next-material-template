import CircularProgress from '@material-ui/core/CircularProgress';
import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Card from '../components/Card';
import Details from '../components/Details';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

export default class Home extends Component {
    static async getInitialProps() {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
        const data = await res.json();
        return {data};
    };

    state = {
        selectedCard: {},
        detailState: false,
    };

    openDetails = (data) => {
        this.setState({detailState: true, selectedCard: data});
    };

    closeDetails = () => {
        this.setState({detailState: false});
    };

    render() {
        const {data} = this.props;
        return (
            <React.Fragment>
                <Head><title>Home</title></Head>
                {data === undefined ? (
                    <div style={{textAlign: 'center'}}>
                        <CircularProgress/>
                    </div>
                ) : (
                    <React.Fragment>
                        <Fade in>
                            <Grid style={{justifyContent: 'center'}} container spacing={24}>
                                {data.map(card => (
                                    <Grid key={card.id} item>
                                        <Card data={card} openDetails={this.openDetails}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </Fade>
                        <Details
                            closeDetails={this.closeDetails}
                            detailState={this.state.detailState}
                            data={this.state.selectedCard}
                        />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

