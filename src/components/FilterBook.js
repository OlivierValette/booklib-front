import React, { Component } from 'react';

class FilterBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        // get list of categories in state through Booklib API (https://http://127.0.0.1/php/booklib/public/category/)
        fetch ('http://127.0.0.1/php/booklib/public/category',{
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
        ;
    }
/*
    handleChange = (e) => {
        this.setState({
            catBook: e.target.value
        });
        this.props.onChange(event.target.value);
    }
*/

    render() {

        const categories = this.state.categories.map( cat => <option key={cat.id} value={cat.id}>{cat.name}</option>);

        return (
            <div className="form-group">
                <label htmlFor="filter">Sélectionner une catégorie :&nbsp;</label>
                <select name="category" id="">
                     {categories}
                </select>
            </div>
        )
    }
}

export default FilterBook;