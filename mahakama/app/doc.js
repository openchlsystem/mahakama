
te["doc_del"] = { c:
[
	{ div:["l cr gp"], c:
	[
		{ s:["c x y",":v:docs:doc_type"] },
		{ s:["c y","Deleted"] },
		{ ac:["d ay ga","","_rm","x y h2","&Cross;"] },
		{ div:["e"] }
	]},
	{ ufn:["doc_del_ufn"] }
]};

te["doc_ed_r_"] = { c:
[
	{ div:["","ve"], c:
	[
		{ input:["g","","doc_form_a","%0","radio"] },
		{ li:["x y bd cb gbn","doc_ed_r-docs-^"], ev:["_vp"], c:
		[
			{ div:[], c:
			[
				{ div:["d w03"], ac:["ao abs w03","doc_del-docs^del","_del","cb h2",""], c:
				[
					{ s:["x y h2 tc","&Cross;"] },
					{ div:[], c:[ { arg:["",".id","%0"] }, { arg:["","is_delete","1"] }, { arg:["","case_id","0"] } ] }
				]},
				{ div:["e"] }
			]},
			{ s:["c x y w15",":v:docs:name"] },
			{ s:["c x y w15",":v:docs:edms_ref"] },
			{ s:["c x y",":v:docs:details"] },
			{ div:["g"], arg:["",".id","%0"] }
		]},
		{ div:["g"], arg:["","","doc_ed_r_-docs-va--@"] },
	]},
	{ div:[], arg:["o","doc_id","%0"] }
]};

te["doc_ed_r"] = { div:["mb","va"], doc_ed_r_:[] };

// ---

te["doc_ed_"] = { div:["w68 ma mb sh__ gw_"], c:
[
	{ div:["x15 tt"], c:
	[
		{ s:["c ll y12 n b",null] },
		{ s:["c x y12 n b",":v:docs:doc_type"] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},
			
	{ div:["","ve"], c:
	[
		{ div:["x25 t"], c:[ { p:["c w55","nb"], u:["nb","docs_nb"] }, { div:["e"] } ] },
		
		{ div:["tt"], case_txt_:["Name","gws w63 x tt b05","name",":v:docs:name","Enter Documents Name"] },

		{ div:["tt"], case_txt_:["Description","gws w63 x tt b05","details",":v:docs:details","Enter Description"] },

		{ div:["tt"], case_txt_:["EDMS Ref","gws w63 x tt b05","edms_ref",":v:docs:edms_ref","Enter EDMS Ref"] },

		
		{ div:["x25 t30 b20"], vp_sav:[null,null,null,null,null,null,null] }
	]}
]};	

te["doc_ed"] = { doc_ed_:["Edit","doc_ed-docs","_postj_case","Update","Updating...","doc_vw_id-docs-vp","_u","Cancel"] };

te["doc_new"] = { doc_ed_:["Add","doc_new-docs","_postj_case","Add","Adding...","","_uvp","Cancel"] };

// --------------------------------------------------------------------------------------------

te["doc_vw_r_"] = { div:["","ve"], c: 
[
	{ input:["g","","doc_vw_a","%0","radio",""] },
	{ li:["xx y bd cb gws_","doc_vw_id_-docs-^"], ev:["_vp"], s:["",""], c:
	[
		{ s:["c x y w15",":v:docs:name"] },
		{ s:["c x y w15",":v:docs:edms_ref"] },
		{ s:["c x y",":v:docs:details"] },
		{ div:["e"], arg:["",".id","%0"] }
	]},
	{ div:["g"], arg:["","","doc_vw_r_-docs-va--@"] },
]};

te["doc_vw_r"] = { div:["mb","va"], doc_vw_r_:[] };

// ---

te["doc_vw_id_"] = { div:[""], c:
[
	{ div:[], c:
	[ 
		{ div:["d w04 x"], ac:["abs y08 ad","doc_ed-docs","_vp","w04 y ba tc","Edit"], c:[ { arg:["",".id","%0"] } ] },
		{ div:["e"] }
	]},

	{ div:["t"], c:[ { u:["nb","docs_nb"] }, { div:["e"] } ] },

	{ div:["tt"], case_vw_val:["Name",":v:docs:name"] },

	{ div:["tt"], case_vw_val:["Description",":v:docs:details"] },

	{ div:["tt b20"], case_vw_val:["EDMS Ref",":v:docs:edms_ref"] },

]};

te["doc_vw_id"] = { div:["w66 ma bd sh__ y gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["x15 y"], c:
	[
		{ s:["c x yy h3 b",":v:docs:doc_type"] },
		{ s:["c yy h3 b","Details"] },
		{ ac:["d ay","","_uvp","x bd cb",""], c:[ { s:["c h y03","&Cross;"] }, { s:["c x y g","Close"] }, { div:["e"] } ] },
		{ div:["e"] }
	]},
	{ doc_vw_id_:[] }
]};

