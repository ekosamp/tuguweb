import React from "react"
import { Nav, Button, Navbar, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

export default function Home() {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Tugu Web</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav.Link href="#home">Platform</Nav.Link>
              <Nav.Link href="#features">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Developers</Nav.Link>
              <Nav.Link href="#pricing">Enterprise</Nav.Link>
              <Nav.Link href="#pricing">Company</Nav.Link>
            </Nav>
            <Nav.Link className="btn-sign" href="#pricing">
              Sign In
            </Nav.Link>
          </Container>
        </Navbar>
      </>
    </div>
  )
}
