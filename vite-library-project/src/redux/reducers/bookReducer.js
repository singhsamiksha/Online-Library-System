import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        selectedBookId: null,
    },
    reducers: {
        addBooks: (state, actions) => {
            state.books = actions.payload.map(book => ({
                id: book.id,
                title: book.title,
                description: book.description,
                author: book.author,
                rating: book.rating,
                coverImage: book.cover_image,
                genres: book.genre,
                publicationYear: book.publication_year,
            }));
        },
    },
})

export const { addBooks, getPopularBooks } = bookSlice.actions

export default bookSlice.reducer