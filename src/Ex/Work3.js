import React from 'react';

class Work3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: [
                'Перший',
                'Другий',
                'Третій',
                'Четвертий',
                'Пятий',
                'Шостий',
            ]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (!event.target.checked)
            document.getElementById(event.target.name).style.display = 'none';
        else
            document.getElementById(event.target.name).style.display = 'block';
    }

    render() {
        let result = this.state.arr.map(item =>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name={ item }
                        onClick={ this.handleClick }
                        defaultChecked
                    />
                    чекбокс "{ item }"
                </label>
                <p id={ item }>
                    { item }
                </p>
            </div>
        );
        return(
            <div>
                { result }
            </div>
        );
    }
}

export default Work3;