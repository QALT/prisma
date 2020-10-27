const { GraphQLServer } = require('graphql-yoga')
 
const posts = [
    {
        id: 1,
        title: 'Article one',
        content: 'This is Article One'
    },
    {
        id: 2,
        title: 'Article Two',
        content: 'This is Article Two'
    },
    {
        id: 3,
        title: 'Article Three',
        content: 'This is Article Three'
    }
];

const typeDefs = `
    type Query {
        post(postId: Int!): Post
        allPosts: [Post!]!
    }
    type Mutation {
        createPost(title: String!, content: String!): Post
    }
    type Post {
        id: Int
        title: String
        content: String
    }
`
const resolvers = {
    Query: {
        post: (_, { postId }, context, info) => {
            return posts.filter(post => post.id === postId)[0];
        },
        allPosts: (_, args, context, info) => {
            return posts;
        }
    },
    Mutation: {
        createPost(_, args, context, info) {
            const id = posts[posts.length-1].id + 1;
            const post = {id: id, ...args}
            posts.push(post);
            return post;
        }
    }
}
 
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))