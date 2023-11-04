import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addTaskThunk } from '../store/thunks';
import NewTaskView from './views/NewTaskView';

class NewTask extends Component {
    constructor(props) {
      super(props)
      this.state = {
        description: "",
        comments: "",
        completion_status: "",
        due_date: "",
        employeeId: null,
        redirect: false,
        redirectId: null,
      }
    }
    componentDidMount() {
        this.setState({
          description: this.props.description,
          due_date: this.props.due_date,
          comments: this.props.comments,
          completion_status: this.props.completion_status,
        })
      }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    handleSubmit = async event => {   
        event.preventDefault()
        let task = {
          description: this.state.description,
          due_date: this.state.due_date,
          comments: this.state.comments,
          completion_status: this.state.completion_status,
          employeeId: this.state.employeeId,
        }
      let newTask = await this.props.addTask(task)
      this.setState({
        description: this.state.description,
        due_date: this.state.due_date,
        comments: this.state.comments,
        completion_status: this.state.completion_status,
        employeeId: this.state.employeeId,
        redirect: true,
        redirectId: newTask.id
      })
    }
    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null })
      }
    
    render() {
        if (this.state.redirect) {
          return (<Redirect to={`/tasks`} />)
        }
        return (
          <NewTaskView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />    
        )
      }
    }
    
    const mapDispatch = (dispatch) => {
      return ({
        addTask: (task) => dispatch(addTaskThunk(task))
      })
    }
    
    export default connect(null, mapDispatch)(NewTask)