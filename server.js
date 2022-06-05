// since i will be using express for the app, i need to make sure my app has access to express
const express = require('express')
// we need something to hold express for us so we can actively use the methods that comes with express
const app = express() // we stroing express into app
const cors = require('cors')
const PORT = 3000 // related to line 11
app.use(cors())

//now lets create an object for these athletes
const athletes = {
    'lebron james':{
        'age': 38,
        'birthName': 'LeBron Raymone James Sr.',
        'birthPlace': 'Akron, Ohio, U.S.',
        'sport': 'Basket Ball',
        'net worth': '$480 Million'
    }, 
    'cristiano ronaldo': {
        'age': 37,
        'birthName': 'Cristiano Ronaldo dos Santos Aveiro.',
        'birthPlace': 'Funchal, Madeira, Portugal',
        'sport': 'Football or Soccer',
        'net worth': '$500 million'
    },
    'floyd mayweather':{
        'age': 45,
        'birthName': 'Floyd Joy Mayweather Jr..',
        'birthPlace': '	Grand Rapids, Michigan, U.S.',
        'sport': 'Boxing',
        'net worth': '$450 million' 
    },
    'roger federer':{
        'age': 39,
        'birthName': 'Roger Federer',
        'birthPlace': 'Basel, Switzerland.',
        'sport': 'Tennis',
        'net worth': '$450 million'
    },
    'tiger woods': {
        'age': 47,
        'birthName': 'Eldrick Tont Woods',
        'birthPlace': 'Cypress, California.',
        'sport': 'Golf',
        'net worth': '$800 million' 
    },
    'not one of the best':{
        'age': 'Not on the list',
        'birthName':'Not on the list',
        'birthPlace': 'Not on the list',
        'sport': 'Not on the list',
    }

}


// we need to setup my server to hear a request and generate a response
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html') //sending html file
})// we can pass in what we are looking for by creating a path with a forward slash....This is now a get request

app.get('/api', (request, response) => {
    response.json(athletes)
})

//now we want to create another path for our api
app.get('/api/:atheleteName', (request, response) =>{
   const athleteName = request.params.atheleteName.toLowerCase()
   if(athletes[athleteName]){
    response.json(athletes[athleteName])
   }else{
       response.json(athletes['not one of the best'])
   }
    
   
   //when we hear somebody request on the API route, we want to reposnd with a JSON
    //response.json(athletes)
})
// i would like to have my users make a request of a particular athlete and get a response back.



// Now we setup a server but what we need to instruct it to do something or listen and its going to listen to a port number
app.listen(process.env.PORT || PORT, () => {
   console.log(`The server is running on ${PORT}! You better go catch it!`) 
}) // we told the server to run at port 8000

