
te["user_role_r"] = { div:[], ac:["ay","","_sel","xx tt b05 cb",""], c:
[
	{ s:["","%1"] },
	{ div:["e"], c:[ { arg:["-0","","%0"] } ] }
]};

te["user_ed_"] = { div:["w50 ma sh__ y gw_"], c:
[
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b",null] },
		{ ac:["d ay t","","_uvp","x cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["","ve"], c:
	[
		{ div:["x20 y"], c:
		[
			{ p:["c","nb"], c:[ { u:["nb","users_nb"] }, { u:["nb","errors"] } ] },
			{ div:["e"] }
		]},

		{ p:["x25 t15","o"], c:
		[ 
			{ s:["c w13 y","Username"] }, { txt:["d w30 gws","w33 x y07","","usn",":v:users:usn"] }, { div:["e"] } 
		]},
		{ p:["x25 t15","o"], c:
		[
			{ s:["c w13 y","First Name"] }, { txt:["d w30 gws","w33 x y07","","fname",":v:users:contact_fname"] }, { div:["e"] }
		]},
		{ p:["x25 t15","o"], c:
		[
			{ s:["c w13 y","Last Name"] }, { txt:["d w30 gws","w33 x y07","","lname",":v:users:contact_lname"] }, { div:["e"] }
		]},
		{ p:["x25 t15","o"], c:
		[
			{ s:["c w13 y","Phone"] }, { txt:["d w30 gws","w33 x y07","","phone",":v:users:contact_phone"] }, { div:["e"] }
		]},
		{ p:["x25 t15","o"], c:
		[
			{ s:["c w13 y","Email"] }, { txt:["d w30 gws","w33 x y07","","email",":v:users:contact_email"] }, { div:["e"] }
		]},
		//{ p:["x25 t15","o"], c:
		//[
		//	{ s:["c w13 y","Extension"] }, { txt:["d w30 gws","w33 x y07","","exten",":v:users:exten"] }, { div:["e"] }
		//]},
		{ div:["x25 y15"], c:
		[
			{ s:["c w13  y","Role"] },
			{ div:["d","tag-r_--o--::user_role:0:1-role-%0-"], c:
			[
				{ li:["w30 gws","va"], c:[ { div:[], ev:["_dd"], c: // ls
				[
					{ p:["c w27 b03","o"], uchk:["tag",":v:users:role","","",""," ::user_role:0:1","role"," %0",""] },
					{ div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["e"] }
				]} ]},			
				{ div:["dd w30 ba gw_ cb","vdd"], ev:["_undd"], c: // 
				[
					{ uchk:["user_role_r","","user_role"] }
				]}
			]},
			{ div:["e"] }
		]},

		{ div:["x25 y20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};

te["user_ed"] = { user_ed_:["Edit User","user_ed-users","_postj","Update","Updating...","user_vw_id-users-vp","_u","Cancel"] };

te["user_new"] = { user_ed_:["New User","user_new-users","_postj","Create","Creating...","","_uvp","Cancel"] };

// ------------------------------------------

te["user_vw_r"] = { div:["","ve"], c:
[
	{ div:[], c:
	[ 
		{ div:["d x w10"], s:["abs tt",""], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ ac:["c w07 ay","user_ed-users-vp","_u","y bt bb bl tc cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
				{ div:["d w03"], ac:["ay","","_dd","x y04 ba",""],  c:[ { div:["h02 w02 awb"] } ] },
				{ div:["e"] }
			]},
			{ div:["dd ba gw_ mt w10 sh",""], c:
			[
				{ div:["",""], ac:[" aa","reset_passwd-resetAuth","_postj","x y tc","Reset Password"], c:[ { p:["","o"], arg:["",".id","%0"] } ] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["y"], c:
	[
		{ p:["c","nb"], c:[ { u:["nb","users_nb"] }, { u:["nb","errors"] } ] },
		{ div:["e"] }
	]},
	{ div:[], c:
	[ 
		{ s:["c w10 x y cd","Username"] }, 
		{ s:["c w30 x y cb",":v:users:usn"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cd","Full Names"] }, 
		{ s:["c w30 x y cb",":v:users:contact_fullname"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[  
		{ s:["c w10 x y cd","Phone"] }, 
		{ s:["c w30 x y cb",":v:users:contact_phone"] }, 
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cd","Email"] }, 
		{ s:["c w30 x y cb",":v:users:contact_email"] }, 
		{ div:["e"] }
	]},
	//{ div:["t15"], c:
	//[ 
	//	{ s:["c w10 x y cd","Extension"] }, 
	//	{ s:["c w30 x y cb",":v:users:exten"] }, 
	//	{ div:["e"] }
	// ]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cd","Role"] }, 
		{ s:["c w30 x y",":v:users:role::user_role:1"] },
		{ div:["e"] }
	]},
	{ div:["t15"], c:
	[ 
		{ s:["c w10 x y cd","Created On"] }, 
		{ s:["c w30 x y",":d:dmyhn:1: "] },
		{ div:["e"] }
	]},
	{ div:["t15 b20"], c:
	[ 
		{ s:["c w10 x y cd","Created By"] }, 
		{ s:["c w30 x y",":v:users:created_by"] },
		{ div:["e"] }
	]},

]};

te["user_vw_id"] = { div:["w60 ma sh__ y gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b","User Details"] },
		{ ac:["d ay","","_uvp","x bd cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 b20"], user_vw_r:[] }
]};

// -----------------------------------------------------------------------

te["user_lc_footer"] = { div:["y"], c:
[
	{ div:["d x"], pg:["pgto","user_lc-users"," dh","da dl","user_lc-users"," dh","da dr"] },
	{ div:["e"] }
]};

te["user_lc_r"] = { div:[], c: 
[
	{ input:["g","user_id","","%0","checkbox",":k:users_chk:user_id::0"] },
	{ ac:["r ay","","_chk","h01_ xx y07 cb",""], c:
	[ 
		{ div:["c t03 w01_"], s:["chk",""] },
		{ div:["c w12"], s:["x t02 h02",":v:users:usn"] },
		// { div:["c w12"], s:["x t h02",""], uhilite:["%5"] }, //nb: does not hilite coz text does not have a caret '^'
		{ div:["d"], s:["x tr h02",":v:users:exten"] },
		{ div:["d"], s:["x h02 tr",":v:users:role::user_role:1"] },
		{ div:["e"], c:[ { arg:["-0","","%0"] }, { arg:["-1","",":v:users:usn"] }, { arg:["-2","",":v:users:usn"] } ] }
	]}
]};

te["user_lc_k"] = { div:["g"], c:
[
	{ arg:["","usn__",":k:users_k:usn:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, { arg:["","sort","%6"] } ] }
]};

te["user_lc"] = { c:
[
	{ uchkargs:["users_chk"] },
	{ list:["end","end","h30","user_lc_k","user_lc_r","users","user_lc_footer"] }
]};

te["user_lc_main"] = { c:
[
	{ div:["xx mb","va"], c:[ { div:["","user_lc-users"], c:
	[ 
		{ p:["w30 bb_b","txa"], c:[ { input:["w30 x tt b05","usn__","","","text",""], ev:["","_ky","","_uky"] } ] }
	]} ]},
	{ div:["","vd"], user_lc:[] }
]};

// -----------------------------------------------------------------------

te["user_ls_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","user_ls-users","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","user_ls-users","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["user_ls_r"] = { ac:["ay ","","_sel","x cb",""], c:
[
	{ div:["c x tt"], c:[ { div:[":v:users:exten::peers:43:0"], s:["w01 h01 gws bd",""] } ] },
	{ div:["c"], s:["x y07 h01_",":v:users:usn"] },
	// { div:["d"], s:["x h01_ y07 tr",":v:users:usn"] },
	{ div:["d"], s:["x y07 h01_ tr",":v:users:role::user_role:1"] },
	{ div:["e"], c:[ { arg:["-0","","%0"] }, { arg:["-1","",":v:users:usn"] }, { arg:["-2","",":v:users:usn"] } ] }
]};

te["user_ls_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["user_ls"] = { list:["end","end","","user_ls_k","user_ls_r","users","user_ls_footer"] };

// -----------------------------------------------------------------------

te["user_f_tags_"] = { c: 
[
	{ f:["Username",null,		" %0","usn"," "] },
	{ f:["First Name",null,		" %0","contact_fname"," "] },
	{ f:["Last Name",null,		" %0","contact_lname"," "] },
	{ f:["Phone",null,		" %0","contact_phone"," "] },
	{ f:["Email",null,		" %0","contact_email"," "] },
	{ f:["Extension",null,		" %0","exten"," "] },
	{ f:["Role",null,		" ::user_role:0:1","role"," "] },
	{ f:["Created On",null,		" :d:dmy:0: ","created_on"," "] },
	{ f:["Created By",null,		" %1","created_by_id"," %1"] },
	{ div:["e"] }
]};

te["user_f_tags"] = { user_f_tags_:[":k:users_f:usn", ":k:users_f:contact_fname", ":k:users_f:contact_lname", ":k:users_f:contact_phone", ":k:users_f:contact_email", ":k:users_f:exten", ":k:users_f:role", ":k:users_f:created_on", ":k:users_f:created_by_id"] };

te["user_f_tags_k"] = { user_f_tags_:[":k:users_k:usn:2", ":k:users_k:contact_fname:2", ":k:users_k:contact_lname:2", ":k:users_k:contact_phone:2", ":k:users_k:contact_email:2", ":k:users_k:exten:2", ":k:users_k:role:2", ":k:users_k:created_on:2", ":k:users_k:created_by_id:2"] };

te["user_f"] = { div:["w58 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x25 y20 b h3","Search User"] },
	{ div:["x15 b20"], c:
	[
		{ div:["xx yy"], kf_s:["Username","usn",":k:users_f:usn"] },
		{ div:["xx yy"], kf_s:["First Name","contact_fname",":k:users_f:contact_fname"] },
		{ div:["xx yy"], kf_s:["Last Name","contact_lname",":k:users_f:contact_lname"] },
		{ div:["xx yy"], kf_s:["Phone","contact_phone",":k:users_f:contact_phone"] },
		{ div:["xx yy"], kf_s:["Email","contact_email",":k:users_f:contact_email"] },
		{ div:["xx yy"], kf_s:["Extension","exten",":k:users_f:exten"] },

		{ div:["xx yy"], kf_c:["Role","tag_-r_--o--::user_role:0:1--role-%0-",  ":k:users_f:role",
""," ::user_role:0:1","","role"," %0","", 	":k:users_f:role", "user_role", "role"," ::user_role:0:1"," "] },

		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:users_f:created_on","created_on",":k:users_f:created_on"] },

		{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%1-user_id-created_by_id-%0-%1",   "user_lc_main-users",":k:users_f:created_by_id", 
""," %1","user_id","created_by_id"," %0"," %1",  "noop"] },
	]},
	{ vp_apply:["user_f_tags-users_f"] }
]};

// -------------------------------------

te["user_footer"] = { div:["ba"], c:
[
	{ div:["d y07"], pg:["pgto","user_list-users"," dh","da dl","user_list-users"," dh","da dr"] },
	{ div:["e"] }
]};

te["user_r__"] = { c:
[
	{ li:[null,"user_vw_id-users-^"], ev:["_vp"], c:
	[
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:usn"] },
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:contact_fname"] }, 
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:contact_lname"] }, 
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:contact_phone"] },
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:contact_email"] },
		// { div:["c w10 tt b05 h01_"], s:["xx",":v:users:exten"] },
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:users:role::user_role:1"] },
		{ div:["c w15 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
		{ div:["c w10"], s:["tt b05 h01_  xx",":v:users:created_by"] },
		{ div:["e"], arg:["",".id","%0"] } 
	]},
	{ div:["g"], arg:["","","user_r_-users-va--@"] },
]};

te["user_r_"] = { user_r__:["w160 gg cw"] };

te["user_r"] = { div:["","va"], user_r__:["w160"] };

te["user_k"] = { c:
[
	{ div:["w160 bt bb gww"], s:["",""], c: // activate filter ctx
	[
		{ k_a:["c w15","","cd","Username","da db",	"usn",":k:users_k:usn:2"] },
		{ k_a:["c w15","","cd","First Name","da db",	"contact_fname",":k:users_k:contact_fname:2"] },
		{ k_a:["c w15","","cd","Last Name","da db",	"contact_lname",":k:users_k:contact_lname:2"] },
		{ k_a:["c w15","","cd","Phone","da db",		"contact_phone",":k:users_k:contact_phone:2"] },
		{ k_a:["c w15","","cd","Email","da db",		"contact_email",":k:users_k:contact_email:2"] },
		//{ k_a:["c w10","","cd","Extension","da db",	"exten",":k:users_k:exten:2"] },
		{ k_a:["c w15","","cd","Role","da db",		"role",":k:users_k:role:2"] },
		{ k_a:["c w15","","cd","Created On","da db",	"created_on",":k:users_k:created_on:2"] },
		{ k_a:["c w10","","cd st","Created By","da db","created_by_id",":k:users_k:created_by_id:2"] },
		{ div:["e"] }
	]},
	{ p:["","user_list_new_nb"] }
]};

te["user_nb"] = { div:[], c:[ { p:["c","nb"], u:["nb","users_nb"] }, { div:["e"] } ] };

te["user_title"] = { div:[] }; 

te["user_list"] = { list:["user_title","user_nb","bl br oh","user_k","user_r","users","user_footer"] };

te["user_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				// { input:["g","","users_t_","0","radio","1"] },
				{ ac:["c","user_main-users-vftab","_u","x y cb b h2","System Users"] }, 
				//{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"], arg:["","_title","%5"] }
			]},
			// { div:["dd x y gw ba sh nd w14","vdd"] }
		]},

		{ div:["c l40"], ac:["ay","user_f-users_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], c:
		[
			{ ac:["ay","user_new-user_-^","_vp","x t01 bd_ cb s",""], c:
			[ 
				{ s:["c l t h2 b","+"] },
				{ div:["c x y","","New"] }, 
				{ div:["e"] }
			]},
			{ div:["g"], arg:["","","user_r_-users-vftab-user_list_new_nb"] },
		]},

		{ div:["e"], c:[ { arg:["","","user_list-users"] }, { arg:["","","0"] }, { arg:["","","100"] }, { arg:["","",""] } ] }
	]},
	{ div:["yy","vf"], c:[ { div:["","user_f-users_f"], c: // ev:["_n_vpf"], c:
	[
		{ user_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","users_v","100","radio","1"] }, { p:["tabv yy","vt"], user_list:[] } ] },
		{ div:[], c:[ { input:["g","","users_v","0","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};

te["users"] = { c:
[
       	{ div:["g"], c:
	[
		{ div:[] },
		{ div:[] },
		{ div:[] },
		{ div:[] },
		{ div:[] },
		{ div:[] },
		{ div:[] },
		{ div:[] }, // blank src
	]},
	{ form:[], c:
	[
		{ div:[], c:
		[	
			{ input:["g","","user_vw_vt","0","radio","1"] }, 
			{ p:["tabv x20 y20 gw mm","vftab"], user_main:[] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","user_vw_vt","1","radio"] }, 
			{ p:["tabv gw yy mm","vfvw"] }
		]}
	]}
]};

