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
app.put('/', async (req, res) => {
    res.send("Updated Booking")
})

// Delete Booking
app.delete('/',async (req, res) => {
    res.send("Deleted Booking")
})



app.listen(port, () => {
  console.log(`Elles-alon api listening on port ${port}`)
})