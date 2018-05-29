import React, { Component } from 'react';
import moment from 'moment';
import './Day.css';
import GenerateCal from '../components/GenerateCal'


export default class Day extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            selectedDay:this.props.selectedDay
        }
        
        this.generateToday=this.generateToday.bind(this);
        this.generateDay=this.generateDay.bind(this);

    }
    generateDay(offset) {

        this.setState(state => {
          let cloneDay = state.selectedDay.clone();
          cloneDay.add(offset, 'days');
    
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
        let times = new Array(24).fill(0).map((_,i)=> {

            if (i+1 < 13){
                return(<div key={i} className="timelines">{i+1+" AM"}</div>)
            } else {
                return(<div key={i} className="timelines">{i-11+" PM"}</div>)
            }
            
        })
        return(
           
            <div className="day">
                <div className="daily">
                    <div className="format">{selectedDay.format('MMMM D, YYYY')}</div>
                    <div>{selectedDay.format('dddd')}</div>
                    <div className="all-day">all-day</div>
                    <div className="bundleTimes">{times}</div>

                    <div className="events">

                    </div>
                </div>

                <div className="info">

                    <GenerateCal className="calendar" selectedDay={selectedDay}/>

                    <div className="buttons">
                        <button onClick={()=> {
                        this.generateDay(-1);
                        }}>Prev</button>
                        <button onClick={() => {
                            this.generateToday();
                        }}> Today </button>
                        <button onClick={() => {
                        this.generateDay(+1);
                        }}>Next</button>
                    </div>

                </div>
            </div>

        )
    }
}