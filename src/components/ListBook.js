import React, { Component } from 'react';
import CardBook from "./CardBook";
import FilterBook from "./FilterBook";

class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            filters: []
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
            .then(data => this.setState({books: data}));
    }

    handleFilters (filters) {
        this.setState({ filters: filters });
    }

    render() {
        if (this.state.books.length === 0) {
            return <div>Chargement en cours...</div>
        }

        const filteredBooks = this.state.books.filter(book => {
            let result = false;
            if (this.state.filters.category && this.state.filters.category != 0) {
                for (let i = 0; i < book.category.length; i++) {
                    if (book.category[i].id == this.state.filters.category) {
                        result = true;
                    }
                }
            } else {
                result = true;
            }
            return result;
        });
        const items = filteredBooks.map( book => <CardBook key={book.id} book={book} /> );

        return (
            <React.Fragment>
            <div className="row">
                <div className="col-sm-3">
                    <FilterBook handleFilters={filters => this.handleFilters(filters)}/>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        {items}
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default ListBooks;