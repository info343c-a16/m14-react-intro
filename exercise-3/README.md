# Exercise-3
In this exercise, you'll practice passing props to a child component from a parent component (see [demo-1](../demo-1) for a similar example). In your `main.jsx` file:

- Fill in your `EmployeeRow` render function to return a table row (`<tr>`) for an employee. You should create a separate table element (`<td>`) for the employee `name`, `title`, and `salary` (each of these will be **received via props**).

- Fill in the `EmployeeTable` render function (already started) to _iterate through the EmployeeTable data_ that is received via props, and **create an `EmployeeRow`** component for each element in your array. Make sure to pass in the necesary data in the props!

- Use `ReactDOM` to render an `EmployeeTable` element, making sure to pass in the appropriate props.
