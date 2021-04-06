import React from "react";

function BookSearch(props) {
  return (
    <form>
        <div className="form-group">
            <input className="form-control" name="booksearch" type="text" placeholder="Search Books" aria-label="Booksearch" />
        </div>
    </form>
  );
}

export default BookSearch;
