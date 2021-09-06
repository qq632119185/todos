import { getByDisplayValue } from '@testing-library/react';
import React from 'react';

import Footer from './footer.js';
import Section from './section.js';
import Aside from './aside.js';

import indexcss from './index.scss';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: [],
            inupt: '',
            unfold: true
        }
    }

    componentDidMount() {
        fetch("./items.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        msg: result.items
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    handleKeydown(event) {
        if (event.keyCode === 13 && this.state.input.trim()) {
            this.setState({
                msg: [
                    { id: this.state.msg.length ? this.state.msg[0].id + 1 : 1, title: this.state.input.trim(), completed: false },
                    ...this.state.msg
                ]
            })
            this.setState({ input: '' })
        }
    }

    handleOnInputChange(e) {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className={indexcss.boby}>
                <h1>todos</h1>
                <div>
                    <input type="text" placeholder='What needs to be done?' onKeyDown={(event) => this.handleKeydown(event)} autoFocus value={this.state.input || ''} onChange={(e) => this.handleOnInputChange(e)}></input>
                    <label onClick={() => this.setState({ unfold: !this.state.unfold })}>❯</label>
                </div>
                {this.state.unfold && <section>{this.state.msg.map((item, index) => <Section section={this} item={item} index={index} key={item.id} />)}</section>}
                {this.state.msg.length ? <Aside header={this} /> : null}
                <Footer />
            </div>
        )
    }
}