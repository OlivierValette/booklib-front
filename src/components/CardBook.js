import React, {Component} from 'react';

class CardBook extends Component {
    render() {
        let catlist = '';
        for (let i=0; i<this.props.book.category.length; i++) {
            catlist += this.props.book.category[i].name + "/";
        }
        catlist = catlist.substring(0, catlist.length - 1);

        return (
            < div>
                    <h1>{this.props.book.title}</h1>
                    <p>Slug : {this.props.book.slug}</p>
                    <p>Auteur : {this.props.book.author.firstname} {this.props.book.author.lastname}</p>
                    <p>Catégories : {catlist}</p>
            </div>
        );
    }
}

export default CardBook;