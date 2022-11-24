import React from 'react'
import Box from '../box/Box';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "../../Global";
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


// Adding a Validation Schema with Formik and YUP
const ValidationFormSchema = yup.object({
    title: yup
        .string()
        .required("Please fill the Title of the book"),
    borrower: yup
        .string()
        .required("Please provide the  name of the borrower"),
    dtr: yup
        .string()
        .required("Please provide the date to be returned"),
})


const CheckoutForm = () => {

    const navigate = useNavigate();
    // Formik validationSchema
    const formik = useFormik({
        initialValues: { title: "", borrower: "", dtr: "" },
        validationSchema: ValidationFormSchema,
        onSubmit: (checkoutBook) => {
            console.log("onSubmit", checkoutBook);
            createCheckout(checkoutBook);
        }
    })
    // function to post a book to API
    const createCheckout = (checkoutBook) => {
        console.log("createCheckout", checkoutBook);
        fetch(`${API}/members`, {
            method: "POST",
            body: JSON.stringify(checkoutBook),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => alert("Checkout Successfull!"))
            .then(() => navigate("/"))
    }


    return (
        <Box>
            <h3>Check out a Book</h3>
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
                {/* Borrower */}
                <TextField
                    id="borrower"
                    title="borrower"
                    error={formik.touched.borrower && Boolean(formik.errors.borrower)}
                    value={formik.values.borrower}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="J. K. Rowling"
                    label="borrower"
                    variant="standard"
                />
                {formik.touched.borrower && formik.errors.borrower ? formik.errors.borrower : ''}
                {/* Date t be returned */}
                <TextField
                    id="dtr"
                    title="dtr"
                    error={formik.touched.dtr && Boolean(formik.errors.dtr)}
                    value={formik.values.dtr}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText="22-07-2022"
                    label="dtr"
                    variant="standard"
                />
                {formik.touched.dtr && formik.errors.dtr ? formik.errors.dtr : ''}
                {/* Submit Button */}
                <Button
                    className="button"
                    type="submit"
                    variant="contained"
                    //cope the MovieList and add newMovie to it
                    onClick={createCheckout}
                >Checkout</Button>
            </form>
        </Box>
    )
}

export default CheckoutForm;
