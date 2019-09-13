import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import CustomToolbar from "../components/Calendar/Toolbar";
import IntegrationDownshift from '../components/AutoComplete/AutoComplete';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from "@material-ui/core/styles";
import Button from "../assets/components/CustomButtons/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "../assets/components/Grid/GridContainer";
import GridItem from "../assets/components/Grid/GridItem";
import Card from "../assets/components/Card/Card";
import CardBody from "../assets/components/Card/CardBody";

import Close from "@material-ui/icons/Close";

import modalStyle from "../assets/jss/material-dashboard-react/modalStyle";
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import 'moment/locale/es';

const axios = require("axios");

const modalStyles = makeStyles(modalStyle);
let date = new Date();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const localizer = momentLocalizer(moment);

const messages = {
    allDay: 'Todo el día',
    previous: 'Previo',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento', // Or anything you want
    showMore: total => `+ ${total} eventos más`,
    noEventsInRange: 'No hay eventos en este rango'
};

let events = [];
let dateEvent = new Date();

function ModalDialog(props) {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const { onClose, open } = props;
    const classes = modalStyles();

    function handleDateChange(date) {
        dateEvent.setHours(date.getHours());
        setSelectedDate(dateEvent);
    }

    function handleClose() {
        onClose(false);
    }

    function handleSubmit() {
        const event = {
            title: "Nud-pro Launch",
            start: selectedDate,
            end: selectedDate,
            allDay: false,
            color: "rose"
        };

        events.push(event);
        console.log(events);
        onClose(false);
    }

    return (
        <Dialog
            classes={{
                root: classes.center,
                paper: classes.modal
            }}
            maxWidth={"sm"}
            open={open}
            transition={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="modal-slide-title"
            aria-describedby="modal-slide-description"
        >
            <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
            >
                <Button
                    justIcon
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="transparent"
                    onClick={handleClose}
                >
                    <Close className={classes.modalClose} />
                </Button>
                <h4 className={classes.modalTitle}>Programe una Nueva Cita</h4>
            </DialogTitle>
            <DialogContent
                id="modal-slide-description"
                className={classes.modalBody}
            >
                <form>
                    <IntegrationDownshift/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disabled
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Fecha"
                            value={dateEvent}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                                'color': 'primary',

                            }}

                        />
                        <KeyboardTimePicker
                            color=""
                            margin="normal"
                            id="time-picker"
                            label="Hora"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                                'color': 'primary'
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </form>
            </DialogContent>
            <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
            >
                <Button onClick={handleClose} color="danger">Cancelar</Button>
                <Button onClick={handleSubmit} color="success">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
}

ModalDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: date.toLocaleDateString(),
            open: false,
            date: Date()
        };
    }
    
    async componentDidMount() {
        await axios.get("http://localhost:59290/api/Appointments/agenda", {
            auth: {
                username: 'bily98',
                password: '123'
            }
        })
        .then(e => {
            console.log(e);
            e.data.forEach(res => {
                console.log(res);
                events.push(res);
            });

        }).catch(error => console.error(error));
    }

    handleClickOpen = (slotInfo) => {
        dateEvent =  slotInfo.start;
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    selectedEvent = (event) => {

    };

    eventColors = event => {
        let backgroundColor = "event-";
        event.color
            ? (backgroundColor = backgroundColor + event.color)
            : (backgroundColor = backgroundColor + "default");
        return {
            className: backgroundColor
        };
    };

    render() {
        return (
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={11}>
                        <Card>
                            <CardBody>
                                <BigCalendar
                                    selectable
                                    localizer={localizer}
                                    events={events}
                                    defaultView="month"
                                    scrollToTime={new Date(1970, 1, 1, 6)}
                                    defaultDate={new Date()}
                                    onSelectEvent={event => this.selectedEvent(event)}
                                    onSelectSlot={slotInfo => this.handleClickOpen(slotInfo)}
                                    eventPropGetter={this.eventColors}
                                    messages={messages}
                                    components={{
                                        toolbar: CustomToolbar
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <ModalDialog onClose={this.handleClose} open={this.state.open} />
            </div>
        );
    }
}

export default Citas;
