import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Container } from 'react-bootstrap';

function Navigationbar() {
    return (
        <>
            <Navbar bg="light" variant="light" className='my-3'>
                <Container>
                    <Navbar.Brand href="#home">

                        <h1 className="d-inline-block align-top" >Job Monitor | Track your job applications</h1>

                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
export default Navigationbar;

ReactDOM.render(
    <Navigationbar />,
    document.getElementById('navbar')
);
