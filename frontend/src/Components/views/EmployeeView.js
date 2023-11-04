import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiDeleteBin2Line } from 'react-icons/ri'

const EmployeeView = (props) => {

  const { id, fetchEmployee, employee, deleteEmployeeTask } = props
  const navigate = useHistory()

  if (!employee.tasks.length) {
    return (
      <div>
      <NavBar />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <div className="nameheader" >
        <h1>{employee.first_name}  {employee.last_name} ({employee.department})</h1>
        </div>
        <h2>Employee has no tasks</h2>
        <Link to={`employee.id/newtask`}>
          <button>
            Add Task
          </button>
        </Link>
      </div>
      </div>
    )
  }

  const clickEdit = () => {
    navigate.push(`/editemployee/${employee.id}`)
  }

  const clickDelete = async (task) => {
    task.employeeId = null
    await deleteEmployeeTask(task)
    await fetchEmployee(id)
  }
  return (
    <div>
      <NavBar />
      <div className="single-task">
        <div className="nameheader" >
        <h1>{employee.first_name}  {employee.last_name} ({employee.department})</h1>
        </div>
        <div className="header">
        <h1 style={{ textAlign: 'center' }}>Tasks</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Task Description</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
            {employee.tasks.map(task => {
              return (
                <tr key={task.id}>

                  <td>
                    <Link className="link" to={`/tasks/${task.id}`}>
                      {task.description}
                    </Link>
                  </td>
                  <td><div className="center">
                    {task.completion_status}</div></td>
                  <td><div className="center">
                    {task.due_date}</div></td>
                  <td>{task.comments}</td>
                  <td>
                    <button className="delete-button"
                      onClick={() => clickDelete(task)}>
                      <RiDeleteBin2Line size={20} />
                    </button>
                  </td>

                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

      <div className="buttons-wrap">
        <div className="edit">
          <button onClick={clickEdit}>
            Edit Employee
          </button>
          <Link to={`/employees/${id}/newtask`}>
            <button>
              Add New Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmployeeView