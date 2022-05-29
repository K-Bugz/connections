import './pages.styles/Calendar.css'
import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
class Calendario extends React.Component {
    
 
  render() {
 
    return (
     
      <div className="container p-5">
           <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
        
                    initialView='dayGridMonth'
                    customButtons={{
                        myCustomButton: {
                          text: 'Add Event',
                          click: function() {
                              
                            alert('clicked the custom button!');
                          },
                        },
                      }}
                    headerToolbar={{
                      start: 'title', // will normally be on the left. if RTL, will be on the right
                      center: 'today myCustomButton',
                      end: 'prev,next', // will normally be on the right. if RTL, will be on the left
                    }}
                   
                    events={[
                      { title: 'event 1', date: '2021-06-08' },
                      { title: 'event 2', date: '2021-06-10' },
                    ]}
                  />
      </div>
)
};
}
export default Calendario;