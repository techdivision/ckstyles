import PropTypes from 'prop-types';

function attributeValueOrCssClass(props, propName, componentName) {
    if (props[propName] && typeof props[propName] !== 'string') {
        return new Error(`Prop '${propName}' must be a string.`);
    }
    if (!props.attributeValue && !props.cssClass) {
        return new Error(`Either prop 'attributeValue' or 'cssClass' must be supplied to ${componentName}.`);
    }
}

export default PropTypes.shape({
    label: PropTypes.string.isRequired,

    // keys are the option values
    options: PropTypes.objectOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        attribute: PropTypes.string,
        attributeValue: attributeValueOrCssClass,
        cssClass: attributeValueOrCssClass,
    })),
});