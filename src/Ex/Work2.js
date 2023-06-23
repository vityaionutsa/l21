import React, { useState } from 'react';

function Work2(props)  {


    const [employees] = useState(
        [
            { firstName: 'Ираклий',lastName: 'Дорофеев',salary: 5220,totalSalary: true },
            { firstName: 'Феликс',lastName: 'Передрий',salary: 2370,totalSalary: true },
            { firstName: 'Карим',lastName: 'Капустин',salary: 5450,totalSalary: true },
            { firstName: 'Бородай',lastName: 'Емельян',salary: 11170,totalSalary: true },
            { firstName: 'Овчаренко', lastName: 'Оскар',salary: 3810,totalSalary: true },
            { firstName: 'Одинцов',lastName: 'Устин',salary: 4390,totalSalary: true },
            { firstName: 'Бутовичі',lastName: 'Юрій',salary: 7630,totalSalary: true },
            { firstName: 'Андрійченко', lastName: 'Мирослав',salary: 4660,totalSalary: true },
        ]
    ); 

    let resultTotal = 0; 
    employees.map(employee => resultTotal += employee.salary) 

    const [totalSalary, setTotalSalary] = useState(resultTotal); 
    
    function changeTotalSalary(event) {
        let fullName = (event.target.id + "").split(' ');

        if (!event.target.checked) {
            employees.forEach(emp => {
                if (emp.firstName + ' ' + emp.lastName === fullName.join(' ')) {
                    emp.totalSalary = false;
                    setTotalSalary(totalSalary - emp.salary);
                }
            });
        }
        else {
            employees.forEach(emp => {
                if (emp.firstName + ' ' + emp.lastName === fullName.join(' ')) {
                    emp.totalSalary = true;
                    setTotalSalary(totalSalary + emp.salary);
                }
            });
        }
    }

    const table = employees.map(employee => {

        return (
            <tr>
                <td>{ employee.firstName }</td>
                <td>{ employee.lastName }</td>
                <td>{ employee.salary }</td>
                <td>
                    <label>
                        <input
                            id={ employee.firstName + " " + employee.lastName}
                            type="checkbox"
                            defaultChecked
                            onClick={ changeTotalSalary }
                        />Include
                    </label>
                </td>
            </tr>
        );
    });

    return(
        <div>
            <table border='1'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Total salary</th>
                </tr>
                { table }
            </table>
            <p>Total salary: { totalSalary }</p>
        </div>
    );
}

export default Work2;