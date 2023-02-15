class ReactContainer extends React.Component{
      render(){
          return (
          <div>Hey Master! Hello again  
             <div>This is done using babel</div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);    