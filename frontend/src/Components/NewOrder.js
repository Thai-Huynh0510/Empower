import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addOrderThunk } from '../store/thunks';
import NewOrderView from './views/NewOrderView';

class NewOrder extends Component {
    constructor(props) {
      super(props)
      this.state = {
        detail: "",
        request: "",
        customer: "",
        order_due_date: "",
        redirect: false,
        redirectId: null,
      }
    }
    componentDidMount() {
        this.setState({
          detail: this.props.detail,
          order_due_date: this.props.order_due_date,
          request: this.props.request,
          customer: this.props.customer,
        })
      }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleSubmit = async event => {
        event.preventDefault()
        let order = {
          detail: this.state.detail,
          order_due_date: this.state.order_due_date,
          request: this.state.request,
          customer: this.state.customer,
        }
      let newOrder = await this.props.addOrder(order)
      this.setState({
        detail: this.state.detail,
        order_due_date: this.state.order_due_date,
        request: this.state.request,
        customer: this.state.customer,
        redirect: true,
        redirectId: newOrder.id
      })
    }
    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null })
      }
    render() {
        if (this.state.redirect) {
          return (<Redirect to={`/orders`} />)
        }
        return (
          <NewOrderView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />    
        )
      }
    }
    
    const mapDispatch = (dispatch) => {
      return ({
        addOrder: (order) => dispatch(addOrderThunk(order))
      })
    }
    
    export default connect(null, mapDispatch)(NewOrder)