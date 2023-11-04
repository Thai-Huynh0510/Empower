import React from "react";
import NavBar from "../NavBar";

const NewOrderView = (props) => {
    const { handleChange, handleSubmit } = props
  
    return (
      <div>
        <NavBar />
        <div className="edit-wrapper">
          <h1>Add New Order</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <div className="input-wrapper1">
                <label className="edit-form-label">Detail: </label>
                <textarea
                  name="detail"
                  placeholder="Enter detail..."
                  required
                  minLength={5}
                  maxLength={300}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <br />
              <div className="input-wrapper1">
                <label className="edit-form-label">Request: </label>
                <textarea
                  name="request"
                  placeholder="Enter request..."
                  required
                  minLength={5}
                  maxLength={500}
                  onChange={(e) => handleChange(e)} 
                ></textarea>
              </div>
              <br/>
              <div className="input-wrapper">
                <label className="edit-form-label">Customer: </label>
                <input
                  type="text"
                  name="customer"
                  required="required"
                  placeholder="customer..."
                  minLength={3}
                  maxLength={50}
                  onChange={(e) => handleChange(e)} />
              </div>
              <br />

              <div className="input-wrapper">
                <label className="edit-form-label">Due date: </label>
                <input
                  type="date"
                  name="order_due_date"
                  required="required"
                  minLength={3}
                  maxLength={20}
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
  
  export default NewOrderView