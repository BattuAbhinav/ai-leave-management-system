import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import Leave from "./models/Leave.js"
import User from "./models/User.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected")
})

.catch((error) => {

  console.log(error)
})

app.get("/", (req, res) => {

  res.send("Server Running")
})

/* ================= SIGNUP ================= */

app.post("/signup", async (req, res) => {

  try {

    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists"
      })
    }

    const newUser = new User({

      email,
      password,
      role: "member"
    })

    await newUser.save()

    res.json({

      message: "Signup Successful"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message: "Server Error"
    })
  }
})

/* ================= LOGIN ================= */

app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({

      email,
      password
    })

    if (!user) {

      return res.status(400).json({

        message: "Invalid Credentials"
      })
    }

    res.json({

      message: "Login Successful",
      role: user.role
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message: "Server Error"
    })
  }
})

/* ================= APPLY LEAVE ================= */

app.post("/apply-leave", async (req, res) => {

  try {

    const newLeave = new Leave(req.body)

    await newLeave.save()

    res.json({

      message: "Leave Applied Successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message: "Server Error"
    })
  }
})

/* ================= GET LEAVES ================= */

app.get("/leaves", async (req, res) => {

  try {

    const leaves = await Leave.find()

    res.json(leaves)

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message: "Server Error"
    })
  }
})

/* ================= UPDATE STATUS ================= */

app.put("/update-leave/:id", async (req, res) => {

  try {

    const { status } = req.body

    await Leave.findByIdAndUpdate(

      req.params.id,
      { status }
    )

    res.json({

      message: "Status Updated"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message: "Server Error"
    })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`)
})