
te["activity_messages_txt"] = { textarea:["wp100 h11 xx y08 ba_b bd","","src_msg","","Reply ..."] };

te["activity_message_r"] = { div:["x y"], c:
[
	{ arg:["","","%0"] },
	{ div:[":v:messages:src_vector::vector:10"], c:
	[
		{ div:["r20"], c:[ { pre:[":v:messages:src_vector::vector:11","",":v:messages:src_msg"] }, { div:["e"] } ] },
		{ s:[":v:messages:src_vector::vector:12",":r::1:: : ago:: : ago:"] }, // x08 y tr s cd
		// { arg:[] }
	]},
	{ div:["e"] }
]};

te["activity_messages"] = { c:
[
	{ div:[] }, // inbound nb
	{ p:["x20 yy","msgs"], c:
	[
		{ div:["oy scroller"], c:
		[
			{ u:["activity_message_r","messages","","","desc"] },
			{ ufn:["activity_messages_height"] },
		]},
		{ div:[] }
	]},
	{ div:["","ve"], c:
	[
		{ p:["x30 y20","o"], c:
		[
			 { div:[], c:
			 [
 				{ div:["d w08"], ac:["abs btn ao","","_activity_message_send"," t35 tc ba_b bd w08 h06 cb","Send"] },
 				{ div:["e"] }
			 ]},
			 { p:["mr10","sended"], activity_messages_txt:[] },
			
		]}
	]}
]};

te["activity_src_messages"] = { u:["activity_messages","messages_ctx"] };

te["activity_src"] = { usub:["noop,noop,activity_src_messages","r_",":v:activities:src","call,walkin,chat"] };

// ----------------------------------------------------------------------

te["activity_disposition_ed_r"] = { div:[], c:
[
	{ input:["g","","disposition_id","%0","radio"] },
	{ ac:["rg rc r ay bd_","","_opt","xx t02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w35","%7"] },
		{ div:["e"] }			
	]}
]};

