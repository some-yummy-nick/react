import React from 'react';
import ReactDOM from 'react-dom';

var ImageCounter = function (props) {
  return (
    <div className="image-counter">
      <div className="count">{props.count} </div>
      <img src={'img/' + props.url} width="100" onClick={props.onCount}/>
    </div>
  )
};
var Hero = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },

  handleClick: function () {
    this.setState({count: this.state.count + 1});
  },

  render: function () {
    return (
      <div className="container">
        <ImageCounter url={this.props.url} count={this.state.count} onCount={this.handleClick}/>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.heroes.map(function (hero, i) {
          return <Hero key={i} title={hero.title}
                       subtitle={hero.subtitle}
                       url={hero.url}/>
        })}
      </div>
    )
  }
});
var data = [
  {
    title: "React",
    subtitle: "Библиотека для создания пользовательских приложений",
    url: "react.png"
  },
  {
    title: "Angular",
    subtitle: "Один фреймворк",
    url: "angular.png"
  },
  {
    title: "Ember",
    subtitle: "фреймворк для создания амбициозных веб-приложений",
    url: "ember.png"
  },
  {
    title: "Vue",
    subtitle: "Прогрессивный фреймворк",
    url: "vue.png"
  }
];
ReactDOM.render(<App heroes={data}/>, document.getElementById('root'));