import React from 'react'
import { Button,Form } from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css' ;

function App() {
    return (
        <div className="Father">
             <div className="Container">
            <img src="/logo.png" alt="logo" />
            {/* <h1 class="NXVPg Szr5J  coreSpriteLoggedOutWordmark  ">Instagram</h1> */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </Form>
            </div>
            <div className="inscription">
                <p>
                  Vous n’avez pas de compte ?
                </p>
                <a href="/">Inscrivez-vous</a>

            </div>
            
        
        </div>
       
    )
}

export default App
