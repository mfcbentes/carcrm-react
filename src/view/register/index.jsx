import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { change, register } from "../../store/actions/Register.action";
import { Link, Redirect } from 'react-router-dom';

export default function Register() {
  const dispatch = useDispatch();
  const { user, error, success } = useSelector(
    (state) => state.RegisterReducer
  );

  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="" height="48" />
              <Typography variant="h6" component="h1" className="mt-3">
                Crie sua conta, teste grátis!
              </Typography>
            </div>

            <TextField
              error={(error.name) && true}
              margin="normal"
              label="Nome"
              value={user.name}
              onChange={text => {
                dispatch(change({ name: text.target.value }));
                if (error.name && delete error.name);
              }}
            />

            {(error.name) &&
              <strong className="text-danger">{error.name[0]}</strong>
            }

            <TextField
              error={(error.email) && true}
              margin="normal"
              label="E-mail"
              value={user.email}
              type="email"
              autoComplete="email"
              onChange={text => {
                dispatch(change({ email: text.target.value }));
                if (error.email && delete error.email);
              }}
            />

            {(error.email) &&
              <strong className="text-danger">{error.email[0]}</strong>
            }

            <TextField
              error={(error.password) && true}
              margin="normal"
              label="Senha"
              value={user.password}
              type="password"
              onChange={text => {
                dispatch(change({ password: text.target.value }));
                if (error.password && delete error.password);
              }}
            />

            {(error.password) &&
              <strong className="text-danger">{error.password[0]}</strong>
            }

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="mb-4 mt-4"
              onClick={() => dispatch(register(user))}
            >
              Cadastre-se
            </Button>

            <div className="text-center">
              <Link to="/login" className="mt-4 text-danger">
                Fazer login
              </Link>
            </div>

            {(success) &&
              <Redirect to="/vehicles" />
            }

          </div>
        </div>
      </div>
    </div>
  );
}
