export const DELETE_BOOK = 'DELETE BOOK';
export const EDIT_BOOK = 'EDIT BOOK';
export const CREATE_BOOK = 'CREATE BOOK';


export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const editBook = (bookData) => {
    return {
        type: EDIT_BOOK,
        payload: bookData
    }
}

export const createBook = (bookData) => {
    return {
        type: CREATE_BOOK,
        payload: bookData
    }
}