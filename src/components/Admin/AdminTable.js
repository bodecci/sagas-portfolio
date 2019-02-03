import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminRow from './AdminRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const mapStateToProps = reduxState => ({
    reduxState,
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,}, body: {
    fontSize: 14,}
  }))(TableCell);
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    }
});

class AdminTable extends Component {
    componentDidMount() {
    this.getProjects();
    }
    getProjects = () => {
        const action ={type: 'FETCH_PORTFOLIO'};
        this.props.dispatch(action);
    }

    render(){
        return (
            <div>
                <h3>This is the Project Table</h3>
                <pre>{JSON.stringify(this.props.reduxState)}</pre>
                <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell align="right">Action</CustomTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Projects lists goes here */}
                        {this.props.reduxState.projects.map((project) =>
                        < AdminRow key={project.id} project={project} />
                        )}
                    </TableBody>
                </Table>
                </Paper>
            </div>

        );

        
    }
}

export default connect(mapStateToProps) (AdminTable);
