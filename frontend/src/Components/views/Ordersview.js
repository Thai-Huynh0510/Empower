import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from 'react-icons/ri';
import {AiOutlineFileAdd} from "react-icons/ai"
import NavBar from "../NavBar";
const OrdersView = ({ orders, deleteOrder }) => {
    return (
      <div>
        <NavBar />
        <div className="all-tasks">
          <div className="header">
            <h1>Manage Orders</h1>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Order Id</th>
                  <th>Detail</th>
                  <th>Request</th>
                  <th>Customer</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
                {orders.map(order => {
                  return (
                    <tr key={order.id}>
                      <td>
                        <div className="center">
                        <Link className="link" to={`/orders/${order.id}`}>
                        {order.id}
                        </Link>
                        </div>
                      </td>  
                      <td>
                        {order.detail}
                      </td>
                      <td>{order.request}</td>
                      <td><div className="center">
                        {order.customer} </div></td>
                      <td><div className="center">{order.order_due_date}</div></td>
                      <td>
                        <div className="action-button-wrap">
                          <button
                            onClick={() => deleteOrder(order.id)}
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
          <Link to={`/newOrder`}>
            <button>
              Add New Order {" "}
              <AiOutlineFileAdd />
            </button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default OrdersView