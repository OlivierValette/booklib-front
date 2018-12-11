import React, { Component } from 'react';
import CardBook from "./CardBook";

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = { books: [] };
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
            .then(data => this.setState({books: data}))
    }

    render() {
        if (this.state.books.length === 0) {
            return <div>Chargement en cours...</div>
        }
        const items = this.state.books.map( book => <CardBook key={book.id} book={book} /> );
        return (
            <div >
                {items}
            </div>
        );
    }
}
export default ListBooks;