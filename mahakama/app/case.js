
re["case_title"] =
{
"my_cases":["my_cases","My Cases"],
"esca_by_me":["esca_by_me","Escalated By Me"],
"esca_to_me":["esca_to_me","Escalated To Me"],
"all_cases":["all_cases","All Cases"],
"all_cases_today":["all_cases_today","All Cases Today"],
};

rk["case_metrics"] = ["case_count","case_percent"];
re["case_metrics"] = 
{
"case_count":	["case_count",	"Count","0","case_rpt_count","case_rpt-cases-@:1:0:0"],
"case_percent":	["case_percent",	"Percent","1","case_rpt_percent","case_rpt-cases-@:1:1:1"],
}; 

re["case_k"] = 
{
	"cat_0":["cat_0","Main Category"],
	"cat_1":["cat_1","SubCategory 1"],
	"cat_2":["cat_2","SubCategory 2"],
	"cat_3":["cat_3","SubCategory 3"],
        "cat_4":["cat_3","SubCategory 4"],
        "gbv_related":["gbv_related","GBV Related"],
	"src":["src","Case Source"],
	"priority":["priority","Priority"],
	"status":["status","Status"],
	"created_by":["created_by","Created By"],
	"escalated_to":["escalated_to","Escalated To"],
	"escalated_by":["escalated_by","Escalated By"],
	"assessment":["assessment","Case Assessment"],
	"justice":["justice","Status in Justice System"],

	"reporter_age_group":["reporter_age_group","Reporter Age Group"],
	"reporter_sex":["reporter_sex","Reporter Sex"],
	"reporter_national_id_type":["reporter_national_id_type","Reporter ID Type"],
	"reporter_nationality":["reporter_nationality","Reporter Nationality"],
	"reporter_lang":["reporter_lang","Reporter Language"],
	"reporter_tribe":["reporter_tribe","Reporter Tribe"],

	"reporter_location_0":["reporter_location_0","Reporter Region"], //  region, district_2019, county_2019, subcounty_2019, parish_2019, lc1_2019, ec_constituency_201
	"reporter_location_1":["reporter_location_1","Reporter District"],
	"reporter_location_2":["reporter_location_2","Reporter County"],
	"reporter_location_3":["reporter_location_3","Reporter Sub County"],
	"reporter_location_4":["reporter_location_4","Reporter Parish"],
	"reporter_location_5":["reporter_location_5","Reporter Village"],
	"reporter_location_6":["reporter_location_6","Reporter Constituency"],

	"clients^contact_age_group":["clients^contact_age_group","Client Age Group"],
	"clients^contact_sex":["clients^contact_sex","Client Sex"],
	"clients^contact_national_id_type":["clients^contact_national_id_type","Client ID Type"],
	"clients^contact_nationality":["clients^contact_nationality","Client Nationality"],
	"clients^contact_lang":["clients^contact_lang","Client Language"],
	"clients^contact_tribe":["clients^contact_tribe","Client Tribe"],
	"clients^contact_location_0":["clients^contact_location_0","Client Region"], 
	"clients^contact_location_1":["clients^contact_location_1","Client District"],
	"clients^contact_location_2":["clients^contact_location_2","Client County"],
	"clients^contact_location_3":["clients^contact_location_3","Client Sub County"],
	"clients^contact_location_4":["clients^contact_location_4","Client Parish"],
	"clients^contact_location_5":["clients^contact_location_5","Client Village"],
	"clients^contact_location_6":["clients^contact_location_6","Client Constituency"],

	"clients^relationship":["clients^relationship","Reporter's Relationship to Client"],
	"clients^health":["clients^health","Client Health Status"],
	"clients^hiv":["clients^hiv","Client HIV Status"],
	"clients^marital":["clients^marital","Client Marital Status"],
	"clients^spouse_profession":["clients^spouse_profession","Client Spouse Profession"],
	"clients^household":["clients^household","Household Type"],
	"clients^household_head_occupation":["clients^household_head_occupation","Head of Household Occupation"],
	"clients^guardian_marital":["clients^guardian_marital","Parent/Guardian Marital Status"],
	"clients^school_level":["clients^school_level","School Level"],
	"clients^school_type":["clients^school_type","School Type"],
	"clients^disability":["clients^disability","Client Disablity"],

	"perpetrators^contact_age_group":["perpetrators^contact_age_group","Perp Age Group"],
	"perpetrators^contact_sex":["perpetrators^contact_sex","Perp Sex"],
	"perpetrators^contact_national_id_type":["perpetrators^contact_national_id_type","Perp ID Type"],
	"perpetrators^contact_nationality":["perpetrators^contact_nationality","Perp Nationality"],
	"perpetrators^contact_lang":["perpetrators^contact_lang","Perp Language"],
	"perpetrators^contact_tribe":["perpetrators^contact_tribe","Perp Tribe"],
	"perpetrators^contact_location_0":["perpetrators^contact_location_0","Perp Region"], 
	"perpetrators^contact_location_1":["perpetrators^contact_location_1","Perp District"],
	"perpetrators^contact_location_2":["perpetrators^contact_location_2","Perp County"],
	"perpetrators^contact_location_3":["perpetrators^contact_location_3","Perp Sub County"],
	"perpetrators^contact_location_4":["perpetrators^contact_location_4","Perp Parish"],
	"perpetrators^contact_location_5":["perpetrators^contact_location_5","Perp Village"],
	"perpetrators^contact_location_6":["perpetrators^contact_location_6","Perp Constituency"],
	"perpetrators^relationship":["perpetrators^relationship","Perpetrator's Relationship to Client"],
	"perpetrators^shareshome":["perpetrators^shareshome","Perpetrator's Shares Home with Client"],
	"perpetrators^health":["perpetrators^health","Perpetrator's Health Status"],
	"perpetrators^marital":["perpetrators^marital","Perpetrator's Marital Status"],
	"perpetrators^employment":["perpetrators^employment","Perpetrator's Profession"],
	"perpetrators^spouse_profession":["perpetrators^spouse_profession","Perpetrator's Spouse Profession"],

	"services^category_name":["services^category_name","Service Offered"],

	"referals^category_name":["referals^category_name","Referal"],
};

rk["case_cases_k"] = [ "cat_0", "cat_1", "cat_2", "cat_3", "cat_4", "gbv_related", "src", "priority", "status", "created_by", "escalated_to", "escalated_by", "assessment", "justice"];
re["case_cases_k"] = re["case_k"];

rk["case_reporters_k"] = ["reporter_age_group", "reporter_sex", "reporter_national_id_type", "reporter_nationality", "reporter_lang", "reporter_tribe", "reporter_location_0", "reporter_location_1", "reporter_location_2", "reporter_location_3", "reporter_location_4", "reporter_location_5","reporter_location_6"];
re["case_reporters_k"] = re["case_k"];

