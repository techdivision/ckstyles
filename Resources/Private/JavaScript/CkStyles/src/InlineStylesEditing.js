import { Plugin } from 'ckeditor5-exports';
import InlineStylesCommand from './InlineStylesCommand';

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (presetIdentifier, presetConfiguration) =>
    class InlineStylesEditing extends Plugin {
        init() {
            this.editor.model.schema.extend(
                '$text', 
                { allowAttributes: `inlineStyles-${presetIdentifier}` }
            );

            // Model configuration
            const config = {
                model: {
                    key: `inlineStyles-${presetIdentifier}`,
                    values: Object.keys(presetConfiguration.options),
                },
                view: {}
            };

            // View configuration
            Object.keys(presetConfiguration.options).forEach(optionIdentifier => {
                config.view[optionIdentifier] = {
                    name: 'span',
                    classes: presetConfiguration.options[optionIdentifier].cssClass
                }
            });

            // Convert the model to view correctly
            this.editor.conversion.attributeToElement(config);

            this.editor.commands.add(`inlineStyles:${presetIdentifier}`, new InlineStylesCommand(this.editor, `inlineStyles-${presetIdentifier}`));
        }
    }
