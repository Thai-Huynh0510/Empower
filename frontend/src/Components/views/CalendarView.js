import React from "react";
import NavBar from "../NavBar";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {FaRegCalendarPlus} from "react-icons/fa"
const CalendarView = ({ events,deleteEvent, handleChange, handleSubmit }) => {
  const eventArray = events.map(event => {
    return {
      id: event.id,
      title: event.title,
      start: event.start_date,
      end: event.end_date
    }  
  })
  const handleEventClick = (eventInfo) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(eventInfo.event.id);
      eventInfo.event.remove();
    }
  };
  return (
    <div className="Calendar">
      <NavBar />
      <div className="header">
        <h1>Calendar</h1>
      </div>
      <div className="edit-wrapper1">
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
       <div>
       <div className="input-wrapper">
      <label className="edit-form-label">Title: </label>
      <input 
      type="text"
      name="title" 
      placeholder="Add Title" 
      style={{ marginRight: "10px" }} 
      onChange={(e) => handleChange(e)}/>
      </div>
      <br />
      <div className="input-wrapper">
      <label className="edit-form-label">Start Date: </label>
      <input
      name="start_date"
      type="date"
      style={{ marginRight: "10px" }}
      onChange={(e) => handleChange(e)}/>
      </div>
      <br/>
      <div className="input-wrapper">
      <label className="edit-form-label">End Date: </label>
      <input
      type="date"
      style={{ marginRight: "10px" }}
      name="end_date"
      onChange={(e) => handleChange(e)}/>
      </div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="submit">Add Event <FaRegCalendarPlus/></button>
      </div>
      </div>
      </div>
      </form>
      </div>
      <div className="calendar-wrapper">
      <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={eventArray}
            eventClick={handleEventClick}
            aspectRatio={2}
            />
      </div>
    </div>
  );
};


export default CalendarView
  
  
  
  
  
  