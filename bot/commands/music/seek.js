const cmd = require("../../command.js");
module.exports = class command extends cmd {
    constructor() {
        super({
            name: "seek",
        });
        this.run = this.r;
    }
    async r(a = {}) {
        const player = a.client.player.get(a.message.guild.id);
        if (!player || !player.playing) {
            return cmd.error(a, a.strings.getMsg("music_playernull"));
        }
        await player.seek(0);
        cmd.msg(a.message, a.prefix, `${a.strings.getMsg("seek_success")}`);
    }
}