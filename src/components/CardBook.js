import React, {Component} from 'react';

class CardBook extends Component {
    render() {
        const { book } = this.props;
        const categories = book.category.map(cat =>
                                            <li key={cat.id}>
                                                <span className="list-inline-item badge badge-primary">{cat.name}</span>
                                            </li>);

        return (
            <div className="card" style={{width: '15rem'}}>
                <img className="card-img-top" src={"http://127.0.0.1/php/booklib/public/uploads/" + book.image} alt={book.title}/>
                <div className="card-body">
                    <h3>{book.title}</h3>
                    <div className="book-infos">
                        <span className="label label-info">
                            {book.author.firstname} {book.author.lastname}
                        </span>
                        <ul className="list-inline">Catégories : {categories}</ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardBook;