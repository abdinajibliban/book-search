import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Booksearch from "../components/BookSearch";
import SearchButton from "../components/SearchButton";

function Search() {
   const [query, setQuery] = useState([]);

   useEffect(() => {
    if (!query) {
      return;
    }

    API.searchBooks(query)
      .then(res => console.log(res.data));
   });
        
  
  const handleFormSubmit = event => {
    setQuery(event.target.value);
   };

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Booksearch />
            <SearchButton
                onClick={handleFormSubmit}
            >
                Search
            </SearchButton>
          </Col>
        </Row>
      </Container>
    );
}

export default Search;