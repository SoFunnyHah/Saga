import React, { useState } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { signupUserAsync } from '../../redux/actions/userActions';

export default function SignUp() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const changeHandler = (e) => setInput((prev) => (
    { ...prev, [e.target.name]: e.target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signupUserAsync(input));
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={submitHandler}>
          <FormGroup floating>
            <Input
              value={input.name}
              onChange={changeHandler}
              id="exampleName"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Label for="exampleName">
              Name
            </Label>
          </FormGroup>
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
            Signup
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
