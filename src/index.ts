import express from 'express'
import fs from 'fs'
import { addBooking, getAll, getById } from './helpers.js'

const app = express()
const port = 4005

// Fetch all appointments from file
app.get('/',async (req, res) => {
    const data = await getAll()
    
    if(typeof data == "string"){
        res.send(data)
    }else{
        res.send(data)
    }

})

// Add Booking
app.post('/', async (req, res) => {
    // await addBooking({id:5, author: "James", start_date: "04-11-2023 09:00", end_date: "04-11-2023 10:20"})
    res.send("Saved Booking")
})

// Update Booking
app.put('/booking', async (req, res) => {
    res.send("Saved Booking")
})

// Delete Booking
app.delete('/booking',async (req, res) => {
    res.send("Saved Booking")
})



app.listen(port, () => {
  console.log(`Elles-alon api listening on port ${port}`)
})