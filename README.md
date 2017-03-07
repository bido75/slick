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
