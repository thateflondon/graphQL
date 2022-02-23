const express = require("express");
// const expressGraphQL = require("express-graphql"); not working
const { graphqlHTTP } = require("express-graphql");

const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();

//create schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Hello World",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World",
      },
    }),
  }),
});

//create route
app.use(
  "/graphql",
  graphqlHTTP({
    //show the interface
    graphiql: true,
    //render schema
    schema: schema,
  })
);
//set server
app.listen(5000, () => console.log("server running"));
