// Main.jsx file

// Data to pass to our List elements
var items = [
    {text:"Go to the store", status:"complete"},
    {text:"Go to class", status:'incomplete'}
];

// Simple ListItem component for showing an <li>
var ListItem = React.createClass({
    render:function() {
        return(<li className={this.props.status}>{this.props.text}</li>)
    }
});

// Simple ListItem component for showing an <li>
var List = React.createClass({
    render:function() {
        return(
            <div>
                { // Iterate through items
                this.props.items.map(function(item, index){
                    return <ListItem key={'item-' + index} status={item.status} text={item.text} />
                })
                }
            </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(<List items={items}/>,
    document.querySelector('main')
);
