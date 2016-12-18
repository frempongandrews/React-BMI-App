import React from 'react';

const Info = React.createClass({
    render () {
        var bmi = this.props.data.bmi;
        var bmiClass = this.props.data.bmiClass;

        // 1.TODO: sentence based on bmi class

        return (
            <div className="info">
                <div className="info-sections-container">
                    <div className="bmi-value-container">
                        <span>YOUR BMI</span> <br />
                        <h2 className="bmi-value"><span>{bmi}</span></h2>
                        <p className="bmi-class">BMI CLASS: <br />
                            <span> {bmiClass} </span>
                        </p>

                        <p className="bmi-sentence">Sentence based on class to be made</p>
                    </div>

                    <div className="bmi-info-tables">
                      <a href="https://en.wikipedia.org/wiki/Body_mass_index#cite_ref-25" target="_blank">  <p> The BMI tables
                            <br />

                                <span className="bmi-info-arrow">&#8594;</span>

                      </p> </a>
                    </div>

                </div>

                <p className="further-info"> Details go here</p>
            </div>
        )
    }
});

export default Info;