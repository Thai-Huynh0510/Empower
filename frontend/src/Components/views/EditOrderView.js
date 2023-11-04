import React from "react"
import NavBar from "../NavBar";

const EditOrderView = (props) => {

  const { order, error, handleChange, handleSubmit } = props

  return (
    <div>
      <NavBar />
      <div className="edit-wrapper">
        <h1>Edit Order</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="input-wrapper1">
              <label className="edit-form-label">Detail: </label>
              <textarea
                type="text"
                name="detail"
                required
                minLength={5}
                maxLength={300}
                value={order.detail}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper1">
              <label className="edit-form-label">Request: </label>
              <textarea
                type="text"
                name="request"
                required
                value={order.request}
                minLength={5}
                maxLength={500}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />

            <div className="input-wrapper">
              <label className="edit-form-label">Due Date: </label>
              <input
                type="date"
                name="order_due_date"
                required="required"
                value={order.order_due_date}
                minLength={3}
                maxLength={20}
                onChange={(e) => handleChange(e)} />
            </div>
            <br />
            <br />
            <div className="input-wrapper">
              <label className="edit-form-label">Customer: </label>
              <input
                name="customer"
                required="required"
                value={order.customer}
                minLength={3}
                maxLength={50}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <br />
            <div className="input-wrapper">
              <label className="edit-form-label">Task ID: </label>
              <input
                type="text"
                name="taskId"
                required
                value={order.taskId}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <br/>
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

export default EditOrderView