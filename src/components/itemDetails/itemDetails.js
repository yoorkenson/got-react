import React, {Component} from 'react';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';
import './itemDetails.sass';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class itemDetails extends Component {

    state = {
        item: null,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })

    }

    render() {

        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else 
        if (!this.state.item) {
            return <span className='select-error'>select</span>
        }

        const {item} = this.state;
        const {name} = item;

        if (this.state.loading) {
            return (
                <div className='char-details rounded'>
                    <Spinner/>
                </div>
            )
        }

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}