import React, { useState } from "react";
import axios from "axios";

function RegisterUser() {
  const styles = {
    title: {
      fontFamily: '"Roboto", sans-serif',
      fontSize: "18px",
      fontWeight: "normal"
    },
    form: {
      position: {
        display: 'flex',
        flexDirection: 'column'
      },
      username: {
        placeholder: {
          display: "block",
          padding: "14px 0 4px",
          width: "100%",
          height: "15px",
          color: "#5f5f5f",
          fontSize: "14px",
          lineHeight: "14px",
          textAlign: "left"
        },
      },
      password: {
        placeholder: {
            display: "block",
            padding: "14px 0 4px",
            width: "100%",
            height: "15px",
            color: "#5f5f5f",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "left"
          }
      },
      submit: {
        border: "1px solid #ff7b32",
        color: "#ffffff",
        background: "#ff5f07",
        height: "40px",
        fontFamily: '"Roboto", sans-serif',
        fontSize: '20px',
        fontWeight: '500',
        marginTop: '26px'
      },
      input: {
        height: '40px'
      }
    },
    registerUser: {
      borderLeft: '1px solid #e1e1e1',
      paddingLeft: '64px',
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_REGISTER_DN_URL}/users`, {
        username,
        password,
      });
      console.log("Registration successful:", response.data);
      setUsername("");
      setPassword("");
      setResult("success")
      alert('Usuario registrado con éxito');
    } catch (error) {
      if(error.response.status === 400) alert('El usuario ya existe')
      else alert('Error al registrar el usuario')
      setResult("failed")
    }
  };

  return (
    <React.Fragment>
      <div style={styles.registerUser}>
        <h3 style={styles.title}>Registrate con tu nombre de usuario</h3>
        <form style={styles.form.position} onSubmit={handleSubmit}>
          <span style={styles.form.username.placeholder}>Usuario</span>
          <input
            style={styles.form.input}
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Nombre de usuario"
          />
          <span style={styles.form.password.placeholder}>Clave</span>
          <input
            style={styles.form.input}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Contraseña"
          />
          <button type="submit" style={styles.form.submit}>
            REGISTRARSE
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default RegisterUser;
