
te["advocate_ed_"] = { div:["w68 ma sh__ y gw_"], c:
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
			{ p:["c","nb"], c:[ { u:["nb","advocates_nb"] }, { u:["nb","errors"] } ] },
			{ div:["e"] }
		]},
		
		{ p:["x25","contact"], contact_ed_r_:
		[
"Name",":v:advocates:contact_fullname","Enter Advocate's Names",
":v:advocates:contact_phone",
":v:advocates:contact_location_id",":v:advocates:contact_location"," %0",
":v:advocates:contact_email"
		]},

		{ div:["x25 tt"], case_txt_:["Expertise","gws w63 x tt b05","expertise",":v:advocates:expertise","Enter Advocate's Expertise"] },

		{ div:["x25 tt"], case_txt_:["Interests","gws w63 x tt b05","interests",":v:advocates:interests","Enter Advocate's Interest"] },

		{ div:["x25 tt"], case_txt_:["Influence","gws w63 x tt b05","influence",":v:advocates:influence","Enter Advocate's Influence"] },

		{ div:["x25 tt"], case_txt_:["Organisation History","gws w63 x tt b05","org_history",":v:advocates:org_history","Enter Advocate's Organisation History"] },

		{ div:["x25 tt"], case_txt_:["Social Media","gws w63 x tt b05","social_media",":v:advocates:social_media","Enter Advocate's Social Media"] },

		{ div:["x25 tt"], case_txt_:["Impact Metrics","gws w63 x tt b05","impact_metrics",":v:advocates:impact_metrics","Enter Advocate's Impact"] },

		{ div:["x25 tt"], case_txt_:["Notes","gws w63 x tt b05","notes",":v:advocates:notes","Enter Notes"] },

		{ div:["x25 y15"], case_txt_:["Tags","gws w63 x tt b05","tags",":v:advocates:tags","Enter Tags"] },

		{ div:["x25 y20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};	

te["advocate_ed"] = { advocate_ed_:["Edit Advocate Details","advocate_ed-advocates","_postj","Update","Updating...","advocate_vw_id-advocates-vp","_u","Cancel"] };

te["advocate_new"] = { advocate_ed_:["Add Advocate","advocate_new-advocates","_postj","Add","Adding...","","_uvp","Cancel"] };

// --------------------------------------------------------------------------------------------

te["advocate_vw_id_"] = { div:["","ve"], c:
[
	{ div:[], c:
	[ 
		{ div:["d x w07"], s:["abs tt",""], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ ac:["c w07 ay","advocate_ed-advocates-vp","_u","y ba tc cb","Edit"], c:[ { arg:["",".id","%0"] } ] },
				
				{ div:["e"] }
			]},
		]},
		{ div:["e"] }
	]},

	{ div:["y"], c:
	[
		{ p:["c","nb"], c:[ { u:["nb","advocates_nb"] }, { u:["nb","errors"] } ] },
		{ div:["e"] }
	]},

	{ div:[""], contact_vw_id_:[":v:advocates:contact_fullname", ":v:advocates:contact_location", ":v:advocates:contact_phone", ":v:advocates:contact_email"] },

	{ div:["tt"], case_vw_val:["Interests",":v:advocates:interests"] },

	{ div:["tt"], case_vw_val:["Expertise",":v:advocates:expertise"] },

	{ div:["tt"], case_vw_val:["Influence",":v:advocates:influence"] },

	{ div:["tt"], case_vw_val:["Organisation History",":v:advocates:org_history"] },

	{ div:["tt"], case_vw_val:["Social Media",":v:advocates:social_media"] },

	{ div:["tt"], case_vw_val:["Impact Metrics",":v:advocates:impact_metrics"] },

	{ div:["tt"], case_vw_val:["Notes",":v:advocates:notes"] },

	{ div:["yy"], case_vw_val:["Tags",":v:advocates:tags"] },

]};

te["advocate_vw_id"] = { div:["w68 ma sh__ y gw_","vddvw"], ev:["_undd"], c:
[	
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b","Advocate Details"] },
		{ ac:["d ay","","_uvp","x bd cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 b20"], advocate_vw_id_:[] }
]};

// --------------------------------------------------------------------------------------------

te["advocate_lc_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","advocate_lc-advocates","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","advocate_lc-advocates","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["advocate_lc_r"] = { div:[], c: 
[
	{ input:["g","advocate_id","","%0","checkbox",":k:advocates_chk:advocate_id::0"] },
	{ ac:["r ay w60","","_chk","xx y07 cb",""], c:
	[ 
		{ div:["abs t03 w02"], s:["chk",""] },
		{ div:["ml2"], uhilite:[":v:advocates:contact_fullname"] },
		{ div:["e"], c:[ { arg:["-1","",":v:advocates:contact_fullname"] } ] }
	]}
]};

