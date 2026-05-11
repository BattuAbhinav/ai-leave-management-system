import { useState } from "react"
import axios from "axios"

function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {

    try {

      const response = await axios.post(
        "https://ai-leave-backend.onrender.com/register",
        {
          email,
          password
        }
      )

      alert(response.data.message)

    } catch (error) {

      console.log(error)

      alert("Registration Failed")
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>

        <h1>Register</h1>

        <input
          type="email"
          placeholder="Enter Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={styles.button}
          onClick={handleRegister}
        >
          Register
        </button>

      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a"
  },

  box: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  input: {
    padding: "10px",
    fontSize: "16px"
  },

  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
}

export default Register