import { BaseCommand, Command, Message } from '../../Structures'

@Command('hi', {
    description: 'Says hello to the bot',
    category: 'general',
    usage: 'hi',
    aliases: ['hello'],
    exp: 25,
    cooldown: 5
})
export default class extends BaseCommand {
    public override execute = async ({ sender, reply }: Message): Promise<void> =>
        void (await reply(`Hello! I'm a  dreaed bot created by dreaded team. How may I help you Master *${sender.username}*`))
}
