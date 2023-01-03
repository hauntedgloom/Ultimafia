module.exports = {
	restart: null,
	gameTypes: ["Mafia", "Split Decision", "Resistance", "One Night"],
	lobbies: ["Main", "Sandbox", "Competitive", "Games"],
	alignments: {
		"Mafia": ["Village", "Mafia", "Monsters", "Independent"],
		"Split Decision": ["Blue", "Red", "Independent"],
		"Resistance": ["Resistance", "Spies"],
		"One Night": ["Village", "Werewolves", "Independent"],
	},
	startStates: {
		"Mafia": ["Night", "Day"],
		"Split Decision": ["Round"],
		"Resistance": ["Team Selection"],
		"One Night": ["Night"],
	},
	configurableStates: {
		"Mafia": {
			"Day": {
				min: 1 * 60 * 1000,
				max: 30 * 60 * 1000,
				default: 10 * 60 * 1000
			},
			"Night": {
				min: 1 * 60 * 1000,
				max: 10 * 60 * 1000,
				default: 2 * 60 * 1000
			}
		},
		"Split Decision": {
			"Initial Round": {
				min: 1 * 60 * 1000,
				max: 5 * 60 * 1000,
				default: 3 * 60 * 1000
			},
			"Hostage Swap": {
				min: 0.1 * 60 * 1000,
				max: 1 * 60 * 1000,
				default: 0.5 * 60 * 1000
			}
		},
		"Resistance": {
			"Team Selection": {
				min: 1 * 60 * 1000,
				max: 5 * 60 * 1000,
				default: 2 * 60 * 1000
			},
			"Team Approval": {
				min: 0.1 * 60 * 1000,
				max: 2 * 60 * 1000,
				default: 0.5 * 60 * 1000
			},
			"Mission": {
				min: 0.1 * 60 * 1000,
				max: 1 * 60 * 1000,
				default: 0.5 * 60 * 1000
			},
		},
		"One Night": {
			"Day": {
				min: 1 * 60 * 1000,
				max: 30 * 60 * 1000,
				default: 10 * 60 * 1000
			},
			"Night": {
				min: 1 * 60 * 1000,
				max: 10 * 60 * 1000,
				default: 2 * 60 * 1000
			}
		},
	},
	noQuotes: {},

	modifiers: {
		"Mafia": {
			"Armed": ["StartWithGun"],
			"Explosive": ["StartWithBomb"],
			"Armored": ["StartWithArmor"],
			"Exposed": ["PublicReveal"],
			"Lizard": ["VillagerToInvestigative"],
			"Humble": ["Humble"],
			"Lone": ["Lone"],
			"Delayed": ["Delayed"],
			"Even": ["Even"],
			"Odd": ["Odd"],
			"One Shot": ["OneShot"],
		},
		"Split Decision": {},
		"Resistance": {},
		"One Night": {},
	},

	maxPlayers: 50,
	maxSpectators: 100,
	maxOwnedSetups: 100,
	maxFavSetups: 100,

	maxGameMessageLength: 240,
	maxGameTextInputLength: 100,
	maxWillLength: 100,
	maxSetupNameLength: 25,
	gameReserveTime: 5 * 60 * 1000,

	msgSpamSumLimit: 15,
	msgSpamRateLimit: 10,
	voteSpamSumLimit: 15,
	voteSpamRateLimit: 10,

	maxUserNameLength: 20,
	maxGroupNameLength: 20,
	maxCategoryNameLength: 20,
	maxBoardNameLength: 20,
	maxBoardDescLength: 60,
	maxThreadTitleLength: 50,
	maxThreadContentLength: 5000,
	maxReplyLength: 1000,
	threadsPerPage: 10,
	repliesPerPage: 20,
	recentReplyAmt: 3,
	newestThreadAmt: 1,
	boardRecentReplyAmt: 3,

	maxChatMessageLength: 240,
	chatMessagesPerLoad: 20,
	maxChannelNameLength: 20,

	maxCommentLength: 500,
	maxCommentLocationLength: 20,
	commentsPerPage: 10,

	lobbyPageSize: 7,
	modActionPageSize: 7,
	newestUsersPageSize: 7,

	userOnlineTTL: 1000 * 60,
	chatUserSearchAmt: 20,
	chatUserOnlineAmt: 50,
	mainUserSearchAmt: 20,
	mainUserOnlineAmt: 100,

	friendsPerPage: 10,
	referralGames: 5,
	referralCoins: 50,

	minMafiaSetupTotal: 5,

	// Perms given to all users
	defaultPerms: [
		"signIn",
		"playGame",
		"hostRanked",
		"createThread",
		"postReply",
		"vote",
		"deleteOwnPost",
		"editPost",
		"publicChat",
		"privateChat",
		"editBio",
		"changeName",
	],
	// Perms that can only be granted by a user with rank Infinity
	protectedPerms: [
		"createGroup",
		"giveGroup",
		"removeFromGroup",
		"updateGroupPerms",
		"givePermToAll",
		"clearAllIPs",
		"giveCoins",
		"changeUsersName",
		"scheduleRestart",
	],
	// The list of all enabled perms
	allPerms: {
		"signIn": true,
		"playGame": true,
		"createThread": true,
		"postReply": true,
		"vote": true,
		"deleteOwnPost": true,
		"editPost": true,
		"publicChat": true,
		"privateChat": true,
		"editBio": true,
		"changeName": true,

		"createCategory": true,
		"deleteAnyPost": true,
		"lockThreads": true,
		"pinThreads": true,
		"postInLocked": true,
		"moveThread": true,
		"createGroup": true,
		"deleteGroup": true,
		"giveGroup": true,
		"removeFromGroup": true,
		"updateGroupPerms": true,
		"viewPerms": true,
		"viewDeleted": true,
		"restoreDeleted": true,
		"createBoard": true,
		"deleteBoard": true,
		"updateBoard": true,
		"createRoom": true,
		"deleteRoom": true,
		"deleteChatMessage": true,
		"viewModActions": true,
		"forumBan": true,
		"chatBan": true,
		"gameBan": true,
		"hostRankedBan": true,
		"siteBan": true,
		"forumUnban": true,
		"chatUnban": true,
		"gameUnban": true,
		"siteUnban": true,
		"forceSignOut": true,
		"viewAlts": true,
		"clearSetupName": true,
		"clearBio": true,
		"clearAvi": true,
		"clearAccountDisplay": true,
		"clearName": true,
		"viewBans": true,
		"noCooldowns": true,
		"canSpectateAny": true,
		"breakGame": true,
		"clearAllIPs": true,
		"featureSetup": true,
		"clearAllUserContent": true,
		"giveCoins": true,
		"changeUsersName": true,
		"whitelist": true,
		"scheduleRestart": true,
		"disableAllCensors": true,
	},
	defaultGroups: {
		"Owner": {
			rank: Infinity,
			visible: false,
			perms: "*"
		},
		"Dev": {
			rank: Infinity,
			visible: false,
			perms: [
				"createGroup",
				"deleteGroup",
				"giveGroup",
				"removeFromGroup",
				"updateGroupPerms",
				"viewPerms",
				"viewDeleted",
				"viewModActions",
				"forceSignOut",
				"viewAlts",
				"viewBans",
				"noCooldowns",
				"canSpectateAny",
				"breakGame",
				"clearAllIPs",
				"giveCoins",
				"whitelist",
				"scheduleRestart",
				"disableAllCensors",
			]
		},
		"Admin": {
			rank: 10,
			visible: true,
			perms: [
				"deleteAnyPost",
				"lockThreads",
				"pinThreads",
				"postInLocked",
				"moveThread",
				"createGroup",
				"giveGroup",
				"removeFromGroup",
				"updateGroupPerms",
				"viewPerms",
				"viewDeleted",
				"restoreDeleted",
				"createBoard",
				"updateBoard",
				"createRoom",
				"deleteRoom",
				"deleteChatMessage",
				"viewModActions",
				"forumBan",
				"chatBan",
				"gameBan",
				"siteBan",
				"forumUnban",
				"chatUnban",
				"gameUnban",
				"hostRankedBan",
				"siteUnban",
				"forceSignOut",
				"viewAlts",
				"clearSetupName",
				"clearBio",
				"clearAvi",
				"clearAccountDisplay",
				"clearName",
				"viewBans",
				"canSpectateAny",
				"breakGame",
				"featureSetup",
				"clearAllUserContent",
				"whitelist",
				"disableAllCensors",
			]
		},
		"Mod": {
			rank: 5,
			visible: true,
			perms: [
				"deleteAnyPost",
				"lockThreads",
				"pinThreads",
				"postInLocked",
				"moveThread",
				"viewPerms",
				"viewDeleted",
				"restoreDeleted",
				"viewModActions",
				"deleteChatMessage",
				"forumBan",
				"chatBan",
				"gameBan",
				"hostRankedBan",
				"siteBan",
				"forumUnban",
				"chatUnban",
				"gameUnban",
				"siteUnban",
				"forceSignOut",
				"clearSetupName",
				"clearBio",
				"clearAvi",
				"clearAccountDisplay",
				"viewBans",
				"canSpectateAny",
				"breakGame",
				"featureSetup",
				"whitelist",
				"disableAllCensors",
			]
		}
	},

	rateLimits: {
		"hostGame": 60 * 1000,
		"createSetup": 60 * 1000,
		"createThread": 5 * 60 * 1000,
		"postReply": 30 * 1000,
		"vote": 500,
		"sendChatMessage": 500,
		"deleteAccount": 24 * 60 * 60 * 1000,
		"postComment": 30 * 1000,
		"favSetup": 500,
	},
};