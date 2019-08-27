import PropTypes from 'prop-types';

export default PropTypes.shape({
    label: PropTypes.string.isRequired,

    // keys are the option values
    options: PropTypes.objectOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        cssClass: PropTypes.string.isRequired
    }))
});