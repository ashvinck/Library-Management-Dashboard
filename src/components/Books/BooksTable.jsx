import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'isbn', headerName: 'ISBN', width: 180 },
    { field: 'author', headerName: 'Author', width: 200, },
    { field: 'availableItems', headerName: 'Books Available', type: 'number', width: 180 },
    { field: 'category', headerName: 'Category', width: 250, },
];

const BooksTable = ({ allBooks }) => {
    // console.log(allBooks)
    const rows = allBooks.map((book) => (
        { id: book.id, title: book.title, author: book.author, isbn: book.isbn, availableItems: book.availableItems, category: book.category }
    ))
    return (
        <div style={{ height: 760, width: '100%', marginTop: "20px" }}>
            {/* Table MUI */}
            <DataGrid
                style={{ padding: "20px" }}
                rows={rows}
                columns={columns}
                pageSize={11}
                rowsPerPageOptions={[11]}
                localeText={{
                    toolbarDensity: 'Size',
                    toolbarDensityLabel: 'Size',
                    toolbarDensityCompact: 'Small',
                    toolbarDensityStandard: 'Medium',
                    toolbarDensityComfortable: 'Large',
                }}
                components={{
                    Toolbar: GridToolbar,
                }}
                // To style the toolbar of MUI
                componentsProps={{
                    panel: {
                        sx: {
                            '& .MuiDataGrid-filterForm': {
                                position: 'absolute',
                                top: '-100px',
                                backgroundColor: '#F8F8F8',
                            },
                        },
                    },
                }}
            />
        </div>
    )
}

export default BooksTable;