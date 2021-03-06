import React from 'react';


const App = React.createClass({

    handleHeightChange(e) {
        var height = e.target.value;
        this.props.onHeightChange(height);
    },

    handleWeightChange (e) {
        var weight = e.target.value;
        this.props.onWeightChange(weight);

    },

    //unit conversion functions

    toFeet (num) {
        var feet = (num * 0.393700) / 12;
        var roundedFeet = Math.floor(feet);
        var inches = Math.round((feet - roundedFeet) * 12);
        return roundedFeet + "'" + inches;

    },

    toLbs (num) {
        var lbs = num/0.45359237;
        var lbsRounded = Math.floor(lbs);
        return lbsRounded;
    },
    render () {

        var height = this.props.height;
        var weight = this.props.weight;

        return (
            <div className="range">


                <div className="height-container">
                    <p>HEIGHT</p>
                    <input
                        className="slider"
                        type="range"
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        value={this.props.height}
                        onChange={this.handleHeightChange}
                    />
                    <span className="height-value">{height}cm ({this.toFeet(height)})</span>
                </div>

                <br />


                <div className="weight-container">
                    <p>WEIGHT</p>
                    <input
                        className="slider"
                        type="range"
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        value={weight}
                        onChange={this.handleWeightChange}

                    />
                    <span className="weight-value">{weight}Kg ({this.toLbs(weight)} lbs)</span>
                </div>

            </div>
        )
    }
});

export default App;