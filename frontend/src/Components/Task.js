import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchTaskThunk} from "../store/thunks"
import TaskView from "./views/TaskView";

class Task extends Component {
  componentDidMount() {
    // Getting task ID from url
    this.props.fetchTask(this.props.match.params.id)
  }

  render() {
    return (
      <TaskView task={this.props.task} 
      order = {this.props.order} />
    )
  }
}

// Map state to props
const mapState = (state) => {
  return {
    task: state.task,
  }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  }
}

export default connect(mapState, mapDispatch)(Task)