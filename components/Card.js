import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class MediaCard extends React.Component {
	static propTypes = {
		data: PropTypes.instanceOf(Object).isRequired,
		openDetails: PropTypes.func.isRequired,
	};

	setDetails = () => {
		const { data } = this.props;
		this.props.openDetails(data);
	};

	render() {
		const { data } = this.props;
		return (
			<Card style={{ width: 245 }}>
				<CardActionArea onClick={this.setDetails}>
					<CardMedia
						style={{ height: 160 }}
						image={data.thumbnailUrl}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Card №{data.id}
						</Typography>
						<Typography component="p" noWrap>
							{data.title}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}

