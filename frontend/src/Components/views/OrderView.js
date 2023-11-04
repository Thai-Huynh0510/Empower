import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar";
import { RiEdit2Line } from 'react-icons/ri';
const OrderView = ({ order }) => {
    const navigate = useHistory()
  
    const clickEditOrder = () => {
      navigate.push(`/editorder/${order.id}`)
    }
    return (
      <div>
        <NavBar />
        <div className="single-order">
        <div className="header">
          <h1 style={{ textAlign: 'center' }}>Order</h1>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Detail</th>
                <th>Request</th>
                <th>Due Date</th>
                <th>Customer</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>{order.detail}</td>
                    <td>
                      {order.request}</td>
                    <td><div className="center">
                      {order.order_due_date}</div></td>
                    <td><div className="center">{order.customer}</div></td>
                    <td>
                      <button 
                        onClick={clickEditOrder}
                        style={{ 
                          backgroundColor: '#0818A8', 
                          width: '3rem', 
                          padding: '3px', 
                          borderRadius: '5px'}}>
                          <RiEdit2Line size={20} />
                      </button>
                    </td>
                  </tr>   
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default OrderView