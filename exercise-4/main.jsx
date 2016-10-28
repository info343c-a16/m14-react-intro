// Main.jsx file

// Data to pass to our List elements
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Simple ListItem component for showing an <li>
var Employee = React.createClass({
    render:function() {
        return(<tr className={this.props.title}>
            <td>{this.props.name}</td>
            <td>{this.props.title}</td>
            <td>{this.props.salary}</td>
        </tr>)
    }
});

// EmployeeTable
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>
                        {this.props.data.map(function(d, i){
                            return <Employee key={'employee-' + i}
                                             name={d.name}
                                             salary={d.salary}
                                             title={d.title}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

// EmployeeSearch
var EmployeeSearch = React.createClass({
    getInitialState:function() {
        return({searchString:''});
    },
    filter:function(e) {
        console.log(e.target.value);
        this.setState({searchString:e.target.value})
    },
    render:function() {
        var employees = this.props.data,
           searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){
           // We are searching. Filter the results.
           employees = employees.filter(function(employee){
               return employee.name.toLowerCase().match( searchString );
           });
        }
        return(
            <div>
                <input onChange={this.filter} placeholder="Search employees"/>
                <EmployeeTable data={employees}/>
            </div>
        )
    }
});


// Render your component in the `main` section
ReactDOM.render(<EmployeeSearch data={employeeData}/>,
    document.querySelector('main')
);
