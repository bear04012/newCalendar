import React, { Component } from 'react';
import moment from 'moment';
import './Week.css';


export default class Week extends Component {
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

        let times = new Array(25).fill(0).map((_,i)=> {

            if (i===0) {
                return(<div key={i} className="timelines2">all-day</div>)
            }else if (i+1 <= 13){
                return(<div key={i} className="timelines2">{i+" AM"}</div>)
            } else {
                return(<div key={i} className="timelines2">{i-12+" PM"}</div>)
            }
            
        })
        
        let timeTable = new Array(24).fill(0).map((val,i) => (val=val+i)).map((val,i)=> {

            return(
                <div key={i} className="time"></div>

            )
        })

        let week = new Array(7).fill(0).map((val,i)=>(val=val+i)).map((val,i)=> {
            let cloneDay = selectedDay.clone().day(val);

            if (parseInt(cloneDay.format('D'))===parseInt(moment().format('D')) && parseInt(cloneDay.format('M'))===parseInt(moment().format('M'))) {

                return(

                    <div key={i} className="today2">
                        {cloneDay.format('ddd D')}
                        {timeTable}
                    </div>
    
                )
            } else {
                return(
                    <div key={i} className="day2">
                        {cloneDay.format('ddd D')}

                        <div className="timeTable">{timeTable}</div>
                    </div>
    
                )

            }
            
        })


        return(
            <div className="week">
                <div className="header">
                    <div className="format">{selectedDay.format('MMMM YYYY dddd')}</div>

                    <div className="space"></div>
                    
                    <div className="buttons">
                        <button onClick={()=> {
                        this.generateDay(-7);
                        }}>Prev</button>
                        <button onClick={() => {
                            this.generateToday();
                        }}> Today </button>
                        <button onClick={() => {
                        this.generateDay(+7);
                        }}>Next</button>
                    </div>
                </div>

                <div className="days">
                    <div className="times">{times}</div>
                    {week}

                </div>
            </div>

        )
    }
}