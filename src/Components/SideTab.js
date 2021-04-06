import React from 'react';
import { FaCar, FaFileAlt, FaRegUser } from "react-icons/fa";

export default class SideTab extends React.Component {
  render() {
    return (
      <div style={{ height: "100%", background: "white" }}>
        <div className="row " >
          <div className="col" >
            <div className="nav flex-column nav-pills gray" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ height: "100%", background: "white" }} >
            <span><FaCar /> VEHICLES</span>
              <a  className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><span><FaFileAlt /> REPORT</span></a>
              <span>Operating Cost</span>
              <a className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false">Fuel History</a>
              <a className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false">Total Cost</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Cost/Meter</a>
              <a className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false">Expesne Summary</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Utilization</a>
              <a className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false">Maintenance</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Service</a>
            </div>
            <span><FaRegUser /> PEOPLE</span>
          </div>
        </div>
      </div>

    );
  }
}

