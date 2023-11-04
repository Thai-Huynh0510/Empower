import { Component } from "react";
import { connect } from "react-redux"
import { fetchAllOrdersThunk, deleteOrderThunk  } from "../store/thunks";
import OrdersView from "./views/Ordersview";

class Orders extends Component {
    componentDidMount() {
      this.props.fetchAllOrders()
    }
  
    render() {
      return (
        <OrdersView orders={this.props.allOrders}
          deleteOrder={this.props.deleteOrder} />
      )
    }
  }
  
  // Map state to props;
  const mapState = state => {
    return {
      allOrders: state.allOrders
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
      fetchAllOrders: () => dispatch(fetchAllOrdersThunk()),
      deleteOrder: (orderId) => dispatch(deleteOrderThunk(orderId)),
    }
  }
  
  export default connect(mapState, mapDispatch)(Orders)