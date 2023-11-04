import { Component } from "react";
import { connect } from "react-redux"
import { fetchAllEventsThunk, deleteEventThunk, addEventThunk  } from "../store/thunks";
import { Redirect } from 'react-router-dom';
import CalendarView from "./views/CalendarView"

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      start_date: "",
      end_date: "",
      redirect: false,
      redirectId: null,
    }
  }
    componentDidMount() {
      this.props.fetchAllEvents()
      this.setState({
        title: this.props.title,
        start_date: this.props.start_date,
        end_date: this.props.end_date,
      })
    }
  handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }
  handleSubmit = async event => {
      event.preventDefault()
      let calendar = {
        title: this.state.title,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
      }
    let newEvent = await this.props.addEvent(calendar)
    this.setState({
      title: this.state.title,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      redirect: true,
      redirectId: newEvent.id
    })
  }
  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null })
  }
    render() {
      if (this.state.redirect) {
        return (<Redirect to={`/events`} />)
      }
      return (
        <CalendarView events={this.props.allEvents}
        deleteEvent={this.props.deleteEvent}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
      )
    }
  }
  
  // Map state to props;
  const mapState = state => {
    return {
      allEvents: state.allEvents
    }
  }
  
  // Map dispatch to props;
  const mapDispatch = dispatch => {
    return {
      fetchAllEvents: () => dispatch(fetchAllEventsThunk()),
      deleteEvent: (eventId) => dispatch(deleteEventThunk(eventId)),
      addEvent: (event) => dispatch(addEventThunk(event))
    }
  }
  
  export default connect(mapState, mapDispatch)(Calendar)