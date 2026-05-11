import { useState } from "react"
import axios from "axios"

function ApplyLeave() {

  const [email, setEmail] = useState("")
  const [leaveType, setLeaveType] = useState("")
  const [reason, setReason] = useState("")

  const handleApplyLeave = async () => {

    if (!email || !leaveType || !reason) {

      alert("Please Fill All Fields")
      return
    }

    try {

      const response = await axios.post(
        "http://localhost:5000/apply-leave",
        {
          email,
          leaveType,
          reason
        }
      )

      alert(response.data.message)

    } catch (error) {

      console.log(error)

      alert("Leave Application Failed")
    }
  }

  return (

    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Apply Leave
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Leave Type"
          className="w-full p-3 border rounded-lg mb-4"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        />

        <textarea
          placeholder="Enter Reason"
          className="w-full p-3 border rounded-lg mb-4 h-[120px]"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
          onClick={handleApplyLeave}
        >
          Apply Leave
        </button>

      </div>

    </div>
  )
}

export default ApplyLeave