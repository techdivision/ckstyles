import {Plugin} from 'ckeditor5-exports';
import BlockStyleCommand from "../commands/BlockStyleCommand";
import InlineStylesCommand from "../commands/InlineStylesCommand";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export default (preset) =>
    class StyleEditing extends Plugin {

        init() {
            this.schema = this.editor.model.schema;
            this.attributeKey = preset.helper.attributeKey;
            this.presetOptions = Object.keys(preset.options);

            this.extendSchema();
            this.buildConfig();
            this.addToEditorCommands();
        }

        /**
         * Extend the editor schema and mark the "attributeKey" model attribute as formatting.
         * https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
         */
        extendSchema() {
            // add attribute key to schema
            this.schema.extend(
                preset.helper.schema,
                {allowAttributes: this.attributeKey}
            );


            this.schema.setAttributeProperties(
                this.attributeKey,
                {isFormatting: true}
            );

        }

        /**
         * build the configuration for the editor command
         */
        buildConfig () {
            // Model configuration
            this.config = {
                model: {
                    key: this.attributeKey,
                    values: this.presetOptions,
                },
                view: {}
            };

            // View configuration
            this.presetOptions.forEach(presetOptionKey  => {
                let presetOption = preset.options[presetOptionKey];
                this.config.view[presetOptionKey] = this.getViewConfig(presetOption)
            });

        }

        /**
         * add built config to ckeditor commands
         */
        addToEditorCommands() {
            if (preset.helper.isBlockType) {
                this.editor.conversion.attributeToAttribute(this.config);
                this.editor.commands.add(
                    preset.helper.command,
                    new BlockStyleCommand(this.editor, this.attributeKey)
                );
            } else {
                this.editor.conversion.attributeToElement(this.config);
                this.editor.commands.add(
                    preset.helper.command,
                    new InlineStylesCommand(this.editor, this.attributeKey)
                );
            }
        }


        /**
         * returns the object of the view for an option
         * @param presetOption
         * @returns {{value, key: (*|string|null)}|{name: string, attributes: {}}}
         */
        getViewConfig(presetOption) {
            if (preset.helper.isBlockType) {
                return {
                    key: presetOption.attribute,
                    value: presetOption.value
                }
            }
            return {
                name: 'span',
                attributes: {[presetOption.attribute]: presetOption.value}
            }
        }

    };
