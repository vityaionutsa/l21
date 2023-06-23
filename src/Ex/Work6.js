import React, { useState } from 'react';
import Work6_button from './Work6_button';
import Work6_input from './Work6_input';


function Work6(props) {
    const [users, setUsers] = useState([
        { id: 1, name: "Микола", age: 30 },
        { id: 2, name: "Василь", age: 40 },
        { id: 3, name: "Петро", age: 50 },
    ]);


    const outFocus = (id, target, type) => {

        const updateUsers = users.map(user => { 
            let newUser;
            if (type === "name")
                newUser = {
                    id: id,
                    name: target.value,
                    age: user.age
                };
            else if (type === "age")
                newUser = {
                    id: id,
                    name: user.name,
                    age: target.value
                };

            if (user.id === id) return { ...user, ...newUser };
            else return user;
        });
        
        setUsers(updateUsers);

        target.style.display = "none";
        target.value = '';
    }

    const showInput = (target) => {
        target.style.display = "inline";
        target.focus();
    }

    const table = users.map(user => {
        let rand = Math.random();

        return (
            <tr>
                <td>
                    <span>{ user.name }</span>
                    <Work6_button
                        content={ "Change" }
                        onClick={ () => showInput(document.getElementById(user.id)) }
                    />
                    <Work6_input
                        id={ user.id }
                        onBlur={ (event) => outFocus(user.id, event.target, "name") }
                    />
                </td>
                <td>
                    <span>{ user.age }</span>
                    <Work6_button
                        content={ "Change" }
                        onClick={ () => showInput(document.getElementById(rand + user.id)) }
                    />
                    <Work6_input
                        id={ rand + user.id }
                        onBlur={ (event) => outFocus(user.id, event.target, "age") }
                    />
                </td>
            </tr>
        );
    });

    return(
        <div>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                { table }
            </table>
        </div>
    );
}

export default Work6;