import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import FlagIcon from '../utils/FlagIcons'



export default function FlagIcons() {
    const [countries] = useState([
        { code: 'gr' },
        { code: 'gb' },
        { code: 'us' },
        { code: 'eg' }
    ]);
    const [toggleContents, setToggleContents] = useState(<FlagIcon code='eg' />);


    return (
        <div className="App">
            <Form>
                <Dropdown
                    onSelect={eventKey => {
                        const { code } = countries.find(({ code }) => eventKey === code);

                        setToggleContents(<><FlagIcon code={code} /></>);
                    }}
                >
                    <Dropdown.Toggle variant="white" id="dropdown-flags" className="text-left"style={{width :"186px" ,height:"46px"}}>
                        Timezone: {toggleContents}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {countries.map(({ code }) => (
                            <Dropdown.Item key={code} eventKey={code}><FlagIcon code={code} /></Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Form>
        </div>
    );
}


