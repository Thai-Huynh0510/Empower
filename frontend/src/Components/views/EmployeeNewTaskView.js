import React from "react";
import NavBar from "../NavBar";

const EmployeeNewTaskView = (props) => {
  const { employee, handleChange, handleSubmit } = props

  return (
    <div>
      <NavBar />
      <div className="edit-wrapper">
        <h1>Add New Task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="input-wrapper">
              <label className="edit-form-label">Description: </label>
              <input
                type="text"
                name="description"
                placeholder="description..."
                required
                minLength={5}
                maxLength={30}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Completion Status: </label>
              <input
                type="text"
                name="completion_status"
                placeholder="completion status..."
                Value="Not Completed"
                required
                minLength={5}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
                <label className="edit-form-label">Due date: </label>
                <input
                  type="date"
                  name="due_date"
                  required="required"
                  minLength={3}
                  maxLength={20}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br />

              <div className="input-wrapper1">
                <label className="edit-form-label">Comments: </label>
                <input
                  type="text"
                  name="comments"
                  required="required"
                  placeholder="Enter comments..."
                  style = {{ whiteSpace: "pre-line" }}
                  multiline= {true}
                  minLength={3}
                  maxLength={200}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br/>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button type="submit">
                Submit
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default EmployeeNewTaskView