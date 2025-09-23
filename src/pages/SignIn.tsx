import { Row, Col, Form } from "react-bootstrap";

SignIn.route = {
  path: "/signIn",
  menuLabel: "Sign In",
  index: 1,
};

export default function SignIn() {
  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}
