// Main.jsx file

// Create a simple component
var MyComponent = React.createClass({
    render:function(){
        var name = "mike";
        var interest = "music";
        return(
            <div>
                <p>Hello, my name is {name}</p>
                <p>I am interested in {interest}</p>
            </div>
        );
    }
});

// Render your component in the `main` section
ReactDOM.render(<MyComponent />, document.querySelector('main'));
