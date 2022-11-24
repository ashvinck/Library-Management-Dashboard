import { useEffect, useState } from 'react';
import BooksTable from './BooksTable';
import { API } from "../../Global";


const GetAllBooks = () => {

    // Hook to handle data from API
    const [allBooks, setAllBooks] = useState([]);

    // API to fetch books 
    const getBooks = () => {
        fetch(`${API}/books`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((books) => setAllBooks(books))
    }

    useEffect(() => getBooks(), []);

    return (
        <div >
            <BooksTable allBooks={allBooks} />
        </div>
    )
};

export default GetAllBooks;