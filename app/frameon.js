var React = require('react'),
    ReactDOM = require('react-dom');

var Reframe = React.createClass({

      getInitialState: function() {
        return { height: "300px", width: "100%" };
      },

      componentDidMount: function() {
        this.setState({ height: "500px" });
      },

      render: function() {
        return (
          <object ref="reframe"
                  data={this.props.src}
                  width={this.state.width}
                  height={this.state.height}>
            <embed src={this.props.src}
                   width={this.state.width}
                   height={this.state.height}></embed>
            Embedded data could not be displayed.
          </object>
        );
      }
    });

    ReactDOM.render(<Reframe id="container"
                    src="https://branded.me/bornaeon" />,
                    document.getElementById('fcontainer'));