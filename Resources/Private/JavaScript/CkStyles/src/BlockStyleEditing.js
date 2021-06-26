import {Plugin, Paragraph} from 'ckeditor5-exports';
import BlockStyleCommand from "./BlockStyleCommand";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (presetIdentifier, presetConfiguration) =>
    class BlockStyleEditing extends Plugin {
        init() {
            this.editor.model.schema.extend(
                '$block',
                { allowAttributes: `blockStyles-${presetIdentifier}`}
            );

            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
            this.editor.model.schema.setAttributeProperties(
                `blockStyles-${presetIdentifier}`,
                { isFormatting: true }
            );

            // Model configuration
            const config = {
                model: {
                    key: `blockStyles-${presetIdentifier}`,
                    values: Object.keys(presetConfiguration.options),
                },
                view: {}
            };

            // View configuration
            Object.keys(presetConfiguration.options).forEach(optionIdentifier => {

                const classes = presetConfiguration.options[optionIdentifier].cssClass.split(' ');

                config.view[optionIdentifier] = {
                    key: 'class',
                    value: classes
                }
            });

            // Convert the model to view correctly
            this.editor.conversion.attributeToAttribute(config);

            this.editor.commands.add(`blockStyles:${presetIdentifier}`, new BlockStyleCommand(this.editor, `blockStyles-${presetIdentifier}`));
        }
    }
