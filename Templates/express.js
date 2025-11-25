import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(json)


//get the details
app.get('/view', async (req, res) => {
    res.send('hello')
})

//add new details
app.post('/add', (req, res) => {
    
})

//make changes in the database
app.put('/edit', (req, res) => {
    
})

//delete in the database
app.delete('/delete', (req, res) => {
    
})

app.listen(3000, () => {
    try {
        console.log(`The server is running on port: ${process.env.PORT}`)
    } catch(err) {
        console.log(err) 
    }
})