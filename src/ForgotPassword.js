import React, {useState, useRef} from 'react'
import {useAuth} from './contexts/AuthContext'
import {Card, Form ,Alert, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

function ForgotPassword() {
    const emailRef=useRef()
    const {resetPassword} =useAuth()
    const [error, setError]= useState('')
    const [message, setMessage]= useState('')
    const history= useHistory()

    const [loading, setLoading] = useState(false)
    async function handleSubmit(e){
        e.preventDefault()

        
        try{
            setLoading(true)
            setError('')
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        

        }catch{
            setError('Failed to reset password')
        }
        setLoading(false)




    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Password Reset</h2>
                    {message && <Alert variant="info">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" ref= {emailRef}required/>
                        </Form.Group>
                        <Button type="submit" disabled={loading} className ="w-100">Reset Password </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>

            </div>
            
        </div>
    )
}

export default ForgotPassword
