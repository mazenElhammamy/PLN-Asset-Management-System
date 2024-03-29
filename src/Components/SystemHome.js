import React, { Component } from 'react';
import SideTab from './SideTab';
import VehicleTable from './VehicleTable';
export default class SystemHome extends Component {
  
    render() {
        return (
            <div className="row bg-light" >
            <div className="col-md-2 p-0" >
                <SideTab />
            </div>
            <div className="col-md-10 p-0"  >
                <div 
                 className="d-flex justify-content-between align-items-center p-2 mb-4 bg-white " >
                    <p style={{paddingLeft:"72px"}}>PLN Asset Management System</p>
                    <div className="p-2">
                        <img
                            src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||259||contestfile_1&flp=1549629075-15868770495c5d76930c87e8-24261090.jpg"
                            className="rounded-circle ml-auto my-1"
                            alt="..."
                            style={{
                                width: "50px",
                                height: "50px"
                            }} 
                            />
                    </div>

                </div>
                <div className="m-4">
                <VehicleTable />
                </div>
              
            </div>
        </div>

        );
    }
}
