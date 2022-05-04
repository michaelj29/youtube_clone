import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'


const SearchBar = (props) => {

    


    return ( 
        <div>
            <form>
                <Form.Control 
                    type="search"
                    id="search"
                    placeholder='search ITube Videos'
                />
                <Button type='submit' variant="primary">Search</Button>{' '}
            </form>
        </div>

     );
}
 
export default SearchBar;