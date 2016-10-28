# Exercise-4
In this exercise, you'll practice changing the _state_ of an application. We'll begin with a simple table, and then make that table filter-able by doing the following in the `main.jsx` file:

- Add a function `filter` to your `EmployeeTable` component in which you get the value of the event (`event.target.value`), and then **set the state** of your `searchString` to that value
- In your `render` function, use `this.state.searchString` to filter down your `employees` array.
- Assign an `onChange` event to your `<input>` element so that it executes your `filter` function (i.e., `this.filter`)


As described in [module-4](https://github.com/info343c-a16/m4-git-intro), start by forking and cloning this repository. Then, DO STUFF
