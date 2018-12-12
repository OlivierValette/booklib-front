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

    render() {

        const categories = this.state.categories.map( cat => <option key={cat.id} value={cat.id}>{cat.name}</option>);

        return (
            <div className="form-group">
                <label htmlFor="filter">Filtrer les résultats sur la catégorie :&nbsp;</label>
                <select name="category" onChange={e => this.props.handleFilters({category: e.target.value} )}>
                    <option value="0">Toutes les catégories</option>
                    {categories}
                </select>
            </div>
        )
    }
}

export default FilterBook;