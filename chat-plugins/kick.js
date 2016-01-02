exports.commands = {
	rk: 'kick',
	roomkick: 'kick',
	kick: function (target, room, user) {
		if (!target) return;
		target = this.splitTarget(target);
		var targetUser = this.targetUser;
		if (!targetUser || !targetUser.connected) {
			return this.sendReply("Usuario " + this.targetUsername + " no encontrado.");
		}
		if (!room.users[targetUser.userid]) {
			return this.sendReply("Usuario " + this.targetUsername + " no se encuentra en la sala " + room.id + ".");
		}
		if (!this.can('kick', targetUser, room)) return false;
		var msg = "echado de la sala " + room.id + " por " + user.name + (target ? " (" + target + ")" : "") + ".";
		this.addModCommand("" + targetUser.name + " fue " + msg);
		targetUser.popup("Has sido " + msg);
		targetUser.leaveRoom(room);
	}
};
