// import Note from "../services/AddNote"
// import NotePreview from './NotePreview.jsx'
import MapDynamicComponents from './Dynamics/mapDynamicComponents.js'

export default class NotesList extends React.Component {
  getComponent = () => {
    if (this.state.selectedNote) {
      return mapDynamicComponents[this.state.selectedNote.type]
    }
    else {
      return 'NoteTxt'
    }
  }

  render() {
    const { allNotes, onEdit, onDelete, selectedNote, onUpdate, onChangeBcColor, onTextChange, onCopy, onShift } = this.props
   
    
    return <React.Fragment> {
      allNotes.map((cmp, i) => <MapDynamicComponents key={i} onChangeBcColor={onChangeBcColor} 
       onEdit={onEdit}  onShift={onShift} onCopy={onCopy} onUpdate={onUpdate} onTextChange={onTextChange} selectedNote={selectedNote} onDelete={onDelete} cmp={cmp} />
      )
    }
    </React.Fragment>

  }
}
