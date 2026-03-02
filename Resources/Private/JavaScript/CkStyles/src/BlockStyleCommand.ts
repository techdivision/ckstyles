// Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted
import {Command, type Editor} from '@ckeditor/ckeditor5-core';
import {first} from '@ckeditor/ckeditor5-utils';

/**
 * Set a key-value block style; e.g. "fontColor=red".
 */
export default class BlockStyleCommand extends Command {
  declare public value: string[];

  /**
   * The attribute that will be set by the command.
   * @observable
   * @readonly
   */
  public readonly attributeKey: string;

  /**
   * @param {module:core/editor/editor~Editor} editor
   * @param {String} attributeKey Attribute that will be set by the command.
   */
  constructor(editor: Editor, attributeKey: string) {
    super(editor);

    this.attributeKey = attributeKey;
    this.value = [];
  }

  /**
   * Updates the command's {@link #value} and {@link #isEnabled}.
   */
  public override refresh(): void {
    const model = this.editor.model;
    const doc = model.document;
    const schema = model.schema;
    const blocks = Array.from(doc.selection.getSelectedBlocks());

    const values: string[] = [];
    for (const block of blocks) {
      if (schema.checkAttribute(block, this.attributeKey)) {
        const value = block.getAttribute(this.attributeKey);
        if (typeof value === 'string' && !values.includes(value) && value !== '') {
          values.push(value);
        }
      }
    }

    this.value = values;
    this.isEnabled = !!blocks;
  }

  /**
   * Executes the command &mdash; sets the attribute to the desired value. If there is no desired valued, removes the
   * attribute on each block.
   *
   * @fires execute
   * @param {Object} [options] Command options.
   * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.
   */
  execute(options: { value?: any } = {}) {
    const model = this.editor.model;
    const doc = model.document;
    const selection = doc.selection;

    const value = options.value;
    const blocksToChange = selection.getSelectedBlocks();

    model.change(writer => {
      for (const block of blocksToChange) {
        if (value) {
          writer.setAttribute(this.attributeKey, value, block);
        } else {
          writer.removeAttribute(this.attributeKey, block);
        }
      }
    });
  }
}
