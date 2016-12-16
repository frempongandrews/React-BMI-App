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
      }, this.getBMI);
    },

    onWeightChange (weight) {
            this.setState({
                weight:weight
            }, this.getBMI);

    },

    getBMI (height, weight) {
       height = this.state.height;
       weight = this.state.weight;
       var BMI = ((weight/height/height)*10000).toFixed(2) ;
       this.setState({
           bmi: BMI,
           bmiClass: this.getBMIClass(BMI)
       });
    },

    getBMIClass (bmi) {
        bmi =this.state.bmi;

        if (bmi < 18.5) {
            return "Underweight";
        }

        if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal";
        }

        if (bmi >= 25 && bmi <= 29.9) {
            return "Overweight";
        }

        if (bmi >= 30) {
            return "Obese";
        }
    },

    render () {
        console.log(this.state);
        return (
            <div>
                <h1>BMI APP</h1>

                <Range
                    onHeightChange={this.onHeightChange}
                    onWeightChange={this.onWeightChange}
                    bmiClass={this.state.bmiClass}
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


