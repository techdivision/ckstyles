import { Plugin, PluginConstructor } from "@ckeditor/ckeditor5-core";
import {
    addListToDropdown,
    ButtonExecuteEvent,
    createDropdown,
    ListDropdownItemDefinition,
    UIModel
} from "@ckeditor/ckeditor5-ui";
import { Collection } from "@ckeditor/ckeditor5-utils";

import BlockStyleCommand from "./BlockStyleCommand";
import {
    BLOCK_STYLING__ATTRIBUTE_PREFIX,
    BLOCK_STYLING__COMMAND_PREFIX,
    CK_STYLES_BLOCK_STYLES_IDENTIFIER,
    type CkStylesPresetConfiguration,
    type CkStylesPresetIdentifier,
    TECHDIVISION_CKSTYLES__NAME_SPACE
} from "./configuration";
import { createAttributeKey, createCommandId, createDropdownId } from "./utils";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export function createBlockStyleEditingPlugin(
    presetIdentifier: CkStylesPresetIdentifier,
    presetConfiguration: CkStylesPresetConfiguration,
): PluginConstructor {
    return class BlockStyleEditing extends Plugin {
        public static get pluginName() {
            return `${TECHDIVISION_CKSTYLES__NAME_SPACE}:${CK_STYLES_BLOCK_STYLES_IDENTIFIER}:${presetIdentifier}`;
        }

        init() {
            const schema = this.editor.model.schema;
            const optionIdentifiers = Object.keys(presetConfiguration.options);
            const modelAttributeKey = createAttributeKey(BLOCK_STYLING__ATTRIBUTE_PREFIX, presetIdentifier);

            schema.extend("$block", { allowAttributes: modelAttributeKey });

            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
            schema.setAttributeProperties(modelAttributeKey, {
                isFormatting: true,
            });

            // Register model-view conversion
            this.editor.conversion.attributeToAttribute({
                model: {
                    key: modelAttributeKey,
                    values: optionIdentifiers,
                },
                view: optionIdentifiers.reduce((viewConfig: Record<string, any>, optionIdentifier) => {
                    const options = presetConfiguration.options[optionIdentifier]!;

                    if ("attribute" in options) {
                        viewConfig[optionIdentifier] = {
                            key: "attribute",
                            value: options.attributeValue,
                        };
                    } else if ("cssClass" in options) {
                        viewConfig[optionIdentifier] = {
                            key: "class",
                            value: options.cssClass,
                        };
                    } else {
                        throw new Error(
                            `Invalid configuration for option ${optionIdentifier} in preset ${presetIdentifier}: either "attribute" and "attributeValue" or "cssClass" must be set.`,
                        );
                    }

                    return viewConfig;
                }, {}),
            });

            // Register command
            const commandId = createCommandId(BLOCK_STYLING__COMMAND_PREFIX, presetIdentifier);
            this.editor.commands.add(commandId, new BlockStyleCommand(this.editor, modelAttributeKey));

            // Register dropdown in the UI
            this.editor.ui.componentFactory.add(
                createDropdownId(BLOCK_STYLING__COMMAND_PREFIX, presetIdentifier),
                (locale) => {
                    const dropdownView = createDropdown(locale);
                    const command = this.editor.commands.get(commandId) as BlockStyleCommand;

                    if (!command) {
                        console.error(`Command ${commandId} not found for dropdown ${commandId}_dropdown`);
                        return dropdownView;
                    }

                    dropdownView.buttonView.set({
                        label: presetConfiguration.label,
                        withText: presetConfiguration.showLabel ?? true,
                        tooltip: true,
                        icon: presetConfiguration.icon ?? undefined,
                    });

                    dropdownView.bind("isEnabled").to(command, "isEnabled", (isEnabled) => isEnabled);

                    const itemCollection = new Collection<ListDropdownItemDefinition>();

                    Object.keys(presetConfiguration.options).forEach((optionIdentifier) => {
                        const option = presetConfiguration.options[optionIdentifier]!;
                        const itemDefinition: ListDropdownItemDefinition = {
                            type: "button",
                            model: new UIModel({
                                commandValue: optionIdentifier,
                                label: option.label,
                                icon: option.icon ?? undefined,
                                withText: option.showLabel ?? true,
                                toggleable: true,
                            }),
                        };

                        itemDefinition.model
                            .bind("isOn")
                            .to(command, "value", (value) => value.includes(optionIdentifier));

                        itemCollection.add(itemDefinition);
                    });

                    addListToDropdown(dropdownView, itemCollection);

                    // register execute event for dropdown
                    this.listenTo<ButtonExecuteEvent>(dropdownView, "execute", (evt) => {
                        // no type info on evt.source so we cast it to the expected type
                        const { commandValue } = evt.source as { commandValue: string };
                        this.editor.execute(commandId, { value: commandValue });
                        this.editor.editing.view.focus();
                    });

                    return dropdownView;
                },
            );
        }
    };
}
