import React, {Component} from 'react';

class CardBook extends Component {
    render() {
        return (
            < div className="container">
                    <h1>{this.props.book.title}</h1>
                    <p>Slug : {this.props.book.slug}</p>
                    <ul>
                        <li>Auteur : {this.props.book.author.firstName} {this.props.book.author.lastName}</li>
                    </ul>
                    <p>{this.props.book.category}</p>
            </div>
        );
    }
}

export default CardBook;