import {Plugin} from 'ckeditor5-exports';
import InlineStylesCommand from './InlineStylesCommand';

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (presetIdentifier, presetConfiguration) =>
    class InlineStylesEditing extends Plugin {
        init() {
            const schema = this.editor.model.schema;
            const optionIdentifiers = Object.keys(presetConfiguration.options);
            const modelAttributeKey = `inlineStyles-${presetIdentifier}`;

            schema.extend(
                '$text',
                {allowAttributes: modelAttributeKey}
            );

            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
            schema.setAttributeProperties(
                modelAttributeKey,
                {isFormatting: true}
            );

            // Model configuration
            const config = {
                model: {
                    key: modelAttributeKey,
                    values: optionIdentifiers
                },
                view: {}
            };

            // View configuration
            optionIdentifiers.forEach(optionIdentifier => {
                const options = presetConfiguration.options[optionIdentifier];
                const {attribute} = options;
                const classes = options.attributeValue || options.cssClass;

                config.view[optionIdentifier] = {
                    name: 'span',
                    attributes: {[attribute]: classes}
                }
            });

            // Convert the model to view correctly
            this.editor.conversion.attributeToElement(config);

            this.editor.commands.add(`inlineStyles:${presetIdentifier}`, new InlineStylesCommand(this.editor, modelAttributeKey));
        }
    };
