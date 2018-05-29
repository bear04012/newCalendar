import React, { Component } from 'react';
import Day from './Day';
import Week from './Week';
import Month from './Month';
import Year from './Year';
import './Calendar.css';
import moment from 'moment';



export default class Calendar extends Component {
  constructor(){
    super();

    this.state={
      selectedDay: moment(),
      day:false,
      week:false,
      month:true,
      year:false
    }
    
    
    this.selectDay=this.selectDay.bind(this);
    this.selectWeek=this.selectWeek.bind(this);
    this.selectMonth=this.selectMonth.bind(this);
    this.selectYear=this.selectYear.bind(this);
  }

    

    selectDay() {
        this.setState({
            day:true,
            week:false,
            month:false,
            year:false
        })
    }

    selectWeek() {
        this.setState({
            day:false,
            week:true,
            month:false,
            year:false
        })
    }

    selectMonth() {
        this.setState({
            day:false,
            week:false,
            month:true,
            year:false
        })
    }

    selectYear() {
        this.setState({
            day:false,
            week:false,
            month:false,
            year:true
        })
    }

  
  render() {

    const {selectedDay,day,week,month,year} = this.state;

    return (
      <div className="box">
        <div className="top">
            <button onClick={this.selectDay}> Day </button>
            <button onClick={this.selectWeek}> Week </button>
            <button onClick={this.selectMonth}> Month </button>
            <button onClick={this.selectYear}> Year </button>
        </div>

        <div className="bottom">
            {day && 
                <Day selectedDay={selectedDay}/>
            }
            {week && 
                <Week selectedDay={selectedDay}/>
            }
            {month && 
                <Month selectedDay={selectedDay}/>
            }
            {year && 
                <Year selectedDay={selectedDay} />
            }
            
            

        </div>

        
      </div>
    );
  }
}
