import React, { useState } from "react";

function Work7(props) {
    const [routes] = useState([
        { id: 1, name: "Перша тур" },
        { id: 2, name: "Дргуа тур" },
        { id: 3, name: "Третій тур" },
        { id: 4, name: "Четвертий тур" },
        { id: 5, name: "Пятий тур" },
        { id: 6, name: "Шостий тур" },
    ]);

    const handleClick = (target) => setRoute(target.value);

    const [route, setRoute] = useState(props?.value ?? '');
    const list = routes.map(route => 
            <li key={ route.id } >
                <label>
                    <span>{ route.name }</span>
                    <input
                        type="radio"
                        name="route"
                        value={ route.name }
                        onClick={ (event) => handleClick(event.target) }
                    />
                </label>
            </li>
        );

    return(
        <div>
            <ul>
                { list }
            </ul>
            <p>Your route: { route }</p>
        </div>
    );
}

export default Work7;