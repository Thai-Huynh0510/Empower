import React from "react"
import {Link } from "react-router-dom";
import NavBar from "../NavBar";

const EditTaskView = (props) => {

  const { task, error, handleChange, handleSubmit } = props

  return (
    <div>
      <NavBar />
      <div className="edit-wrapper">
        <h1>Edit Task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="input-wrapper">
              <label className="edit-form-label">Description: </label>
              <input
                type="text"
                name="description"
                required
                minLength={5}
                maxLength={30}
                value={task.description}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Completion Status: </label>
                <select
                name="completion_status"
                required
                value={task.completion_status}
                onChange={(e) => handleChange(e)}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Due Date: </label>
              <input
                type="date"
                name="due_date"
                required="required"
                value={task.due_date}
                minLength={3}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Employee ID: </label>
              <input
                type="text"
                name="employeeId"
                required
                value={task.employeeId}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <br/>
            <div className="input-wrapper1">
              <label className="edit-form-label">Comments: </label>
              <textarea
                name="comments"
                required="required"
                value={task.comments}
                minLength={3}
                maxLength={200}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <br />
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <button type="submit">
                Apply Changes
              </button>
            </div>

          </div>
        </form> 
        {error !== "" && <p>{error}</p>}
      </div>
    </div>

  );
}

export default EditTaskView