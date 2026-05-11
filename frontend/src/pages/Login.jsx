import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

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

      alert(response.data.message)

      navigate("/dashboard")

    } catch (error) {

      console.log(error)

      if (error.response) {

        alert(error.response.data.message)

      } else {

        alert("Server Error")
      }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 border rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="w-full bg-black text-white p-3 rounded-lg cursor-pointer hover:bg-gray-800"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center mt-5">

          Don't have an account?

          <Link
            to="/signup"
            className="text-blue-600 ml-2"
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login