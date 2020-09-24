import React from "react"
import { Nav, Button, Navbar, Container, Jumbotron } from "react-bootstrap"
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
        <Jumbotron className="text-center heroku">
          <h1>The Apollo Data Graph Platform</h1>
          <p>
            Simplify app development by combining APIs, databases, and
            microservices into a single data graph that you can query with
            GraphQL
          </p>

          <Button variant="primary" style={{ marginRight: "10px" }}>
            Start the Tutorial
          </Button>

          <Button variant="primary">Talk to an Expert</Button>
        </Jumbotron>
      </>
    </div>
  )
}
