import React, { useState } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../redux/actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const changeHandler = (e) => setInput((prev) => (
    { ...prev, [e.target.name]: e.target.value }));
  const submitHandler = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(loginUserAsync(input));
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup floating>
            <Input
              value={input.email}
              onChange={changeHandler}
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              value={input.password}
              onChange={changeHandler}
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>
          <Button>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
