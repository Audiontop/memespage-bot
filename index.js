const Discord = require("discord.js");
const bot = new Discord.Client();
const got = require('got');
const PREFIX = 't!';

const chance = '801465438605148250'

const Test1 = '780778619193655326';
const Test2 = '780778644045692959';
const Test3 = '780778675968278538';

var version = '1.0.2';

bot.on('ready', () => {
    console.log('Der Bot ist nun Einsatzbereit!')

    let statuses = [
        `t!help`,
        `memes____page auf tt`,
        `t!ownerinfo`,
        `t!help`,
        `t!userinfo`,
        `?meme`
    ]

    setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: 'PLAYING'}).catch(console.error);
    }, 3000)
})

bot.on('message', function(message){
    if(message.content === 'Agent'){


        message.channel.send("𝕒𝕘𝕖𝕟𝕥 𝕧𝕚𝕡𝕖𝕣 ᴮᴬᴰʙᴏʏツ ist der beste")
    }
});

bot.on('message', function(message){
    if(message.content === 'agent'){


        message.channel.send("𝕒𝕘𝕖𝕟𝕥 𝕧𝕚𝕡𝕖𝕣 ᴮᴬᴰʙᴏʏツ ist der beste")
    }
});

bot.on('message', message => {
    if (message.content === "?meme"){
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }
})

bot.on("message", message => {
    if(message.content === ('t!userinfo')){
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
})



bot.on("message", message => {
    if(message.content === ('t!server')){
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
        }
}
);

bot.on('message', function(message){
    if(message.content === 'Sheesh'){


        message.channel.send("sheeeeeeesh")
    }
});

bot.on('message', function(message){
    if(message.content === 'sheesh'){


        message.channel.send("sheeeeeeesh")
    }
});

bot.on("message", message => {
    if(message.content.startsWith('t!ping')){
        message.channel.send('Pong! Dein Ping ist:'+bot.ws.ping+"ms");
    }

})

bot.on('message', function(message){
    if(message.content === 't!f'){


        message.channel.send("für fortnäit :fist::fist::french_bread::croissant:")
    }
});

bot.on('message', function(message){
    if(message.content === 't!joke'){


        message.channel.send('I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane\n“Debugging” is like being the detective in a crime drama where you are also the murderer\nThe best thing about a Boolean is that even if you are wrong, you are only off by a bit.\nA programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.\nIf you listen to a UNIX shell, can you hear the\nWhy do Java programmers have to wear glasses? Because they don’t C#.\n  What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.\nWhen Apple employees die, does their life HTML5 in front of their eyes?\nWithout requirements or design, programming is the art of adding bugs to an empty text file.\nBefore software can be reusable it first has to be usable.\nThe best method for accelerating a computer is the one that boosts it by 9.8 \n.I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.\nThere are two ways to write error-free programs; only the third one works.')
    }
});

bot.on('message', function(message){
    if(message.content.startsWith('t!avatar')){

        let user = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed() 
    .setImage(user.displayAvatarURL())
    
    message.channel.send(embed)  
    }
});

bot.on('message', function(message){
    if(message.content === 'hey'){


        message.channel.send('Hey!')
    }
});


bot.on('message', function(message){
    if(message.content === 'Hey'){


        message.channel.send('Hey!')
    }
});

bot.on('message', function(message){
    if(message.content.startsWith('t!Avatar')){

        let user = message.mentions.users.first() || message.author
        let embed = new Discord.MessageEmbed() 
    .setImage(user.displayAvatarURL())
    
    message.channel.send(embed)  
    }
});

bot.on('message', function(message){
    if(message.content === 'Was geht?'){


        message.channel.send("Nichts bei dir")
    }
});


bot.on('message', function(message){
    if(message.content === 'was geht'){


        message.channel.send("Nichts bei dir")
    }
});


bot.on('message', function(message){
    if(message.content === 'Was geht'){


        message.channel.send("Nichts bei dir")
    }
});

bot.on('message', function(message){
    if (message.content === "t!clear") {
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
             message.channel.send("Du hast keine berechtigung für Diesen Command!")
         }
         message.delete()
         message.channel.bulkDelete(10).then(() => {
            message.channel.send('Habe die Nachrichten Gelöscht!').then(msg => msg.delete(100));
            return;
         })
    }
})

bot.on("message", function(message) {
    if(message.content === "t!flip"){
    var change = Math.floor(Math.random() * 3)

    if(change == 1) {
        message.channel.send("Deine Münze zeigt Kopf")
    }
    if(change == 0) {
        message.channel.send("Deine Münze zeigt Zahl")
    }}
});

