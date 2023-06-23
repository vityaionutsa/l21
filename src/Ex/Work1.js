import React from 'react';

class Work1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'перший',
                'Другий',
                'Третій',
                'Четвертий',
                'Пятий',
                'Шостий'
            ]
        };

        this.changeStyle = this.changeStyle.bind(this);
    }

    changeStyle(event) {
        event.currentTarget.style.textDecoration = 'underline';
    }

    render() {
        let list = this.state.arr.map(item =>
                <li key={ Math.random() }>
                    <label onClick={ this.changeStyle }>
                        <input type="checkbox"/>
                        { item }
                    </label>
                </li>
            );

        return(
            <div>
                <ul>
                    { list }
                </ul>
            </div>
        );
    }
}

export default Work1;