import React from 'react';
import './App.css';
import Range from './Components/Range';


const App = React.createClass({
    getInitialState() {
        return {
            height: 170,
            weight: 65,
            min: 0,
            max: 245,
            step: 1,
            bmi: 22.49,
            bmiClass: "Normal"
        }
    },

    onHeightChange (height) {
      this.setState({
          height:height
      });
    },

    onWeightChange (weight) {
            this.setState({
                weight:weight
            });

    },

    getBMI (height, weight) {
       height = this.state.height;
       weight = this.state.weight;
       var BMI = ((weight/height/height)*10000).toFixed(2) ;
       this.setState({
           bmi: BMI
       },this. getBMIClass(BMI));
    },

    getBMIClass (bmi) {
        bmi =this.state.bmi;
    },

    render () {
        console.log(this.state);
        return (
            <div>
                <h1>BMI APP</h1>

                <Range
                    onHeightChange={this.onHeightChange}
                    onWeightChange={this.onWeightChange}
                    min={this.state.min}
                    max={this.state.max}
                    step={this.state.step}
                    height={this.state.height}
                    weight={this.state.weight}

                    bmi={this.state.bmi}
                />


            </div>
        )
    }
});

export default App;


