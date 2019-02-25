import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	errorSnack: {
		backgroundColor: theme.palette.error.dark,
		minWidth: 'auto',
	},
	errorMessage: {
		display: 'flex',
		alignItems: 'center',
	},
	errorIcon: {
		marginLeft: 5,
	},
});

const Error = ({ classes, errorState, setError }) => (
	<Snackbar
		ContentProps={{
			classes: {
				root: classes.errorSnack,
			},
		}}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		autoHideDuration={6000}
		message={(
			<span className={classes.errorMessage}>
				{errorState.message}<ErrorIcon className={classes.errorIcon} />
			</span>
		)}
		open={errorState.show}
		onClose={() => setError(false)}
	/>
);

Error.propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	errorState: PropTypes.instanceOf(Object).isRequired,
	setError: PropTypes.func.isRequired,
};

export default withStyles(styles)(Error);
