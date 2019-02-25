import React from 'react';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import Button from '@material-ui/core/Button/Button';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const dialogStyles = {
	paper: {
		width: 650,
	},
};
const StyledDialog = withStyles(dialogStyles)(Dialog);

const Details = ({ closeDetails, detailState, data }) => (
	<StyledDialog
		disableBackdropClick
		disableEscapeKeyDown
		maxWidth={false}
		aria-labelledby="confirmation-dialog-title"
		open={detailState}
	>
		<DialogTitle>Card №{data.id}</DialogTitle>
		<DialogContent>
			<img style={{ width: 600, height: 600 }} src={data.url} alt={data.id} />
			<Typography variant="h4">{data.title}</Typography>
		</DialogContent>
		<DialogActions>
			<Button onClick={closeDetails} color="primary">
				Close
			</Button>
		</DialogActions>
	</StyledDialog>
);

Details.propTypes = {
	closeDetails: PropTypes.func.isRequired,
	data: PropTypes.instanceOf(Object).isRequired,
	detailState: PropTypes.bool.isRequired,
};

export default Details;

