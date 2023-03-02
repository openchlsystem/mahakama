
te["court_ed_"] = { div:["w68 ma sh__ y gw_"], c:
[	
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b",null] },
		{ ac:["d ay t","","_uvp","x cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["","ve"], c:
	[
		{ div:["x25 y"], c:
		[
			{ p:["c","nb"], c:[ { u:["nb","courts_nb"] }, { u:["nb","errors"] } ] },
			{ div:["e"] }
		]},

		{ div:["x25 tt"], case_txt_:["Court's Name","gws w63 x tt b05","name",":v:courts:name","Enter Court Name"] }, 

		{ div:["x25 tt"], case_jurisdiction_enum:["Jurisdiction",":v:courts:jurisdiction_id",":v:courts:jurisdiction"," %0"] },

		{ div:["x25 tt"], case_loc_enum:["Court's Location",":v:courts:location_id",":v:courts:location"," %0"] },

		{ div:["x25 tt"], case_txt_:["Court Rules","gws w63 x tt b05","court_rules",":v:courts:court_rules","Enter Court Rules"] },

		{ div:["x25 tt"], case_txt_:["Court Online Services","gws w63 x tt b05","online_services",":v:courts:online_services","Enter Court Online Services"] },

		{ div:["x25 tt"], case_txt_:["Contact Person's Name","gws w63 x tt b05","fname",":v:courts:contact_fullname","Enter Full Name"] },

		{ div:["x25 tt b20"], c:
		[
			{ div:["c w30"], case_txt_:["Contact Person's Phone","gws w30 x tt b05","phone",":v:courts:contact_phone","Enter Phone Number"] },
			{ div:["c w31 l20"], case_txt_:["Contact Person's Email","gws w31 x tt b05","email",":v:courts:contact_email","Enter Email Address"] },
			{ div:["e"] }
		]},

		{ div:["x25 y20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};	

te["court_ed"] = { court_ed_:["Edit Court Details","court_ed-courts","_postj","Update","Updating...","court_vw_id-courts-vp","_u","Cancel"] };

te["court_new"] = { court_ed_:["Add Court","court_new-courts","_postj","Add","Adding...","","_uvp","Cancel"] };

// --------------------------------------------------------------------------------------------

te["court_vw_id_"] = { div:[""], c:
[
	{ div:[], c:
	[ 
		{ div:["d x w07"], s:["abs tt",""], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ ac:["c w07 ay","court_ed-courts-vp","_u","y ba tc cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
				
				{ div:["e"] }
			]},
		]},
		{ div:["e"] }
	]},

	{ div:["y"], c:
	[
		{ p:["c","nb"], c:[ { u:["nb","courts_nb"] }, { u:["nb","errors"] } ] },
		{ div:["e"] }
	]},

	{ div:["tt"], case_vw_val:["Court Name",":v:courts:name"] },

	{ div:["tt"], case_vw_val_cat:["Court Division","",":v:courts:jurisdiction"] },

	{ div:["tt"], case_vw_val_cat:["Court Location","",":v:courts:location"] },

	{ div:["tt"], case_vw_val:["Court Rules",":v:courts:court_rules"] },

	{ div:["tt"], case_vw_val:["Court Online Services",":v:courts:online_services"] },

	{ div:["tt"], case_vw_val:["Contact Person's Name",":v:courts:contact_fullname"] },

	{ div:["yy"], c:
        [
                { div:["c w30"], case_vw_val:["Contact Person's Phone",":v:courts:contact_phone"] },
                { div:["c w30 l15"], case_vw_val:["Contact Person's Email",":v:courts:contact_email"] },
                { div:["e"] }
        ]},
]};

te["court_vw_id"] = { div:["w68 ma sh__ y gw_","vddvw"], ev:["_undd"], c:
[	
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b","Court Details"] },
		{ ac:["d ay","","_uvp","x bd cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 b20"], court_vw_id_:[] }
]};

// --------------------------------------------------------------------------------------------

te["court_ls_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","court_ls-courts","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","court_ls-courts","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["court_ls_r"] = { ac:["ay ","","_sel","x cb",""], c:
[
	{ div:[""], s:["x t",":v:courts:name"] },
	{ div:[""], s:["x s cd",""], uval:["",":v:courts:jurisdiction"] },
	{ div:["e"], c:[ { arg:["-0","","%0"] }, { arg:["-1","",":v:courts:name"] } ] }
]};

te["court_ls_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["court_ls"] = { list:["end","end","","court_ls_k","court_ls_r","courts","court_ls_footer"] };

// --------------------------------------------------------------------------------------------

te["court_lc_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","court_lc-courts","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","court_lc-courts","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["court_lc_r"] = { div:[], c: 
[
	{ input:["g","court_id","","%0","checkbox",":k:courts_chk:court_id::0"] },
	{ ac:["r ay w60","","_chk","xx y07 cb",""], c:
	[ 
		{ div:["abs t03 w02"], s:["chk",""] },
		{ div:["ml2"], uhilite:[":v:courts:name"] },
		{ div:["e"], c:[ { arg:["-1","",":v:courts:name"] } ] }
	]}
]};

te["court_lc_k"] = { div:["g"], c:
[
	{ arg:["","name__",":k:courts_k:name:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, { arg:["","sort","%6"] } ] }
]};

te["court_lc"] = { c:
[
	{ uchkargs:["courts_chk"] },
	{ list:["end","end","mh30","court_lc_k","court_lc_r","courts","court_lc_footer"] }
]};

te["court_lc_main"] = { c:
[
	{ div:["xx mb","va"], c:[ { div:["","court_lc-courts"], c:
	[ 
		{ p:["w50 bb_b","txa"], c:[ { input:["w50 x tt b05","name__","","","text",""], ev:["","_ky","","_uky"] } ] },
	]} ]},
	{ div:["","vd"], court_lc:[] }
]};

// --------------------------------------------------------------------------------------------

te["court_f_tags_"] = { c: 
[
	{ f:["Court Name",null,			" %0","name",""] },
	{ f:["Court Division",null,		" %1","jurisdiction_id"," %1"] },
	{ f:["Court Location",null,		" %1","location_id"," %1"] },
	{ f:["Contact Person's Name",null,	" %0","contact_fullname",""] },
	{ f:["Contact Person's Phone",null,	" %0","contact_phone",""] },
	{ f:["Contact Person's Email",null,	" %0","contact_email",""] },
	{ f:["Created By",null,			" %1","created_by_id"," %1"] },
	{ f:["Created On",null,			" :d:dmy:0: ","created_on",""] },
	{ div:["e"] }
]};

te["court_f_tags_k"] = { court_f_tags_:[":k:courts_k:name:2", ":k:courts_k:jurisdiction_id:2", ":k:courts_k:location_id:2", ":k:courts_k:contact_fullname:2", ":k:courts_k:contact_phone:2", ":k:courts_k:contact_email:2", ":k:courts_k:created_by_id:2", ":k:courts_k:created_on:2"] };

te["court_f_tags"] = { court_f_tags_:[":k:courts_f:name", ":k:courts_f:jurisdiction_id", ":k:courts_f:location_id", ":k:courts_f:contact_fullname", ":k:courts_f:contact_phone", ":k:courts_f:contact_email", ":k:courts_f:created_by_id", ":k:courts_f:created_on"] };

te["court_f"] = { div:["w58 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x25 y20 b h3","Search Court"] },
	{ div:["x15 b20"], c:
	[
		{ div:["xx yy"], kf_s:["Court Name","contact_fullname",":k:courts_f:name"] },

		{ div:["xx yy"], kf_l:["Court Division","tag_-r_--o--%1-category_id-jurisdiction_id-%0-%1", "case_lc_main-subcategories",
":k:courts_f:jurisdiction_id", ""," %1","category_id","jurisdiction_id"," %0"," %1", "case_jurisdiction_root_id"] },

		{ div:["xx yy"], kf_l:["Court Location","tag_-r_--o--%1-category_id-location_id-%0-%1", "case_location_lc_main-subcategories",  
":k:courts_f:location_id", ""," %1","category_id","location_id"," %0"," %1", "case_location_root_id"] },

		{ div:["xx yy"], kf_s:["Contact Person's Name","contact_fullname",":k:courts_f:contact_fullname"] },
		{ div:["xx yy"], kf_s:["Contact Person's Phone","contact_phone",":k:courts_f:contact_phone"] },
		{ div:["xx yy"], kf_s:["Contact Person's Email","contact_email",":k:courts_f:contact_email"] },

		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:courts_f:created_on","created_on",":k:courts_f:created_on"] },

		{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%1-user_id-created_by_id-%0-%1",   "user_lc_main-users", 
":k:courts_f:created_by_id", ""," %1","user_id","created_by_id"," %0"," %1",  "noop"] },
	]},
	{ vp_apply:["court_f_tags-courts_f"] }
]};

// --------------------------------------------------------------------------------------------

te["court_footer"] = { div:["x ba"], c:
[
	{ div:["d y07"], pg:["pgto","court_list-courts"," dh","da dl","court_list-courts"," dh","da dr"] },
	{ div:["e"] }
]};

te["court_r__"] = { c:
[
	{ li:[null,"court_vw_id-courts-^"], ev:["_vp"], c:
	[
		{ div:["c w30 y08 h01_"], s:["xx",":v:courts:name"] },
		{ div:["c w30 y "], s:["xx",""], uval:["",":v:courts:jurisdiction"] }, 
		{ div:["c w40 y"], s:["xx",""], uval:["",":v:courts:location"] }, 
		{ div:["c w40 y08 h01_"], c:
		[
			{ s:["c ll",":v:courts:contact_fullname"] },
			{ s:["c l",":v:courts:contact_phone"] },
			{ s:["c l",":v:courts:contact_email"] },
			// { div:["c l"], uval:["",":v:courts:contact_location"] },
			{ div:["e"] }
		]},
		{ div:["c w20 y08 h01_"], s:["xx",":d:dmyhn:1: "] },
		{ div:["c w20 y08 h01_"], s:["xx",":v:courts:created_by"] },
		{ div:["e"], arg:["",".id","%0"] } 
	]},
	{ div:["g"], arg:["","","court_r_-courts-va--@"] },
]};

te["court_r_"] = { court_r__:["w200 gh cb"] };

te["court_r"] = { div:["","va"], court_r__:["w200"] };

te["court_k"] = { c:
[
	{ div:["w200 bt bb gww"], s:["",""], c: // activate filter ctx
	[
		{ k_a:["c w30","","cd","Name","da db",			"usn",":k:courts_k:name:2"] },
		{ k_a:["c w30","","cd","Division","da db",		"jurisdiction_id",":k:courts_k:jurisdiction_id:2"] },
		{ k_a:["c w40","","cd","Location","da db",		"location_id",":k:courts_k:location_id:2"] },
		{ k_a:["c w40","","cd","Contact Person","da db",	"contact_fullname",":k:courts_k:contact_fullname:2"] },
		{ k_a:["c w20","","cd","Created On","da db",		"created_on",":k:courts_k:created_on:2"] },
		{ k_a:["c w20","","cd","Created By","da db",		"created_by_id",":k:courts_k:created_by_id:2"] },
		{ div:["e"] }
	]},
	{ p:["","court_list_new_nb"] }
]};

te["court_nb"] = { div:[], c:[ { p:["c","nb"], u:["nb","courts_nb"] }, { div:["e"] } ] };

te["court_title"] = { div:[] }; 

te["court_list"] = { list:["court_title","court_nb","bl br ox","court_k","court_r","courts","court_footer"] };

te["court_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				// { input:["g","","courts_t_","0","radio","1"] },
				{ ac:["c","court_main-courts-vftab","_u","x y cb b h2","Courts"] }, 
				//{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"] }
			]},
			// { div:["dd x y gw ba sh nd w14","vdd"] }
		]},

		{ div:["c l40"], ac:["ay","court_f-courts_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], c:
		[
			{ ac:["ay","court_new-r_-^","_vp","x t01 bd_ cb s",""], c:
			[ 
				{ s:["c l t h2 b","+"] },
				{ div:["c x y","","Add"] }, 
				{ div:["e"] }
			]},
			{ div:["g"], arg:["","","court_r_-courts-vftab-court_list_new_nb"] },
		]},

		{ div:["e"], c:[ { arg:["","","court_list-courts"] }, { arg:["","","0"] }, { arg:["","","100"] }, { arg:["","",""] } ] }
	]},
	{ div:["yy","vf"], c:[ { div:["","court_f-courts_f"], c: // ev:["_n_vpf"], c:
	[
		{ court_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","courts_v","100","radio","1"] }, { p:["tabv yy","vt"], court_list:[] } ] },
		{ div:[], c:[ { input:["g","","courts_v","0","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};

te["courts"] = { c:
[
       	{ div:[], c:
	[
		
	]},
	{ form:[], c:
	[
		{ div:[], c:
		[	
			{ input:["g","","court_vw_vt","0","radio","1"] }, 
			{ p:["tabv x20 y20 gw mm","vftab"], court_main:[] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","court_vw_vt","1","radio"] }, 
			{ p:["tabv gw yy mm","vfvw"] }
		]}
	]}
]};

