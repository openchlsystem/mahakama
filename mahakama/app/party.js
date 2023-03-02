
te["party_del"] = { div:["l cr gp"], c:
[
	{ s:["c x y",":v:parties:party_type"] },
	{ s:["c y","Deleted"] },
	{ ac:["d ay ga","","_rm","x y h2","&Cross;"] },
	{ div:["e"] }
]};

// ---

te["party_ed_r_"] = { c:
[
	{ div:["","ve"], c:
	[
		{ input:["g","","party_form_a","%0","radio"] },
		{ li:["x t b10 cb gbn","party_ed-parties-^"], ev:["_vp"], c:
		[
			{ div:[], c:
			[
				{ div:["d w03"], ac:["ao abs w03","party_del-parties^del","_del","cb h2",""], c:
				[
					{ s:["x y h2 tc","&Cross;"] },
					{ div:[], c:[ { arg:["",".id","%0"] } ] }
				]},
				{ div:["e"] }
			]},
			{ contact_vw_r_:[":v:parties:contact_fullname", ":v:parties:contact_phone", ":v:parties:contact_email", ":v:parties:contact_location"] },
			{ div:["g"], arg:["",".id","%0"] }
		]},
		{ div:["g"], arg:["","","party_ed_r_-parties-va--@"] },
	]},
	{ div:[], arg:["o","party_id","%0"] }
]};

te["party_ed_r"] = { div:["mb","va"], party_ed_r_:[] };

// ---

te["party_ed_"] = { div:["w68 ma mb sh__ gw_"], c:
[
	{ div:["x15 tt"], c:
	[
		{ s:["c ll y12 n b",null] },
		{ s:["c x y12 n b",":v:parties:party_type"] },
		{ ac:["d","","_uvp","xx y h cb","&Cross;"] },
		{ div:["e"] }
	]},
			
	{ div:["","ve"], c:
	[
		{ div:["x25 t"], c:[ { p:["c w55","nb"], u:["nb","parties_nb"] }, { div:["e"] } ] },
		
		{ p:["x25 b10","contact"], contact_ed_r_:
		[
"Name",":v:parties:contact_fullname","Enter Names",
":v:parties:contact_phone",
":v:parties:contact_location_id",":v:parties:contact_location"," %0",
":v:parties:contact_email"
		]},
		
		{ p:["","o"], c:[ { arg:["","party_type_id",":v:parties:party_type_id"] }, { arg:["","case_id",":v:parties:case_id"] } ] },
		
		{ div:["x25 t30 b20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};	

te["party_ed"] = { party_ed_:["Edit","party_ed-parties","_postj","Update","Updating...","party_vw_id-parties-vp","_u","Cancel"] };

te["party_new"] = { party_ed_:["Add a","party_new-parties","_postj","Add","Adding...","","_uvp","Cancel"] };

// --------------------------------------------------------------------------------------------

te["party_vw_r_"] = { div:["","ve"], c: 
[
	{ input:["g","","party_vw_a","%0","radio",""] },
	{ li:["xx t b10 cb gws_","party_vw_id-parties"], ev:["_vp"], s:["",""], c:
	[
		{ contact_vw_r_:[":v:parties:contact_fullname", ":v:parties:contact_phone", ":v:parties:contact_email", ":v:parties:contact_location"] },
		{ div:["g"], arg:["",".id","%0"] }
	]},
	{ div:["g"], arg:["","","party_vw_r_-parties-va--@"] },
]};

te["party_vw_r"] = { div:["mb","va"], party_vw_r_:[] };

// ---

te["party_vw_id_"] = { div:[""], c:
[
	{ div:["t"], c:[ { u:["nb","parties_nb"] }, { div:["e"] } ] },

	{ div:["x20 b20"], contact_vw_id_:[":v:parties:contact_fullname", ":v:parties:contact_location", ":v:parties:contact_phone", ":v:parties:contact_email"] },
]};

te["party_vw_id"] = { div:["w68 ma mb sh__ gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["x15 tt"], c:
	[
		{ div:["c ll y12 n b"], uval:["",":v:parties:party_type"] },
		{ s:["c x y12 n b","Details"] },
		{ ac:["d","","_uvp","xx y h cb","&Cross;"] },
		{ div:["e"] }
	]},
	{ party_vw_id_:[] }
]};

