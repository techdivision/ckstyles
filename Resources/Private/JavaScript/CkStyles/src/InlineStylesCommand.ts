// Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted
import { Command, type Editor } from "@ckeditor/ckeditor5-core";

/**
 * Set a key-value inline style; e.g. "fontColor=red".
 */
export default class InlineStylesCommand extends Command {
    /**
     * Flag indicating whether the command is active. The command is active when the
     * {@link module:engine/model/selection~ModelSelection#hasAttribute selection has the attribute} which means that:
     *
     * * If the selection is not empty &ndash; That the attribute is set on the first node in the selection that allows this attribute.
     * * If the selection is empty &ndash; That the selection has the attribute itself (which means that newly typed
     * text will have this attribute, too).
     *
     * @observable
     * @readonly
     */
    declare public value: string | undefined;

    /**
     * The attribute that will be set by the command.
     */
    public readonly attributeKey: string;

    /**
     * @param {module:core/editor/editor~Editor} editor
     * @param attributeKey Attribute that will be set by the command.
     */
    constructor(editor: Editor, attributeKey: string) {
        super(editor);

        this.attributeKey = attributeKey;
        this.value = undefined;
    }

    /**
     * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.
     */
    public override refresh(): void {
        const model = this.editor.model;
        const doc = model.document;

        const value = this._getValueFromFirstAllowedNode();

        // reset value and enabled state
        // We use undefined to prevent the "reset" option from being shown as active option in the UI when value resolves to empty string (no attribute set in selection).
        if (typeof value === "string" && value !== "") {
            this.value = value;
        } else {
            this.value = undefined;
        }

        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);
    }

    /**
     * Executes the command &ndash; applies the attribute to the selection or removes it from the selection.
     *
     * If the command is active (`value == true`), it will remove attributes. Otherwise, it will set attributes.
     *
     * The execution result differs, depending on the {@link module:engine/model/document~ModelDocument#selection}:
     *
     * * If the selection is on a range, the command applies the attribute to all nodes in that range
     * (if they are allowed to have this attribute by the {@link module:engine/model/schema~ModelSchema schema}).
     * * If the selection is collapsed in a non-empty node, the command applies the attribute to the
     * {@link module:engine/model/document~ModelDocument#selection} itself (note that typed characters copy attributes from the selection).
     * * If the selection is collapsed in an empty node, the command applies the attribute to the parent node of the selection (note
     * that the selection inherits all attributes from a node if it is in an empty node).
     *
     * @fires execute
     * @param options Command options.
     * @param options.forceValue If set, it will force the command behavior. If `true`,
     * the command will apply the attribute, otherwise the command will remove the attribute.
     * If not set, the command will look for its current value to decide what it should do.
     */
    public override execute(options: { value: any }): void {
        const model = this.editor.model;
        const doc = model.document;
        const selection = doc.selection;
        // toggle value: if the value is already set, remove it; otherwise, set it to the provided value
        const value = this.value === options.value ? undefined : options.value;

        model.change((writer) => {
            if (selection.isCollapsed) {
                if (value) {
                    // value is existing, we want to set the selection attribute to the value.
                    writer.setSelectionAttribute(this.attributeKey, value);
                } else {
                    writer.removeSelectionAttribute(this.attributeKey);
                }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), this.attributeKey);

                for (const range of ranges) {
                    if (value) {
                        writer.setAttribute(this.attributeKey, value, range);
                    } else {
                        writer.removeAttribute(this.attributeKey, range);
                    }
                }
            }
        });
    }

    /**
     * Checks the attribute value of the first node in the selection that allows the attribute.
     * For the collapsed selection returns the selection attribute.
     *
     * @returns The attribute value.
     */
    private _getValueFromFirstAllowedNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;

        if (selection.isCollapsed) {
            return selection.getAttribute(this.attributeKey);
        }

        for (const range of selection.getRanges()) {
            for (const item of range.getItems()) {
                if (schema.checkAttribute(item, this.attributeKey)) {
                    return item.getAttribute(this.attributeKey);
                }
            }
        }

        return undefined;
    }
}
