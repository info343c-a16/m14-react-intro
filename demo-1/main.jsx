// Main.jsx file

// Simple ListItem component for showing an <li>
var MyComponent = React.createClass({
    render:function() {
        var text1 = "hello!";
        var text2 = "hello again";
        var imgUrl = "http://static.giantbomb.com/uploads/original/0/9696/1083064-component_video_rca_1_.jpg"
        return(
            <div>
                <p>{text1}</p>
                <p>{text2}</p>
                <img alt="picture of chords" src={imgUrl}/>
            </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(<MyComponent/>,
    document.querySelector('main')
);
