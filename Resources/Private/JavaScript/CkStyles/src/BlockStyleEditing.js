import {Plugin, Paragraph} from 'ckeditor5-exports';
import BlockStyleCommand from "./BlockStyleCommand";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (presetIdentifier, presetConfiguration) =>
    class BlockStyleEditing extends Plugin {
        init() {
            const schema = this.editor.model.schema;
            const modelAttributeKey = `blockStyles-${presetIdentifier}`;
            const optionIdentifiers = Object.keys(presetConfiguration.options);

            schema.extend(
                '$block',
                { allowAttributes: modelAttributeKey}
            );

            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
            schema.setAttributeProperties(
                modelAttributeKey,
                { isFormatting: true }
            );

            // Model configuration
            const config = {
                model: {
                    key: modelAttributeKey,
                    values: optionIdentifiers,
                },
                view: {}
            };

            // View configuration
            optionIdentifiers.forEach(optionIdentifier => {
                const option = presetConfiguration.options[optionIdentifier];
                // split the cssClass configuration to allow for multiple classes
                const classes = option.cssClass.split(' ');

                config.view[optionIdentifier] = {
                    key: 'class',
                    value: classes
                }
            });

            // Convert the model to view correctly
            this.editor.conversion.attributeToAttribute(config);

            this.editor.commands.add(`blockStyles:${presetIdentifier}`, new BlockStyleCommand(this.editor, modelAttributeKey));
        }
    }
