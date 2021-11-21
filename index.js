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

app.get('/info', (request, response, next) => {
  Person.find({})
    .then(people => {
      let count = 0
      if(people.length === 1){
        count = '1 Person'
      }
      else {
        count = `${people.length} people`
      }
      reqDate = new Date()
      const retString = `Phonebook has info for ${count}`
      const retDate = `${reqDate}`
      response.send(`${retString}<br>${retDate}`)


    })
    /*  const totPersons = Object.keys(persons).length

    const info = {
        content: `Phonebook has info for ${totPersons} people`,
        date: new Date()
    }
    response.json(info) */
})

app.get('/api/persons', (request, response) => {
  Person.find({})
    .then(person => {
      response.json(person)
    })
})


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if(person){
        response.json(person)
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => {
      next(error)
      /*  console.log(error)  */
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      if(result) {
        response.status(204).end()
      }
      else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
    /* const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end() */
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => {
      response.status(201).json(savedPerson)
    })
    .catch(error => next(error))

})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const newPerson = {
    name: body.name,
    number: body.number,
  }
  /*{new: true} responds with the new object that was updated instead of the originall*/
  Person.findByIdAndUpdate(request.params.id, newPerson, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformmated id' })
  }
  else if (error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }
  next(error) /*if not a cast error, the middleware passes the error to the default
    express error handler*/
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

