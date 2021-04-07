import React from 'react';
import { FaCar, FaFileAlt, FaRegUser, FaListUl } from "react-icons/fa";
import { Link  } from 'react-router-dom';
export default class SideTab extends React.Component {
  render() {
    return (
      <div className="bg-white navbar-expand-md mr-0 h-100">
        <button className="navbar-toggler fixed-top m-2 mt-5 " 
        type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-dark">
        <FaListUl/>
      </span>
      </button>
      
      <div 
      className="bg-white pl-1 border-right  collapse navbar-collapse"
      id="navbarSupportedContent"
      >
            <div 
            className="nav flex-column nav-pills h-100 gray bg-white" 
            id="v-pills-tab" role="tablist" 
            aria-orientation="vertical" 
            >
              <img 
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||259||contestfile_1&flp=1549629075-15868770495c5d76930c87e8-24261090.jpg" 
              className="rounded mx-auto d-block my-3"
              style={{
                width:"80px",
                height:"80px"
              }} 
              alt="..."/>

              <h6 className="p-3 text-muted"><FaCar className="mr-2"/> VEHICLES</h6>
              <Link  
              className="nav-link active" 
              id="v-pills-home-tab" 
              data-toggle="pill" 
              to="#"  
              role="tab" 
              aria-controls="v-pills-home" 
              aria-selected="true"><span><FaFileAlt className="FaFileAlt mr-2"/> REPORT</span></Link>
              <h6 className="p-3 text-muted">Operating Cost</h6>
              <Link to="#" className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false"  >Fuel History</Link>
              <Link to="#" className="nav-link" data-toggle="pill"  role="tab"  aria-selected="false"  >Total Cost</Link>
              <Link to="#" className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false"  >Cost/Meter</Link>
              <Link to="#"className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false"  >Expesne Summary</Link>
              <Link to="#" className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false"  >Utilization</Link>
              <Link to="#" className="nav-link"  data-toggle="pill" role="tab"  aria-selected="false"  >Maintenance</Link>
              <Link to="#"className="nav-link"  data-toggle="pill"  role="tab"  aria-selected="false"  >Service</Link>
              <span className="m-4"><FaRegUser className="mr-2"/> PEOPLE</span>
            </div>
            
        
      </div>
      </div>

    );
  }
}
