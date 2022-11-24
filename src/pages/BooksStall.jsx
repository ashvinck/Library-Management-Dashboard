import React from 'react'
import GetAllBooks from '../components/Books/BooksAPI';
import Box from '../components/box/Box';

const BookStall = () => {
    return (
        <Box>
            <h2>Books in the Library</h2>
            <GetAllBooks />
        </Box>
    )
}

export default BookStall;