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

// Render your component in the `main` section
ReactDOM.render(<EmployeeTable data={employeeData}/>,
    document.querySelector('main')
);
