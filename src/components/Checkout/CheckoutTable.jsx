import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 400 },
    { field: 'borrower', headerName: 'Borrower', width: 300 },
    { field: 'dtr', headerName: 'Return Date', width: 200, },
];

const CheckoutTable = ({ checkoutData }) => {
    const rows = checkoutData.map((member) => (
        { id: member.id, title: member.title, borrower: member.borrower, dtr: member.dtr }
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

export default CheckoutTable;