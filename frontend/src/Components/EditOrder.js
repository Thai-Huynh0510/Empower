import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchOrderThunk, editOrderThunk } from "../store/thunks"
import EditOrderView from './views/EditOrderView';

class EditOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.order.id,
      detail: this.props.order.detail,
      order_due_date: this.props.order.order_due_date,
      request: this.props.order.request,
      customer: this.props.order.customer,
      taskId: this.props.order.taskId,
      redirect: false,
      redirectId: null,
      error: ""
    }
  }

  componentDidMount() {
    // Getting task ID from url
    this.props.fetchOrder(this.props.match.params.id)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    // Get new info for task from form input
    if (this.state.description === "") {
      this.setState({ error: "Request field is required" });
      return;
    }

    let order = {
      id: this.state.id,
      detail: this.state.detail,
      order_due_date: this.state.order_due_date,
      request: this.state.request,
      customer: this.state.customer,
      taskId: this.state.taskId,
    }

    let editedOrder = await this.props.editOrder(order)

    this.setState({
      id: this.state.id,
      detail: this.state.detail,
      order_due_date: this.state.order_due_date,
      request: this.state.request,
      customer: this.state.customer,
      TaskId: null,
      redirect: true,
      redirectId: order.id,
      error: ""
    })
  }

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/orders/${this.state.redirectId}`} />)
    }

    return (

      <EditOrderView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
        order={this.state}
      />
    )
  }
}

// map state to props
const mapState = (state) => {
  return {
    order: state.order,
  };
};

const mapDispatch = (dispatch) => {
  return ({
    editOrder: (order) => dispatch(editOrderThunk(order)),
    fetchOrder: (id) => dispatch(fetchOrderThunk(id)),
  })
};

export default connect(mapState, mapDispatch)(EditOrder);