import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "https://ai-leave-backend.onrender.com/login",
        {
          email,
          password
        }
      )

      localStorage.setItem(
        "token",
        response.data.token
      )

      navigate("/dashboard")

    } catch (error) {

      alert(error.response.data.message)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-900">

      <div className="bg-white p-8 rounded-2xl w-[350px] shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-black text-white p-3 rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  )
}

export default Login