import React, { useState } from "react";

function Work9(props) {
    const [employees] = useState(
        [
            { firstName: 'Ираклий',lastName: 'Дорофеев',salary: 5220,},
            { firstName: 'Феликс',lastName: 'Передрий',salary: 2370},
            { firstName: 'Карим',lastName: 'Капустин',salary: 5450,  },
            { firstName: 'Бородай',lastName: 'Емельян',salary: 11170,  },
            { firstName: 'Овчаренко', lastName: 'Оскар',salary: 3810, },
            { firstName: 'Одинцов',lastName: 'Устин',salary: 4390, },
            { firstName: 'Бутовичі',lastName: 'Юрій',salary: 7630, },
            { firstName: 'Андрійченко', lastName: 'Мирослав',salary: 4660, },
        ]
    ); 


    const sortByFirstName = () => {

        setTable(employees
            .sort(( a, b ) => {
                if (a.firstName < b.firstName) return -1;
                else if (a.firstName > b.firstName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortByLastName = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.lastName < b.lastName) return -1;
                else if (a.lastName > b.lastName) return 1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }
    
    const sortBySalary = () => {
        
        setTable(employees
            .sort(( a, b ) => {
                if (a.salary < b.salary) return 1;
                else if (a.salary > b.salary) return -1;
                else return 0;
            })
            .map(employee =>
                <tr>
                    <td>{ employee.firstName }</td>
                    <td>{ employee.lastName }</td>
                    <td>{ employee.salary }</td>
                </tr>
            )
        );
    }

    const [table, setTable] = useState(employees.map(employee => 
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.salary }</td>
            </tr>
        ));

    return(
        <div>
            <table border="1">
                <tr>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByFirstName() } 
                    >First Name</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortByLastName() }
                    >Last Name</th>
                    <th
                        style={{ cursor: "pointer"}}
                        onClick={ () => sortBySalary() }
                    >Salary</th>
                </tr>
                {table}
            </table>
        </div>
    );
}

export default Work9;