class ReactContainer extends React.Component{
      render(){
          return React.createElement(`div`,null,`Hey Master! Another method...`,
          React.createElement(`div`,null,`This rendering is done using a class!`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);