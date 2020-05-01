import React from "react";
import Plot from "react-plotly.js";
import GraphData from "../Data.json";

class PlotApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  getData = (val) => {
    var axisPoints1 = [];
    var axisPoints2 = [];
    var axisPoints3 = [];
    var axisPoints4 = [];
    var axisPoints5 = [];
    var axisPoints6 = [];
    GraphData.root.map(({ speed, consume, distance, gas_type, AC }) => {
      axisPoints1.push(consume);
      axisPoints2.push(speed);
      axisPoints3.push(distance);
      if (gas_type == 1) axisPoints5.push("diamond");
      if (gas_type == 0) axisPoints5.push("circle");
      if (AC == 1) axisPoints6.push("red");
      if (AC == 0) axisPoints6.push("blue");
    });
    if (val == "x") return axisPoints1;
    else if (val == "y") return axisPoints2;
    else if (val == "z") return axisPoints3;
    else if (val == "z1") return axisPoints4;
    else if (val == "z2") return axisPoints5;
    else if (val == "z3") return axisPoints6;
  };

  componentDidMount() {
    this.setState({
      data: [
        {
          x: this.getData("x"),
          y: this.getData("y"),
          z: this.getData("z"),
          type: "scatter3d",
          mode: "markers",
          name: "Regular",
          marker: {
            symbol: this.getData("z2"),
            size: this.getData("z1"),
            color: this.getData("z3"),
          },
        },
      ],
    });
  }

  render() {
    return (
      <div className='col-lg-10 col-md-9 col-sm-12 col-xs-12' id=''>
        <div className='row'>
          <div
            className='col-lg-12 col-md-12 col-sm-12 col-xs-12 GraphClassExt'
            id=''
          >
            <Plot
              className='GraphClass'
              data={this.state.data}
              layout={{
                title:
                  "Dataoutlier - 6D Plot <br> Red:Outlier, Sphere:Loaded, Diamond:Ballast",
                showlegend: true,
                scene: {
                  xaxis: { title: { text: "Fuel" } },
                  yaxis: { title: { text: "Speed" } },
                  zaxis: { title: { text: "RPM" } },
                },
              }}
            />
          </div>
        </div>
        <div className='row' style={{ paddingBottom: "10px" }}>
          <div
            className='col-lg-12 col-md-12 col-sm-12 col-xs-12 TableClassExt'
            id=''
          >
            <table class='table'>
              <thead class='thead-light'>
                <tr>
                  <th>Message</th>
                  <th>Feedback</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RPM is higher than expected</td>
                  <td>
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Correct</label>
                    <br />
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Incorrect</label>
                  </td>
                  <td>
                    <textarea></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Fuel Consumption is higher than expected</td>
                  <td>
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Correct</label>
                    <br />
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Incorrect</label>
                  </td>
                  <td>
                    <textarea></textarea>
                  </td>
                </tr>
                <tr>
                  <td>Slip is lower than expected</td>
                  <td>
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Correct</label>
                    <br />
                    <input name='Correct' type='radio' />
                    <label for='Correct'>Incorrect</label>
                  </td>
                  <td>
                    <textarea></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PlotApp;
