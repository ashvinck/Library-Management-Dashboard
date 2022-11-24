import React from 'react'
import Box from '../box/Box';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../Global";
import "./AddBook.css";
import { Button, TextField } from '@mui/material';


// Adding a Validation Schema with Formik and YUP
const ValidationSchema = yup.object({
    title: yup
        .string()
        .required("Please fill the Title of the book"),
    author: yup
        .string()
        .required("Please provide the  title of the author"),
    isbn: yup
        .number()
        .min(0, "Not a valid 13 digit isbn")
        .required("Please enter the ISBN"),
    availableItems: yup
        .number()
        .required("Please fill all the available books in numbers "),
    category: yup
        .string()
        .required("Please provide the category"),
})


const AddBook = () => {
    // Formik validationSchema
    const formik = useFormik({
        initialValues: { title: "", author: "", isbn: "", availableItems: "", category: "" },
        validationSchema: ValidationSchema,
        onSubmit: (newBook) => {
            console.log("onSubmit", newBook);
            createBook(newBook);
        }
    })
    // function to post a book to API
    const createBook = (newBook) => {
        console.log("createBook", newBook);
        fetch(`${API}/books`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => alert("Added a book Successfully"))
    }


    return (
        <Box>
            <h3>Add a Book</h3>
            <form onSubmit={formik.handleSubmit} className="add-book-form">
                {/* Title */}
                <TextField
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText="Harry Potter and the Goblet of Fire"
                    label="Title"
                    variant="standard"
                />
                {formik.touched.title && formik.errors.title ? formik.errors.title : ""}
                {/* Author */}
                <TextField
                    id="author"
                    title="author"
                    error={formik.touched.author && Boolean(formik.errors.author)}
                    value={formik.values.author}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="J. K. Rowling"
                    label="Author"
                    variant="standard"
                />
                {formik.touched.author && formik.errors.author ? formik.errors.author : ''}
                {/* ISBN */}
                <TextField
                    id="isbn"
                    title="isbn"
                    error={formik.touched.isbn && Boolean(formik.errors.isbn)}
                    value={formik.values.isbn}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="074754624"
                    label="ISBN"
                    variant="standard"
                />
                {formik.touched.isbn && formik.errors.isbn ? formik.errors.isbn : ''}
                {/* Available Items */}
                <TextField
                    id="availableItems"
                    error={formik.touched.availableItems && Boolean(formik.errors.availableItems)}
                    title="availableItems"
                    value={formik.values.availableItems}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="10"
                    label="Available Items"
                    variant="standard"
                />
                {formik.touched.availableItems && formik.errors.availableItems ? formik.errors.availableItems : ''}
                {/* Category */}
                <TextField
                    id="category"
                    title="category"
                    error={formik.touched.category && Boolean(formik.errors.category)}
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="Fantasy"
                    label="Category"
                    variant="standard"
                />
                {formik.touched.category && formik.errors.category ? formik.errors.category : ''}
                {/* Submit Button */}
                <Button
                    className="button"
                    type="submit"
                    variant="contained"
                    //cope the MovieList and add newMovie to it
                    onClick={createBook}
                >Add a Book</Button>
            </form>
        </Box>
    )
}

export default AddBook;
