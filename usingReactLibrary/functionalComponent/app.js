const containerUpdate = () => {
    return React.createElement("div", "null", "Hey master! This is amazing",
        React.createElement("div", "null", "This is done by functional Component")
    );
}

const container = document.getElementById("react-container")
ReactDOM.render(React.createElement(containerUpdate),container);