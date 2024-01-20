import {Content, DraggableTopBar, Root, SideBar} from './components'
import {NotePreviewList} from './components/NotePreviewList'
import {ActionButtonsRow} from './components/button'

function App() {
  return (
      <>
          <DraggableTopBar/>
          <Root>
              <SideBar className={'p-2'}>
                  <ActionButtonsRow className="flex justify-between mt-1"/>
                  <NotePreviewList className={"mt-3 space-y-1"}/>
              </SideBar>
              <Content className={"border-l bg-zinc-900/50 border-l-white/20"}>Content</Content>
          </Root>
      </>
  )
}

export default App
