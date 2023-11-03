import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { addBooking, getAll, removeById, updateBooking } from "./helpers.js"

const app = express()
app.use(
  cors({
    origin: "http://localhost:5173",
  })
)
app.use(bodyParser.json())
const port = 4005

// Fetch all appointments from file
app.get("/", async (req, res) => {
  const data = await getAll()

  if (typeof data == "string") {
    res.send(data)
  } else {
    res.send(data)
  }
})

// Add Booking
app.post("/", async (req, res) => {
  const body = req.body
  await addBooking({
    id: body.id,
    author: body.author,
    text: body.text,
    start_date: body.start_date,
    end_date: body.end_date,
  }).then(async () => {
    const data = await getAll()

    if (typeof data == "string") {
      res.send(data)
    } else {
      res.send(data)
    }
  })
})

// Update Booking
app.put("/", async (req, res) => {
  const body = req.body
  const booking = {
    id: body.id,
    author: body.author,
    text: body.text,
    start_date: body.start_date,
    end_date: body.end_date,
  }
  await updateBooking(booking).then(async () => {
    const data = await getAll()

    if (typeof data == "string") {
      res.send(data)
    } else {
      res.send(data)
    }
  })
})

// Delete Booking
app.delete("/", async (req, res) => {
  const id = req.query.id
  console.log("deleting", id)
  await removeById(id).then(async () => {
    const data = await getAll()

    if (typeof data == "string") {
      res.send(data)
    } else {
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
