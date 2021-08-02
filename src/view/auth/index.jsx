import React from "react";
import { change, login } from "../../store/actions/Auth.action";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const { credentials, success } = useSelector((state) => state.AuthReducer);

  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="CAR CRM" height="48" />
              <Typography className="mt-3 mb-3" variant="h6" component="h1">
                Plataforma para Revenda de veiculos
              </Typography>
              <TextField
                label="E-mail"
                type="email"
                autoComplete="email"
                value={credentials.email}
                margin="normal"
                onChange={(text) =>
                  dispatch(change({ email: text.target.value }))
                }
              />
              <TextField
                label="Senha"
                type="password"
                value={credentials.password}
                margin="normal"
                onChange={(text) =>
                  dispatch(change({ password: text.target.value }))
                }
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="mt-4 mb-4"
                onClick={() => dispatch(login(credentials))}
              >
                Entrar
              </Button>

              {success && <Redirect to="/vehicles" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
