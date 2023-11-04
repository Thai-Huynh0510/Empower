import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from 'react-icons/ri';
import {MdOutlineAddTask} from "react-icons/md";
import NavBar from "../NavBar";
const TasksView = ({ tasks, deleteTask }) => {
  if (!tasks.length) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <h2>There are no tasks.</h2>
        <Link to={`/newtask`}>
          <button>
            Add Task
          </button>
        </Link>
      </div>
    );
  }
    return (
      <div>
        <NavBar />
        <div className="all-tasks">
          <div className="header">
            <h1>Manage Tasks</h1>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Tasks</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
                {tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>
                        <div className="center">
                        {task.id}
                        </div>
                      </td>  
                      <td>
                        <Link className="link" to={`/tasks/${task.id}`}>
                          {task.description}
                        </Link>
                      </td>
                      <td><div className="center">
                        {task.completion_status}
                        </div></td>
                      <td><div className="center">
                        {task.due_date} </div></td>
                      <td>{task.comments}</td>
                      <td>
                        <div className="action-button-wrap">
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="delete-button"
                          >
                            <RiDeleteBin2Line size={20} />
                          </button>
                        </div>
                      
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="buttons-wrap">
          <Link to={`/newtask`}>
            <button>
              Add New Task {" "}
              <MdOutlineAddTask />
            </button>
          </Link>
        </div>
        
      </div>
    )
  }
  
  export default TasksView