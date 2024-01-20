import {ComponentProps} from 'react'
import {notesMock} from '../store/mocks'

export type NotePreviewListProps = ComponentProps<'ul'> & {
    onSelect?: () => void
}

export const NotePreviewList = ({onSelect, className, ...props}: NotePreviewListProps) => {
    return (
        <ul className={className} {...props}>
            {notesMock.map((note, index) => (
                <li key={note.title}>
                    {note.title}
                </li>
            ))}
        </ul>
    )
}
