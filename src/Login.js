
import {Card, Form, Button, Alert} from 'react-bootstrap'
import React, {useState, useRef, useEffect} from 'react'
import {useAuth} from './contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
function Login() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const {login} =useAuth()
    const [error, setError]= useState('')
    const history= useHistory()

    const [loading, setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()

        
        try{
            setLoading(true)
            setError('')
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')

        }catch{
            setError('Failed to Login in')
        }
        setLoading(false)




    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error&& <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref= {emailRef}required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" ref= {passwordRef}required/>
                        </Form.Group>
                        <Button type="submit" disabled={loading} className ="w-100">Login </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>

            </div>
            
        </div>
    )
}

export default Login
