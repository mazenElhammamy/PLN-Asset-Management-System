import React from 'react';
import { FaCar, FaFileAlt, FaRegUser } from "react-icons/fa";

export default class SideTab extends React.Component {
  render() {
    return (
      <div 
      className="bg-white pl-1 border-right h-100 "
      >
            <div 
            className="nav flex-column nav-pills h-100 gray bg-white" 
            id="v-pills-tab" role="tablist" 
            aria-orientation="vertical" 
            >
              <img 
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||259||contestfile_1&flp=1549629075-15868770495c5d76930c87e8-24261090.jpg" 
              className="rounded-circle mx-auto d-block w-25 my-3" 
              alt="..."/>
              <h6 className="p-3 text-muted"><FaCar className="mr-2"/> VEHICLES</h6>
              <a  
              className="nav-link active" 
              id="v-pills-home-tab" 
              data-toggle="pill" 
              href="#v-pills-home" 
              role="tab" aria-controls="v-pills-home" 
              aria-selected="true"><span><FaFileAlt className="FaFileAlt mr-2"/> REPORT</span></a>
              <h6 className="p-3 text-muted">Operating Cost</h6>
              <a className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false">Fuel History</a>
              <a className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false">Total Cost</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Cost/Meter</a>
              <a className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false">Expesne Summary</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Utilization</a>
              <a className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false">Maintenance</a>
              <a className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false">Service</a>
              <span className="m-4"><FaRegUser className="mr-2"/> PEOPLE</span>
            </div>
            
        
      </div>

    );
  }
}
