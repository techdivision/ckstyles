import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SelectBox} from '@neos-project/react-ui-components';
import {connect} from 'react-redux';
import {$transform} from 'plow-js';

import {selectors} from '@neos-project/neos-ui-redux-store';
import * as CkEditorApi from '@neos-project/neos-ui-ckeditor5-bindings';

@connect($transform({
    formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor
}))
export default class StyleSelector extends PureComponent {
    static propTypes = {
        // from outside props
        preset: PropTypes.string.isRequired, // from @connect
        formattingUnderCursor: PropTypes.object
    };

    constructor(...args) {

        super(...args);

        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    /**
     * returns the SelectBox JSX Component for the CKEditor
     * @returns {JSX.Element|null}
     */
    render() {

        const optionsForSelect = Object.entries(this.props.preset.options)
            .map(([optionIdentifier, optionConfiguration]) => ({
                value: optionIdentifier, label: optionConfiguration.label
            }));

        if (optionsForSelect.length === 0) {
            return null;
        }

        const currentValue = this.props.formattingUnderCursor[this.props.preset.helper.command];

        return (<SelectBox
                options={optionsForSelect}
                value={currentValue}
                allowEmpty={true}
                placeholder={this.props.preset.label}
                onValueChange={this.handleOnSelect}
            />);
    }

    /**
     * execute the command on interaction
     * @param optionIdentifier
     */
    handleOnSelect(optionIdentifier) {
        CkEditorApi.executeCommand(this.props.preset.helper.command, {value: optionIdentifier});
    }
}
