import React from 'react';
import moment from 'moment';
import './GenerateCal.css';


const GenerateCal = (props) => {

    let cloneMonth = props.selectedDay.clone();
    let firstday = parseInt(cloneMonth.startOf('month').format('d'));
    let today = parseInt(moment().format("D"));

    let lastDay = props.selectedDay.daysInMonth();
    let dates = new Array(lastDay+firstday).fill(0).map((_,i) => {
            if (i-firstday+1===today && parseInt(cloneMonth.format('M')) === parseInt(moment().format('M'))) {
                return <div key={i} className="today">{i-firstday+1}</div>
            } else if (i-firstday+1>0) {
                return <div key={i}>{i-firstday+1}</div>
            } else {
                return <div key={i}></div>
            }
    })

    let days = ['S','M','T','W','T','F','S'].map((day,i) => (
        <div key={i}>{day}</div>
    ))

    return (
        <div className="calendar2">
            <div className="days2">
                {days}
            </div>

            <div className="dates2">
                {dates}
            </div>
        </div>

    )


}

export default GenerateCal;
