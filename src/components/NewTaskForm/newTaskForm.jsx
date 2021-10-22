import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './newTaskForm.css'

export default class NewTaskForm extends Component {

    static defaultProps = {
        onItemAdded: () => {}
    }

    static propTypes = {
        onItemAdded: PropTypes.func
    }

    state = {
        label: ''
    }

    onLabelChange = (el) => {
        this.setState({
            label: el.target.value
        })
    }

    onSubmit = (el) => {
        el.preventDefault()
        const{onItemAdded} = this.props
        const{label} = this.state
        onItemAdded(label)
        this.setState({
            label: ''
        })
    }

    render() {
        const {label} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                className="new-todo"
                placeholder="What needs to be done?"
              
                onChange={this.onLabelChange} 
                value={label} />
            </form>
        )
    }
}

