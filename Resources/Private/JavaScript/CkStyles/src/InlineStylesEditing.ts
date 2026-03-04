import { Plugin, PluginConstructor } from "@ckeditor/ckeditor5-core";
import {
    addListToDropdown,
    ButtonExecuteEvent,
    createDropdown,
    ListDropdownItemDefinition,
    UIModel
} from "@ckeditor/ckeditor5-ui";
import { Collection } from "@ckeditor/ckeditor5-utils";

import InlineStylesCommand from "./InlineStylesCommand";
import {
    CK_STYLES_INLINE_STYLES_IDENTIFIER,
    type CkStylesPresetConfiguration,
    type CkStylesPresetIdentifier,
    INLINE_STYLING__ATTRIBUTE_PREFIX,
    INLINE_STYLING__COMMAND_PREFIX,
    TECHDIVISION_CKSTYLES__NAME_SPACE
} from "./configuration";
import { createAttributeKey, createCommandId, createDropdownId, translateLabel } from "./utils";

/**
 * FACTORY FUNCTION for the plugin
 * needs the current preset configuration as parameter.
 */
export function createInlineEditStylePlugin(
    presetIdentifier: CkStylesPresetIdentifier,
    presetConfiguration: CkStylesPresetConfiguration,
): PluginConstructor {
    return class InlineStylesEditing extends Plugin {
        public static get pluginName() {
            return `${TECHDIVISION_CKSTYLES__NAME_SPACE}:${CK_STYLES_INLINE_STYLES_IDENTIFIER}:${presetIdentifier}`;
        }

        public init() {
            const schema = this.editor.model.schema;
            const optionIdentifiers = Object.keys(presetConfiguration.options);
            const modelAttributeKey = createAttributeKey(INLINE_STYLING__ATTRIBUTE_PREFIX, presetIdentifier);

            schema.extend("$text", { allowAttributes: modelAttributeKey });

            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html
            schema.setAttributeProperties(modelAttributeKey, { isFormatting: true });

            // Register model-view conversion
            this.editor.conversion.attributeToElement({
                model: {
                    key: modelAttributeKey,
                    values: optionIdentifiers,
                },
                view: optionIdentifiers.reduce((viewConfig: Record<string, any>, optionIdentifier) => {
                    const options = presetConfiguration.options[optionIdentifier]!;

                    if ("attribute" in options) {
                        viewConfig[optionIdentifier] = {
                            name: "span",
                            attributes: {
                                [options.attribute]: options.attributeValue,
                            },
                        };
                    } else if ("cssClass" in options) {
                        viewConfig[optionIdentifier] = {
                            name: "span",
                            classes: options.cssClass,
                        };
                    } else {
                        console.error(
                            `Invalid configuration for preset ${presetIdentifier} and option ${optionIdentifier}: either "attribute" and "attributeValue" or "cssClass" must be set.`,
                        );
                    }

                    return viewConfig;
                }, {}),
            });

            // Register command
            const commandId = createCommandId(INLINE_STYLING__COMMAND_PREFIX, presetIdentifier);
            this.editor.commands.add(commandId, new InlineStylesCommand(this.editor, modelAttributeKey));

            // Register dropdown in the UI
            this.editor.ui.componentFactory.add(
                createDropdownId(INLINE_STYLING__COMMAND_PREFIX, presetIdentifier),
                (locale) => {
                    const dropdownView = createDropdown(locale);
                    const command = this.editor.commands.get(commandId) as InlineStylesCommand;

                    if (!command) {
                        console.error(`Command ${commandId} not found for dropdown ${commandId}_dropdown`);
                        return dropdownView;
                    }

                    dropdownView.buttonView.set({
                        label: translateLabel(presetConfiguration.label),
                        withText: presetConfiguration.showLabel ?? true,
                        tooltip: true,
                        icon: presetConfiguration.icon ?? null,
                    });

                    dropdownView.bind("isEnabled").to(command, "isEnabled", (isEnabled) => isEnabled);

                    const optionCollection = new Collection<ListDropdownItemDefinition>();

                    Object.keys(presetConfiguration.options).forEach((optionIdentifier) => {
                        const option = presetConfiguration.options[optionIdentifier]!;
                        const optionDefinition: ListDropdownItemDefinition = {
                            type: "button",
                            model: new UIModel({
                                commandValue: optionIdentifier,
                                label: translateLabel(option.label),
                                icon: option.icon ?? null,
                                withText: option.showLabel ?? true,
                                toggleable: true,
                            }),
                        };

                        optionDefinition.model.bind("isOn").to(command, "value", (value) => value === optionIdentifier);

                        optionCollection.add(optionDefinition);
                    });

                    addListToDropdown(dropdownView, optionCollection);

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
