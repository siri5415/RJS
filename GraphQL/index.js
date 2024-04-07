const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

//import the schema 
const schema = require('./schema/schema')

const port = 4800;
const app = express();


//TODO: to declare a graphql endpoint
app.use('/graphql', expressGraphQL({
    /*
    (1) query parser
    (2) schema validation
    (3) query execution / function resolver
    */

    //Map the schema
    schema,
    graphiql: true  //optional field
}))



app.listen(port, () => {
    console.log(`My server is up and running on port ${port}`);
});