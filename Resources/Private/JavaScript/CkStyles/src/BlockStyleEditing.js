import {Plugin, Paragraph} from 'ckeditor5-exports';
import BlockStyleCommand from "./BlockStyleCommand";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (presetIdentifier, presetConfiguration) =>
    class BlockStyleEditing extends Plugin {

        init() {
            this.editor.model.schema.extend('$block', {allowAttributes: presetIdentifier});

            const editor = this.editor;

            // Model configuration
            var model = {
                key: presetIdentifier,
                values: []
            };

            // View configuration
            var view = {};
            Object.keys(presetConfiguration.options).forEach(optionIdentifier => {
                model.values.push(optionIdentifier);
                view[optionIdentifier] = {
                    key: 'class',
                    value: presetConfiguration.options[optionIdentifier].cssClass
                };
            });

            editor.model.schema.register(presetIdentifier, {
                inheritAllFrom: '$block',
                isBlock: true,
                allowIn: '$root'
            });

            // Convert the model to view correctly
            editor.conversion.attributeToAttribute({
                model: model,
                view: view
            });

            editor.commands.add(`blockStyles:${presetIdentifier}`, new BlockStyleCommand(editor));
        }
    }