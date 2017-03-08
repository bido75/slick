export default `
type Channel{
  _id : String!
	name: String!  #name of the channel,required
	messages: [Message]! #messages, required , 0 or more
  #members: [handle]
}

# type: Member{
#   id: Int!
#   firstName: String
#   lastName: String
#   userName: String
#   email: String
#   posts: [Message]
# }
type Message{
	_id: String!
	handle: String!
	text: String!
}

type Query{
  channels: [Channel]
  channel(name: String!): Channel
}

type Mutation{
  createMessage(channelName: String!, messageUser: String!, messageBody: String!): Message
  createChannel(name: String!): Channel
}

schema {
  query: Query
  mutation: Mutation
}

`;