te["activity_disposition_new"] = { div:["w45 ma sh__ gw_ x20 y20","vddvw"], ev:["_undd"], c:
[
	{ div:["y"], c:
	[
		{ s:["c x y h2 b","Disposition"] },
		{ ac:["d","","_uvp","x y h cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ div:["","ve"], c:
	[
		{ div:[], c:[ { p:["c","nb"] }, { div:["e"] } ] },
		{ div:["t b20"], c:
		[
			{ s:["x y cd gp cr","Unknown Caller"] },
			{ u:["reporter_disposition_vw_r","reporters_uuid","","reporters_uuid"] }
		]},
		{ p:["h20 oy ba_ bd","o"], u:["activity_disposition_ed_r","subcategories"] },
		// { p:["",""], c:[ { textarea:[] } ] }
		{ ac:["t30 ao btn","activity_disposition-actions","_activity_postj","y n gb cw b tc","Submit"] },
	]}
]};

// -------

te["disposition_history_r_no_data"] = { s:["bt_ bb_ x y08 cd","No Matching Activity"] };

te["activity_disposition_history_footer"] = { c:
[
	{ div:[], c:
	[
		{ div:["d y07 s"], pg:["pgto","activity_disposition_history_list-dispositions"," dh","da dl","activity_disposition_history_list-dispositions"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_disposition_history_r_case_id"] = { c:
[
	{ s:["c ll y b",CASE_ID_PREFIX] },
	{ s:["c y b",":v:dispositions:case_id"] },
	{ div:["c xx"], c:
	[ 
		{ input:["g","","acase_t","1","radio"] },
		{ ac:["c xx t02 ag tab","reporter_fuuid-reporters^uuid","_activity_case","xx y03 bd16 m",""], c:
		[
			{ s:["","Followup"] },
			{ div:["g"], arg:["","case_id",":v:dispositions:case_id"] }
		]}
	]}
]};

te["activity_disposition_history_r"] = { div:[""], c:
[
	{ div:["abs l"], s:["x y micon h3 ba gws_ bd16",":v:dispositions:src::case_src:5"] },
	{ li:["ll ml2 t b10 cb bd bl"], c:
	[

		{ s:["c xx y",":v:dispositions:disposition"] },
		{ u:[":u::13:0:noop:activity_disposition_history_r_case_id"] },
		{ s:["d x y",":r::7:: : ago:: : ago:"] },
		{ s:["d x y",":v:dispositions:created_by"] },
		{ div:["e"] }			
	]}
]};

te["activity_disposition_history_k"] = { div:["g"], disposition_k:[] };

te["activity_disposition_history_nb"] = { div:[] };

te["activity_disposition_history_title"] = { div:["t b10"], c:
[
	{ ac:["c","","","x y cb b",""], c:
	[
		// { span:["","","%4"] },
		{ span:["x","","Activity History"] }
	]},
	
	{ div:["d"], c:
	[
		{ input:["g","","acontacts_t","0","radio"] },
		{ ac:["ao","activity_disposition-subcategories-^","_activity_disposition","x bd16 gg cw",""], c:
		[
			{ s:["c x t h2 b","#"] },
			{ s:["c x y s","Disposition"] },
			{ input:["g","","adt","2","radio",""] },
			{ div:["e"], c:[ { arg:["","category_id","0"] }, { arg:["","_c","100"] }, { arg:["","sort","name"] } ] }
		]},
		{ div:["g"], arg:["","","activity_disposition_ufn-actions-vt"] }, // vp return anchor
	]},

	{ div:["d xx"], c:
	[
		{ input:["g","","acase_t","1","radio"] },
		{ ac:["ao ","reporter_uuid-reporters^uuid","_activity_case","x bd16 gg cw",""], c:
		[
			{ s:["c x t h2 b","+"] },
			{ s:["c x y s","New Case"] },
			{ div:["e"], arg:["","case_id","-1"] }
		]},
		{ div:["g"], arg:["","",""] }, // vp return anchor
	]},
	
	{ div:["e"] }
]};

te["activity_disposition_history_list"] = { list:["activity_disposition_history_title", "activity_disposition_history_nb", "", "activity_disposition_history_k", "activity_disposition_history_r", "dispositions", "activity_disposition_history_footer"] };

// // -------------------------------------------------------------

te["activity_case_footer"] = { c:
[
	{ u:["activity_case_r_no_data","cases_no_data"] },
	{ div:[""], c:
	[
		{ div:["d y07 s"], pg:["pgto","activity_case_list-cases"," dh","da dl","activity_case_list-cases"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_case_r_no_data"] = { s:["xx y08 gws_ ba cd bd","No Matching Cases"] };

te["activity_case_r"] = { li:["ooo117"], c:[ { div:["","ve"], c:
[
	{ input:["g","","acvw","1","radio",""] },
	{ ac:["al","reporter_fuuid-reporters^uuid-@","_activity_case","x tt h06 oh cb",""], c:
	[
		{ div:[""], c:
		[

			{ s:["d r10 t ",":v:cases:id"] },
			{ s:["d l t",CASE_ID_PREFIX] },
			{ div:["c x"], uval:["",":v:cases:case_category"] },			
			{ div:["e"] }
		]},
		{ div:["s"], c:
		[
			{ s:["d xx t s",":d:dmyhnr:1: "] },
			{ s:["d x y",":v:cases:created_by"] },
			{ s:["d x y",":v:cases:escalated_to"] },
			{ s:["c x y",":v:cases:status::case_status:2"] },
			{ s:["c xx y",":v:cases:priority::case_priority:2"] },
			{ s:["c xx y",":v:cases:justice"] },
			{ div:["e"], c:[ { arg:["","case_id","%0"] }, { arg:["","uuid",":v:cases:uuid"] } ] }
		]}
	]}
]} ]};

te["activity_case_k"] = { div:["g"], case_k:[] };

te["activity_case_nb"] = { div:[] };

te["activity_case_title"] = { div:[], c:
[
	{ ac:["c x yy","","","y cb b n",""], c:
	[
		{ span:["","","%4"] },
		{ span:["x","","Matching Activities"] }
	]},
		
	{ div:["e"] }
]};

te["activity_case_list"] = { list:["activity_case_title","activity_case_nb","","activity_case_k","activity_case_r","cases","activity_case_footer"] };

// ----------

te["activity_reporter_case_footer"] = { c:
[
	{ u:["activity_case_r_no_data","cases_no_data"] },
	{ div:[""], c:
	[
		{ div:["d y07 s"], pg:["pgto","activity_reporter_case_list-cases"," dh","da dl","activity_reporter_case_list-cases"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_reporter_case_title"] = { div:[], c:
[
	{ ac:["c yy","","","x y n cb b",""], c:
	[
		// { span:["","","%4"] },
		{ span:["x","","Reported Cases"] }
	]},
			
	{ div:["e"] }
]};

te["activity_reporter_case_list"] = { list:["activity_reporter_case_title", "activity_case_nb", "", "activity_case_k", "activity_case_r", "cases", "activity_reporter_case_footer"] };

// // -------------------------------------------------------------

te["activity_contact_footer"] = { c:
[
	{ u:["activity_contact_r_no_data","contacts_no_data"] },
	{ div:["t"], c:
	[
		// { ac:["c x y","","","x y cd","Clear Selection"] },
		{ div:["d y07 s"], pg:["pgto","activity_contact_list-contacts"," dh","da dl","activity_contact_list-contacts"," dh","da dr"] },
		{ div:["e"] }
	]}
]};

te["activity_contact_r_no_data"] = { s:["xx y08 cd gws_","No Matching Contacts"] };

te["activity_contact_r_"] = { p:["mb gws_ bd","o"], c:
[
	{ p:["xx y01 savl go cw bd b","nb"] },
	{ input:["g","","activity_contact_id","%0","radio",null] },
	{ li:["r rg_ ll y bd6"], ev:["_activity_contact"], c: // 
	[
		{ div:["abs w01_ t"], s:["opt",""] },
		{ div:["ml2 ay"], c:
		[
			{ div:["c"], c:
			[
				{ ac:["","case_contact_vw_id-contacts","_vp","l y04 cb b",""], c:
				[
					{ s:["",":v:contacts:fullname"] },
					{ div:["g"], arg:["",".id","%0"] }
				]},
				{ div:[] } // vp return anchor
			]},
			{ s:["c t",","] },
			{ div:["c ll t"], uval:["",":v:contacts:age_group"] },
			{ s:["c t",","] },
			{ div:["c ll t"], uval:["",":v:contacts:sex"] },
			{ div:["e"] }
		]},
		{ div:["s ml2 x"], c:
		[
			{ uval:["",":v:contacts:location"] },
			{ span:["xx i b","",":v:contacts:landmark"] },
		]},
		{ div:["s ml2 x y"], c:
		[
			{ s:["c l x y micon","call"] },
			{ div:["c y"], uval:["",":v:contacts:phone"] },
			{ s:["c l20 y micon","email"] },
			{ div:["c y"], uval:["",":v:contacts:email"] },
			{ div:["e"] }
		]}
	]}
]};

te["activity_contact_r_new"] = { activity_contact_r_:["1"] };

te["activity_contact_r"] = { activity_contact_r_:[""] };

te["activity_contact_k"] = { div:["g"], contact_k:[] };

te["activity_contact_nb"] = { div:[] };

te["activity_contact_title"] = { div:[] };

te["activity_contact_list"] = { list:["activity_contact_title", "activity_contact_nb", "", "activity_contact_k", "activity_contact_r", "contacts", "activity_contact_footer"] };

// -------------------------------------------------------------

te["activity_match_f_tags_"] = { c: 
[
	// { s:["c x tt h3 micon b ","search"] },
	// { s:["c l r25 yy b h3","Search"] },
			
	{ f:["Name",null,	" %0","fullname",""] },
	{ f:["Phone",null,	" %0","phone",""] },
	{ f:["Age",null,	" %1","age_group_id"," %1"] },
	{ f:["Gender",null,	" %1","sex_id"," %1"] },
	{ f:["Location",null,	" %1","location_id"," %1"] },

	{ f:["CaseID",null,		" %0","cases^id",""] },
	{ f:["Created On",null,		" :d:dmy:0: ","cases^created_on",""] },
	{ f:["Created By",null,		" %1","cases^created_by_id"," %1"] },
	{ f:["Source",null,		" %0","cases^src",""] },
	{ f:["Category",null,		" %1","cases^case_category_id"," %1"] },
        { f:["GBV Related",null,        " ::yesno:0:2","cases^gbv_related",""] },
	{ f:["Priority",null,		" ::case_priority:0:1","cases^priority",""] },
	{ f:["Status",null,		" ::case_status:0:1","cases^status",""] },
	{ f:["Escalated To",null,	" %1","cases^escalated_to_id"," %1"] },
	{ f:["Case Assessment",null,	" %1","cases^assessment_id"," %1"] },
	{ f:["Status in Justice System",null," %1","cases^justice_id"," %1"] },
	
//	{ f:["Services",null,		" %1","services^category_id"," %1"] },
	
//	{ f:["Referals",null,		" %1","referals^category_id"," %1"] },
		
//	{ p:["g","o"], arg:["","_title",null] }, 
	{ div:["e"] }
]};

te["activity_match_f_tags_k"] = { activity_match_f_tags_:
[
":k:contacts_k:fullname:2", ":k:contacts_k:phone:2", 
":k:contacts_k:age_group_id:2", ":k:contacts_k:sex_id:2", ":k:contacts_k:location_id:2",
":k:contacts_k:cases^id:2", ":k:contacts_k:cases^created_on:2", ":k:contacts_k:cases^created_by_id:2", ":k:contacts_k:cases^src:2", 
":k:contacts_k:cases^case_category_id:2",":k:contacts_k:cases^gbv_related:2", ":k:contacts_k:cases^priority:2", ":k:contacts_k:cases^status:2", ":k:contacts_k:cases^escalated_to_id:2", 
":k:contacts_k:cases^assessment_id:2",  ":k:contacts_k:cases^justice_id:2",  
]};

te["activity_match_f_tags"] = { activity_match_f_tags_:
[
":k:contacts_f:fullname", ":k:contacts_f:phone", 
":k:contacts_f:age_group_id", ":k:contacts_f:sex_id", ":k:contacts_f:location_id",
":k:contacts_f:cases^id", ":k:contacts_f:cases^created_on", ":k:contacts_f:cases^created_by_id", ":k:contacts_f:cases^src", 
":k:contacts_f:cases^case_category_id", ":k:contacts_f:cases^gbv_related", ":k:contacts_f:cases^priority", ":k:contacts_f:cases^status", ":k:contacts_f:cases^escalated_to_id",  
":k:contacts_f:cases^assessment_id",  ":k:contacts_f:cases^justice_id",  
]};

te["activity_cases_f"] = { c:
[
	{ div:["xx yy"], kf_s:["CaseID","cases^id",":k:contacts_f:cases^id"] },			
			
	{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","cases^created_on",":k:contacts_f:cases^created_on","cases^created_on",":k:contacts_f:cases^created_on"] },
			
	{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%5-user_id-cases^created_by_id-%0-%5",   "user_lc_main-users",":k:contacts_f:cases^created_by_id", 
""," %1","user_id","cases^created_by_id"," %0"," %1",  "noop"] },

	{ div:["xx yy"], kf_c:["Source","tag_-r_--o--::case_src:0:1--cases^src-%0-",  	":k:contacts_f:cases^src",
""," %0","","cases^src"," %0","", 				":k:contacts_f:cases^src","case_src", "cases^src"," %0",""] },
		
	{ div:["xx yy"], kf_l:["Category","tag_-r_--o--%1-category_id-cases^case_category_id-%0-%1",   "case_category_lc_main-subcategories",  ":k:contacts_f:cases^case_category_id",  ""," %1","category_id","cases^case_category_id"," %0"," %1", "case_category_root_id"] },
	
	 { div:["xx yy"], kf_c:["GBV Related", "tag_-r_--o--::yesno:0:2--cases^gbv_related-%0-",  ":k:contacts_f:cases^gbv_related",
""," ::yesno:0:2","","cases^gbv_related"," %0","",       ":k:contacts_f:cases^gbv_related","yesno",  "cases^gbv_related"," ::yesno:0:2",""] },

	{ div:["xx yy"], kf_c:["Priority", "tag_-r_--o--::case_priority:0:1--cases^priority-%0-",  ":k:contacts_f:cases^priority", 
""," ::case_priority:0:1","","cases^priority"," %0","", 	":k:contacts_f:cases^priority","case_priority",  "cases^priority"," ::case_priority:0:1",""] },
				
	{ div:["xx yy"], kf_c:["Status", "tag_-r_--o--::case_status:0:1--cases^status-%0-",  	":k:contacts_f:cases^status",
""," ::case_status:0:1","","cases^status"," %0","", 	":k:contacts_f:cases^status","case_status",  "cases^status"," ::case_status:0:1",""] },
		
	{ div:["xx yy"], kf_l:["Escalated To","tag_-r_--o--%5-user_id-cases^escalated_to_id-%0-%5",   "user_lc_main-users", ":k:contacts_f:cases^escalated_to_id", 
""," %1","user_id","cases^escalated_to_id"," %0"," %1", "noop"] },	
		
	{ div:["xx yy"], kf_l:["Case Assessment","tag_-r_--o--%1-category_id-cases^assessment_id-%0-%1",   "case_assessment_lc_main-subcategories", ":k:contacts_f:cases^assessment_id", 
"", " %1", "category_id", "cases^assessment_id"," %0"," %1", "case_assessment_root_id"] },	

	{ div:["xx yy"], kf_l:["Status in Justice System","tag_-r_--o--%1-category_id-cases^justice_id-%0-%1",   "case_justice_lc_main-subcategories", ":k:contacts_f:cases^justice_id", 
""," %1","category_id","cases^justice_id"," %0"," %1", "case_justice_root_id"] },	
					
]};

te["activity_contacts_f"] = { c:
[
	{ div:["xx yy"], kf_s:["Name","fullname",":k:contacts_f:fullname"] },
	{ div:["xx yy"], kf_s:["Phone","phone",":k:contacts_f:phone"] },
	{ div:["xx yy"], kf_l:["Age","tag_-r_--o--%1-category_id-age_group_id-%0-%1", "case_age_group_lc_main-subcategories", 
":k:contacts_f:age_group_id", ""," %1","category_id","age_group_id"," %0"," %1", "case_age_group_root_id"] },
	{ div:["xx yy"], kf_l:["Sex","tag_-r_--o--%1-category_id-sex_id-%0-%1", "case_sex_lc_main-subcategories",  
":k:contacts_f:sex_id", ""," %1","category_id","sex_id"," %0"," %1", "case_sex_root_id"] },
	{ div:["xx yy"], kf_l:["Location","tag_-r_--o--%1-category_id-location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:contacts_f:location_id", ""," %1","category_id","location_id"," %0"," %1", "case_location_root_id"] },
]};

te["activity_match_f"] = { div:["w60 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ div:["x15"], c:
	[
		{ div:["t15","vb"], c:
		[
			{ s:["c xx y h3 b","Search"] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","1","radio"] }, { ac:["ay tab","","_tab","xx y bd16 gws_ cb","Cases"] } ] },
			{ div:["d xx"], c:[ { input:["g","","case_f_vw_t","0","radio","1"] }, { ac:["ay tab","","_tab","xx y bd16 gws_ cb","Contacts"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Client"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","3","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Perpetrator"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","4","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Sevices"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","5","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Referals"] } ] },
			{ div:["e"] }
		]},
		{ div:["y20"], c:
		[
			{ div:[], c:[ { input:["g","","case_f_vw_tv","0","radio","1"] }, { div:["tabv"], activity_contacts_f:[] } ] },
			{ div:[], c:[ { input:["g","","case_f_vw_tv","1","radio"] }, { div:["tabv"], activity_cases_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","2","radio"] }, { div:["tabv"], case_clients_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","3","radio"] }, { div:["tabv"], case_perpetrators_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","4","radio"] }, { div:["tabv"], case_services_f:[] } ] },
			//{ div:[], c:[ { input:["g","","case_f_vw_tv","5","radio"] }, { div:["tabv"], case_referals_f:[] } ] }
		]}
	]},
	{ vp_apply:["activity_match_f_tags-contacts_f"] }
]};

te["activity_match_disposition_k"] = { c:
[
	{ arg:["","contacts^id",":k:contacts_k:id:2"] },
	{ arg:["","contacts^fullname",":k:contacts_k:fullname:2"] },
	{ arg:["","src_address",":k:contacts_k:phone:2"] },
	{ arg:["","contacts^age_group_id",":k:contacts_k:age_group_id:2"] },
	{ arg:["","contacts^sex_id",":k:contacts_k:sex_id:2"] },
	{ arg:["","contacts^location_id",":k:contacts_k:location_id:2"] },
	
	{ arg:["","cases^id",":k:contacts_k:cases^id:2"] },
	{ arg:["","cases^created_on",":k:contacts_k:cases^created_on:2"] },
	{ arg:["","cases^created_by_id",":k:contacts_k:cases^created_by_id:2"] },
	{ arg:["","cases^src",":k:contacts_k:cases^src:2"] },
	{ arg:["","cases^case_category_id",":k:contacts_k:cases^case_category_id:2"] },
        { arg:["","cases^gbv_related",":k:contacts_k:cases^gbv_related:2"] },
	{ arg:["","cases^priority",":k:contacts_k:cases^priority:2"] },
	{ arg:["","cases^status",":k:contacts_k:cases^status:2"] },
	{ arg:["","cases^escalated_to_id",":k:contacts_k:cases^escalated_to_id:2"] },
	{ arg:["","cases^assessment_id",":k:contacts_k:cases^assessment_id:2"] },
	{ arg:["","cases^justice_id",":k:contacts_k:cases^justice_id:2"] },
]};

te["activity_match_case_k"] = { c:
[
	{ arg:["","reporter_contact_id",":k:contacts_k:id:2"] },
	{ arg:["","reporter_fullname",":k:contacts_k:fullname:2"] },
	{ arg:["","reporter_phone",":k:contacts_k:phone:2"] },
	{ arg:["","reporter_age_group_id",":k:contacts_k:age_group_id:2"] },
	{ arg:["","reporter_sex_id",":k:contacts_k:sex_id:2"] },
	{ arg:["","reporter_location_id",":k:contacts_k:location_id:2"] },
	
	{ arg:["","id",":k:contacts_k:cases^id:2"] },
	{ arg:["","created_on",":k:contacts_k:cases^created_on:2"] },
	{ arg:["","created_by_id",":k:contacts_k:cases^created_by_id:2"] },
	{ arg:["","src",":k:contacts_k:cases^src:2"] },
	{ arg:["","case_category_id",":k:contacts_k:cases^case_category_id:2"] },
        { arg:["","gbv_related",":k:contacts_k:cases^gbv_related:2"] },
	{ arg:["","priority",":k:contacts_k:cases^priority:2"] },
	{ arg:["","status",":k:contacts_k:cases^status:2"] },
	{ arg:["","escalated_to_id",":k:contacts_k:cases^escalated_to_id:2"] },
	{ arg:["","assessment_id",":k:contacts_k:cases^assessment_id:2"] },
	{ arg:["","justice_id",":k:contacts_k:cases^justice_id:2"] },
]};

te["activity_match_vw"] = { c:
[
	{ div:[], c:[ { arg:["","_c","5"] } ] }, // need for corect filtering // div also needed by uvpf
	
	{ div:["abs w45 x15","vt"], c:
	[
		{ div:["mb","vb"], c:
		[
			{ ac:["c x y","","","x y cb b",""], c:
			[
				// { span:["","","%4"] },
				{ span:["","","Select Reporter"] }	
			]},
		
			{ div:["d y"], c:
			[
				{ input:["g","","acontacts_t","1","radio"] },
				{ ac:["al","case_contact_new-r_-^","_activity_contact_new","x bd16 cb",""], c:
				[
					{ s:["c x t04 h3 b","+"] },
					{ s:["c x y s","New Contact"] },
					{ div:["e"], c:[ { arg:["phone-8","",":k:contacts_k:phone:2"] } ] }
				]},
				{ div:["g"], arg:["","","activity_contact_r_new-contacts-vt-vtn"] }, // vp return anchor
			]},
		
			{ div:["d xx y"], c:
			[
				{ input:["g","","acontacts_t","0","radio","1"] },
				{ ac:["al","activity_match_f-contacts_f","_activity_search","xx bd16 cb",""], c:
				[
					{ s:["c t h3 micon b ","search"] },
					{ div:["c"], s:["x y s","Search"] },
					{ div:["e"] }
				]}	
			]},

			{ div:["e"] }
		]},
		{ div:[], c:
		[
			{ p:["","vtn"] },
			{ div:["","vt"], u:["activity_contact_list","contacts_ctx"] },
		]},
		
	]},
	
	{ div:["ml500 x30"], c: // 
	[	
		{ p:["","vtdisp"], c:
		[
			{ div:[], activity_match_disposition_k:[] }, 
			{ uv:["activity_disposition_history_list","dispositions"] }
		]}
	]},
]};

te["activity_match"] = { c: // childNodes[2].firstChild.childNodes[1].  childNodes[2].firstChild;
[
	{ div:[], c:
	[
		{ div:["e"], c:[ { arg:["","","activity_match_vw-contacts"] }, { arg:["","","0"] }, { arg:["","","0"] }, { arg:["","",""] } ] }
	]},

	{ div:["y","vf"], c:[ { div:["x20","activity_match_f-contacts_f"], ev:["__vpf"], c:
	[
		{ activity_match_f_tags_k:[] }
	]} ]},
	
	{ div:["yy"], c:
	[
		{ div:[], c:
		[ 
			{ input:["g","","cghgmtv","0","radio","1"] }, 
			{ p:["_tabv","vs"], activity_match_vw:[] } 
		]},
	]}
]};

te["activity_vw_id_tabs"] = { c:
[
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","0","radio","1"] }, // select reporter
		{ p:["tabv mh90","vftab"], u:["activity_match","activities"] } // vfls
	]},
	{ div:[], c:
	[	
		{ input:["g","","activity_vw_vt","1","radio"] }, // case-form (new|followup)
		{ p:["tabv ","vfvw"] }
	]},
]};

te["activity_vw_id"] = { c: 
[
	{ div:["l20 tt","vb"], c: 
	[
		{ ac:["c y08 _tabu","","","n cb b",""], c:
		[
			{ s:["c l y",":v:activities:src_vector::vector:4"] },
			{ s:["c l y",":v:activities:src::case_src:1"] },
                	{ div:["c l t02"], s:["x h2 micon","navigate_next"] },
			{ s:["c x y",":v:activities:src_address"] },
			{ div:["e"] }
		]},
		
		{ p:["d w50 y","src_btns"], c:[ { div:["abs w50",":v:activities:src_uid"], u:[null] } ] }, 	// chan button
		
		{ p:["e","o"], c:[ { arg:["","src",":v:activities:src"] }, { arg:["","src_ts",":v:activities:src_ts"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_callid",":v:activities:src_callid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, { arg:["","src_vector",":v:activities:src_vector"] }, { arg:["","src_uid2",":v:activities:src_uid2"] } ] },
	]}, 
	{ form:[] } 	// tabs
]};

te["activity_btns"] = { c:
[	
	{ div:["d x y"], c:
	[
		{ input:["g","","sbr","1","radio"] },
		{ ac:["x","","_activity_close","x cb",""], c:
		[
			{ s:["d x y h2 b","&Cross;"] },
			{ s:["d x y ","Close"] },
			{ div:["e"] }
		]},
	]},
		
	{ div:["e"] }
]};

te["activity_toolbar"] = { div:["ma w18 g","chan_id_here"], c: // 
[
	{ input:["g","","sbl__","1","radio","1"] },
	{ ac:["abs mtn45 ao t08 w13 bd","","","w13 bd tc cw",""], c:[ { div:["::case_src:9:3"], c:
	[
		{ s:["x y tc","::case_src:9:4"] },
	]} ]}
]};

// -------------------------------------------------------------

te["activity_lst_footer"] = { div:["x y mt"], c:
[
	{ div:["d t03"], c:[ { ac:["nav","activity_lst-activities","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","activity_lst-activities","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ s:["d l r15 y cd s","%4"] },
	{ s:["d  y cd s","of"] }, 
	{ s:["d x y cd s","%3"] },
	{ s:["d x y cd s","-"] },
	{ s:["d x y cd s","%2"] },
	{ div:["e"] }
]};

te["activity_lst_disposition_r"] = { div:["d ll y04 s cr"], uval:["","%0"] };

te["activity_lst_disposition"] = { uchk:["activity_lst_disposition_r","%0"] };

te["activity_lst_r"] = { div:[], c:
[
	{ input:["g","","sbl","1","radio"] },
	{ li:["sbr cb xx bb_",""], ev:["_activity_vw"], s:["x s y",""], c: 
	[
		//{ s:["c t h3 micon","call"] },
		{ div:[""], c:
		[
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_vector::vector:4"] },  
				{ s:["c t x",":v:activities:src::case_src:1"] },
				{ s:["d t",":r::10:: : ago:: : ago:"] },
				{ div:["e"] }
			]},
			{ div:[], c:
			[
				{ s:["c t",":v:activities:src_address"] },	
				{ s:["d t",":h:ms:18:"] },
				{ s:["d x t",":v:activities:src_status::activity_status:1"] }, 
				{ div:["e"] }
			]},
			{ p:["",":v:activities:src_uid"], c:
			[ 
				{ uchk:["activity_lst_disposition_r",":v:activities:dispositions"] }, 
				{ div:["e"] } 
			]}
		]},
		
		{ div:["e"], c:[ { arg:["",".id","%0"] }, { arg:["","src",":v:activities:src"] }, { arg:["","src_ts",":v:activities:src_ts"] }, { arg:["","src_uid",":v:activities:src_uid"] }, { arg:["","src_callid",":v:activities:src_callid"] }, { arg:["","src_address",":v:activities:src_address"] }, { arg:["","src_usr",":v:activities:src_usr"] }, { arg:["","src_vector",":v:activities:src_vector"] }, { arg:["","src_uid2",":v:activities:src_uid2"] } ]}
	]}
]};

te["activity_lst_k"] = { div:["g"], c:
[
	{ p:["","e"], c:[ { arg:["","_c","%1"] } ] }
]};

te["activity_lst"] = { list:["end","end","","activity_lst_k","activity_lst_r","activities","activity_lst_footer"] };

// -------------------------------------------------------------

te["activity_case_ufn"] = { ufn:["activity_case_ufn"] };

te["activity_disposition_ufn"] = { ufn:["activity_disposition_ufn"] };

// -------------------------------------------------------------

function activity_close ()
{
	var coll = document.getElementById ("vv").childNodes;	
	
	var src = "";
	if (coll[1].firstChild && coll[1].firstChild.firstChild && coll[1].firstChild.firstChild.id=="call_toolbar")
	{
		console.log (" ----> "+coll[0].lastChild.className)
		var a = {"action":"3"}
		url (coll[1].firstChild, "agent", "agent", "", null, 2, a, "POST");
	}
		
	coll[1].innerHTML = ""; // toolbar
	coll[6].childNodes[1].childNodes[1].innerHTML = "";  // vw
	coll[6].childNodes[2].firstChild.checked = true; // show dash
	nd (coll[1], te["toolbar_default"], [], [], [0]); // show toolbar
			
	var p = document.getElementById ("vp"); // close vp (if open)
	p.style.display = "none";
	p.innerHTML = "";
}

function activity_disposition (p)
{
	var a = {args:"?", _c:null, __c:null};
	argv (p.childNodes[2].firstChild, a);
	url (p, "activity_disposition_history_list", "dispositions", a.args);

	// todo: update sbr
}

function activity_case_ufn (el, u, a, r, m)
{
	nd (el, te["case_vw_id"], [], r, [0]);
	// var p = el.parentNode.previousSibling.childNodes[1].  childNodes[2].firstChild.childNodes[1].childNodes[2].firstChild;
	var p = _(el.parentNode.previousSibling.childNodes[1], "vtdisp");
	if (p) activity_disposition (p)
}

function activity_disposition_ufn (el, u, a, r, m)
{
	activity_disposition (el)
	var p = __(el,"vfvwm")
	var callid = _(p,"src_btns").firstChild.firstChild;
	if (callid!=null && callid.value && callid.value.length>0) 
	{
		phone_hangup (callid.value);
		activity_close ();
	}
}

function _activity_close (ev)
{
	// this.previousSibling.checked = true;
	activity_close ();
	boo (ev)
}

function _activity_case_postj (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "ve");
	var p_ = __(elvp,"vfvw");
	var p__ = __(p_,"vfvwm");
	var o = {};
	var o_ = {};
	jso (p__.firstChild, o);  // channel details
	jso (p, o);
	jso (p_, o_);
	o["case_id"] = o_[".id"];
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _activity_postj (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "ve");
	var p_ = __(elvp,"vfvwm");
	var o = {};
	jso (p_.firstChild, o);   // channel details
	jso (p, o)		  // disposition (including reporter - if selected)
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}

function _activity_case (ev)
{
	var u = this.id.split ("-");
	var p = __(this, "vs");
	var p_ = __(p, "vftab").parentNode.nextSibling;
	var o = {};
	var o_ = {};
	argv (__(p,"vfvwm").firstChild.lastChild, o);  	// channel data
	argv (this, o);					// case_id
	jso (p, o_)					// contact_id (reporter)
	if (o_["activity_contact_id"]) o["contact_id"] = o_["activity_contact_id"];
	if (o["case_id"]=="-1") o["uuid"] = Date.now()+"."+Math.random(999999)
	this.previousSibling.checked=true;
	p_.firstChild.checked = true;
	p_.childNodes[1].innerHTML = "";
	url (p_.childNodes[1], u[0], u[1], "", null, 1, o, "POST");
	boo (ev)
}

function _activity_disposition (ev)
{
	var p = __(this, "vs");
	var o = {};
	var o_ = {};

	var pvp = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (pvp);

	jso (__(p,"vfvwm").firstChild, o);  	// channel data
	jso (p, o_)				// contact_id (reporter)
	argv (this.lastChild, o);		// disposition_root_id

	if (!o_["activity_contact_id"]) 
	{
		urargs (this, pvp);
		return;
	}

	o["contact_id"] = o_["activity_contact_id"];
	o["case_id"] = "-1";
	o["uuid"] = Date.now()+"."+Math.random(999999)

	url (pvp, "reporter_duuid", "reporters^uuid", "", null, 0, o, "POST");

	boo (ev);
}

function _activity_contact ()
{
	this.previousSibling.checked = true;
	
	// todo: reload activity_disposition_history_list  (for contact_id)
}

function _activity_contact_new (ev)
{
	var p = document.getElementById ("vp");
	elvp = this.nextSibling;
	vp (p);
	urargs (this, p);
	boo(ev);
}

function _activity_search (ev)
{
	var p = document.getElementById ("vp");
	var u = this.id.split ("-"); 
	var o = {}; 
	// elvpf = __(this,"vb").nextSibling;
	elvpf = __(this,"vftab").childNodes[1];
	jso (elvpf, o);
	ra[u[1]] = o;
	vp (p);
	nd (p, te[u[0]], [], [], [0]);
}

function _activity_show ()
{

}

// nb chat has different activity_vw_id layout chat window bieng the main window (select reporter window will not have disposition, new case btns
// new case , disposition buttons will be in chat window 
function _activity_vw (ev) 
{
	var coll = document.getElementById ("vv").childNodes;
	var a = {};
	var r_ = re["r_"][0].slice(0);
	var k = re["activities_k"];
	var u = ["activity_match","activities"]
	argv (this, a);
	if (a.src=="walkin" && a.src_uid==undefined) 
	{ 
		var user_cid = document.getElementById ("user_cid").value;
		a.src_ts = Date.now()/1000;
		a.src_uid="walkin-"+user_cid+"-"+Date.now ();
		a.src_callid = a.src_uid;
		a.src_address = "";
		a.src_usr = "-";
		a.src_vector = 2;
	}
	if (a.src_address.length<1) u = ["activity_match","activities^blank"];
	r_[k["src"][0]] = a.src;
	r_[k["src_ts"][0]] = a.src_ts;
	r_[k["src_uid"][0]] = a.src_uid;
	r_[k["src_callid"][0]] = a.src_callid;
	r_[k["src_address"][0]] = _phone_fmt (a.src_address);
	r_[k["src_usr"][0]] = a.src_usr;
	r_[k["src_vector"][0]] = a.src_vector;
	
	this.previousSibling.checked = true; // hilite call-notif
	coll[1].innerHTML = ""; 			
	coll[6].childNodes[1].firstChild.checked = true;
	coll[6].childNodes[1].childNodes[1].innerHTML = "";

	nd (coll[1], te["activity_toolbar"], [], r_, [0]); // show toolbar	
	nd (coll[6].childNodes[1].childNodes[1], te["activity_vw_id"], ["activity_btns"], r_, [1]);	
	url (coll[6].childNodes[1].childNodes[1].lastChild, u[0], u[1], (a[".id"]+"?_c=5&src="+a.src+"&src_uid="+a.src_uid+"&src_address="+r_[k["src_address"][0]]));

	boo (ev)
}

