import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All tasks
export const fetchAllTasks = (tasks) => {
  return {
    type: at.FETCH_ALL_TASKS,
    payload: tasks
  }
}
// Single task
export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task
  }
}
// Edit task
export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task
  }
}
// Delete Task
export const deleteTask = (taskId) => {
  return {
    type: at.DELETE_TASK,
    payload: taskId
  };
};
// Add Task
export const addTask = (task) => {
  return {
    type: at.ADD_TASK,
    payload: task
  };
};


//fetch employee 
export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees
  }
}
// fetch single employee
export const fetchEmployee = (employee) => {
  return {
    type: at.FETCH_EMPLOYEE,
    payload: employee
  }
}

//Add Employee
export const addEmployee = (employee) => {
  return {
    type: at.ADD_EMPLOYEE,
    payload: employee,
  };
};

// Edit employee
export const editEmployee = (employee) => {
  return {
    type: at.EDIT_EMPLOYEE,
    payload: employee
  }
}

//Delete employee 
export const deleteEmployee = (employeeId) => {
  return {
    type: at.DELETE_EMPLOYEE,
    payload: employeeId,
  };
};

// Orders
// All orders
export const fetchAllOrders = (orders) => {
  return {
    type: at.FETCH_ALL_ORDERS,
    payload: orders
  }
}
// Single order
export const fetchOrder = (order) => {
  return {
    type: at.FETCH_ORDER,
    payload: order
  }
}
// Edit order
export const editOrder = (order) => {
  return {
    type: at.EDIT_ORDER,
    payload: order
  }
}
// Delete order
export const deleteOrder = (orderId) => {
  return {
    type: at.DELETE_ORDER,
    payload: orderId
  };
};
// Add order
export const addOrder = (order) => {
  return {
    type: at.ADD_ORDER,
    payload: order
  };
};

// Calender
// All Event
export const fetchAllEvents = (events) => {
  return {
    type: at.FETCH_ALL_EVENTS,
    payload: events
  }
}

// Edit Event
export const editEvent = (event) => {
  return {
    type: at.EDIT_EVENT,
    payload: event
  }
}
// Delete Event
export const deleteEvent = (eventId) => {
  return {
    type: at.DELETE_EVENT,
    payload: eventId
  };
};
// Add event
export const addEvent = (event) => {
  return {
    type: at.ADD_EVENT,
    payload: event
  };
};