te["advocate_lc_k"] = { div:["g"], c:
[
	{ arg:["","contact_fullname__",":k:advocates_k:contact_fullname:2"] },
	{ p:["","e"], c:[ { arg:["","_c","%1"] }, { arg:["","sort","%6"] } ] }
]};

te["advocate_lc"] = { c:
[
	{ uchkargs:["advocates_chk"] },
	{ list:["end","end","mh30","advocate_lc_k","advocate_lc_r","advocates","advocate_lc_footer"] }
]};

te["advocate_lc_main"] = { c:
[
	{ div:["xx mb","va"], c:[ { div:["","advocate_lc-advocates"], c:
	[ 
		{ p:["w50 bb_b","txa"], c:[ { input:["w50 x tt b05","contact_fullname__","","","text",""], ev:["","_ky","","_uky"] } ] },
	]} ]},
	{ div:["","vd"], advocate_lc:[] }
]};

// --------------------------------------------------------------------------------------------

te["advocate_ls_footer"] = { div:["x gws mt"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","advocate_ls-advocates","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","advocate_ls-advocates","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["advocate_ls_r"] = { ac:["ay ","","_sel","x cb",""], c:
[
	{ div:["c"], s:["x y07 h01_",":v:advocates:contact_fullname"] },
	{ div:["d"], s:["x y07 h01_",""], uval:["",":v:advocates:contact_phone"] },
	{ div:["e"], c:[ { arg:["-0","","%0"] }, { arg:["-1","",":v:advocates:contact_fullname"] } ] }
]};

te["advocate_ls_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["advocate_ls"] = { list:["end","end","","advocate_ls_k","advocate_ls_r","advocates","advocate_ls_footer"] };

// --------------------------------------------------------------------------------------------

te["advocate_f_tags_"] = { c: 
[
	{ f:["Name",null,		" %0","contact_fullname",""] },
	{ f:["Phone",null,		" %0","contact_phone",""] },
	{ f:["Email",null,		" %0","contact_email",""] },
	{ f:["Location",null,		" %1","contact_location_id"," %1"] },
	{ f:["Expertise",null,		" %1","expertise_id"," %1"] },
	{ f:["Created On",null,		" :d:dmy:0: ","created_on",""] },
	{ f:["Created By",null,		" %1","created_by_id"," %1"] },
	{ div:["e"] }
]};

te["advocate_f_tags_k"] = { advocate_f_tags_:[":k:advocates_k:contact_fullname:2", ":k:advocates_k:contact_phone:2", ":k:advocates_k:contact_email:2", ":k:advocates_k:contact_location_id:2", ":k:advocates_k:expertise_id:2", ":k:advocates_k:created_by_id:2", ":k:advocates_k:created_on:2"] };

te["advocate_f_tags"] = { advocate_f_tags_:[":k:advocates_f:contact_fullname", ":k:advocates_f:contact_phone", ":k:advocates_f:contact_email", ":k:advocates_f:contact_location_id", ":k:advocates_f:expertise_id", ":k:advocates_f:created_by_id", ":k:advocates_f:created_on"] };

te["advocate_f"] = { div:["w58 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x25 y20 b h3","Search Advocate"] },
	{ div:["x15 b20"], c:
	[
		{ div:["xx yy"], kf_s:["Name","contact_fullname",":k:advocates_f:contact_fullname"] },
		{ div:["xx yy"], kf_s:["Phone","contact_phone",":k:advocates_f:contact_phone"] },
		{ div:["xx yy"], kf_s:["Email","contact_email",":k:advocates_f:contact_email"] },

		{ div:["xx yy"], kf_l:["Location","tag_-r_--o--%1-category_id-contact_location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:advocates_f:contact_location_id", ""," %1","category_id","contact_location_id"," %0"," %1", "case_location_root_id"] },

		{ div:["xx yy"], kf_l:["Expertise","tag_-r_--o--%1-category_id-expertise_id-%0-%1", "case_lc_main-subcategories",  ":k:advocates_f:expertise_id", "", " %1", "category_id","expertise_id"," %0"," %1", "case_expertise_root_id"] },

		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:advocates_f:created_on","created_on",":k:advocates_f:created_on"] },

		{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%1-user_id-created_by_id-%0-%1",   "user_lc_main-users",":k:advocates_f:created_by_id", 
""," %1","user_id","created_by_id"," %0"," %1",  "noop"] },
	]},
	{ vp_apply:["advocate_f_tags-advocates_f"] }
]};

