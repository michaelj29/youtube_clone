import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'


const SearchBar = ({setSearch}) => {

    


    return ( 
        <div>
            <Form className="d-flex" onChange={
                (event)=>{
                    setSearch(event.target.value)}}>
                <FormControl
                type="search"
                placeholder="Search any topic"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>

     );
}
 
export default SearchBar;