import React, { useState } from "react";

function Work10(props) {
    const ua_week = [
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'П`ятниця',
        'Субота',
        'Неділя',
    ]
    const en_week = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]

    const changeSelect = (target) => {
        if(target.value === "Українська")
            setTwoSelect(ua_week.map(day =>
                    <option value={ day }>{ day }</option>
                ));
        else if(target.value === "English")
            setTwoSelect(en_week.map(day =>
                    <option value={ day }>{ day }</option>
                ));
    }

    const [twoSelect, setTwoSelect] = useState(props?.value ?? '');

    return(
        <div>
            <select
                id="selectID_1"
                style={{ margin: "5px" }}
                onChange={ (event) => changeSelect(event.target) }
            >
                <option selected disabled>Select language</option>
                <option value="Українська" >Українська</option>
                <option value="English" >English</option>
            </select>
            <select
                id="selectID_2"
                style={{margin: "5px" }}
            >
                <option selected disabled>Select day week</option>
                { twoSelect }
            </select>
        </div>
    );
}

export default Work10;