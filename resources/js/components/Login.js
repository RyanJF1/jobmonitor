import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

function Login() {
    return (
        <>
            <div className='container mx-auto mt-4' style={{ width: '40%' }}>
                <Card className='p-4'>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ color: 'white' ,float:'right'}}>
                            Login
                        </Button>
                    </Form>
                </Card>
            </div>
        </>
    );
}
export default Login;

ReactDOM.render(
    <Login />,
    document.getElementById('login')
);
