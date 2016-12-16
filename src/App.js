import React from 'react';
import './App.css';
import Range from './Components/Range';


const App = React.createClass({
    getInitialState() {
        return {
            height: 170,
            weight: 100,
            min: 0,
            max: 245,
            step: 1,
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
                />


            </div>
        )
    }
});

export default App;


