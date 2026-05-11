import { useEffect, useState } from "react"
import axios from "axios"

function LeaveHistory() {

  const [leaves, setLeaves] = useState([])

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:5000/update-leave/${id}`,
        {
          status
        }
      )

      fetchLeaves()

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchLeaves()

  }, [])

  const fetchLeaves = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/leaves"
      )

      setLeaves(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div className="min-h-screen bg-slate-900 p-8">

      <h1 className="text-4xl font-bold text-white text-center mb-10">
        Leave History
      </h1>

      <div className="grid gap-6">

        {
          leaves.map((leave, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl"
            >

              <p className="text-lg mb-2">
                <span className="font-bold">
                  Email:
                </span> {leave.email}
              </p>

              <p className="text-lg mb-2">
                <span className="font-bold">
                  Leave Type:
                </span> {leave.leaveType}
              </p>

              <p className="text-lg mb-4">
                <span className="font-bold">
                  Reason:
                </span> {leave.reason}
              </p>

              <div className="flex items-center justify-between">

                <span
                  className={`px-4 py-2 rounded-lg text-white font-bold
                  ${
                    leave.status === "Approved"
                    ? "bg-green-600"
                    : leave.status === "Rejected"
                    ? "bg-red-600"
                    : "bg-yellow-500"
                  }`}
                >
                  {leave.status}
                </span>

                <div className="flex gap-3">

                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    onClick={() =>
                      updateStatus(leave._id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    onClick={() =>
                      updateStatus(leave._id, "Rejected")
                    }
                  >
                    Reject
                  </button>

                </div>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default LeaveHistory