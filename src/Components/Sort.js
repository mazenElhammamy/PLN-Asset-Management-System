import React from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';




export default function Sort() {
    return (
        <div className="App">
            <Form>
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-flags" className="text-left"style={{width :"186px" ,height:"46px"}}>
                        Sort: Date
                    </Dropdown.Toggle>
                </Dropdown>
            </Form>
        </div>
    );
}


