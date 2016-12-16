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

    render () {
        return (
            <div>

                <label>height</label>
                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.props.height}
                    onChange={this.handleHeightChange}
                />
                <p>{this.props.height}</p>

                <br />

                <label>weight</label>
                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    onChange={this.handleWeightChange}

                    />
                <p>{this.props.weight}</p>
            </div>
        )
    }
});

export default App;