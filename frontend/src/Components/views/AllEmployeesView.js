import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import { RiDeleteBin2Line} from 'react-icons/ri';
import {BsPersonFillAdd} from "react-icons/bs";
const AllEmployeesView = ({ employees, deleteEmployee }) => {

  if (!employees.length) {

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '6rem',
        flexDirection: 'column'
      }}>
        <h2>There are no employees.</h2>
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add Employee
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="all-employees">
        <div className="header">
          <h1>Manage Employees</h1>
        </div>
        <table className="table1">
          <tbody>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
            
            {employees.map(employee => {
              return (
                
                <tr key={employee.id}>
                  <td ><div className="center">{employee.id} </div></td>
                  <td>
                  <div className="center">
                    <Link className="link" to={`/employees/${employee.id}`}>
                      {employee.first_name}
                    </Link>
                    </div>
                  </td>
                  <td><div className="center">{employee.last_name}</div></td>
                  <td><div className="center">{employee.department}</div></td>
                  <td><div className="center">{employee.tasks.length}</div></td>
                  <td>
                    <div className="action-button-wrap">
                      <button
                        onClick={() => deleteEmployee(employee.id)}
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
      <div className="buttons-wrap">
        <div className="edit">
          <Link to={`/newemployee`}>
            <button>
              Add New Employee {" "}
              <BsPersonFillAdd/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllEmployeesView