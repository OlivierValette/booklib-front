import React, { Component } from 'react';
import CardBook from "./CardBook";
import FilterBook from "./FilterBook";

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allBooks: [],
            selectedBooks: []
        };
    }

    componentDidMount() {
        // get list of books in state through Booklib API (https://http://127.0.0.1/php/booklib/public/book)
        fetch ('http://127.0.0.1/php/booklib/public/book',{
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
        })
            .then(response => response.json())
            .then(data => this.setState({allBooks: data}))
    }

    /*
    filterBooks = (bookFilter) => {
        let filterBooks = this.state.allBooks;
        filterBooks = filterBooks.filter( (allBooks) => {
            let name = allBooks.firstName.toLowerCase() + allBooks.lastName.toLowerCase()
            return name.indexOf(
                bookFilter.toLowerCase()) !== -1
        });
        this.setState({
            selectedBooks: filterBooks
        });
    }
    */

    render() {
        if (this.state.allBooks.length === 0) {
            return <div>Chargement en cours...</div>
        }
        const items = this.state.allBooks.map( book => <CardBook key={book.id} book={book} /> );
        return (
            <React.Fragment>
                <FilterBook/>
                <div className="row">
                    {items}
                </div>
            </React.Fragment>
        );
    }
}
export default ListBooks;