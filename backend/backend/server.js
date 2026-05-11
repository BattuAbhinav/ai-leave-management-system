const express = require("express")
const cors = require("cors")

require("dotenv").config()

const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const User = require("./models/User")
const Leave = require("./models/Leave")

const app = express()

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Backend Running Successfully")
})

app.post("/register", async (req, res) => {

  try {

    const { email, password } = req.body

    const newUser = new User({
      email,
      password
    })

    await newUser.save()

    res.json({
      message: "User Registered Successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Registration Failed"
    })
  }
})

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {

      return res.status(404).json({
        message: "User Not Found"
      })
    }

    if (user.password !== password) {

      return res.status(400).json({
        message: "Wrong Password"
      })
    }

    const token = jwt.sign(

      {
        email: user.email
      },

      "secretkey"
    )

    res.json({
      message: "Login Successful",
      token
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Login Failed"
    })
  }
})

app.post("/apply-leave", async (req, res) => {

  try {

    const {
      email,
      leaveType,
      reason
    } = req.body

    const newLeave = new Leave({
      email,
      leaveType,
      reason
    })

    await newLeave.save()

    res.json({
      message: "Leave Applied Successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Leave Application Failed"
    })
  }
})

app.get("/leaves", async (req, res) => {

  try {

    const leaves = await Leave.find()

    res.json(leaves)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Failed To Fetch Leaves"
    })
  }
})

app.put("/update-leave/:id", async (req, res) => {

  try {

    const { status } = req.body

    await Leave.findByIdAndUpdate(
      req.params.id,
      { status }
    )

    res.json({
      message: "Leave Status Updated"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Update Failed"
    })
  }
})

app.listen(5000, () => {
  console.log("Server Running on Port 5000")
})