bot.on('message', message => {
    let parts = message.content.split(" ");
    
        if (parts[0] == 't!help') {
            message.channel.send('Du brauchst Hilfe mit meinen Befehlen? Dann pass mal auf!\nMit **t!ping** kannst du schauen ob ich Aktiv, oder Inaktiv bin!\nMit **t!purge** oder **t!clear** Kannst du Nachrichten von 2-100 **löschen**!\nMit **t!memberzähler** kannst du sehen wv. Mitglieder der Server hat!\nMit **t!ownerinfo** siehst du wer den Server erstellt hat, auf dem du dich befindest.\nMit **t!f** kommt das **für fortnäit :fist::fist::french_bread::croissant:**\nMit **t!rollenhilfe** kannst du dir anschauen, welche Rollen du dir selbst geben/entfernen kannst!')
        }
        else if (parts[0] == 't!ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == 't!Ping') {
            message.channel.send('Pong!')
        }
        else if (parts[0] == 't!clear') {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Dir fehlt die benötigte Berechtigung! (MANAGE_MESSAGES)')
            if(!parts[1]) return message.channel.send('Fehler, bitte zweites Argument angeben!')
            message.channel.bulkDelete(parts[1])
        }
        else if (parts[0] == 't!ownerinfo') {
            message.channel.send(`Der Owner/Ersteller dieses Servers ist ${message.guild.owner}`)
        }
        else if (parts[0] == 't!rolleninfo') {
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Dir fehlt folgende Berechtigung: MANAGE_ROLES !')
            console.log(message.guild.roles)
            message.channel.send('Die Rolleninfo wurde an den Log geschickt!')
        }
        else if (message.content === '822930495796150293') {

            const baum = new Discord.MessageEmbed()
            .setTitle('Man hat mich gerufen ...')
            .setColor('#98c9c3')
            .addField('**Brauchst du Hilfe?**', 'Dann schreibe das Team, oder den Owner an!')
            .addField('Willst du dem Owner eine DM schreiben?', 'Hier seine DC#ID: RappyTV#8287')

            message.channel.send(baum)
        }
        else if (parts[0] == 't!userinfo') {
            let userr = message.mentions.users.first() || message.author;
        
                let userinfo = {}
        
                userinfo.name = userr.username;
                userinfo.discrim = userr.discriminator;
                userinfo.id = userr.id;
                userinfo.status = userr.presence.status;
                userinfo.bot = userr.bot;
                userinfo.create = userr.createdAt;
        
                const userembed = new Discord.MessageEmbed()
                .setAuthor(userr.tag)
                .setColor("RANDOM")
                .addField("Nutzername:", userinfo.name, true)
                .addField("#ID:", userinfo.discrim, true)
                .addField("User ID:", userinfo.id, false)
                .addField("Status:", userinfo.status, true)
                .addField("Bot:", userinfo.bot, true)
                .addField('Sorry,', 'dass "Status" nicht geht xd ...')
        
                return message.channel.send(userembed)
                
        }
        else if (parts[0] == 't!say') {
            if (!parts[1]) return message.channel.send('Du musst angeben, was der Text sein soll, den der Bot sagt!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();
            message.channel.send(text)
        }
        else if (parts[0] == 't!sayemb') {
            if(!parts[1]) return message.channel.send('Du musst angeben, was der Text von deinem Embed beinhalten soll!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addField(message.member.displayName + ' schreit:', text, true)
            .setFooter('Dies ist ein Ausruf von ' + message.author.username + '#' + message.author.discriminator + ' !')

            message.channel.send(sayembed)
        }
        else if (parts[0] == 't!dm') {
            if (!message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, was du dir selbst schreiben lassen möchtest!')
                message.delete()
                var text = message.content.split(" ").slice(1).join(" ");

                message.author.send(text)
            }
            else if (message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, wem du etwas schreiben lassen willst!')
                if (!parts[2]) return message.channel.send('Du musst angeben, was du deinem Ziel schicken lassen willst!')

                message.delete()
                var text = message.content.split(" ").slice(2).join(" ");

                message.mentions.users.first().send(text)
            }
        }
        else if (parts[0] == 't!kick') {

            if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: KICK_MEMBERS')

            let kicked = message.mentions.members.first();
            if (!kicked) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(kicked).kick();

            const kickemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gekickt!`)
            .setFooter(`Der Kick wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(kickemb)
        }
        else if (parts[0] == 't!ban') {

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: BAN_MEMBERS')

            let banned = message.mentions.members.first();
            if (!banned) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(banned).ban();

            const banemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gebannt!`)
            .setFooter(`Der Ban wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(banemb)
        }
    

})

bot.on('message', (message) => {
    const parts = message.content.split(" ");

    if (parts[0] == 't!role') {
        if (!parts[1]) return message.channel.send('Es fehlt das zweite Argument! [add/remove]')

        if (parts[1] == 'add') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [testrolle1/testrolle2/testrolle3]')

            if (parts[2] == 'testrolle1') {
                message.member.roles.add(Test1)
                message.channel.send('Du hast nun die Testrolle 1')
            }
            else if (parts[2] == 'testrolle2') {
                message.member.roles.add(Test2)
                message.channel.send('Du hast nun die Testrolle 2')
            }
            else if (parts[2] == 'testrolle3') {
                message.member.roles.add(Test3)
                message.channel.send('Du hast nun die Testrolle 3')
            }
        }
        else if (parts[1] == 'remove') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [testrolle1/testrolle2/testrolle3]')

            if (parts[2] == 'testrolle1') {
                message.member.roles.remove(Test1)
                message.channel.send('Du hast nun nicht mehr die Testrolle 1')
            }
            else if (parts[2] == 'testrolle2') {
                message.member.roles.remove(Test2)
                message.channel.send('Du hast nun nicht mehr die Testrolle 2')
            }
            else if (parts[2] == 'testrolle3') {
                message.member.roles.remove(Test3)
                message.channel.send('Du hast nun nicht mehr die Testrolle 3')
            }
        }
    }

})

bot.on('message', async message => {
    let link = ["discord.gg", "discord.com/invite", "discordapp.com/invite", "https://", "http://"]

    if (link.some(word => message.content.toLowerCase().includes(word))) {
        if (message.member.roles.cache.find(r => r.id == chance)) {
            message.member.roles.remove(chance)
            return
        }
        if(message.channel.id == '811517449718988801') return
        await message.delete()
        return message.channel.send('Du darfst hier keine Links reinschicken!')
    }
})

bot.login(process.env.token)