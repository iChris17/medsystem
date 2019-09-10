import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
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

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import Close from "@material-ui/icons/Close";

import modalStyle from "../assets/jss/material-dashboard-react/modalStyle";
import {Calendar as BigCalendar, momentLocalizer} from "react-big-calendar";
import Toolbar from 'react-big-calendar/lib/Toolbar'
import moment from "moment";
import 'moment/locale/es';

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);
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
    showMore: total => `+ ${total} événement(s) supplémentaire(s)`
};

function ModalDialog(props) {
    const { onClose, selectedValue, open } = props;
    const classes = modalStyles();

    function handleClose() {
        onClose(selectedValue);
    }

    return (
        <Dialog
            classes={{
                root: classes.center,
                paper: classes.modal
            }}
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
                <h4 className={classes.modalTitle}>Modal title</h4>
            </DialogTitle>
            <DialogContent
                id="modal-slide-description"
                className={classes.modalBody}
            >
                <h5>Are you sure you want to do this?</h5>
            </DialogContent>
            <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
            >
                <Button onClick={handleClose}>Never Mind</Button>
                <Button onClick={handleClose} color="success">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
}

class CustomToolbar extends Toolbar {
    render() {
        return (
            <div className='rbc-toolbar'>
                <span className="rbc-btn-group">
                    <Button color="primary" onClick={() => this.navigate('PREV')}>
                        <ChevronLeft />
                    </Button>
                    <Button color="primary" onClick={() => this.navigate('TODAY')}>
                        Hoy
                    </Button>
                    <Button color={"primary"} onClick={() => this.navigate('NEXT')}>
                        <ChevronRight />
                    </Button>
                </span>
                <span className="rbc-toolbar-label">{this.props.label}</span>
                <span className="rbc-btn-group">
                    <Button color="primary" onClick={this.view.bind(null, 'month')}>
                        Mes
                    </Button>
                    <Button color="primary" onClick={this.view.bind(null, 'week')}>
                        Semana
                    </Button>
                    <Button color={"primary"} onClick={this.view.bind(null, 'day')}>
                        Día
                    </Button>
                    <Button color={"primary"} onClick={this.view.bind(null, 'agenda')}>
                        Agenda
                    </Button>
                </span>
            </div>
        )
    }
    navigate = action => {
        console.log(action);
        this.props.onNavigate(action)
    };
}

ModalDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            dateString: date.toLocaleDateString(),
            open: false
        };
    }

    handleClickOpen = (slotInfo) => {
        console.log(slotInfo);
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    addNewEvent = (e, slotInfo) => {

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
                                    events={this.state.events}
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
