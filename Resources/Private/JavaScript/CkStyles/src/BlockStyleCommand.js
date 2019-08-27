import Command from '@ckeditor/ckeditor5-core/src/command';

/**
 * Sets a class a given attribute on the top most blocks.
 */
export default class BlockStyleCommand extends Command {

    /**
     * @inheritDoc
     */
    execute(options = {}) {

        const model = this.editor.model;

        const blocksToChange = getBlocksToChange( model );

        model.change( writer => {
            for ( const block of blocksToChange ) {
                writer.setAttribute( options.key, options.value, block );
            }
        } );
    }
}

/**
 * Returns the top most blocks of the given model
 *
 * @param model
 * @returns {*}
 */
function getBlocksToChange( model ) {
    const selection = model.document.selection;
    const schema = model.schema;
    return Array.from( selection.getTopMostBlocks() );
}
