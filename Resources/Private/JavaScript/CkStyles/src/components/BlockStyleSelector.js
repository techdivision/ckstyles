import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SelectBox} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';
import {connect} from 'react-redux';
import {$transform} from 'plow-js';
import PresetType from '../PresetType';

import {selectors} from '@neos-project/neos-ui-redux-store';
import * as CkEditorApi from '@neos-project/neos-ui-ckeditor5-bindings';

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n')
}))

@connect($transform({
    formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor
}))
export default class BlockStyleSelector extends PureComponent {
    static propTypes = {
        // from outside props
        presetIdentifier: PropTypes.string.isRequired,
        presetConfiguration: PresetType.isRequired,

        // from @connect
        formattingUnderCursor: PropTypes.object,

        // from @neos
        i18nRegistry: PropTypes.object.isRequired
    };

    constructor(...args) {
        super(...args);

        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    render() {
        const {i18nRegistry} = this.props;

        const optionsForSelect = Object.entries(this.props.presetConfiguration.options)
            .map(([optionIdentifier, optionConfiguration]) => ({
                value: optionIdentifier,
                label: i18nRegistry.translate(optionConfiguration.label)
            }));

        if (optionsForSelect.length === 0) {
            return null;
        }

        const currentValue = this.props.formattingUnderCursor[`blockStyles:${this.props.presetIdentifier}`];

        return (
            <SelectBox
                options={optionsForSelect}
                value={currentValue}
                allowEmpty={true}
                placeholder={i18nRegistry.translate(this.props.presetConfiguration.label)}
                onValueChange={this.handleOnSelect}
            />
        );
    }

    handleOnSelect(optionIdentifier) {
        CkEditorApi.executeCommand(
            `blockStyles:${this.props.presetIdentifier}`,
            {value: optionIdentifier}
        );
    }
}
