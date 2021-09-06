import React from 'react';

import indexcss from './index.scss';

export default class Section extends React.Component {

    handleOnclickchange(item) {
        item.completed = !item.completed
        this.props.section.setState({
            msg: [...this.props.section.state.msg]
        })
    }

    handleOnlick(index) {
        this.props.section.state.msg.splice(index, 1)
        this.props.section.setState({
            msg: [...this.props.section.state.msg]
        })
    }

    render() {
        return (
            <li>
                <input id={this.props.item.id} type='checkbox' checked={this.props.item.completed} onChange={() => this.handleOnclickchange(this.props.item)}></input>
                <label htmlFor={this.props.item.id}></label>
                <span style={{ textDecoration: this.props.item.completed ? 'line-through' : '' }}>{this.props.item.title}</span>
                <button onClick={() => this.handleOnlick(this.props.index)}>×</button>
            </li>
        )
    }
}