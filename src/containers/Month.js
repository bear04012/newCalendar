import React, { Component } from 'react';
import moment from 'moment';
import './Month.css';


export default class Month extends Component {
    constructor(props) {
        super(props)

        this.state={
            selectedDay:this.props.selectedDay
        }


        this.generateToday=this.generateToday.bind(this);
        this.generateMonth=this.generateMonth.bind(this);
    }

    generateMonth(offset) {

        this.setState(state => {
          let cloneDay = state.selectedDay.clone();
          cloneDay.add(offset, 'month');
    
          return{
            selectedDay:cloneDay
          } 
        })
      }
    
    generateToday() {
        this.setState(
            {
                selectedDay:moment()
            }

        )
    }
    

    render() {
        
        const {selectedDay} = this.state;

        let cloneMonth = selectedDay.clone();
        let firstday = parseInt(cloneMonth.startOf('month').format('d'));
        let today = parseInt(moment().format("D"));

        let lastDay = selectedDay.daysInMonth();
        let dates = new Array(lastDay+firstday).fill(0).map((_,i) => {
                if (i-firstday+1===today && parseInt(cloneMonth.format('M')) === parseInt(moment().format('M'))) {
                    return <div key={i} className="today">{i-firstday+1}</div>
                } else if (i-firstday+1>0) {
                    return <div key={i}>{i-firstday+1}</div>
                } else {
                    return <div key={i}></div>
                }
            })

        let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day,i) => (
            <div key={i}>{day}</div>
        ))
        return(
            <div className="month">
                <div className="header">
                    <div className="format">
                        {selectedDay.format('MMMM YYYY')}
                    </div>
                    <div className="space">
                    </div>
                    <div className="buttons">
                        <button onClick={()=> {
                        this.generateMonth(-1);
                        }}>Prev</button>
                        <button onClick={() => {
                            this.generateToday();
                        }}> Today </button>
                        <button onClick={() => {
                        this.generateMonth(+1);
                        }}>Next</button>
                    </div>
                </div>
                <div className="days">
                    {days}
                </div>
                <div className="dates">
                    
                    {dates}

                </div>

            </div>

        )
    }
}