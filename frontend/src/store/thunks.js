import * as ac from './actions/actionCreators';
import axios from 'axios';
// const axios = require('axios');

//PATH (should be where your server is running)
let path = "http://localhost:5001/api";

//Fetch all Employees 

export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`)
    dispatch(ac.fetchAllEmployees(res.data))
  } catch(error) {
    console.log(error)
  }
}
// AddEmployee
export const addEmployeeThunk = (employee) => async (dispatch) => {
  try {
    let res = await axios.post(`${path}/employees`, employee);
    dispatch(ac.addEmployee(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Single employee
export const fetchEmployeeThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees/${id}`)
    dispatch(ac.fetchEmployee(res.data))
  } catch(error) {
    console.log(error)
  }
}

// Edit employee
export const editEmployeeThunk = (employee) => async (dispatch) => {
  try {
    let res = await axios.put(`${path}/employees/${employee.id}`, employee)
    dispatch(ac.editEmployee(res.data))
  } catch (error) {
    console.log(error)
  }
}

// Delete Employees 
export const deleteEmployeeThunk = employeeId => async dispatch => {
  try {
    await axios.delete(`${path}/employees/${employeeId}`);
    // delete succesful so change state with dispatch
    dispatch(ac.deleteEmployee(employeeId));
  } catch(err) {
    console.error(err);
  }
};


// All tasks
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let res = await axios.get(`${path}/tasks`)
      dispatch(ac.fetchAllTasks(res.data))
    } catch(error) {
      console.log(error)
    }
  }
 // delete task
export const deleteTaskThunk = taskId => async dispatch => {
  try {
    await axios.delete(`${path}/tasks/${taskId}`);
    dispatch(ac.deleteTask(taskId));
  } catch(err) {
    console.error(err);
  }
};
// Add task
export const addTaskThunk = task => async dispatch => {
  try {
    let res = await axios.post(`${path}/tasks`, task);
    // delete succesful so change state with dispatch
    dispatch(ac.addTask(res.data));
    return res.data
  } catch(err) {
    console.error(err);
  }
};
// Single task
export const fetchTaskThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/tasks/${id}`)
    dispatch(ac.fetchTask(res.data))
    let ordersRes = await axios.get(`${path}/tasks/${id}/orders`);
    dispatch(ac.fetchOrder(ordersRes.data));
    console.log(ordersRes.data);
  } catch(error) {
    console.log(error)
  }
}
// Edit task
export const editTaskThunk = (task) => async (dispatch) => {
  try {
    let res = await axios.put(`${path}/tasks/${task.id}`, task)
    dispatch(ac.editTask(res.data))
  } catch (error) {
    console.log(error)
  }
}


// All orders
export const fetchAllOrdersThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/orders`)
    dispatch(ac.fetchAllOrders(res.data))
  } catch(error) {
    console.log(error)
  }
}
// Single order
export const fetchOrderThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/orders/${id}`)
    dispatch(ac.fetchOrder(res.data))
  } catch(error) {
    console.log(error)
  }
  }
// Add order
export const addOrderThunk = (order) => async (dispatch) => {
try {
  let res = await axios.post(`${path}/orders`, order);
  dispatch(ac.addOrder(res.data));
  return res.data
} catch(err) {
  console.error(err);
}
};
// Edit order
export const editOrderThunk = (order) => async (dispatch) => {
try {
  let res = await axios.put(`${path}/orders/${order.id}`, order)
  dispatch(ac.editOrder(res.data))
} catch (error) {
  console.log(error)
}
}
// delete order
export const deleteOrderThunk = orderId => async dispatch => {
  try {
    await axios.delete(`${path}/orders/${orderId}`);
    dispatch(ac.deleteOrder(orderId));
  } catch(err) {
    console.error(err);
  }
  };

  // All events
export const fetchAllEventsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/events`)
    dispatch(ac.fetchAllEvents(res.data))
  } catch(error) {
    console.log(error)
  }
}
// Add event
export const addEventThunk = (event) => async (dispatch) => {
try {
  let res = await axios.post(`${path}/events`, event);
  dispatch(ac.addEvent(res.data));
  window.location.reload();
  return res.data
} catch(err) {
  console.error(err);
}
};
// Edit Event
export const editEventThunk = (event) => async (dispatch) => {
try {
  let res = await axios.put(`${path}/events/${event.id}`, event)
  dispatch(ac.editOrder(res.data))
} catch (error) {
  console.log(error)
}
}
// delete event
export const deleteEventThunk = eventId => async dispatch => {
  try {
    await axios.delete(`${path}/events/${eventId}`);
    window.location.reload();
    dispatch(ac.deleteEvent(eventId));
  } catch(err) {
    console.error(err);
  }
  };