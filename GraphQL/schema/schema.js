const graphql = require('graphql');
// const _ = require("loadash");
const axios = require("axios");


const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLInt,
   GraphQLSchema,
   GraphQLNonNull
} = graphql;

//create a type for the User
const UserType = new GraphQLObjectType({
    name : 'user',
    fields: {
    "id": {type: GraphQLString},
    "firstname": {type: GraphQLString},
    "age": {type: GraphQLInt},
    "company": {type: GraphQLString}
    }
})


//create a rootquery
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
    user: {
        type: UserType,
        args: {
            id:{
                type: GraphQLString
            }
        },
        resolve(parentValue, args){
         //make API call to get the user data
         return axios
         .get(`https://localhost:3000/users?id=${args.id}`)
         .then(resp =>{
            return resp.data[0]
         })
         .catch(err => err);
        }
    }
    }
})


//create a mutation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstname: {
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        company: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {

        const {
             firstname,
             age,
             company
        } = args;

        //make API call to get the user data
        return axios
          .post(`https://localhost:3000/users`,{firstname,age,company })
          .then((resp) => {
            return resp.data;
          })
          .catch((err) => err);
      },
    }
  }
});


//export the schema (query and the mutation)
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
});