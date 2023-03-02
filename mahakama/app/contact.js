
te["contact_ed_r_"] = { c:  // 
[
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_txt_:[null,"gww_ w41 x tt b05","fname",null,null] }, 
		{ div:["c w21 ll"], case_txt_:["Phone","gws w21 x tt b05","phone",null,"Enter Phone Number"] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["c w41"], case_loc_enum:["Location",null,null,null] },
		{ div:["c w21 ll"], case_txt_:["Email","gws w21 x tt b05","email",null,"Enter Email Address"] },
		{ div:["e"] }
	]}
]};

te["contact_ed_"] = { div:["w68 ma sh__ gw_"], c:
[	
	{ div:["x15 tt"], c:
	[
		{ s:["c xx y12 n b",null] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},

	{ div:["","ve"], c:
	[
		{ div:["x25 t"], c:[ { p:["c w55","nb"], u:["nb","contacts_nb"] }, { div:["e"] } ] },

		{ p:["x20","contact"], contact_ed_r_:
		[
"Name",":v:contacts:fullname","Enter Contact's Names",
":v:contacts:phone",
":v:contacts:location_id",":v:contacts:location"," %0",
":v:contacts:email"
		]},		
				
		{ div:["w63 x25 t30 b20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};

te["contact_ed"] = { case_contact_ed_:["Edit Contact","contact_ed-contacts","_activity_postj","Update","Updating...","contact_vw_id-contacts-vp","_u","Cancel"] };

te["contact_new"] = { case_contact_ed_:["New Contact","contact_new-contacts","_activity_postj","Create","Creating...","","_uvp","Cancel"] };

// --------------------------------------------------------------------------------

te["contact_vw_r_"] = { c:
[
	{ div:["t03"], c:
	[
		{ s:["c xx n t",null] },
		{ div:["e"] }
	]},
	{ div:["y03"], c:
	[
		{ s:["c ll t02 micon","call"] },
		{ s:["c x t s",null] },
		{ s:["c ll t02 micon","email"] },
		{ s:["c x t s",null] },
		{ div:["e"] }
	]},
	{ div:[], c:
	[
		{ s:["c ll t02 micon","location_pin"] },
		{ div:["c x s"], uval:["",null] },
		{ div:["e"] }
	]},
]};

te["contact_vw_id_"] = { c:
[
	{ div:[""], c:
	[
		{ div:["w63"], case_vw_val:["Fullname",null] },
		{ div:["e"] }
	]},
	{ div:["tt"], c:
	[
		{ div:["w63"], case_vw_val_cat:["Location","",null] },
		{ div:["e"] }
	]},	
	{ div:["tt"], c:
	[
		{ div:["c w30"], case_vw_val:["Phone",null] },
		{ div:["c w30 l15"], case_vw_val:["Email",null] },
		{ div:["e"] }
	]},
]};

te["contact_vw_id"] = { div:["w68 ma sh__ y gw_","vddvw"], ev:["_undd"], c:
[	
	{ div:["x20 y"], c:
	[
		{ s:["c x t15 h3 b","Contact Details"] },
		{ ac:["d ay","","_uvp","x bd cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ div:["x20 yy"], contact_vw_id_:[":v:contacts:fullname", ":v:contacts:phone", ":v:contacts:location", ":v:contacts:email"] }
]};

// --------------------------------------------------------------------------------

te["contact_tag_vw"] = { div:["w30 gws"], c:
[
	{ s:["c xx y cb","%8"] },
	{ div:["e"] }
]};

te["contact_tag_txa"] = { div:["","contact_ls-contacts"], c:[ { p:["","txa"], c:
[ 
	{ input:["w38 xx y07","fullname_","fullname_","","text"], ev:["","_ky","","_uky"] }, 
	{ arg:["","contact_id",""] } // placeholder for upd
]} ]};

// ---

te["contact_lc_menu"] = { div:["c lcfmenu"], c:
[
	{ ac:["c w02_ aa","contact_new-r_","_vp","b h2 y03 tc cb","&plus;"] },
	{ ac:["c w02_ aa","","","b h2 y03 tc cb","&equiv;"] },
]};

te["contact_lc_r"] = { div:[], c:
[
	{ input:["g","","contact_id","","checkbox"] },
	{ li:["c w01_ x y08 r"],  ev:["_chk_tag"], s:["chk",""], c:
	[
		{ arg:["id-0","","%0"] }, { arg:["fullname-7","","%7"] }, { arg:["phone-10","","%10"] }
	]},
	{ input:["g","","vpf","","radio"] },
	{ li:["c w25 x r","contact_vw_id-contacts-"], ev:["_vp"], s:["",""], c:
	[
		{ div:["c w17"], s:[" tt h02","%7"] },
		{ div:["d w08"], s:[" tt h02 tr","%10"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:["e"] }
]};

te["contact_lc_pg"] = { pg:["pgto","contact_lc-contacts"," dh","da dl","contact_lc-contacts"," dh","da dr"] };

te["contact_lc"] = { lst:["noop","noop","noop","noop","noop",  "h30 x07 y","contact_lc_r","contacts", "x07 y07","contact_lc_menu","d","contact_lc_pg"] };

// -------------------------------------

te["contact_ls_footer"] = { div:["x gws"], c:
[
	{ s:["c x y cd s","%3"] },
	{ s:["c y cd s","of"] }, 
	{ s:["c x y cd s","%4"] },
	{ div:["d t03"], c:[ { ac:["nav","contact_ls-contacts","_nav","dh",""], c:[ { div:["da dr_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["d t03"], c:[ { aci:["nav","contact_ls-contacts","_nav","dh","prev",""], c:[ { div:["da dl_"] }, { arg:["","_a","%0"] } ] }, { s:["navl","..."] } ] },
	{ div:["e"] }
]};

te["contact_ls_r"] = { div:[], c:
[
	{ ac:["ay","case_contact_ed-contacts-ve-contact","_sel","x t07 b05 cb  bb_",""], c:
	[
		{ div:["s"], c:
		[
			{ s:["c w16 x n","%8"] },
			{ s:["d x","%19"] },
			{ s:["d x","%17"] },
			{ div:["e"] }
		]},
		{ div:["s"], c:
		[
			{ s:[" x t","%11"] },
			{ s:[" x t","%24"] },
			{ div:["e"] }
		]},
		{ div:["e"], c:[ { arg:["id-0","","%0"] }, { arg:["fullname-8","","%8"] } ] } // no need for other field coz selu will populate fields
	]},
	{ div:[], arg:[".id","","%0"] }
]};

te["contact_ls"] = { list:["end","end","","noop","contact_ls_r","contacts", "contact_ls_footer"] };

// -----------------------------------------------------------------------

te["contact_f_tags_"] = { c: 
[
	{ f:["Name",null,		" %0","fullname",""] },
	{ f:["Phone",null,		" %0","phone",""] },
	{ f:["Email",null,		" %0","email",""] },
	{ f:["Location",null,		" %1","location_id"," %1"] },
	{ f:["Created On",null,		" :d:dmy:0: ","created_on",""] },
	{ f:["Created By",null,		" %1","created_by_id"," %1"] },
	{ div:["e"] }
]};

te["contact_f_tags_k"] = { contact_f_tags_:[":k:contacts_k:fullname:2", ":k:contacts_k:phone:2", ":k:contacts_k:email:2", ":k:contacts_k:location_id:2", ":k:contacts_k:created_by_id:2", ":k:contacts_k:created_on:2"] };

te["contact_f_tags"] = { contact_f_tags_:[":k:contacts_f:fullname", ":k:contacts_f:phone", ":k:contacts_f:email", ":k:contacts_f:location_id", ":k:contacts_f:created_by_id", ":k:contacts_f:created_on"] };

te["contact_f"] = { div:["w58 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x25 y20 b h3","Search Contact"] },
	{ div:["x15 b20"], c:
	[
		{ div:["xx yy"], kf_s:["Name","fullname",":k:contacts_f:fullname"] },
		{ div:["xx yy"], kf_s:["Phone","phone",":k:contacts_f:phone"] },
		{ div:["xx yy"], kf_s:["Email","email",":k:contacts_f:email"] },

		{ div:["xx yy"], kf_l:["Location","tag_-r_--o--%1-category_id-location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:cases_f:location_id", ""," %1","category_id","location_id"," %0"," %1", "case_location_root_id"] },

		{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:contacts_f:created_on","created_on",":k:contacts_f:created_on"] },

		{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%1-user_id-created_by_id-%0-%1",   "user_lc_main-users",":k:contacts_f:created_by_id", 
""," %1","user_id","created_by_id"," %0"," %1",  "noop"] },
	]},
	{ vp_apply:["contact_f_tags-contacts_f"] }
]};

// ---------------------------------------------

te["contact_footer"] = { div:["x ba"], c:
[
	{ div:["d y07"], pg:["pgto","contact_list-contacts"," dh","da dl","contact_list-contacts"," dh","da dr"] },
	{ div:["e"] }
]};

te["contact_r"] = { div:[], c:
[
	{ li:["w160 gw","contact_vw_id-contacts"], ev:["_vp"], c:
	[
		{ div:["c w20 tt b05 h01_"], s:["xx",":v:contacts:fullname"] },
		{ div:["c w20 tt b05 h01_"], s:["xx",":v:contacts:phone"] }, 
		{ div:["c w20 tt b05 h01_"], s:["xx",":v:contacts:email"] }, 
		{ div:["c w40 tt b05 h01_"], s:["xx",""], uval:["",":v:contacts:location"] }, 
		{ div:["c w15 tt b05 h01_"], s:["xx",":v:contacts:created_by"] },
		{ div:["c w15 tt b05 h01_"], s:["xx",":d:dmyhn:1: "] },
		{ div:["e"], arg:["",".id","%0"] } 
	]}
]};

te["contact_k"] = { div:["w160 bt bb gw"], s:["",""], c:
[
	{ k_a:["c w20","","cd","Name","da db","fname",":k:contacts_k:fullname:2"] },
	{ k_a:["c w20","","cd","Phone","da db","phone",":k:contacts_k:phone:2"] },
	{ k_a:["c w20","","cd","Email","da db","email",":k:contacts_k:email:2"] },
	{ k_a:["c w40","","cd","Location","da db","location_id",":k:contacts_k:location_id:2"] },
	{ k_a:["c w20","","cd","Created By","da db","created_by_id",":k:contacts_k:created_by_id:2"] },
	{ k_a:["c w20","","cd","Created On","da db","created_on",":k:contacts_k:created_on:2"] },	
	{ div:["e"] }
]};

te["contact_nb"] = { div:[], c:[ { u:["nb","contacts_nb"] }, { div:["e"] } ] };

te["contact_title"] = { div:[] }; 

te["contact_list"] = { list:["contact_title","contact_nb","bl br ox","contact_k","contact_r","contacts","contact_footer"] };

te["contact_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ input:["g","","contact_t_","0","radio","1"] },
				{ ac:["c","contact_main-contacts-vftab","_u","x y cb b h2","Contacts"] }, 
				//{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"] } //, arg:["","_title","%5"] }
			]},
			{ div:["dd x y gw ba sh nd w14","vdd"], c:
			[
			
			]}
		]},
		
		// { div:["c l40"], c: 
		//[
		//	{ arg:["contact_list-contacts","","0"] },
		//	{ input:["g","","contacts_t_","0","radio","1"] },
		//	{ li:["opto x bl bt bb gw s cb","contact_list-contacts"], ev:["_tab"], c:
		//	[
		//		{ s:["c l t h3_ micon","list"] },
		//		{ div:["c xx y","","List"] }, 
		//		{ div:["e"] }
		//	]}
		//]},

		//{ div:["c"], c: 
		//[
		//	{ arg:["contact_rpt_vw-contacts-@","","1,0"] },
		//	{ input:["g","","contacts_t_","1","radio"] },
		//	{ li:["opto x ba gw s cb","contact_rpt_main-r_"], ev:["_tab"], c:[ { div:[], c:
		//	[
		//		{ s:["c l t h3_ micon","bar_chart"] },
		//		{ s:["c xx y","Reports"] }, 
		//		{ div:["e"] }
		//	]} ]}
		//]}, 

		{ div:["c l40"], ac:["ay","contact_f-contacts_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},

		// { div:["c l40"], ac:["ay","contacts","_download","x t01 bd_ cb s",""], c:
		//[ 
		//	{ s:["c t04 h3_ micon","download"] },
		//	{ div:["c x y","","Download"] }, 
		//	{ div:["e"] }
		//]},
		
		{ div:["e"], c:[ { arg:["","","contact_list-contacts"] }, { arg:["","","0"] }, { arg:["","","-1"] }, { arg:["","",""] } ] }
	]},

	{ div:["yy","vf"], c:[ { div:["","contact_f-contacts_f"], c: // ev:["_n_vpf"], c:
	[
		{ contact_f_tags_k:[] }
	]} ]},

	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","contacts_v","0","radio","1"] }, { p:["tabv yy","vt"], contact_list:[] } ] },
		{ div:[], c:[ { input:["g","","contacts_v","1","radio"] }, { p:["tabv","vt"] } ] },				
	]}
]};
	
te["contacts"] = { c:
[
	{ div:["g"], c:
	[
		
	]},
	{ form:[], c:
	[
		{ div:[], c:
		[	
			{ input:["g","","contact_vw_vt","0","radio","1"] }, 
			{ p:["tabv x20 y20 gw mm","vftab"], contact_main:[] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","contact_vw_vt","1","radio"] }, 
			{ p:["tabv gw yy mm","vfvw"] }
		]}
	]}
]};


function contact_dob (p, v)
{
	var today = new Date ();
	var year = today.getFullYear ();
	var month = today.getMonth();
	var day = today.getDate();
	var dob = new Date (year-v, month, day);
	var el = _(p.childNodes[1].childNodes[1].firstChild,"calv");
	el.innerHTML = "";
	if (v=="") return;
	nd (el, te["tag_calv"], ["%0", "dob",":d:dmy:0: "], [(""+(Math.floor(dob.getTime() / 1000)))], [3]);
}

function contact_age_group (p, v)
{
	var el = _(p.childNodes[2].childNodes[1].firstChild,"o");
	var aa = re["age_groups"];
	var m = [-1,-1]
	
	el.innerHTML = "";
	if (v=="") return;

	for (var i=0; i<aa.length; i++)
	{
		var vv = aa[i][7].split ("-");
		if (!Number.isInteger (vv[0]*1)) continue;
		if (vv.length>1 && Number.isInteger (vv[1]*1)) // cmp in range
		{
			if ((vv[0]*1)<=v && (vv[1]*1)>=v) m[0]=i	
			continue;
		}
		if ((vv[0]*1)<=v) m[1]=i;
	}
	
	// console.log ("AGEGROUP: '"+v+"' ["+m[0]+","+m[1]+"]")
		
	i=-1;
	if (m[1]>-1) i=m[1]
	if (m[0]>-1) i=m[0]
	if (i<0) return;
		
	nd (el, te["tag"], ["noop","%0","age_group_id","%8","case_age_tag_txa"], aa[i], [5]);
}

function contact_age (p, v)
{
	var el = p.firstChild.childNodes[1].firstChild;
	el.value = v;
}

function _contact_dob (el, r)
{
	var today = new Date ();
	var dob = new Date (r[0]*1000);
	var age = today.getFullYear()-dob.getFullYear();
	// console.log ("DOB: "+r[0]+" | "+age+" | "+today.getFullYear()+" "+dob);
	if (today.getMonth()>dob.getMonth()) age++;
	if (today.getMonth()==dob.getMonth() && today.getDate()>=dob.getDate()) age++;
	contact_age (__(el,"vaa"), age);
	contact_age_group (__(el,"vaa"), age); 
}

function _contact_age_group (el, r)
{
	var p = __(el,"vaa")
	var vv = r[1].split ("^")[1].split("-");
	var age = vv[0];
	if (!Number.isInteger (vv[0]*1)) age="";
	if (vv.length>1 && Number.isInteger (vv[0]*1) && Number.isInteger (vv[1]*1)) age = Math.floor ((vv[0]*1) + ((vv[1]-vv[0])/2));
	//console.log ("AGE: '"+age+"' | "+vv[0]+"-"+vv[1])
	contact_age (p, age);
	contact_dob (p, age); 
}

function _contact_age ()
{
	var p = __(this,"vaa")
	var age = this.value*1;
	contact_age_group (p, age);
	contact_dob (p, age); 
}

