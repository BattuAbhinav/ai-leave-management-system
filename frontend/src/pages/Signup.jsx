import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSignup = async () => {

    try {

      await axios.post(
        "https://ai-leave-backend.onrender.com/signup",
        {
          email,
          password
        }
      )

      alert("Signup Successful")

      navigate("/")

    } catch (error) {

      alert("Signup Failed")
    }
  }

  return (

    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl w-96">

        <h1 className="text-4xl font-bold text-center mb-8">
          Signup
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Signup
        </button>

        <p className="mt-4 text-center">

          Already have account?

          <Link
            to="/"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Signup