import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar'

import GridContainer from "../../assets/components/Grid/GridContainer";
import GridItem from "../../assets/components/Grid/GridItem";
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "../../assets/components/CustomButtons/Button";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

class CustomToolbar extends Toolbar {
    state = {
        open: false
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <GridContainer>
                <GridItem sm={12}>
                    <div className='rbc-toolbar'>
                        <span className="rbc-btn-group" id="toolbar-1">
                            <ButtonGroup color="primary">
                                <Button color={"primary"} onClick={() => this.navigate('PREV')}>
                                    <ChevronLeft />
                                </Button>
                                <Button color={"primary"} onClick={() => this.navigate('TODAY')}>
                                    Hoy
                                </Button>
                                <Button color={"primary"} onClick={() => this.navigate('NEXT')}>
                                    <ChevronRight />
                                </Button>
                            </ButtonGroup>
                        </span>
                        <span className="rbc-toolbar-label">{this.props.label}</span>
                        <span className="rbc-btn-group">
                            <ButtonGroup className="views" color="primary" aria-label="outlined primary button group">
                                <Button color={"primary"} onClick={this.view.bind(null, 'month')}>
                                    Mes
                                </Button>
                                <Button color={"primary"} onClick={this.view.bind(null, 'week')}>
                                    Semana
                                </Button>
                                <Button color={"primary"} onClick={this.view.bind(null, 'day')}>
                                    Día
                                </Button>
                                <Button color={"primary"} onClick={this.view.bind(null, 'agenda')}>
                                    Agenda
                                </Button>
                            </ButtonGroup>
                            <div id="toolbar-2">
                                <Button
                                    buttonRef={node => {
                                        this.anchorEl = node;
                                    }}
                                    className="border-radius-button"
                                    color="primary"
                                    size="sm"
                                    aria-owns={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleToggle}
                                    justIcon
                                    round
                                >
                                    <ArrowDropDownIcon />
                                </Button>
                                <Popper className="up" open={open} anchorEl={this.anchorEl} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                    {...TransitionProps}
                                    id="menu-list-grow"
                                    style={{
                                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}
                                    >
                                    <Paper>
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>
                                            <MenuItem
                                                onClick={this.view.bind(null, 'month')}
                                            >
                                                Mes
                                            </MenuItem>
                                            <MenuItem
                                                onClick={this.view.bind(null, 'week')}
                                            >
                                                Semana
                                            </MenuItem>
                                            <MenuItem
                                                onClick={this.view.bind(null, 'day')}
                                            >
                                                Día
                                            </MenuItem>
                                            <MenuItem
                                                onClick={this.view.bind(null, 'agenda')}
                                            >
                                                Agenda
                                            </MenuItem>
                                        </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                    </Grow>
                                )}
                                </Popper>
                            </div>
                        </span>
                    </div>
                </GridItem>
            </GridContainer>
        )
    }

    navigate = action => {
        this.props.onNavigate(action)
    };
}

export default CustomToolbar;
