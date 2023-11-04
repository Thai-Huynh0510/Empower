import React from 'react'
import { useHistory } from "react-router"
import {MdPeopleAlt} from "react-icons/md"
import {GrTasks} from "react-icons/gr"
import {BiTask} from "react-icons/bi"
import {BsFillCalendar2RangeFill} from "react-icons/bs"
import { IconContext } from 'react-icons'
const Homepage = () =>{
    const navigate = useHistory()

    const handleClickTasks = () => {
        navigate.push('/tasks')
    }
    const handleClickEmployees = () =>{
        navigate.push('/employees')
    }
    const handleClickOrders = () =>{
        navigate.push('/orders')
    }
    const handleClickCalendar = () =>{
        navigate.push('/events')
    }
    return (
        <div style={{textAlign: 'center', marginTop: '10rem'}}>
          <div className="header">
            <h1>Employee Management System</h1>
          </div>
          <br/>
          <br/>
      <IconContext.Provider value = {{ size : "30" }}>
      <button onClick={handleClickTasks}>View All Tasks <br/>
      <BiTask/> </button>
      <button onClick={handleClickEmployees}> View All Employees <br/>
        <MdPeopleAlt />
        </button>
      <br/>
      <br/>
      <button onClick={handleClickOrders}>View All Orders<br/>
      <GrTasks color = "blue"/>
      </button>
      <button onClick={handleClickCalendar}>View Calendar<br/>
      <BsFillCalendar2RangeFill/>
        </button>
      </IconContext.Provider>
    </div>
    )
}
export default Homepage