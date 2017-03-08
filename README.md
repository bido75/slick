# slick
Metoer slack clone

```
<Root>
<ChannelList />
<ChannelDetail>
  <ChannelHistory>
    <ChannelMessage />
    <ChannelMessage />
    <ChannelMessage />
  </ChannelHistory>
  <NewMessageForm />
</ChannelDetail>
</Root>
```

To test in Graph Ql
```
# mutation {
#   createChannel(name: "Meteor in Flip Flops") {
#     name
#   }
# }

mutation{
  createMessage(channelName: "Meteor in Flip Flops", messageUser: "rainey", messageBody: "Ok ok") {
    id
  }
}


# mutation {
#   createMessage(channelName:"one2one", messageUser: "jasper", messageBody: "Exactly")
#   {id, text}
# }

# {
#   channels{
#     name
#     messages {
#       id
#       handle
#       text
#     }
#   }
# }
```
```
Add logs to channel.jsx
// console.log("channel messages", messages);
    // const myMessages = [{id: 1, handle: 'rainede' , message: 'does it work like this' },{ id: 2, handle: 'jaapm' , message: 'consistently erroring' },{ id:3, handle: 'maciej' , message: 'am going to hold another one of these classes' }];


```
