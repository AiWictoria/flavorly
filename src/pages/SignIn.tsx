import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

SignIn.route = {
  path: "/signIn",
  menuLabel: "Sign In",
  index: 1,
};

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });

  function setProperty(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      alert("INLOGGAD");
    } else {
      alert("Något gick fel!");
    }
    const data = await res.json();
    console.log(data);
  }
  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={setProperty}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={setProperty}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            <Button type="submit">Sign In</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
