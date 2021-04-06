import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import * as DataActions from "../Actions/dataAction"
import DataStore from '../Store/dataStore';

const HEADERS = ["Vehicle", "Time", "Total Km", "Volume", "Cost", "Actios"];

export default class VehicleTable extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.getData = this.getData.bind(this);
        this.getSubRows = this.getSubRows.bind(this);
        this.getTableHeaders = this.getTableHeaders.bind(this);
        this.getTableData = this.getTableData.bind(this);
    }
    getTableHeaders() {
        return (
            <TableRow style={{ background: "#F5F5F5	" }}>
                {
                    HEADERS.map((header) => {
                        return <TableCell >{header}</TableCell>

                    })
                }
            </TableRow>
        )


    }
    getSubRows(data) {
        return data.data.map((row) => {
            return (<TableRow key={`${row.id}${data.id}`}>
                <TableCell >
                    <div className="d-flex " >
                        <div className="mr-3" >
                            <img style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px"
                            }}
                                src="https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg" />
                        </div>
                        <div >
                            {row.vehicle} <br />{row.status}
                        </div>
                    </div>
                </TableCell>
                <TableCell >{row.time}</TableCell>
                <TableCell >{row.odometer}</TableCell>
                <TableCell >{row.volume}</TableCell>
                <TableCell  >{row.volume}</TableCell>
                <TableCell >
                    <FaEdit />
                    <FaRegTrashAlt />
                </TableCell>
            </TableRow>)


        })
    }

    getTableData() {
        return this.state.data.map((data) => {
            return (
                <React.Fragment>
                    <TableRow key={data.id}>
                        <TableCell className='font-weight-bold h4  ' style={{ background: "#F5F5F5	" }} colSpan={6}>{data.startDate}</TableCell>
                    </TableRow>
                    {
                        this.getSubRows(data)
                    }
                </React.Fragment>
            )
        })
    }


    componentDidMount() {
        DataActions.getAll();
        DataStore.on("change", this.getData);
    }
    getData() {
        this.setState({ data: DataStore.getAll() })
    }
    componentWillUnmount() {
        DataStore.removeListener("change", this.getData);

    }

    render() {
        return (
            <div >
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead >
                            {this.getTableHeaders()}
                        </TableHead>
                        <TableBody>
                            {this.getTableData()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        )
    }
}

