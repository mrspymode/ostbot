const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')
  client.channels.cache.get(`905950843944177714`).send('Spy is working!');


  command(client, 'sw' , (message) => {
    const name = message.content.replace('!sw ', '')
    client.channels.cache.get(`905950843944177714`).send('Spy is stoped working!');
    })


    




    command(client, 't' , (message) => {
        const name = message.content.replace('!wip ', '')
        message.delete()
        message.channel.send('Work in progres !')
    })

    command(client, '25' , (message) => {
        const name = message.content.replace('!25 ', '')
        message.delete()
        message.channel.send('Project is around 25% !')
    })

    command(client, '50' , (message) => {
        const name = message.content.replace('!50 ', '')
        message.delete()
        message.channel.send('Project is around 50% !')
    })

    command(client, '75' , (message) => {
        const name = message.content.replace('!75 ', '')
        message.delete()
        message.channel.send('Project is around 75% !')
    })

    command(client, '100' , (message) => {
        const name = message.content.replace('!100 ', '')
        message.delete()
        message.channel.send('your project is almost complite !')
    })

    command(client, 'pay' , (message) => {
        const name = message.content.replace('!pay ', '')
        message.delete()
        message.channel.send('your project requaiers payment to continue working on project!')
    })

    command(client, 'file' , (message) => {
        const name = message.content.replace('!sfile ', '')
        message.delete()
        message.channel.send('we ll send you yors project file !')
    })


  command(client, 'createtextchannel', (message) => {
    const name = message.content.replace('!createtextchannel ', '')
    

    message.guild.channels
      .create(name, {
        type: 'text',
      })
      .then((channel) => {
        const categoryId = '905955727108096010'
        channel.setParent(categoryId)
      })
  })

  command(client, 'createvoicechannel', (message) => {
    const name = message.content.replace('!createvoicechannel ', '')

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = '905955727108096010'
        channel.setParent(categoryId)
        channel.setUserLimit(10)
      })
  })
})

client.login('token');
