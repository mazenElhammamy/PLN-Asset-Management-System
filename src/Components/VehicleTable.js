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
import FlagIcons from './Flags';
import Sort from './Sort';

const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
const HEADERS = ["Vehicle", "Time", "Total Km", "Volume", "Cost", "Actios"];
const ROWS_NUMBER_PER_PAGE = 6;

export default class VehicleTable extends Component {
    constructor() {
        super()
        this.state = {
            dataLength: 0,
            page: 0,
            dateMap: {},
            pagesMap: {},
        }
        this.getData = this.getData.bind(this);
        this.getTableHeaders = this.getTableHeaders.bind(this);
        this.getTableData = this.getTableData.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.getTableRow = this.getTableRow.bind(this);
        this.getPagesMap = this.getPagesMap.bind(this);
        this.getStatusColor = this.getStatusColor.bind(this);
    }
    componentDidMount() {
        DataActions.getAll();
        DataStore.on("change", this.getData);
    }

    componentWillUnmount() {
        DataStore.removeListener("change", this.getData);
    }
    handleChangePage(e, newPage) {
        this.setState({ page: newPage });
    }

    handleDelete(id) {
        DataActions.deleteOne(id);
    }
    getPagesMap(dateMap) {
        var count = 0;
        var dataIndex = 0;
        var dateIndex = 0;
        var pageNumber = 0;
        const pagesMap = {};
        for (const date in dateMap) {
            if (count === 0) { // new page
                pagesMap[pageNumber] = {
                    dataIndex: 0,
                    dateIndex,
                }
            }
            const data = dateMap[date];
            const dataLength = data.length;
            if (dataLength > 0) {
                count += dataLength;
                if (count > ROWS_NUMBER_PER_PAGE) {
                    const reminder = count - ROWS_NUMBER_PER_PAGE;
                    count = reminder;
                    pageNumber++;
                    dataIndex = dataLength - reminder;
                    pagesMap[pageNumber] = {
                        dataIndex,
                        dateIndex,
                    }
                } else if (count === ROWS_NUMBER_PER_PAGE) { // reset count and new page
                    count = 0;
                    pageNumber++;
                }
            }
            dateIndex++;
        }
        return pagesMap;
    }
    getData() {
        const allData = DataStore.getAll();
        const pagesMap = this.getPagesMap(allData.dateMap);
        this.setState({ dataLength: allData.dataLength, dateMap: allData.dateMap, pagesMap });
    }

    getTableHeaders() {
        return (
            <TableRow className="bg-light ">
                {
                    HEADERS.map((header, index) => {
                        return <TableCell key={index}>{header}</TableCell>
                    })
                }
            </TableRow>
        )
    }
    getStatusColor(status){
        var statusStyle = {};
        switch (status) {
            case "Active":
                statusStyle = { color: "#21A11E" }
                break;
            case "In shop":
                statusStyle = { color: "#C1931B" }
                break;
            default:
                statusStyle = { color: "#C11B1B" }
        }
        return statusStyle ;

    }
    getTableRow(row) {
        const statusStyle = this.getStatusColor(row.status);
       
        return <TableRow key={row.id}>
            <TableCell>
                <div className="d-flex row">
                    <div className="  col-2">
                        <img alt="..." style={{
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px"
                        }}
                            src="https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg"
                        />
                    </div>
                    <div className=" col-10" >
                        {row.name}<br />
                        <span style={statusStyle}>
                            {row.status}
                        </span>

                    </div>
                </div>
            </TableCell>
            <TableCell>{row.time}</TableCell>
            <TableCell>{row.Total_Km}</TableCell>
            <TableCell>{row.volume}</TableCell>
            <TableCell>{row.cost}</TableCell>
            <TableCell>
                <div className="row">
                    <div className="col-sm">
                        <FormPopup data={row} />
                    </div>
                    <div className="col-sm">
                        <FaRegTrashAlt style={{ color: "#FE4D5C", fontSize: "1.2rem" }} className="ml-3" onClick={() => this.handleDelete(row.id)} />
                    </div>
                </div>
            </TableCell>
        </TableRow>
    }
    getTableData() {
        const page = this.state.page;
        const paginationStartInfo = this.state.pagesMap ? this.state.pagesMap[page] : null;
        const table = [];
        if (!paginationStartInfo) {
            return table;
        }
        const dateIndex = paginationStartInfo.dateIndex;
        const dataIndex = paginationStartInfo.dataIndex;
        const dates = Object.keys(this.state.dateMap);
        let i = dateIndex;
        let j = dataIndex;
        let count = 0;
        while (i < dates.length && count < ROWS_NUMBER_PER_PAGE) {
            const date = dates[i];
            i++;
            const subRows = [];
            const dateSubRows = this.state.dateMap[date];
            while (j < dateSubRows.length && count < ROWS_NUMBER_PER_PAGE) {
                const row = (this.state.dateMap[date])[j];
                count++;
                j++;
                subRows.push(
                    this.getTableRow(row)
                )
            }
            const d = new Date(date)
            table.push(
                <React.Fragment key={date}>
                    <TableRow className="bg-light fw-bold h6 dateRow" >
                        <TableCell  >{d.toLocaleDateString(undefined, DATE_OPTIONS)}</TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                    {
                        subRows
                    }
                </React.Fragment>);
            if (j === this.state.dateMap[date].length) {
                j = 0;
            }
        }
        return table;
    }



    render() {
        return (
            <div >
                <div className="row justify-content-end my-2 w-100">
                    <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5">
                        <TablePagination
                            component="div"
                            count={this.state.dataLength}
                            page={this.state.page}
                            onChangePage={this.handleChangePage}
                            rowsPerPage={ROWS_NUMBER_PER_PAGE}
                            rowsPerPageOptions={[]}
                        />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5" >
                        <FlagIcons />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-5" >
                        <Sort />
                    </div>
                </div>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
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

