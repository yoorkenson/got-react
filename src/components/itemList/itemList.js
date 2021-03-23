import React, {Component} from 'react';
import './itemList.sass';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


export default class ItemList extends Component {


    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList,
                    error: false
                });
            })
            .catch(() => {this.onError()})
    }
    componentDidCatch(){
        this.setState({
            itemList: null,
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(id)}>
                    {name}
                </li>
            )
        });
    }  

    onError(status){
        this.setState({
            itemList: null,
            error: true
        })
    }

    render() {

        const {itemList, error} = this.state;

        if(error) {
            return <ErrorMessage/>
        }

        if (!itemList) {
            return <Spinner/>
        }
        
        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}