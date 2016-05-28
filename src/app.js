var React = require('react');
var ReactDOM = require('react-dom');
import Header, { Footer } from './Main';

// var Input = React.createClass({
//   trocarTexto: function(event) {
//     var valor = event.target.value;
//     this.setState({valor: valor});
//   },
//
//
//   getInitialState: function() {
//     return { valor: ''};
//   },
//
//   render: function() {
//     return (
//       <div>
//         <h1> Olá {this.state.valor} </h1>
//         <input type="text" value={this.state.valor} onChange={this.trocarTexto} />
//       </div>
//     );
//   }
// });
//
//
// class Ola extends React.Component {
//   render() {
//     return (
//     <div>
//      <h1> Olá {this.props.name} </h1>
//      <Input />
//     </div>);
//   }
// }

ReactDOM.render(<div>
  <Header/>
  <Footer/>
  </div>,
document.getElementById('container'));

if (process.env.NODE_ENV === 'development')
  module.hot.accept();
