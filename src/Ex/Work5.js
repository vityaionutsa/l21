import React, { useState } from 'react';

function Work5() {
    const [items, setItems] = useState([
        { id: 1, value: 'Перший'},
        { id: 2, value: 'Другий'},
        { id: 3, value: 'Третій'},
        { id: 4, value: 'Чнтвертий'},
        { id: 5, value: 'Пятий'},
        { id: 6, value: 'Шостий'},
    ]);


    const handleEdit = (id, target) => {
        const updateItems = items.map(item => {
            const newItem = {
                id: id, 
                value: (target.value === '' ? item.value : target.value)
            };

            if (item.id === id) return { ...item, ...newItem };
            else return item;
        });
        
        setItems(updateItems);

        target.style.display = "none";
        target.value = '';
    };

    const showInput = (target) => {
        target.style.display = "inline";
        target.focus();
    }


    let list = items.map(item => (
        <li
            key={ item.id }
            onClick={ () => showInput(document.getElementById(item.id)) }
            style={{ margin: "5px 0px" }}
        >
            <span style={{ marginRight: "10px" }} >{ item.value }</span>
            <input 
                type="text"
                id={ item.id }
                placeholder="Введіть зміни"
                style={{ display: "none" }}
                onBlur={ (event) => handleEdit(item.id, event.target) }
            />
        </li>
    ));

    return(
        <div>
            <ul>
                { list }
            </ul>
        </div>
    );
}

export default Work5;