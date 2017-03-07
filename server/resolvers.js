const channels = [
  {
    name: 'foo',
    messages: [
      {id:1 ,handle: 'jasper', text: 'Are you ready for lunch?'},
      {id:3 ,handle: 'rainey', text: 'Just after this please'}
    ]
  },
  {
    name: 'bar',
    messages:[
      {id:2 ,handle: 'rainey', text: 'Just after this please'}
    ]
  }
];

const resolvers = {
  Query:{
    channels(){
      return channels;
    },
    // Channel(){
    //   return ''
    // }
  },
  // Mutation {
  //
  // },
};

export default resolvers;