rk["case_clients_k"] = ["clients^contact_age_group", "clients^contact_sex", "clients^contact_national_id_type", "clients^contact_nationality", "clients^contact_lang", "clients^contact_tribe", "clients^contact_location_0", "clients^contact_location_1", "clients^contact_location_2", "clients^contact_location_3", "clients^contact_location_4","clients^contact_location_5","clients^contact_location_6", "clients^relationship", "clients^health", "clients^hiv", "clients^marital", "clients^spouse_profession", "clients^household", "clients^household_head_occupation", "clients^guardian_marital",  "clients^school_level", "clients^school_type",
 "clients^disability"];
re["case_clients_k"] = re["case_k"];

rk["case_perps_k"] = ["perpetrators^contact_age_group", "perpetrators^contact_sex", "perpetrators^contact_national_id_type", "perpetrators^contact_nationality",  "perpetrators^contact_lang", "perpetrators^contact_tribe", "perpetrators^contact_location_0", "perpetrators^contact_location_1", "perpetrators^contact_location_2", "perpetrators^contact_location_3", "perpetrators^contact_location_4", "perpetrators^contact_location_5", "perpetrators^contact_location_6", "perpetrators^relationship", "perpetrators^shareshome", "perpetrators^health", "perpetrators^marital", "perpetrators^employment", "perpetrators^spouse_profession"];
re["case_perps_k"] = re["case_k"];

rk["case_services_k"] = ["services^category_name"];
re["case_services_k"] = re["case_k"];

rk["case_referals_k"] = ["referals^category_name"];
re["case_referals_k"] = re["case_k"];

// ---

te["case_rpt_metric_tab"] = { div:["c x","%4"], c:
[
	{ arg:["","","0"] },
	{ input:["g","","case_metric","%2","radio","%9"] },
	{ li:["opth x y tc cb","%3","%1"], ev:["_tab"] }
]};

te["case_k_tag"] = { "rpt_axis_tag":["::case_k:0:1","xaxis"] };

te["case_k_r"] = { "rpt_axis_r":["xaxis","case_k_tag","::case_k:0:1"] };

te["case_rpt_ymenu"] = { c:
[
	{ div:["xx t bb_","vb"], c:
	[
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","0","radio","1"] }, { ac:["ay tabu","","_tab","xx y cb","Case"] } ] },
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","1","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Reporter"] } ] },
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Client"] } ] },
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","3","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Perpetrator"] } ] },
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","4","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Sevices"] } ] },
		{ div:["c x"], c:[ { input:["g","","case_rpt_vw_t","5","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Referals"] } ] },
		{ div:["e"] }
	]},
	{ div:["xx yy"], c:
	[
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","0","radio","1"] }, { div:["tabv"], uchk:["case_k_r",null,"case_cases_k"] } ] },
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","1","radio"] }, { div:["tabv"], uchk:["case_k_r",null,"case_reporters_k"] } ] },
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","2","radio"] }, { div:["tabv"], uchk:["case_k_r",null,"case_clients_k"] } ] },
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","3","radio"] }, { div:["tabv"], uchk:["case_k_r",null,"case_perps_k"] } ] },
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","4","radio"] }, { div:["tabv"], uchk:["case_k_r",null,"case_services_k"] } ] },
		{ div:[], c:[ { input:["g","","case_rpt_vw_tv","5","radio"] }, { div:["tabv"], uchk:["case_k_r",null,"case_referals_k"] } ] }
	]}
]};

te["case_rpt_options"] = {  c:
[
	
	{ input:["g","","type","bar","radio","1"] },
	{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y ","Bar Chart"] },
		{ div:["e"] }			
	]},
	{ input:["g","","type","line","radio"] },
	{ ac:["r ay","","_rpt_opt","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y ","Line Chart"] },
		{ div:["e"] }			
	]},

	{ input:["g","","stacked","stacked","checkbox","1"] },
	{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ","Stacked"] },
		{ div:["e"] }			
	]},

	{ input:["g","","sortrpt","1","checkbox"] },
	{ ac:["r ay","","_rpt_chk","xx y02 cb",""], c:
	[
		{ div:["c w01_ t"], s:["chk",""] },
		{ s:["c x y ","Sort by Total"] },
		{ div:["e"] }			
	]},
]};

te["case_rpt_"] = { c: // todo: load rpt_hdr params from db // 
[
	{ form:["tt","vrpt"], c:
	[
		{ div:["c"], c:
		[
			{ div:["ay","va"], ac:["","","_dd","x y04 cb",""], c:
			[
				{ s:["c x b h3",null] },
				//{ div:["c"], s:["h02 w02 awb",""] },
				{ div:["e"] }
			]},
			{ div:["dd w20 y ba gw sh","vdd"], ev:["_undd"], c:
			[
				// metrics
			]}	
		]},
		{ div:["d"], c:
		[
			{ div:["ay l20","va"], ac:["","","_dd","x y04 h02 cb ba",""], c:
			[
				{ s:["c x","Options"] },
				{ s:["c x t02 micon","more_vert"] },
				{ div:["e"] }
			]},
			{ div:["dd w18 mln7 mt y ba gw sh","vdd"], ev:["_undd"], case_rpt_options:[] }
		]},
		{ div:["d"], s:["",""], c:
		[
			{ div:["d"], c: // xaxis
			[
				{ div:["ba","va"], s:["",""], c:
				[	
					{ div:["d w03"], ac:["ay","","_dd","x y04",""],  c:[ { div:["h02 w02 awb"] } ] },
					{ div:["e"] }
				]},
				{ div:["dd x y mln50 w52 gw ba mt1","vdd_rpt"], ev:["_undd"], c:[ { case_rpt_ymenu:[null,null,null,null,null,null] } ] }
			]},
			{ div:["d"], uchk:["case_k_tag",null] },
			{ s:["d l20 r05 y07 cd","Y Axis:"] },
			{ div:[] },
		]},
		{ div:["d"], s:["",""], c:
		[
			{ uchk:["rpt_dist_r",null,"dist"]}, // xaxis (distribution options)
			{ s:["d l20 r05 y07 cd","X Axis:"] },
			{ div:["e"] },
		]},
		{ div:["e"], c:
		[ 
			{ arg:["","metrics",null] },
			{ input:["g","","rpt",null,"checkbox","1"] },
		]}
	]},
	{ div:["","case_rpt_vw-cases"], urpt:[] } 
]};

