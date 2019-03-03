export const DELETE_NOTE = 'DELETE NOTE';
export const EDIT_NOTE = 'EDIT NOTE';
export const CREATE_NOTE = 'CREATE NOTE';


export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const editNote = (noteData) => {
    return {
        type: EDIT_NOTE,
        payload: noteData
    }
}

export const createNote = (noteData) => {
    return {
        type: CREATE_NOTE,
        payload: noteData
    }
}