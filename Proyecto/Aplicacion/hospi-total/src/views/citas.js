import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Close from "@material-ui/icons/Close";

import GridContainer from '../assets/components/Grid/GridContainer'
import GridItem from "../assets/components/Grid/GridItem";
import Button from "../assets/components/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "../assets/components/Card/Card";
import CardHeader from "../assets/components/Card/CardHeader";
import CardBody from "../assets/components/Card/CardBody";
import Table from "../assets/components/Table/Table";
import modalStyle from "../assets/jss/material-dashboard-react/modalStyle";

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

ModalDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: date.toLocaleDateString(),
            open: false
        };
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    };

    addDays = () => {
        date.setDate(date.getDate() + 1);
        this.setState({dateString: date.toLocaleDateString()});
    };

    subtractDays = () => {
        date.setDate(date.getDate() - 1);
        this.setState({dateString: date.toLocaleDateString()});
    };

    dateNow = () => {
        date = new Date();
        this.setState({dateString: date.toLocaleDateString()});
    };

    render() {
        return (
            <div>
                <GridContainer>
                    <GridItem xs={6}>
                        <IconButton color={"primary"} onClick={this.subtractDays}>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton color={"primary"} className="left" onClick={this.addDays}>
                            <ChevronRight />
                        </IconButton>
                        <Button color="info" className="center" onClick={this.dateNow}>
                            Hoy
                        </Button>
                    </GridItem>
                    <GridItem xs={6}>
                        <Button color="success" onClick={this.handleClickOpen}>
                            Agregar
                        </Button>
                        <ModalDialog onClose={this.handleClose} open={this.state.open} />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={useStyles.cardTitleWhite}>Fecha {this.state.dateString}</h4>
                                <p className={useStyles.cardCategoryWhite}>
                                    Programación de Citas
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="info"
                                    tableHead={["Paciente", "Médico", "Consultorio"]}
                                    tableData={[
                                        ["Carlos Iván Guadamuz", "Aldo Saenz", "Sala 1"]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default Citas;
