ReactDOM.render(
  <h1>Title Here!</h1>,
  document.getElementById('example')
);

var SubTitle = React.createClass({
    render: function(){
        return (
            <h2>this is a  {this.props.name}!</h2>
        );
    }
});

ReactDOM.render(
  <SubTitle name="subtitle" />,
  document.getElementById('subtitle')
);
