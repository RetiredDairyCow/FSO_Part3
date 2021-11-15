/* const { request, response } = require('express' )*/
const Person = require('./models/person')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')


const app = express()
app.use(express.json())
/* app.use(bodyParser.json()) */
app.use(cors())
app.use(express.static('build'))

morgan.token('type', function (req, res) { 
    if (req.method === 'POST'){
        return JSON.stringify(req.body)
    }
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))


app.get('/api/persons', (request, response) => {
    Person.find({})
    .then(person => {
        response.json(person)
    })
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const result = persons.find(p => p.id === id)
    
    if (result) response.json(result)
    else response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name.length && body.number.length === 0) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    /* date: new Date(), */
  })

  person.save().then(savedPerson => {
    response.status(201).json(savedPerson)
  })

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

/* app.get('/info', (request, response) => {
    const totPersons = Object.keys(persons).length
    
    const info = {
        content: `Phonebook has info for ${totPersons} people`,
        date: new Date()
    }
    response.json(info)
}) */