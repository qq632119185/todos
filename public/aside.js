import React from 'react';

// import indexcss from './module.index.scss';

export default class Aside extends React.Component {

    handleOnlickall() {
        this.props.header.state.msg.forEach((item) => item.completed = true)
        this.props.header.setState({
            msg: [...this.props.header.state.msg]
        })
    }

    handleOnlickactive() {
        this.props.header.state.msg.forEach((item) => item.completed = false)
        this.props.header.setState({
            msg: [...this.props.header.state.msg]
        })
    }

    handleOnlickcompleted() {
        let msglist = this.props.header.state.msg.filter((item) => item.completed === false)
        this.props.header.setState({
            msg: [...msglist]
        })
    }

    handleOnlickclearcompleted() {
        this.props.header.setState({
            msg: []
        })
    }

    render() {
        return (
            <aside>
                <div>
                    <span>{this.props.header.state.msg.length}</span>
                    <span> item</span>
                    <span> left</span>
                </div>
                <div>
                    <span onClick={() => this.handleOnlickall()}>
                        <a href='#/'>All</a>
                    </span>
                    <span onClick={() => this.handleOnlickactive()}>
                        <a href='#/active'>Active</a>
                    </span>
                    <span onClick={() => this.handleOnlickcompleted()}>
                        <a href='#/completed'>Completed</a>
                    </span>
                </div>
                <div>
                    <span onClick={() => this.handleOnlickclearcompleted()}>
                        <a href='#/clear completed'>Clear completed</a>
                    </span>
                </div>
            </aside>
        )
    }
}