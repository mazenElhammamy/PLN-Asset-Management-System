import React, { Component } from 'react';
import SideTab from './SideTab';
import VehicleTable from './VehicleTable';
export default class SystemHome extends Component {
  
    render() {
        return (
            <div className="row bg-light  " >
                <div className=" col-2 m-0" >
                    <SideTab />
                </div>
                <div className="  col-10  m-0"  >
                    <div style={{background:"white" }} className="d-flex justify-content-between align-items-center p-2 mb-4">
                       <p>PLN Asset Management System</p>
                       <div>
                       <img 
              src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||259||contestfile_1&flp=1549629075-15868770495c5d76930c87e8-24261090.jpg" 
              className="rounded-circle mx-auto d-block  my-3" 
              alt="..."
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px"
            }} />
                           </div> 
                       
                        </div>
                    <VehicleTable />
                </div>
            </div>

        );
    }
}
