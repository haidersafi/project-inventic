import React from 'react'
import {MDBIcon, MDBBtn, MDBDataTableV5 } from 'mdbreact';


export default function ProductPage() {
    const [category, setCategory] = React.useState({
        columns: [
            {
                label: 'Image',
                field: 'image',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Category',
                field: 'category',
                width: 270,
            },
            {
                label: 'Parent Category',
                field: 'parentcategory',
                width: 200,
            },
            {
                label: 'Number of Product',
                field: 'numberofproduct',
                width: 100,
            },
            {
                label: 'Stock Quantity',
                field: 'stockquantity',
                width: 150,
            },
            {
                label: 'Stock Worth (Price/Cost)',
                field: 'stockworth',
                width: 100,
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows: [
            {
                image: 'ABC1',
                category: 'accessories',
                parentcategory: 'N/A',
                numberofproduct: '6',
                stockquantity: '157',
                stockworth: 'USD 11473 / USD 8355',
                action: 'a'
            },
            {
                image: 'ABC2',
                category: 'accessories2',
                parentcategory: 'N/A',
                numberofproduct: '6',
                stockquantity: '157',
                stockworth: 'USD 11473 / USD 8355',
                action: 'a'
            },
            {
                image: 'ABC3',
                category: 'accessories3',
                parentcategory: 'N/A',
                numberofproduct: '6',
                stockquantity: '157',
                stockworth: 'USD 11473 / USD 8355',
                action: 'a'
            },
            {
                image: 'ABC4',
                category: 'accessories4',
                parentcategory: 'N/A',
                numberofproduct: '6',
                stockquantity: '157',
                stockworth: 'USD 11473 / USD 8355',
                action: 'a'
            }
        ]
    });
    const [checkbox1, setCheckbox1] = React.useState('');

    const showLogs2 = (e) => {
        setCheckbox1(e);
    };

    return (
        <div>
          
      <MDBBtn social="fb" color="default">
      <MDBIcon icon="plus"/>    Add Category
        </MDBBtn>
        <MDBBtn social="tw" className="deep-purple lighten-1">
        <MDBIcon far icon="copy" />    Import Category
        </MDBBtn>
        
            <MDBDataTableV5
                style={{
                    backgroundColor: "white",
                    textAlign: "center"
                }}
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={category}
                pagingTop
                searchTop
                searchBottom={false}
                checkbox
                headCheckboxID='id41'
                bodyCheckboxID='checkboxes41'
                getValueCheckboxes={(e) => {
                    showLogs2(e);
                }}
                getValueAllCheckBoxes={(e) => {
                    showLogs2(e);
                }}
                multipleCheckboxes
                proCheckboxes
                filledCheckboxes
                proSelect
            />
        </div>
    )
}
