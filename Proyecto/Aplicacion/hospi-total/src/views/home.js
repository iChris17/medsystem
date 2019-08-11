import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import esLocale from '@fullcalendar/core/locales/es';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

class Home extends Component {
    render() {
        return (
            <div>
                <FullCalendar themeSystem="bootstrap" 
                defaultView="dayGridMonth" plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin ]} 
                locale={esLocale}
                header={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                events={[
                    { title: 'event 1', date: '2019-07-01' },
                    { title: 'event 2', date: '2019-07-02' }
                ]}/>
            </div>
        );
    }
}

export default Home;
