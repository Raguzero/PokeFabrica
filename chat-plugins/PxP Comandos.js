exports.commands = {
slap: function (target, room, user) {
		return this.parse("/me abofeteo a " + target + " con un salmon gigante.");
	},
	helado: function (target, room, user) {
		return this.parse("/me ha pedido un helado de platano.") +
		this.sendReply("Parece que le encanta el platano...");
	},
	
			
   twitter: function (target, room, user, connection) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox('<div class="infobox"><center><a href="https://twitter.com/ForosPxP"><img src="https://pbs.twimg.com/profile_images/444580080740597760/UVv_swVi_400x400.png" height="100" width="100"></a><br><font size=3><b><font color="blue">Twitter de Foros Pokexperto');
	},
	
	stafflist: 'staff',
	staffalts: 'staff',
	staffalt: 'staff',
	staff: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox(
			"<b># Room Owner</b><br />" +
			"- ?????<br />" +
			"<b>~ Administrators</b><br />" +
			"- Ragurajii (zapapa)<br />" +
			"- Rk00<br />" +
			"- MeruM<br />" +
			"<b>@ Moderators</b><br />" +
			"- ?????<br />" 
		//	"<a href=\"???????">Click here for more details.</a>"
		);
	},
	
	salahelp: function (target, room, user) {
		if (room.id === 'lobby' || room.battle) return this.sendReply("Este comando es demasiado caótico y lleno de teorias de XY para usarlo en lobby/battles.");
		if (!this.canBroadcast()) return;
		this.sendReplyBox(
			"Room drivers (%) pueden usar los siguiente comandos:<br />" +
			"- /kick <em>username</em>: Echa a un usuario de la sala actual<br />" +
			"- /warn o /k <em>username</em>: Manda una advertencia a un usuario y le muestra las reglas de Pokemon Showdown<br />" +
			"- /mute o /m <em>username</em>: Enmudece a un usuario por 7 minutos<br />" +
			"- /hourmute o /hm <em>username</em>: Enmudece a un usuario por 60 minutos<br />" +
			"- /unmute <em>username</em>: Quita el mute a un usuario<br />" +
			"- /announce o /wall <em>message</em>: Permite hacer un Anuncio Oficial<br />" +
			"- /modlog <em>username</em>: Busca el log de moderación de la sala<br />" +
			"- /modnote <em>note</em>: Añade un nota de moderación que puede ser leida en el modlog<br />" +
			"<br />" +
			"Room moderators (@) tambien pueden usar los siguientes comandos:<br />" +
			"- /roomban OR /rb <em>username</em>: Banea a un usuario de la sala<br />" +
			"- /roomunban <em>username</em>: Desbanea a un usuario de la sala<br />" +
			"- /roomvoice <em>username</em>: Lo convierte en un room voice<br />" +
			"- /roomdevoice <em>username</em>: Elimina un room voice<br />" +
			"- /modchat <em>[off/autoconfirmed/+]</em>: Selecciona el nivel del modchat<br />" +
			"- /staffintro <em>intro</em>: sets the staff introduction that will be displayed for all staff joining the room<br />" +
			"<br />" +
			"Room owners (#) tambien pueden usar los siguientes comandos:<br />" +
			"- /roomintro <em>intro</em>: Selecciona la introdución de la sala para que todas las personas que se unan a dicha sala, puedan verla<br />" +
			"- /rules <em>rules link</em>: Selecciona las reglas de la sala cuando estas usando /rules<br />" +
			"- /roommod, /roomdriver <em>username</em>: Lo convierte en un moderador de sala/driver<br />" +
			"- /roomdemod, /roomdedriver <em>username</em>: Elimina un moderator de sala/driver<br />" +
			"- /modchat <em>[%/@/#]</em>: Selecciona el nivel del modchat<br />" +
			"- /declare <em>message</em>: Lanza una declaración grande y azul a la sala<br />" +
			"- !htmlbox <em>HTML code</em>: Difunde una caja de código HTML a la sala<br />" +
			"- !showimage <em>[url], [width], [height]</em>: Muestra una imagen a la sala<br />" +
			"<br />" +
			"Más detalles de ayuda pueden ser encontrado en la <a href=\"https://www.smogon.com/sim/roomauth_guide\">guia roomauth </a><br />" +
			"</div>"
		);
	},
	
	reiniciohelp: function (target, room, user) {
		if (room.id === 'lobby' && !this.can('lockdown')) return false;
		if (!this.canBroadcast()) return;
		this.sendReplyBox(
			"El servidor se va a reiniciar. Cosas que debes saber:<br />" +
			"- Esperaremos unos minutos antes de reiniciar para que las personas puedan terminar sus batallas<br />" +
			"- El reinicio tomará alrededor de 0.6 segundos<br />" +
			"- Tu ladder ranking y equipos no cambiarán<br />" +
			"- Vamos a reiniciar para actualizar Pok&eacute;mon Showdown a la nueva version"
		);
	},
	
		pxpm: 'pxpmetas',
	pxpmetas: function (target, room, user) {
		if (!this.canBroadcast()) return;
		target = toId(target);
		var buffer = "";
		var matched = false;

		if (target === 'all' && this.broadcasting) {
			return this.sendReplyBox("Tranquilizate y tomate una taza de té, no puedes ver toda la información sobre PxP Metagames al mismo tiempo.");
		}

		if (!target || target === 'all') {
			matched = true;
		buffer += "- <a href=\"www.pokexperto.net\"> PxP Bot: Uy, si que aún no hay nada, perdón por las molestias</a><br />";
		//	buffer += "- <a href=\"https://www.smogon.com/tiers/om/\">PxP Metagames Hub</a><br />";
		//	buffer += "- <a href=\"https://www.smogon.com/forums/threads/3505031/\">PxP Metagames Index</a><br />";
		}
		if (!matched) {
			return this.sendReply("La entrada PxP Metagames de '" + target + "' no fué encontrada. Intenta escribir /pxpmetas o /pxpm para ayuda general.");
		}
		this.sendReplyBox(buffer);
	},
	pxpmetashelp: ["/pxpm - Muestra links sobre información de PxP Metagames.",
		"!pxpm - Muestra a todos esta información. Requiere: + % @ # & ~"],
		
		pkfintro: 'pkf',
	pkf: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReplyBox(
			"Toda la información sobre el proyecto PokeFabrica (PKF) que se está realizando en Pokexperto:<br />" +
			"- <a href=\"http://www.pokexperto.net/foros/index.php?topic=31846.0\">Tema informativo del Proyecto PokeFabrica</a><br />" +
			"- <a href=\"http://www.pokexperto.net/foros/index.php?topic=62199.0\">Tema de debate actual del 5ªProyecto PokeFabrica</a><br />" 
		//	"- <a href=\"https://www.smogon.com/forums/forums/311\">Talk about the metagame here</a><br />" +
		//	"- <a href=\"https://www.smogon.com/forums/threads/3512318/#post-5594694\">Sample XY CAP teams</a>" 
		);
	},
	pkfhelp: ["/pkf - Muestra información sobre el proyecto de PokeFabrica (PKF) que se está realizando en Pokexperto.",
		"!pkf - Muestra a todos esta información. Requiere: + % @ # & ~"],

	
	/*********************************************************
	 * Comandos de la liga
	 *********************************************************/

		lideres: 'liga',
	liga: function (target, room, user) {
		if (!this.canBroadcast()) return;
		var path = 'www.pokexperto.net';
		var buffer = '';
		buffer += '<b>CAMPEON DE LA LIGA POKEXPERTO</b><br />';
		buffer += 'Aun nadie se ha coronado como Campeon<hr />';
		buffer += '<div class="alto-mando"><a href=' + path + 252 + '><button>ALTO MANDO</button></a><br /><br />';
		buffer += '- ???: ??? tipo<br />';
		buffer += '- ???: ??? tipo<br />';
		buffer += '- ???: ??? tipo<br />';
		buffer += '- ???: ??? tipo<br />';
		buffer += '- ???: ??? tipo<br /></div><hr />';
		buffer += '<div class="lideres"><b>LIDERES DE GIMNASIO</b><br /><br />';
		buffer += '<center><a href=' + path + 000 + '><button>ProfessorHax: Agua</button></a>   ';;
		buffer += '<a href=' + path + 000 + '><button>Pichushiny: Electrico</button></a> ';
		buffer += '<a href=' + path + 000 + '><button>Tewi: Psiquico</button></a></center> ';
		buffer += '<a href=' + path + 570 + '><button>Eeveeto: Hielo</button></a>   ';
		buffer += '<a href=' + path + 574 + '><button>Red Krow: Lucha</button></a>   ';
		buffer += '<a href=' + path + 532 + '><button>Josito: Tierra</button></a></center>';
		buffer += '<center><a href=' + path + 000 + '><button>Charz: Dragon</button></a>   ';
		buffer += '<a href=' + path + 000 + '><button>Emblema Fuego: Fuego</button></a></center></div><hr />';
	//	buffer += '&gt;&nbsp;<a href="????????">Cómo desafiar la liga.</a><br />';
	//	buffer += '<b><font size="2">No se acepta nuevos líderes de gimnasio.</font></b>';
	//	return this.sendReply('|raw|<center><img src="banner de liga" /></center><div class="league"><center><div id="league-content">' + buffer + '</div></center></div><center><img src="banner de liga" /></center>');
		return this.sendReply('|raw|<center><img src="http://i.imgur.com/rdrxGou.png" /></center><div class="league"><center><div id="league-content">' + buffer + '</div></center></div><center>');
	},
	

	};
