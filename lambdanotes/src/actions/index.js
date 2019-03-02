export const DELETE_NOTE = 'DELETE NOTE';

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}