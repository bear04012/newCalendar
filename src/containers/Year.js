import React, { Component } from 'react';
import moment from 'moment';
import './Year.css';
import GenerateCal from '../components/GenerateCal'


export default class Year extends Component {
    constructor(props) {
        super(props)

        this.state={
            selectedDay:this.props.selectedDay
        }

        this.generateYear = this.generateYear.bind(this);
        this.generateToday = this.generateToday.bind(this);
    }

    generateYear(offset){
        this.setState(state => {
            let clone = state.selectedDay.clone();
            clone.add(offset, 'year');

            return {
                selectedDay:clone
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

        

        
        let days = new Array(12).fill(0).map((val,i) => (val = val+i )).map((val,i) => {

            let testedMonth = selectedDay.clone().set('month',val);

            return(
                <div key={i} className="month">
                    {testedMonth.format('MMMM')}
                    <GenerateCal selectedDay={testedMonth}/>
                </div>
            )
            



        })


        return(
            <div className="year">
                <div className="header">
                    <div className="format">
                        {selectedDay.format('YYYY')}
                    </div>
                    <div className="space">
                    </div>
                    <div className="buttons">
                        <button onClick={()=> {
                        this.generateYear(-1);
                        }}>Prev</button>
                        <button onClick={() => {
                            this.generateToday();
                        }}> Today </button>
                        <button onClick={() => {
                        this.generateYear(+1);
                        }}>Next</button>
                    </div>
                </div>

                <div className="months">
                    {days}

                </div>

            </div>

        )
    }
}