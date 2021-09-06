import React from 'react';

import indexcss from './index.scss';

export default class Footer extends React.Component {
    constructor () {
        super (),
        this.state = {
            msg: [
                {title: 'Double-click to edit a todo', url: '', hreftitle: ''},
				{title: 'Created by ', url: 'http://github.com/petehunt/', hreftitle: 'ppetehunt'},
				{title: 'Part of ', url: 'http://github.com/petehunt/', hreftitle: 'TodoMVC'},
            ]
        }
    }
    render () {
        return <footer>
			{this.state.msg.map((item,index) => <p key={index}>{item.title}<a href={item.url}>{item.hreftitle}</a></p>)}
        </footer>
    }
}