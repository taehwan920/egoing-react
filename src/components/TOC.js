import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data === newProps.data) {
            return false;
        }
        return true;
    }
    render() {
        console.log('===> TOC render')
        let lists = [];
        let data = this.props.data
        let i = 0;
        while (i < data.length) {
            lists.push(
                <li
                    key={data[i].id}
                    data-id={data[i].id}
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >
                    {data[i].title}
                </li>);
            i++
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;