te["case_rpt"] = { case_rpt_:["::case_metrics:4:1","%2","%2","%3","%4","%7"] };  
te["case_rpt_percent"] = { case_rpt_:["Percent", "status","status","status","status","status","status","status", "-", "case_percent","case_percent"] };
te["case_rpt_count"] = { case_rpt_:["Count", "status","status","status","status","status","status","status", "-", "case_count","case_count"] };

te["case_rpt_main"] = { c:
[
	{ div:["g xx t15 bb_ s","vb"], c:
	[
		{ s:["c x y cd","Metric:"] },
		{ uchk:["case_rpt_metric_tab","count","case_metrics"] },
		// + add // todo add mutiple metrics to same canvas // then multi-metric with from different resources
		{ div:["d g"], c:
		[
			{ div:["w12 ay","va"], ac:["","","_dd","x cd",""], c:
			[
				{ div:["d w02 t04"], s:["h02 w02 awb",""] },
				{ s:["d x y","Saved Reports"] }, 
				{ div:["e"] }
			]},			
			{ div:["dd mln13 w25 ba sh gw cb","vdd"], ev:["_undd"], c:
			[
				{s:["xx y cd","- Saved Reports List -"] }
			]}
		]},
		{ div:["e"] }
	]},
	{ div:["","vrpt"], c:
	[
		{ div:[], c:[ { input:["g","","case_rptv","0","radio","1"] }, { p:["tabv","vt"], case_rpt_count:[] } ]},
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv oh","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
		{ div:[], c:[ { input:["g","","case_rptv","0","radio"] }, { p:["tabv","vt"] } ] },
	]}
]};

// =========================================================================================

te["case_yesno_r"] = { c:
[
	{ input:["g","",null,"%0","radio","%9"] },
	{ ac:["c ay r05 r rg","","_opt","x cb bd_",""], c:
	[
		{ div:["c w01_ t"], s:["opt",""] },
		{ s:["c x y w07",null] },
		{ div:["e"] }			
	]}
]};

// ---

