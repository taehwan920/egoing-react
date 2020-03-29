import React, { Component } from 'react';

class TOC extends Component {
    render() {
        console.log('TOC render')
        let lists = [];
        let data = this.props.data
        let i = 0;
        while (i < data.length) {
            lists.push(
                <li
                    key={data[i].id}
                    onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangePage();
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