// --------------------------------------------------------------------------------------------

te["advocate_footer"] = { div:["x ba"], c:
[
	{ div:["d y07"], pg:["pgto","advocate_list-advocates"," dh","da dl","advocate_list-advocates"," dh","da dr"] },
	{ div:["e"] }
]};

te["advocate_r__"] = { c:
[
	{ li:[null,"advocate_vw_id-advocates-^"], ev:["_vp"], c:
	[
		{ div:["c w20 y08 h01_"], s:["xx",":v:advocates:contact_fullname"] },
		{ div:["c w20 y08 h01_"], s:["xx",":v:advocates:contact_phone"] }, 
		{ div:["c w20 y08 h01_"], s:["xx",":v:advocates:contact_email"] }, 
		{ div:["c w40 y"], s:["xx",""], uval:["",":v:advocates:contact_location"] }, 
		{ div:["c w40 y"], s:["xx",""], uchk:["tagv",":v:advocates:expertise"] }, 
		{ div:["c w20 y08 h01_"], s:["xx",":d:dmyhn:1: "] },
		{ div:["c w20 y08 h01_"], s:["xx",":v:advocates:created_by"] },
		{ div:["e"], arg:["",".id","%0"] } 
	]},
	{ div:["g"], arg:["","","advocate_r_-advocates-va--@"] },
]};

te["advocate_r_"] = { advocate_r__:["w200 gh cb"] };

te["advocate_r"] = { div:["","va"], advocate_r__:["w200"] };

te["advocate_k"] = { c:
[
	{ div:["w200 bt bb gww"], s:["",""], c: 
	[
		{ k_a:["c w20","","cd","Name","da db","contact_fullname",":k:advocates_k:contact_fullname:2"] },
		{ k_a:["c w20","","cd","Phone","da db","contact_phone",":k:advocates_k:contact_phone:2"] },
		{ k_a:["c w20","","cd","Email","da db","contact_email",":k:advocates_k:contact_email:2"] },
		{ k_a:["c w40","","cd","Location","da db","contact_location_id",":k:advocates_k:contact_location_id:2"] },
		{ k_a:["c w40","","cd","Expertise","da db","expertise_id",":k:advocates_k:expertise_id:2"] },
		{ k_a:["c w20","","cd","Created On","da db","created_on",":k:advocates_k:created_on:2"] },
		{ k_a:["c w20","","cd","Created By","da db","created_by_id",":k:advocates_k:created_by_id:2"] },
		{ div:["e"] }
	]},
	{ p:["","advocate_list_new_nb"] }
]};

te["advocate_nb"] = { div:[], c:[ { p:["c","nb"], u:["nb","advocates_nb"] }, { div:["e"] } ] };

te["advocate_title"] = { div:[] }; 

te["advocate_list"] = { list:["advocate_title","advocate_nb","bl br ox","advocate_k","advocate_r","advocates","advocate_footer"] };

te["advocate_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				// { input:["g","","advocates_t_","0","radio","1"] },
				{ ac:["c","advocate_main-advocates-vftab","_u","x y cb b h2","Advocates"] }, 
				//{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"] }
			]},
			// { div:["dd x y gw ba sh nd w14","vdd"] }
		]},

		{ div:["c l40"], ac:["ay","advocate_f-advocates_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], c:
		[
			{ ac:["ay","advocate_new-r_-^","_vp","x t01 bd_ cb s",""], c:
			[ 
				{ s:["c l t h2 b","+"] },
				{ div:["c x y","","Add"] }, 
				{ div:["e"] }
			]},
			{ div:["g"], arg:["","","advocate_r_-advocates-vftab-advocate_list_new_nb"] },
		]},

		{ div:["e"], c:[ { arg:["","","advocate_list-advocates"] }, { arg:["","","0"] }, { arg:["","","100"] }, { arg:["","",""] } ] }
	]},
	{ div:["yy","vf"], c:[ { div:["","advocate_f-advocates_f"], c: // ev:["_n_vpf"], c:
	[
		{ advocate_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","advocates_v","100","radio","1"] }, { p:["tabv yy","vt"], advocate_list:[] } ] },
		{ div:[], c:[ { input:["g","","advocates_v","0","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};

te["advocates"] = { c:
[
       	{ div:[], c:
	[
		
	]},
	{ form:[], c:
	[
		{ div:[], c:
		[	
			{ input:["g","","advocate_vw_vt","0","radio","1"] }, 
			{ p:["tabv x20 y20 gw mm","vftab"], advocate_main:[] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","advocate_vw_vt","1","radio"] }, 
			{ p:["tabv gw yy mm","vfvw"] }
		]}
	]}
]};
