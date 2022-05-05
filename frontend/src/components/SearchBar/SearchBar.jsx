import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'


const SearchBar = () => {

    const [search, setSearch] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSearch ={
            search: search
        }
    }


    return ( 
        <div>
            <Form className="d-flex" onSubmit={handleSubmit}>
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