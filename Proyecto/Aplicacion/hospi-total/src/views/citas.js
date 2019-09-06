import React, { Component } from 'react';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import GridContainer from '../assets/components/Grid/GridContainer'
import GridItem from "../assets/components/Grid/GridItem";
import Button from "../assets/components/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import Card from "../assets/components/Card/Card";
import CardHeader from "../assets/components/Card/CardHeader";
import CardBody from "../assets/components/Card/CardBody";
import Table from "../assets/components/Table/Table";
import {makeStyles} from "@material-ui/core/styles";

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
let date = new Date();

class Citas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateString: date.toLocaleDateString()
        };
    }
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
                        <Button color="success">
                            Agregar
                        </Button>
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
                                    tableHead={["Name", "Country", "City", "Salary"]}
                                    tableData={[
                                        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
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
