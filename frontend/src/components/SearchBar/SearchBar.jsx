import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'
import { Link } from "react-router-dom";
import axios from 'axios';
import { KEY } from '../../localKey'


const SearchBar = () => {

    const [search, setSearch] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSearch ={
            search: search
        }
    }

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&type=video&maxResults=2`, {
              // headers: {
              //   Authorization: "Bearer " + token,
              // },
            });
            console.log(response.data.items)
            setSearch(response.data.items);
          } catch (error) {
            console.log(error.message);
          }
        };
         fetchVideos();
      }, []);


    return ( 
        <div>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                type="search"
                placeholder="Search any topic"
                className="me-2"
                aria-label="Search"
                onChange={(event) => setSearch(event.target.value)} 
                value={search}
                />
                <Link to="/searchResults">
                    <Button type="submit" variant="outline-success">Search</Button>
                </Link>
            </Form>
        </div>

     );
}
 
export default SearchBar;