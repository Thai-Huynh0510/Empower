import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrderThunk} from "../store/thunks"
import OrderView from "./views/OrderView";

class Order extends Component {
  componentDidMount() {
    // Getting task ID from url
    this.props.fetchOrder(this.props.match.params.id)
  }

  render() {
    return (
      <OrderView order={this.props.order}/>
    )
  }
}

// Map state to props
const mapState = (state) => {
  return {
    order: state.order
  }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchOrder: (id) => dispatch(fetchOrderThunk(id)),
  }
}

export default connect(mapState, mapDispatch)(Order)