te["case_enum_lc"] = { c:
[
        { div:[], c:
        [
                { div:["c"], s:[null,null] },
                { s:["c t h2 cr b",null] },
                { div:["e"] }
        ]},
        { div:["",null], c:
        [
                { li:["gww_ b02","va"], c:[ { div:["",null], ev:["_dd"], c: // ls
                [
                        { div:["",null], c:[ { p:[null,"a"], uchk:["taga",null,"","",null,null,null,null,null] } ] },
                        { div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
                        { div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id_","",null] }, { u:[null] } ] }
                ]} ]},
                { div:[null,"vdd"], ev:["_undd"] },
                { u:[null] }
        ]}
]};


te["case_enum_lsh"] = { c: 
[
        { div:[], c:
        [
                { div:["c"], s:[null,null] },
                { s:["c t h2 cr b",null] },
                { div:["e"] }
        ]},
        { div:["",null], c:
        [
                { li:["gww_ b02","va"], c:[ { div:["",null], ev:["_dd"], c: // ls
                [
                        { p:[null,"o"], c:
                        [ 
                                { u:[null,null] }, 
                                { uchk:["tag",null,"","^", null,null,null,null,null] } 
                        ]},
                        { div:["d w02 x t"],  c:[ { div:["h02 w02 awb"] } ] }, // nb: default level = "" // all
                        { div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id_","",null] }, { arg:["level","",null] }, { arg:["sort","",null] }, { u:[null] } ] }
                ]} ]},
                { div:[null,"vdd"], ev:["_undd"] },
                { u:[null] }
        ]}
]};

te["case_enum_ls"] = { c:  
[
        { div:[], c:
        [
                { div:["c"], s:[null,null] },
                { s:["c t h2 cr b",null] },
                { div:["e"] }
        ]},
        { div:["",null], c:
        [
                { li:["gww_ b02","va"], c:[ { div:["",null], ev:["_dd"], c: // ls
                [
                        { p:[null,"o"], c:
                        [ 
                                { u:[null,null] }, 
                                { uchk:["tag",null,"","^", null,null,null,null,null] } 
                        ]},
                        { div:["d w02 x t"],  c:[ { div:["h02 w02 awb"] } ] },
                        { div:["e"], c:[ { arg:["_c","","10"] }, { arg:["root_id_","",null] }, { arg:["sort","",null] }, { u:[null] } ] }
                ]} ]},
                { div:[null,"vdd"], ev:["_undd"] },
                { u:[null] } 
        ]}
]};

te["case_enum_sel"] = { c:
[
        { div:[], c:
        [
                { div:["c"], s:[null,null] },
                { s:["c t h2 cr b",null] },
                { div:["e"] }
        ]},
        { div:["",null], c:
        [
                { li:["ba b02","va"], c:[ { div:[], ev:["_dd"], c: // ls
                [
                        { p:[null,"o"], uchk:["tag",null,"","^", "",null,null,null,null] },
                        { div:["d w02 x y"],  c:[ { div:["h02 w02 awb"] } ] },
                        { div:["e"] }
                ]} ]},
                { div:[null,"vdd"], ev:["_undd"], c: // 
                [
                        { uchk:[null,"",null] }
                ]}
        ]}
]};

te["case_enum_tag_txa_"] = { p:["","txa"], c: // [nb] id(txa) used by uhilite
[
        { input:[null,null,"","","text","",null], ev:["","_ky","","_uky"] },
        { arg:["",null,""] }, // placeholder for upd
]};

te["case_txt_"] = { c:
[
	{ s:["x y",null] },
        { p:["","o"], c:[ { input:[null,"",null,null,"text","",null] } ] },
]};

// =========================================================================================

te["case_doc_type_tag_txa"] = { case_enum_tag_txa_:["w30 xx tt b05","fullname__","","doc_type_id"] };

te["case_doc_type_enum"] = { case_enum_ls:["x y",null,"", "tag-r_--o-case_doc_type_tag_txa-%1-doc_type_id-%0-", "category_ls-subcategories", "c w30", "case_doc_type_tag_txa","r_", null,"case_doc_type_tag_txa",null,"doc_type_id",null,"", CASE_DOC_TYPE_ROOT_ID, "noop", "dd w33 gw_ ba_b", "noop"] };

// ---

te["case_party_type_tag_txa"] = { case_enum_tag_txa_:["w30 xx tt b05","fullname__","","party_type_id"] };

te["case_party_type_enum"] = { case_enum_ls:["x y",null,"", "tag-r_--o-case_party_type_tag_txa-%1-party_type_id-%0-", "category_ls-subcategories", "c w30", "case_party_type_tag_txa","r_", null,"case_party_type_tag_txa",null,"party_type_id",null,"", CASE_PARTY_TYPE_ROOT_ID, "noop", "dd w33 gw_ ba_b", "noop"] };

// ---

te["case_stage_tag_txa"] = { case_enum_tag_txa_:["w30 xx tt b05","fullname__","","stage_id"] };

te["case_stage_enum"] = { case_enum_ls:["x y",null,"", "tag-r_--o-case_stage_tag_txa-%1-stage_id-%0-", "category_ls-subcategories", "c w30", "case_stage_tag_txa","r_", null,"case_stage_tag_txa",null,"stage_id",null,"", CASE_STAGE_ROOT_ID, "noop", "dd w33 gw_ ba_b", "noop"] };

// ---

te["case_court_tag_txa"] = { case_enum_tag_txa_:["w42 xx tt b05","name__","","court_id"] };

te["case_court_enum"] = { case_enum_ls:["x y",null,"", "tag-r_--o-case_court_tag_txa-%1-court_id-%0-", "court_ls-courts", "c w41", 
"case_court_tag_txa","r_", 
null,"case_court_tag_txa",null,"court_id",null,"",
"","name","noop", 
"dd w45 gw_ ba_b mtn1", "noop"] };

// ---

te["case_advocate_tag_txa"] = { case_enum_tag_txa_:["w42 xx tt b05","contact_fullname__","","advocate_id"] };

te["case_advocate_enum"] = { case_enum_ls:["x y",null,"", "tag-r_--o-case_advocate_tag_txa-%1-advocate_id-%0-", "advocate_ls-advocates", "c w41", "case_advocate_tag_txa","r_", 
null,"case_advocate_tag_txa",null,"advocate_id",null,"",
"","contact_fullname","noop", 
"dd w45 gw_ ba_b mtn1", "noop"] };

// ---

te["case_loc_tag_txa"] = { case_enum_tag_txa_:["w38 xx tt b05","fullname__","Select Location","location_id"] };

te["case_loc_enum"] = { case_enum_lsh:["x y",null,"",
"tag-r_--o-case_loc_tag_txa-%1-location_id-%0-",   "category_ls_main-subcategories", "c w37", 
"case_loc_tag_txa","r_", 
null, "case_loc_tag_txa",null,"location_id",null,"",   
LOCATION_ROOT_ID, "", "fullname", "noop",
"dd w65 gw_ ba_b mtn1", 
"noop"] };


// ---

te["case_jurisdiction_tag_txa"] = { case_enum_tag_txa_:["w60 xx tt b05","fullname__","Enter Court's Jurisdiction","jurisdiction_id"] };

te["case_jurisdiction_enum"] = { case_enum_lsh:["x y",null,"",
"tag-r_--o-case_jurisdiction_tag_txa-%1-jurisdiction_id-%0-", "category_ls_main-subcategories", "c w60", 
"case_jurisdiction_tag_txa","r_", 
null, "case_jurisdiction_tag_txa", null, "jurisdiction_id", null, "",
JURISDICTION_ROOT_ID, "", "fullname", "noop",
"dd w65 gw_ ba_b mtn1", 
"noop"] };

// =========================================================================================

te["case_doc_type_lc_root_id"] = { arg:["root_id","",CASE_DOC_TYPE_ROOT_ID] };
te["case_party_type_lc_root_id"] = { arg:["root_id","",CASE_PARTY_TYPE_ROOT_ID] };
te["case_stage_lc_root_id"] = { arg:["root_id","",CASE_STAGE_ROOT_ID] };

te["case_jurisdiction_lc_level_root_id"] = { form:["tt"], c:
[
	{ input:["g","","level","0","radio","1"] },
	{ ac:["c opti l","","_optky","x y03","All"] },
	{ input:["g","level","level","1","radio"] },
	{ ac:["c opti l","","_optky","x y03","1"] },
	{ input:["g","level","level","2","radio"] },
	{ ac:["c opti l","","_optky","x y03","2"] },
	{ input:["g","level","level","3","radio"] },
	{ ac:["c opti l","","_optky","x y03","3"] },
	{ input:["g","level","level","4","radio"] },
	{ ac:["c opti l","","_optky","x y03","4"] },
	{ div:["e"], c:[ { arg:["root_id","",JURISDICTION_ROOT_ID] }, { arg:["sort","","fullname"] } ] }
]};

te["case_location_lc_level_root_id"] = { form:["tt"], c:
[
	{ input:["g","","level","0","radio","1"] },
	{ ac:["c opti l","","_optky","x y03","All"] },
	{ input:["g","level","level","1","radio"] },
	{ ac:["c opti l","","_optky","x y03","County"] },
	{ input:["g","level","level","2","radio"] },
	{ ac:["c opti l","","_optky","x y03","Constituency"] },
	{ input:["g","level","level","3","radio"] },
	{ ac:["c opti l","","_optky","x y03","Ward"] },
	{ input:["g","level","level","4","radio"] },
	{ ac:["c opti l","","_optky","x y03","Village"] },
	{ div:["e"], c:[ { arg:["root_id","",LOCATION_ROOT_ID] }, { arg:["sort","","fullname"] } ] }
]};

te["case_lc_root_id"] = { arg:["root_id","",":k:subcategories_k:root_id:2"] };

te["case_jurisdiction_lc_main"] = { category_lc_main_:["case_jurisdiction_lc_level_root_id"] };
te["case_location_lc_main"] = { category_lc_main_:["case_location_lc_level_root_id"] };
te["case_lc_main"] = { category_lc_main_:["case_lc_root_id"] };

te["case_stage_root_id"] = { arg:["root_id_","",CASE_STAGE_ROOT_ID] };
te["case_expertise_root_id"] = { arg:["root_id_","",EXPERTISE_ROOT_ID] };
te["case_jurisdiction_root_id"] = { arg:["root_id_","",JURISDICTION_ROOT_ID] };
te["case_location_root_id"] = { arg:["root_id_","",LOCATION_ROOT_ID] };

te["case_location_level_root_id"] = { form:["tt"], c:
[
        { input:["g","","level","0","radio","1"] },
        { ac:["c opti mr","","_optky","xx y03","All"] },
        { input:["g","level","level","1","radio"] },
        { ac:["c opti mr bd12","","_optky","xx y03 bd12","County"] },
        { input:["g","level","level","2","radio"] },
        { ac:["c opti mr bd12","","_optky","xx y03 bd12","Constituency"] },
        { input:["g","level","level","3","radio"] },
        { ac:["c opti mr bd12","","_optky","xx y03 bd12","Ward"] },
        { div:["e"], c:[ { arg:["root_id_","",LOCATION_ROOT_ID] }, { arg:["sort","","fullname"] } ] }
]};

te["case_lc_main_root_id"] = { arg:["root_id_","",":k:subcategories_k:root_id_:2"] };
te["case_lc_main"] = { category_lc_main_:["case_lc_main_root_id"] };
te["case_location_lc_main"] = { category_lc_main_:["case_location_level_root_id"] };


// --------------------------------------------------------------------------------------

te["case_form_court_details"] = { c:
[
	{ div:["tt"], case_vw_val_cat:["Court Location","",":v:cases:court_name"] },

	{ div:["tt"], case_vw_val_cat:["Court Jurisdiction","",":v:cases:court_jurisdiction"] },
]}

te["case_form_col_1"] = { c:
[
	
	{ div:[""], c:
	[
		{ div:[], c:[ { s:["c x y","Citation"] }, { s:["c t h2 cr b","*"] }, { div:["e"] } ]},
		{ p:["","o"], c:[ { textarea:["w75 wx75 mh15 xx yy ba","","citation",":v:cases:citation",""] } ] }
	]},
	
	{ div:["t15"], c:
	[
		{ div:[], c:[ { s:["c x y","Nature of Case"] }, { s:["c t h2 cr b","*"] }, { div:["e"] } ]},
		{ p:["","o"], c:[ { textarea:["w75 wx75 mh15 xx yy ba","","nature",":v:cases:nature",""] } ] }
	]},

	{ div:["t15"], c:
	[
		{ div:[], c:[ { s:["c x y","Issues for Determination"] }, { s:["c t h2 cr b","*"] }, { div:["e"] } ]},
		{ p:["","o"], c:[ { textarea:["w75 wx75 mh15 xx yy ba","","issues",":v:cases:issues",""] } ] }
	]},
	
	{ div:["t15 b30 g"], c:
	[
		{ div:[], c:[ { s:["c x y","Case Outcome"] }, { s:["c t h2 cr b","*"] }, { div:["e"] } ]},
		{ p:["","o"], c:[ { textarea:["w75 wx75 mh15 xx yy ba","","outcome",":v:cases:outcome",""] } ] }
	]},
]};

te["case_form_col_0"] = {  c:   
[
	{ p:["t","parties_plaintiff"], c:
	[
		{ div:[], c:
		[
			{ s:["xx y b n","Plaintiff(s)"] },
			{ div:["e"] }
		]},
		{ p:["","a"], u:["party_ed_r","parties_plaintiff"] },
		{ div:[], c:
		[
			{ div:["c"], c:
			[
				{ ac:["ay x","party_new-r_-^","_vp","bd16 cb",""], c:
				[ 
					{ s:["c x y h01_ w01_ gws_ tc b h3 bd16 cb","+"] }, 
					{ s:["c x y","Add a Plaintiff"] }, 
					{ div:["e"], c:[ { arg:["parties-party_type_id","",PARTY_TYPE_PLAINTIFF_ID] }, { arg:["parties-party_type","","Plaintiff"] }, { arg:["parties-case_id","","%0"] } ] } 
				]},
				{ div:["g"], c:[ { arg:["","","party_ed_r-parties-parties_plaintiff-a"] } ] }
			]},
			{ div:["e"] }
		]}
	]},

	{ p:["t20","parties_defendant"], c:
	[
		{ div:[], c:
		[
			{ s:["xx y b n","Defendant(s)"] },
			{ div:["e"] }
		]},
		{ p:["","a"], u:["party_ed_r","parties_defendant"] },
		{ div:[], c:
		[
			{ div:["c"], c:
			[
				{ ac:["ay x","party_new-r_-^","_vp","bd16 cb",""], c:
				[ 
					{ s:["c x y h01_ w01_ gws_ tc b h3 bd16 cb","+"] }, 
					{ s:["c x y","Add a Defendant"] }, 
					{ div:["e"], c:[ { arg:["parties-party_type_id","",PARTY_TYPE_DEFENDANT_ID] }, { arg:["parties-party_type","","Defendant"] }, { arg:["parties-case_id","","%0"] } ] } 
				]},
				{ div:["g"], c:[ { arg:["","","party_ed_r-parties-parties_defendant-a"] } ] }
			]},
			{ div:["e"] }
		]}
	]},

	{ p:["t20","parties_witness"], c:
	[
		{ div:[], c:
		[
			{ s:["xx y b n","Witness(es)"] },
			{ div:["e"] }
		]},
		{ p:["","a"], u:["party_ed_r","parties_witness"] },
		{ div:[], c:
		[
			{ div:["c"], c:
			[
				{ ac:["ay x","party_new-r_-^","_vp","bd16 cb",""], c:
				[ 
					{ s:["c x y h01_ w01_ gws_ tc b h3 bd16 cb","+"] }, 
					{ s:["c x y","Add a Witness"] }, 
					{ div:["e"], c:[ { arg:["parties-party_type_id","",PARTY_TYPE_WITNESS_ID] }, { arg:["parties-party_type","","Witness"] }, { arg:["parties-case_id","","%0"] } ] } 
				]},
				{ div:["g"], c:[ { arg:["","","party_ed_r-parties-parties_witness-a"] } ] }
			]},
			{ div:["e"] }
		]}
	]},
		
	{ div:["t15"], c:
	[
		{ div:["_ba_"], case_advocate_enum:["Assigned Advocate",":v:cases:advocate_id",":v:cases:advocate_fullname"," %0"] }
	]},

	{ div:["y15"], c:
	[
		{ div:["_ba_"], case_court_enum:["Assigned Court",":v:cases:court_id",":v:cases:court_name"," %0"] }
	]},

	// todo: court detail sub
	
]};

te["case_form_"] = { div:["","ve"], s:["gw mw120 b20",""], c: // new case 
[		
	{ div:["x20 tt","va"], c:
	[
		{ div:["c x t02"], ac:["","","_uvw","h2 x y bd16 gb cw micon","arrow_back"] },
		{ s:["c ll tt h2 b",CASE_ID_PREFIX] },
		{ s:["c tt h2 b w40",null] },
		{ s:["c x08 tt h2 b",null] },
		{ s:["c tt h2 b w40",null] },
		{ div:["e"] }
	]},
	
	{ div:["x25 t15"], c:[ { p:["c w100","nb"], c:[ { u:["nb","cases_nb"] }, { u:["nb","newcase_nb"] } ] }, { div:["e"] } ] },
					
	{ div:["x20 w125_"], c:
	[
		{ div:["c w45_ r50"], case_form_col_0:[] },
		{ div:["c w75_"], case_form_col_1:[] },
		{ div:["e"] }
	]},
		
	{ div:["x20 y30 w125_"], c:
	[
		{ div:["d w12"], c:
		[
			{ ac:["btn ao",null,"_postj","y tc gb b cw",null] },
			{ div:["savl"], s:["yy tc bd go b n cw","Saving..."] }
		]},

		{ div:["d x15","va"], ac:["w12 ao",null,null,"y04 tc cd ba","Cancel"], c:  // todo: on cancel notify that changes will be lost	
		[ 
			{ arg:["",".id","%0"] },
		]}
	]}
]};

te["case_ed"] = { case_form_:[":v:cases:case_number","/",":v:cases:stage",  "case_ed-cases","Update","case_vw_id-cases-vfvw","_u"] };

te["case_new"] = { case_form_:["NEW CASE","","", "case_new-cases","Create","","_uvw"] };

// ------------------------------------------------------------------------

te["case_vw_val_cat_tr"] = { c:
[
	{ s:["x tt tr v",null] },
	{ div:["x y n mh02 bd tr"], uval:[null,null] }
]};

te["case_vw_val_cat"] = { c:
[
	{ s:["x tt v",null] },
	{ div:["x y n mh02 bd"], uval:[null,null] }
]};

te["case_vw_val_tr"] = { c:
[
	{ s:["x tt v tr",null] },
	{ s:["x y n mh02 bd tr",null] }
]};

te["case_vw_val"] = { c:
[
	{ s:["x tt v",null] },
	{ s:["x y n mh02 bd",null] }
]};


te["case_vw_col_1"] = { c:
[
	{ div:["tt"], c:
	[
		{ s:["x tt v","Citation"] },
		{ pre:["x y mh02 bd w60","",":v:cases:citation"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["x tt v","Nature of Case"] },
		{ pre:["x y mh02 bd w60","",":v:cases:nature"] }
	]},
	{ div:["tt"], c:
	[
		{ s:["x tt v","Issues for Determination"] },
		{ pre:["x y mh02 bd w60","",":v:cases:issues"] }
	]},

	{ div:["tt b20"], c:
	[
		{ s:["x tt v","Case Outcome"] },
		{ pre:["x y mh02 bd w60","",":v:cases:outcome"] }
	]}
]};

te["case_vw_col_0"] = { c:
[
	{ p:["","parties^plaintiff"], c:
	[
		{ div:["t"], c:
		[
			{ s:["xx y b n","Plaintiffs"] },
			{ div:["e"] }
		]},
		{ p:["","a"], u:["party_vw_r","parties_plaintiff"] },
	]},
	
	{ p:["t15","parties^defendant"], c:
	[
		{ div:[], c:
		[
			{ s:["xx y b n","Defendants"] },
			{ div:["e"] }
		]},
		{ p:["","a"], u:["party_vw_r","parties_defendant"] },
	]},
	
	{ p:["t15","parties^defendant"], c:
	[
		{ div:[], c:
		[
			{ s:["xx y b n","Witnesses"] },
			{ div:["e"] }
		]},
		{ p:["","a"], c:
		[
			{ s:["xx y cd","No Witnesses"] },
			{ u:["party_vw_r","parties_witness","","parties_witness"] },
		]}
	]},

        { div:["t15"], c:
	[
		{ s:["xx tt cd","Assigned Advocate"] },
		{ s:["xx y n mh02 gws_",":v:cases:advocate_name"] },
		{ div:["e"] }
	]},

	{ div:["t15 b30"], c:
	[
		{ s:["xx y cd","Assigned Court"] },
		{ div:["xx y gws_"], c:
		[
			{ s:["t n mh02 bd",":v:cases:court_name"] },
			{ div:["s"], uval:["",":v:cases:court_jurisdiction"] },
			{ div:["s"], uval:["",":v:cases:court_location"] },
		]}
	]},
	
]};

te["case_vw_id"] = { div:["section-to-print tt","ve"], c: 
[	
	{ div:["x20 y","vb"], c:
	[		
		{ div:["c x t02"], ac:["","","_uvw","h2 x y bd16 gb cw micon","arrow_back"] },	
		{ s:["c ll tt h2 b",CASE_ID_PREFIX] },
		{ s:["c tt h2 b w40",":v:cases:id"] },
		
		{ div:["d t r05","va"], ac:["","","_print","x08 y h02 n gws_ cb",""], c:
		[ 
			{ s:["c micon h3","print"] }, 
			{ s:["c xx s","Print"] }, 
			{ div:["e"] } 
		]},
		
		{ div:["d t r05","va"], ac:["","case_ed-cases-vfvw","_dddu","x08 y h02 n gws_ cb",""], c:
		[ 
			{ s:["c micon h3","edit"] }, 
			{ s:["c xx s","Update"] }, // --> todo load popup to select update action
			{ div:["e"] }
			
		]},

		{ div:["d t r05","va"],  c:
		[ 
			{ input:["g","","case_vw_id_t","2","radio"] },
			{ ac:["ao tab","","_tab","x08 y h02 n gws_ cb",""], c:
			[ 
				{ s:["c micon h3","history"] }, 
				{ s:["c xx s","Documents"] }, 
				{ div:["e"] } 
			]}
		]},
		
		{ div:["d t r05","va"],  c:
		[ 
			{ input:["g","","case_vw_id_t","1","radio"] },
			{ ac:["ao tab","","_tab","x08 y h02 n gws_ cb",""], c:
			[ 
				{ s:["c micon h3","history"] }, 
				{ s:["c xx s","Case History"] }, 
				{ div:["e"] } 
			]}
		]},

		{ div:["d t r05","va"], c:
		[ 
			{ input:["g","","case_vw_id_t","0","radio","1"] },
			{ ac:["ao tab","","_tab","x08 y gws_ h02 n cb",""], c:
			[ 
				{ s:["c micon h3","feed"] }, 
				{ s:["c xx s","Case Details"] }, 
				{ div:["e"] } 
			]}
		]},
		
		{ div:["e"] }
	]},

	{ div:["x25 tt"], c:[ { p:["c w100","nb"], c:[ { u:["nb","cases_nb"] }, { u:["nb","newcase_nb"] } ] }, { div:["e"] } ] },
		
	{ div:[], c:
	[
		{ div:[], c:
		[
			{ input:["g","","case_vw_id_v","0","radio","1"] },
			{ div:["tabv w125_ x20 b20","ve"], c:
			[	
				{ div:["c w45_ r50"], case_vw_col_0:[] },
				{ div:["c w75_"], case_vw_col_1:[] },
				{ p:["e","o"], c:[ { arg:["",".id","%0"] }, { arg:["","uuid",":v:cases:uuid"] } ] } 
			]}
		]},
	
		{ div:[], c:
	 	[
			{ input:["g","","case_vw_id_v","1","radio"] },
	 		{ div:["tabv x30","vs"], u:["case_history","case_activities_ctx"] }
	 	]},

	 	{ div:[], c:
	 	[
			{ input:["g","","case_vw_id_v","1","radio"] },
	 		{ div:["tabv x30","vs"], u:["case_docs","docs_ctx"] }
	 	]},
	 	
	 	{ div:["print-only"], c:
		[ 
			{ div:["page-break"] },
			{ u:["case_reporter_vw_id_print","reporters"] },
			{ u:["case_client_vw_id_print","clients"] },
			{ u:["case_perpetrator_vw_id_print","perpetrators"] },
			{ div:["x15","vs"], u:["case_history","case_activities_ctx"] }
	 	]}
	 	
	 ]}	
]};

// --------------------------------------------------------------------------------------------

te["case_f_tags_"] = { c: 
[

	{ f:["Case Number",null,	" %0","case_number",""] },
	{ f:["Stage",null,		" %1","stage_id"," %1"] },
	{ f:["Advocate",null,		" %1","advocate_id"," %1"] },
        { f:["Court",null,        	" %1","court_id"," %1"] },
	{ f:["Court Jurisdiction",null,	" %1","court_jurisdiction_id"," %1"] },
	{ f:["Court Location",null,	" %1","court_location_id"," %1"] },
	{ f:["Created On",null,		" :d:dmy:0: ","created_on",""] },
	{ f:["Created By",null,		" %1","created_by_id"," %1"] },

	
		
	{ p:["g","o"], arg:["","_title",null] }, 
	{ div:["e"] }
]};

te["case_f_tags_k"] = { case_f_tags_:[":k:cases_k:case_number:2", ":k:cases_k:stage_id:2", ":k:cases_k:advocate_id:2", ":k:cases_k:court_id:2", ":k:cases_k:court_jurisdiction_id:2", ":k:cases_k:court_location_id:2", ":k:cases_k:created_on:2", ":k:cases_k:created_by_id:2",

"%5"] }; 

te["case_f_tags"] = { case_f_tags_:[":k:cases_f:case_number", ":k:cases_f:stage_id", ":k:cases_f:advocate_id", ":k:cases_f:court_id", ":k:cases_f:court_jurisdiction_id", ":k:cases_f:court_location_id",  ":k:cases_f:created_on", ":k:cases_f:created_by_id", 
":k:cases_f:_title"] };


te["case_cases_f"] = { c:
[
	{ div:["xx yy"], kf_s:["Case Number","id",":k:cases_f:case_number"] },			
				
	{ div:["xx yy"], kf_l:["Stage","tag_-r_--o--%1-category_id-stage_id-%0-%1",   "case_lc_main-subcategories",  ":k:cases_f:stage_id",  
""," %1","category_id","stage_id"," %0"," %1", "case_stage_root_id"] },
			
	{ div:["xx yy"], kf_l:["Advocate","tag_-r_--o--%1-advocate_id-advocate_id-%0-%1",   "advocate_lc_main-advocates", 
":k:cases_f:advocate_id", ""," %1","advocate_id","advocate_id"," %0"," %1", "noop"] },	
		
	{ div:["xx yy"], kf_l:["Court","tag_-r_--o--%1-court_id-court_id-%0-%1",   "court_lc_main-courts", 
":k:cases_f:court_id", ""," %1","court_id","court_id"," %0"," %1", "noop"] },	

	{ div:["xx yy"], kf_l:["Court Jurisdiction","tag_-r_--o--%1-category_id-court_jurisdiction_id-%0-%1",   "case_lc_main-subcategories", ":k:cases_f:court_jurisdiction_id", ""," %1","category_id","court_jurisdiction_id"," %0"," %1", "case_jurisdiction_root_id"] },	
	
	{ div:["xx yy"], kf_l:["Court Location","tag_-r_--o--%1-category_id-court_location_id-%0-%1", "case_location_lc_main-subcategories",  ":k:cases_f:court_location_id", ""," %1","category_id","court_location_id"," %0"," %1", "case_location_root_id"] },

	{ div:["xx yy"], kf_d:["Created On"," :d:dmy:0: ","created_on",":k:cases_f:created_on","created_on",":k:cases_f:created_on"] },
			
	{ div:["xx yy"], kf_l:["Created By","tag_-r_--o--%1-user_id-created_by_id-%0-%1",   "user_lc_main-users",":k:cases_f:created_by_id", 
""," %1","user_id","created_by_id"," %0"," %1",  "noop"] },
				
]};
	
te["case_f"] = { div:["w58 ma sh__ y gw_","vddvf"], ev:["_undd"], c:
[
	{ s:["x25 t20 b h3","Search Case"] },
	{ div:[], c:
	[
		{ div:["x15 t15","vb"], c:
		[
			{ div:["c x"], c:[ { input:["g","","case_f_vw_t","0","radio","1"] }, { ac:["ay tabu","","_tab","x y cb","Case"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","1","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Party"] } ] },
			//{ div:["c x"], c:[ { input:["g","","case_f_vw_t","2","radio"] }, { ac:["ay tabu","","_tab","xx y cb","Document"] } ] },
			{ div:["e"] }
		]},
		{ div:["x15 tt b20"], c:
		[
			{ div:[], c:[ { input:["g","","case_f_vw_tv","0","radio","1"] }, { div:["tabv"], case_cases_f:[] } ] },
			
		]}
	]},
	{ p:["g","o"], arg:["","_title",":k:cases_f:_title"] },
	{ vp_apply:["case_f_tags-cases_f"] }
]};

// ------------------------------------------------------------------------

te["case_footer"] = { div:["x gw ba"], c:
[
	{ div:["d y07"], pg:["pgto","case_list-cases"," dh","da dl","case_list-cases"," dh","da dr"] },
	{ div:["e"] }
]};

te["case_r"] = { div:[], c: 
[
	{ input:["g","","casevwr","1","radio",""] },
	{ ac:["ay w250","case_vw_id-cases-@","_vw","cb gw",""], c:
	[
		{ div:["c w16"], s:["xx y08",""],c:[ { span:["","",CASE_ID_PREFIX] }, { span:["","",":v:cases:id"] } ] },
		{ div:["c w16"], s:["xx y08",":v:cases:created_by"] },
		{ div:["c w16"], s:["xx y08",":d:dmyhnr:1: "] },
		{ div:["c w16"], s:["xx y08",":v:cases:stage"] },
		{ div:["c w16"], s:["xx y08",":v:cases:advocate_fullname"] },
		{ div:["c w16"], s:["xx y08",":v:cases:court_name"] },
		{ div:["c w30"], s:["xx y08",""], uval:["",":v:cases:court_jurisdiction"] }, 
		{ div:["c w30"], s:["xx y08",""], uval:["",":v:cases:court_location"] }, 
		{ div:["e"], arg:["",".id","%0"] }
	]}
]};


te["case_k"] = { div:["w250 bt bb"], s:["",""], c: 
[
	{ k_a:["c w16","case_rr-cases","cd","Case Number","da db","case_number",":k:case_number:id:2"] },
	{ k_a:["c w16","case_rr-cases","cd","Created By","da db","created_by_id",":k:cases_k:created_by_id:2"] },
	{ k_a:["c w16","case_rr-cases","cd","Created On","da db","created_on",":k:cases_k:created_on:2"] },
	{ k_a:["c w16","case_rr-cases","cd","Stage","da db","stage_id",":k:cases_k:stage_id:2"] },
	{ k_a:["c w16","case_rr-cases","cd","Advocate","da db","advocate_id",":k:cases_k:advocate_id:2"] },
	{ k_a:["c w16","case_rr-cases","cd","Court","da db","court_id",":k:cases_k:court_id:2"] },
	{ k_a:["c w30","case_rr-cases","cd","Court Jurisdiction","da db","court_jurisdiction_id",":k:cases_k:court_jurisdiction_id:2"] },
	{ k_a:["c w30","case_rr-cases","cd","Court Location","da db","court_location_id",":k:cases_k:court_location_id:2"] },

	{ div:["e"], c:
	[



{ arg:["","_title","%5"] }

	]}
]};

te["case_nb"] = { div:[], c:[ { u:["nb","cases_nb"] }, { div:["e"] } ] };

te["case_title"] = { div:[], c:[ { arg:["","_c","%1"] } ] }; 

te["case_list"] = { list:["case_title","case_nb","bl br ox","case_k","case_r","cases","case_footer"] };

te["case_main"] = { c:
[
	{ div:["tt","vb"], c:
	[
		{ div:["c t03"], c:
		[
			{ div:["","va"], s:["",""], c:
			[
				{ input:["g","","cases_t_","0","radio","1"] },
				{ ac:["c","case_main-cases-vftab","_u","x y cb b h2","::case_title:5:1"] }, 
				{ ac:["c t02 x ay","","_dd","h02 w02 gws_ awb",""] },
				{ div:["e"], arg:["","_title","%5"] }
			]},
			{ div:["dd x y gw ba sh nd w14","vdd"], c:
			[
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","My Cases"], c:[ { arg:["","_title","my_cases"] } ] },

				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n supervisor_","Escalated By Me"], c:[ { arg:["","_title","esca_by_me"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n supervisor_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	

				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n casemanager_","Escalated By Me"], c:[ { arg:["","_title","esca_by_me"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n casemanager_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	
											
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n caseworker_","Escalated To Me"], c:[ { arg:["","_title","esca_to_me"] } ] },	

				// { div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","Unread Cases"], c:[ { arg:["","_title","unread_cases"] } ] },
				{ div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","All Cases"], c:[ { arg:["","_title","all_cases"] } ] },
				// { div:["","va"], ac:["ay","case_main-cases-vftab","_u","xx y cb  n","All Cases Today"], c:[ { arg:["","_title","all_cases_today"] } ] },
			]}
		]},

		{ div:["c l40"], c: 
		[
			{ arg:["case_list-cases","","0"] },
			{ input:["g","","cases_t_","0","radio","1"] },
			{ li:["opto x bl bt bb gw s cb","case_list-cases"], ev:["_tab"], c:
			[
				{ s:["c l t h3_ micon","list"] },
				{ div:["c xx y","","List"] }, 
				{ div:["e"] }
			]}
		]},

		{ div:["c"], c: 
		[
			{ arg:["case_rpt_vw-cases-@","","1,0"] },
			{ input:["g","","cases_t_","1","radio"] },
			{ li:["opto x ba gw s cb","case_rpt_main-r_"], ev:["_tab"], c:[ { div:[], c:
			[
				{ s:["c l t h3_ micon","bar_chart"] },
				{ s:["c xx y","Reports"] }, 
				{ div:["e"] }
			]} ]}
		]},

		{ div:["c l40"], ac:["ay","case_f-cases_f","_vpf","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","filter_alt"] },
			{ div:["c x y","","Filter"] }, 
			{ div:["e"] }
		]},

		{ div:["c l40"], ac:["ay","cases","_download","x t01 bd_ cb s",""], c:
		[ 
			{ s:["c t04 h3_ micon","download"] },
			{ div:["c x y","","Download"] }, 
			{ div:["e"], arg:["","join","services,referals,clients,perpetrators"] }
		]},

		{ div:["c l40"], c:
		[
			{ input:["g","","cases_vr","100","radio"] },
			{ ac:["ay","case_new-r_-^","_vw","x t01 bd_ cb",""], c:
			[ 
				{ s:["c l t02 h2 b","+"] },
				{ div:["c x y","","New Case"] }, 
				{ div:["e"] }
			]},
			{ div:["g"], arg:["","","court_r_-courts-vftab-court_list_new_nb"] },
		]},
		
		{ div:["e"], c:[ { arg:["","","case_list-cases"] }, { arg:["","","0"] }, { arg:["","","100"] }, { arg:["","",""] } ] }
	]},
	{ div:["yy","vf"], c:[ { div:["","case_f-cases_f"], c: // ev:["_n_vpf"], c:
	[
		{ case_f_tags_k:[] }
	]} ]},
	{ div:[], c:
	[
		{ div:[], c:[ { input:["g","","cases_v","100","radio","1"] }, { p:["tabv yy","vt"], case_list:[] } ] },
		{ div:[], c:[ { input:["g","","cases_v","0","radio"] }, { p:["tabv","vt"] } ] },	// reports			
	]}
]};
	
te["cases"] = { c:
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
			{ input:["g","","case_vw_vt","0","radio","1"] }, // select reporter
			{ p:["tabv x20 y20 gw mm","vftab"], case_main:[] } 
		]},
		{ div:[], c:
		[	
			{ input:["g","","case_vw_vt","1","radio"] }, // case-edit
			{ p:["tabv gw yy mm","vfvw"] }
		]}
	]}
]};

// -----

function postj_case_ufn (el, u, a, r, m)
{
	var k = re["activities_k"]["dispositions"][0]
	var uid = re["activities_k"]["src_uid"][0];
	activity_disposition (__(el,"vwid"), ra["activities"][0], k, uid)
	// activity_close ()
}

function case_postj (el, p_, o) 
{
	var u = el.id.split ("-");
	var p = __(el,"ve");
	var o = {};
	jso (p_.firstChild, o); 	// channel data
	jso (p,o); 			// case details (including reporter|followup)
	url (p, u[0], u[1], o[".id"], null, 2, o, "POST");
}


function _case_postj (ev) { case_postj (this, __(this,"vfvwm"));  boo(ev); }

function _case_postj_update (ev) { case_postj (this, __(elvp,"vfvwm")); boo(ev);  }

function _case_cancel ()
{
	// case_vw_id else reset form
}


