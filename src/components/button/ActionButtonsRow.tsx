import {ComponentProps} from 'react'
import {NewNoteButton} from './newnotebutton'
import {DeleteNoteButton} from './deletenotebutton'

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) => {
    return (
        <div {...props}>
            <NewNoteButton/>
            <DeleteNoteButton/>
        </div>
    )
}
