import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FaRegTrashAlt } from "react-icons/fa";
import * as DataActions from "../Actions/dataAction"
import DataStore from '../Store/dataStore';
import TablePagination from '@material-ui/core/TablePagination';
import FormPopup from './FormPopup';
import ReactFlagsSelect from 'react-flags-select';
const HEADERS = ["Vehicle", "Time", "Total Km", "Volume", "Cost", "Actios"];

export default class VehicleTable extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            page: 0,

        }
        this.getData = this.getData.bind(this);
        this.getSubRows = this.getSubRows.bind(this);
        this.getTableHeaders = this.getTableHeaders.bind(this); 
        this.getTableData = this.getTableData.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this)

    }
    handleChangePage(e, newPage) {
        this.setState({ page: newPage })

    }
    getTableHeaders() {
        return (
            <TableRow className="bg-light ">
                {
                    HEADERS.map((header, index) => {
                        return <TableCell key={index} >{header}</TableCell>
                    })
                }
            </TableRow>
        )
    }
    getSubRows(data) {
        return data.data.map((row) => {
            return (<TableRow key={`${row.id}row`}>
                <TableCell >
                    <div className="d-flex " >
                        <div className="mr-3 " >
                            <img alt="..." style={{
                                borderRadius: "50%",
                                width: "50px",
                                height: "50px"
                            }}
                                src="https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg"
                            />
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
                    <div className="row">
                        <FormPopup />
                        <FaRegTrashAlt style={{ color: "red", fontSize: "1.2rem" }} className="ml-3" />
                    </div>
                </TableCell>
            </TableRow>)
        })
    }
    getTableData() {
        const page = this.state.page;
        const rowsPerPage = 2;
        return this.state.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => {
            return (
                <React.Fragment key={data.id}>
                    <TableRow >
                        <TableCell className='font-weight-bold h4 bg-light  ' colSpan={6}>{data.startDate}</TableCell>
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
                <TablePagination
                    component="div"
                    count={this.state.data.length}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    rowsPerPage={2}
                    rowsPerPageOptions={[]}
                />
                <ReactFlagsSelect
                    countries={["US", "GB", "FR", "DE", "IT"]}
                    customLabels={{ "US": "EN-US", "GB": "EN-GB", "FR": "FR", "DE": "DE", "IT": "IT" }}
                    placeholder="Select Language"
                    showOptionLabel={false}
                   
                    />
                {/* <select class="form-select" aria-label="Default select example">
                    <i class="flag flag-uae"></i>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select> */}
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

