
var UU = 
{
"login":{ 200:[["main","ss","vv"]], 401:[["login","user_","vv"]], 412:[["nb","errors","v","nb"]] },
"logout":{ 401:[["login","user_","vv"]] },
"change_passwd":{ 202:[["change_passwd_vw","user_","vp"]], 412:[["nb","errors","v","nb"]] },
"reset_passwd":{ 202:[["nb","auth_nb","v","nb"]], 412:[["nb","errors","v","nb"]] },

"dash":{ 200:[["dash","dash"]] },
"dash_rpt_pie":{ 200:[["dash_rpt_pie","cases_rpt"]] },
"dash_rpt_line":{ 200:[["dash_rpt_line","cases_rpt"]] },

// ---------------

"case_lc_main":{ 200:[["case_lc_main","subcategories_ctx"]] },
"case_location_lc_main":{ 200:[["case_location_lc_main","subcategories_ctx"]] },
"case_category_lc_main":{ 200:[["case_category_lc_main","subcategories_ctx"]] },

"subcategory_list":{ 200:[["subcategory_list","subcategories_ctx"]] },

"category_ed":{ 200:[["category_ed","categories"]], 202:[["category_vw_id","subcategories","vp"]], 412:[["nb","errors","v","nb"]] },
"category_new":{ 201:[["category_r","subcategories","va"]], 412:[["nb","errors","v","nb"]] },
"category_vw_id":{ 200:[["category_vw_id","categories"]] },
"category_lc":{ 200:[["category_lc","subcategories_ctx"]] },
"category_lsh":{ 200:[["category_lsh","subcategories_ctx"]] },
//"category_lsh_main":{ 200:[["category_lsh_main","subcategories_ctx"]] },
"category_ls":{ 200:[["category_ls","subcategories_ctx"]] },
"category_ls_main":{ 200:[["category_ls_main","subcategories_ctx"]] },
"category_rr":{ 200:[["category_rr","subcategories_ctx"]] },
"category_list":{ 200:[["category_list","subcategories_ctx"]] },
"category_main":{ 200:[["category_main","subcategories_ctx"]] },
"categories":{ 200:[["categories","subcategories_ctx"]] },

// ---------------

"user_ed":{ 202:[["uvpfn","users","vp"]], 412:[["nb","errors","v","nb"]], 200:[["user_ed","users"]] },
"user_new":{ 201:[["uvpfn","users","vp"]], 412:[["nb","errors","v","nb"]] },
"user_vw_id":{ 200:[["user_vw_id","users"]] },
"user_la":{ 200:[["user_la","users_ctx"]] },
"user_lc":{ 200:[["user_lc","users_ctx"]] },
"user_lc_main":{ 200:[["user_lc_main","users_ctx"]] },
"user_ls":{ 200:[["user_ls","users_ctx"]] },
"user_list":{ 200:[["user_list","users_ctx"]] },
"user_main":{ 200:[["user_main","users_ctx"]] },
"users":{ 200:[["users","users_ctx"]] },

// ---------------

"contact_ed":{ 200:[["contact_ed","contacts"]], 202:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_new":{ 201:[["contact_vw_id","contacts","vp"]], 412:[["nb","errors","v","nb"]] },
"contact_vw_id":{ 200:[["contact_vw_id","contacts"]] },
"contact_lc":{ 200:[["contact_lc","contacts_ctx"]] },
"contact_ls":{ 200:[["contact_ls","contacts_ctx"]] },
"contact_list":{ 200:[["contact_list","contacts_ctx"]] },
"contact_main":{ 200:[["contact_main","contacts_ctx"]] },
"contacts":{ 200:[["contacts","contacts_ctx"]] },

// ---------------

"advocate_ed":{ 202:[["uvpfn","advocates","vp"]], 412:[["nb","errors","v","nb"]], 200:[["advocate_ed","advocates"]] },
"advocate_new":{ 201:[["uvpfn","advocates","vp"]], 412:[["nb","errors","v","nb"]] },
"advocate_vw_id":{ 200:[["advocate_vw_id","advocates"]] },
"advocate_lc":{ 200:[["advocate_lc","advocates_ctx"]] },
"advocate_lc_main":{ 200:[["advocate_lc_main","advocates_ctx"]] },
"advocate_ls":{ 200:[["advocate_ls","advocates_ctx"]] },
"advocate_list":{ 200:[["advocate_list","advocates_ctx"]] },
"advocate_main":{ 200:[["advocate_main","advocates_ctx"]] },
"advocates":{ 200:[["advocates","advocates_ctx"]] },

// ---------------

"court_ed":{ 202:[["uvpfn","courts","vp"]], 412:[["nb","errors","v","nb"]], 200:[["court_ed","courts"]] },
"court_new":{ 201:[["uvpfn","courts","vp"]], 412:[["nb","errors","v","nb"]] },
"court_vw_id":{ 200:[["court_vw_id","courts"]] },
"court_lc":{ 200:[["court_lc","courts_ctx"]] },
"court_lc_main":{ 200:[["court_lc_main","courts_ctx"]] },
"court_ls":{ 200:[["court_ls","courts_ctx"]] },
"court_list":{ 200:[["court_list","courts_ctx"]] },
"court_main":{ 200:[["court_main","courts_ctx"]] },
"courts":{ 200:[["courts","courts_ctx"]] },

// ---------------

"party_ed":{ 202:[["uvpfn","parties","vp"]], 412:[["nb","errors","v","nb"]], 200:[["party_ed","parties"]] },
"party_new":{ 201:[["uvpfn","parties","vp"]], 412:[["nb","errors","v","nb"]] },
"party_vw_id":{ 200:[["party_vw_id","parties"]] },

// ---------------

"case_rpt_vw":{ 200:[["rpt_vw","cases_rpt"]] },
"case_update":{ 200:[["case_update","cases"]], 202:[["uvpfn","cases","vp"]], 412:[["nb","errors","v","nb"]] },
"case_ed":{ 200:[["case_ed","cases"]], 202:[["activity_case_ufn","cases","vfvw"]], 412:[["nb","errors","v","nb"]] },
"case_new":{ 200:[["case_new","cases"]], 201:[["case_vw_id","cases","vfvw"]], 202:[["case_vw_id","cases","vfvw"]], 412:[["nb","errors","v","nb"]] },
"case_vw_id":{ 200:[["case_vw_id","cases"]] },
"case_vw":{ 200:[["case_vw","cases"]] },
"case_list":{ 200:[["case_list","cases_ctx"]] },
"case_main":{ 200:[["case_main","cases_ctx"]] },
"cases":{ 200:[["cases","cases_ctx"]] },

// ---------------

"activity_match_vw":{ 200:[["activity_match_vw","contacts_ctx"]] },
"activity_match":{ 200:[["activity_vw_id_tabs","activities"]] },
"activity_vw_id":{ 200:[["activity_vw_id","activities"]] },
"activity_lst":{ 200:[["activity_lst","activities_ctx"]] },

};

re["peers"] = {};
re["channels"] = {};
re["activity_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["category_"] = [["","","","","","","","","","","","","","","","","","",""]];
re["user_"] = [["","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["r_"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
"","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","", "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];

re["auth"] = [["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];
re["contacts_k"] = {};
re["categories_k"] = {};
re["activities_k"] = {};
re["actions_k"] = {};
re["cases_k"] = {};
re["parties_k"] = {};

rk["dist"] = ["-","h","dt","wk","mn","yr"];
re["dist"] = 
{
"":["","None"],
"-":["-","Pie Chart"],
"h":["h","Hourly"],
"dt":["dt","Day"],
"wk":["wk","Week"],
"mn":["mn","Month"],
"yr":["yr","Year"],
};
rk["dash_call_dist"] = ["hour","-"];
re["dash_call_dist"] = re["dist"];

rk["sla"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla"] = 
{
"120+":["120+","140+",""],
"120":["120","120-139",""],
"100":["100","100-119",""],
"80":["80","80-99",""],
"60":["60","60-79",""],
"40":["40","40-59",""],
"20":["20","20-39",""],
"0":["0","0-19",""],
};

rk["sla_wait"] = ["120+","120","100","80","60","40","20","0"]; 
re["sla_wait"] = re["sla"];

rk["hangup_reason"] = ["phone","usr","ivr","net"];
re["hangup_reason"] = 
{
"":["","",""],
"phone":["phone","Customer"],
"usr":["usr","Extension"],
"ivr":["ivr","IVR"],
"net":["net","Network"],
};

rk["hangup_status"] = ["answered","abandoned","busy","dump","ivr","missed","no-answer","network-error","voicemail","xfer_consult","xfer_noanswer","xfer_offline","xfer_ok"];
re["hangup_status"] = 
{
"":["","","","",""],
"answered":["answered","Answered","Answered","x y03 gg cw","","#4eb151"],
"abandoned":["abandoned","Abandoned","Abandoned","x y03 go cw","","#ffa500"],
"dump":["dump","AgentDump","Dump","x y03 gr cw","","#B22222"],
"ivr":["ivr","IVR","","g","","#1E90FF"],
"missed":["missed","Missed","Missed","x y03 go cw","","#DC143C"],
"no-answer":["no-answer","Flash","No Answer","x y03 go cw","","#FFA07A"],
"noanswer":["no-answer","Flash","No Answer","x y03 go cw","","#FFA07A"],
"busy":["busy","Busy","Busy","x y03 go cw","","#FF6347"],
"network-error":["network-error","Network Error","Network Error","x y03 gwd cb","","#FF00FF"],
"voicemail":["voicemail","Voicemail","Voicemail","x y03 gr cw","","#90EE90"], 
"xfer_consult":["xfer_consult","Consult","Consult","x y03 gg cw","","#20B2AA"],
"xfer_noanswer":["xfer_noanswer","Transfer No Answer","Transfer No Answer","x y03 go cw","","#20B2AA"],
"xfer_offline":["xfer_offline","Transfer Unavailable","Transfer Unavailable","x y03 go cw","","#20B2AA"],
"xfer_ok":["xfer_ok","Transferred","Transfer Successful","x y03 gg cw","","#20B2AA"],
"SCHED":["SCHED","Sched","Scheduled","x y03 gg cw","","#20B2AA"],
"Reattempt":["Reattempt","Reattempt","Reattempt","x y03 gg cw","","#20B2AA"],
};


rk["lead_status"] = ["answered","busy","dump","no-answer","network-error","voicemail","SCHED","Reattempt"];
re["lead_status"] = re["hangup_status"]; 


rk["vector"] = ["1","2"];
re["vector"] = 
{
"":["","","","","","","","","","","","","","","","","","","","",""],
"0":["0","","","","","","","","","","","","","","","","","","","",""],
"1":["1","Inbound","&#8702","From",  "Outbound","&#8701","To", "g","Outbound Call",,"c w50","c xx y08 bd8 ga cb","x08 y s cd"],
"2":["2","Outbound","&#8701","To",  "Inbound","&#8702","From", "","Inbound Call",,"d w50","d xx y08 bd8 gy cb","x08 y tr s cd"],
};

rk["user_role"] = ["1","2","99"];
re["user_role"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Court Clerk","counsellor","2"],
"2":["2","Supervisor","supervisor","3"],
"99":["99","Administator","admin","0"],
};

re["onbreak"] = 
{
"":["","Offline"],
"coffee":["coffee","Coffee Break"],
"lunch":["lunch","Lunch Break"],
"FX":["FX","On Break"],
};

rk["voiceprompt_type"] = ["1","2","3","4","5","6","7"];
re["voiceprompt_type"] = 
{
"":["","",			"",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"0":["0","-",			"-",		"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],
"1":["1","Playback",       	"Playback",  	"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"2":["2","Menu",		"Menu",		"voiceprompt_r_branch",		"voicemap_rr_btn","voicemap_r_branch", 	"noop","noop","noop-noop-ve-type"],
"3":["3","Capture Digits",	"DTMF",		"leaf", 	"branch_footer","leaf", 	"voiceprompt_vw_dtmf","voiceprompt_ed_dtmf","voiceprompt_ed_dtmf-voiceprompt_-ve-type"],  
"4":["4","Capture Voice",	"Record",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_record","voiceprompt_ed_record","voiceprompt_ed_record-voiceprompt_-ve-type"], 
"5":["5","Dial Extension",	"Exten",	"leaf",		"branch_footer","leaf", 	"voiceprompt_vw_extension","voiceprompt_ed_extension","voiceprompt_ed_extension-voiceprompt_-ve-type"],
"6":["6","Dial Campaign Users",	"Queue",	"leaf",		"branch_footer","leaf", 	"noop","noop","noop-noop-ve-type"],  
"7":["7","Invoke API",		"API",		"voiceprompt_r_branch", 	"voicemap_rr_btn","voicemap_r_branch", 	"voiceprompt_vw_api","voiceprompt_ed_api","voiceprompt_ed_api-voiceprompt_-ve-type"] 
};

rk["campaign"] = ["1","2"];  // match spefic date first then 
re["campaign"] = 
{
"":["","", "noop", "noop", "noop-noop-ve-type", "noop","", ""],
"1":["1","Inbound", "campaign_vw_inbound", "campaign_ed_inbound", "campaign_ed_inbound-campaign_-ve-type", "campaign_vw_id_menu_inbound","campaign_vw_tabs_inbound", "Inbound Campaign"],
"2":["2","Outbound", "campaign_vw_outbound", "campaign_ed_outbound", "campaign_ed_outbound-campaign_-ve-type", "campaign_vw_id_menu_outbound","campaign_vw_tabs_outbound", "Outbound Campaign"],
};


rk["workinghour_priority"] = ["","0","1","2","3","4","5"];  
re["workinghour_priority"] = 
{
"":["","",""],
"0":["0","Disabled","", "--"],
"1":["1","Out of Office","","OO"],
"2":["2","Working Hours","", "WH"],
"3":["3","Reattempt Hours","","RH"],
"4":["4","Holiday","","HD"],
"5":["5","Event","","EV"],
};

rk["workinghour_priority_inbound"] = ["2","0"];  
re["workinghour_priority_inbound"] = re["workinghour_priority"];

rk["workinghour_priority_outbound"] = ["2","3","0"];  
re["workinghour_priority_outbound"] = re["workinghour_priority"];

rk["ooohour_priority"] = ["1","4","5","0"];  
re["ooohour_priority"] = re["workinghour_priority"];


re["contact_fields"] = 
{
"fname":["fname","First Name"],
"lname":["lname","Last Name"],
"phone":["phone","Phone"],
};

re["dialstatus"] = 
{
"ANSWER":["ANSWER","Answered the call"],
"BUSY":["BUSY","is Busy"],
"NOANSWER":["NOANSWER","did Not-Answer"],
"CANCEL":["CANCEL","is Unavailable"],
"CHANUNAVAIL":["CHANUNAVAIL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"DONTCALL":["DONTCALL","is Unavailable"],
"INVALIDARGS":["INVALIDARGS","is Unavailable"]
};

rk["case_priority"] = ["1","2","3"];
re["case_priority"] = 
{
"":["","","",""],
"0":["","","",""],
"1":["1","Low","Low Priority",""],
"2":["2","Medium","Medium Priority",""],
"3":["3","High","High Priority",""],
};

rk["case_status"] = ["1","2","4"]; // case.final_status
re["case_status"] = 
{
"":["","",""],
"0":["","",""],
"1":["1","Ongoing","Ongoing"],
"2":["2","Closed","Closed"],
"3":["3","Escalated","Escalated to"],
"4":["4","Non Intervention","Non Intervention"]
};

rk["case_src"] = ["walkin","call","sms","email","safepal","whatsup","facebook","twitter"];
re["case_src"] = 
{
"":["","",""],
"walkin":["walkin","Walkin","/helpline/images/walkin.png",	"go","Walkin Activity","walkin"],
"call":["call","Call","/helpline/images/oncall-white.png",	"ba_b bd cb","Call Activity","call"],
"sms":["sms","SMS","/helpline/images/sms_ico.png",		"go cw","SMS Activity","sms"],
"email":["email","Email","/helpline/images/email_ico.png",	"go cw","Email Activity","email"],
"safepal":["safepal","SafePal","/helpline/images/safepal_ico.png",	"gb cw","Safepal Activity","chat"],
"whatsup":["whatsup","Whatsup","/helpline/images/watsap_ico.png",	"gb cw","Whatup Activity","chat"],
"facebook":["facebook","Facebook","/helpline/images/fb_ico.png",	"gb cw","Facebook Activity","chat"],
"twitter":["twitter","Twitter","/helpline/images/twitter_ico.png",	"gb cw","Twitter Activity","chat"],
"chat":["chat","Chat","/helpline/images/chat.png",	"gb cw","Chat Activity","chat"],
};


rk["reporter_action"] = ["newcase","casefollowup","service","info"];
re["reporter_action"] = 
{
"newcase":["newcase","New Case","c w14"],
"casefollowup":["casefollowup","Case Followup","c w14 l"],
"service":["service","Service","c w14"],
"info":["info","Information and Inquiry","c w18"],

}

re["disposition"] = 
{
"":["","",""],
"":["","",""],
"appreciation":["appreciation","Appreciation",""],
"abusive":["abusive","Abusive Call",""],
"adult_related":["adult_related","Adult Related",""],
"counsellor":["counsellor","Counsellor Request",""],
"complaint":["complaint","Complaint",""],
"dropped":["dropped","Dropped",""],
"feedback":["feedback","Feedback",""],
"greeting":["greeting","Greeting",""],
"inquiry":["inquiry","Inquiry",""],
"insuff":["insuff","Insufficient Information",""],
"mistake":["mistake","Mistake",""],
"prank":["prank","Prank",""],
"silent":["silent","Silent Call",""],
"telkom":["telkom","Telkom Support",""],
"testing":["testing","Testing Line",""],
"complete":["complete","Call Completed",""],
};

rk["incomplete_call"] = ["appreciation","abusive","adult_related","counsellor","complaint","dropped","feedback","greeting","inquiry","insuff","mistake","prank","silent","telkom","testing"];
re["incomplete_call"] = re["disposition"];

re["activity_status"] = 
{
"0-1-":["","Network Error"],
"1-1-":["","Busy"],
"2-1-":["","No Answer"],
"3-1-":["","Answered"],
"4-1-":["","Answered"],
"5-1-":["","Answered"],
"6-1-":["","Answered"],
"7-1-":["","Answered"],
"8-1-":["","Answered"],
"0-2-":["","Error"],
"1-2-":["","Busy"],
"2-2-":["","Missed"],
"3-2-":["","Answered"],
"4-2-":["","Answered"],
"5-2-":["","Answered"],
"6-2-":["","Answered"],
"7-2-":["","Answered"],
"8-2-":["","Answered"],
"0-2-0":["","Error"],
"1-2-0":["","Busy"],
"2-2-0":["","Missed"],
"3-2-0":["","Answered"],
"4-2-0":["","Answered"],
"5-2-0":["","Answered"],
"6-2-0":["","Answered"],
"7-2-0":["","Answered"],
"8-2-0":["","Answered"],
"0-2-1":["","Error"],
"1-2-1":["","Busy"],
"2-2-1":["","Missed"],
"3-2-1":["","Answered"],
"4-2-1":["","Answered"],
"5-2-1":["","Answered"],
"6-2-1":["","Answered"],
"7-2-1":["","Answered"],
"8-2-1":["","Answered"],

};

rk["qa_done"] = ["-1","0","1"];
re["qa_done"] = 
{
"":["",""],
"-1":["-1","N/A"],
"0":["0","No"],
"1":["1","Yes"],
};

rk["dash_period"] = ["today","this_week","this_month","last_3_month","last_6_month","last_9_month","this_year","all"];
re["dash_period"] =
{
"today":["today","Today"],
"this_week":["this_week","This Week"],
"this_month":["this_month","This Month"],
"last_3_month":["last_3_month","Last 3 Months"],
"last_6_month":["last_6_month","Last 6 Months"],
"last_9_month":["last_9_month","Last 9 Months"],
"this_year":["this_year","This Year"],
"all":["all","All"],
};

rk["dash_gbv"] = ["both","vac","gbv"];
re["dash_gbv"] = 
{
"both":["both","Both VAC & GBV"],
"vac":["vac","VAC Only"],
"gbv":["gbv","GBV Only"]
};

rk["dash_src"] = ["all","call","sms","social","email","walkin"];
re["dash_src"] = 
{
"all":["all","Total","go", "/helpline/images/case.png", ":k:case_source:total:1"],
"call":["call","Calls","", "/helpline/images/bxs-phone-call.png", ":k:case_source:call:1"],
"sms":["sms","SMS","", "/helpline/images/sms.png", ":k:case_source:sms:1"],
"social":["social","Social Media", "", "/helpline/images/chat.png", ":k:case_source:socialmedia:1"],
"email":["email","Email", "", "/helpline/images/envelope-fill.png", ":k:case_source:email:1"],
"walkin":["walkin","Walkin", "gg", "/helpline/images/walkin.png", ":k:case_source:walkin:1"],
};

rk["case_type"]	= ["87","361944","362305"];
re["case_type"]	=
{
"":["","","noop","noop", 					"","","noop", "noop-r_-va-sub"],
"0":["","","noop","noop", 					"","","noop", "noop-r_-va-sub"],
"87":["87","Abuse","case_vw_justice","case_ed_sub_justice",  	"CASE","Abuse Case","case_abuse_enum", 		"case_ed_sub_type-r_-va-sub"],
"361944":["361944","Counseling","noop","noop", 			"COUNSELING","Counseling","case_counseling_enum", "case_ed_sub_type-r_-va-sub"],
"362305":["362305","Information Inquiry","noop","noop", 	"INQUIRY","Inquiry","case_inquiry_enum", 	"case_ed_sub_type-r_-va-sub"],
};

re["case_activity"] =
{
"1":["1","Case Created"],
"2":["2","Case Update"],
"3":["3","Case Edit"],
"4":["4","Case Change Type"],
"6":["6","Client Added"],
"7":["7","Perpetrator Added"],
"8":["8","Attachment Added"],
"9":["9","Reporter Updated"],
"10":["10","Client Updated"],
"11":["11","Perpetrator Updated"],
"12":["12","Attachment Updated"],
"13":["13","Client Deleted"],
"14":["14","Perpetrator Deleted"],
"15":["15","Attachment Deleted"]	
};


re["reporter_is_client"] = 
{
"":["","No","Is Not","","","",""],
"0":["0","No","Is Not","","","",""],
"1":["1","Yes","Is","is_reporter","x cd","Reporter","1"],
};


re["metrics"] = 
{
"case_count":["case_count", "Case Count","Case Count","",			"cases","","case_count", 		"","",,"", "0","","",""], 
"call_count":["call_count", "Call Count","Call Count","",			"calls","","call_count", 		"","",,"", "0","","",""], 
};
// -------------------------------------------------------------------

te["unloadphone"] = { ufn:["unloadphone"] };

te["loadphone"] = { ufn:["loadphone"] };

// -------------------------------------------------------------------

te["vp_apply"] = { div:["x25 t b15"], c: // 
[
	{ div:["d l15"], c:[ { ac:["ag btn w06",null,"_uvpf","x y04 w05 gb cw tc","Apply"] }, { s:["y07 bd b savl","..."] } ] },
	{ div:["d","va"], ac:["ay","","_uvp","x y03 w05 ba tc cd","Cancel"] },
	{ div:["e"] }
]};

te["vp_sav"] = { c:
[
	{ div:["d l15"], c:
	[ 
		{ ac:["ag btn",null,null,"w10 y gb cw tc",null] }, 
		{ s:["y b savl",null] } 
	]},
	{ div:["d","va"], ac:["ay",null,null,"w09 y04 ba tc cd",""], c:
	[ 
		{ s:["",null] },
		{ p:["g","o"], arg:["",".id","%0"] } 
	]},
	{ div:["e"] }
]};

// -----------------------------------------------------------------

te["tabi"] = { div:[null], c: 	
[
	{ input:["g","",null,null,"radio",null] },
	{ li:["y ba cb tc tabi",null], ev:[null], c:
	[
		{ s:["",null] },
		{ arg:["",".id","%0"] }
	]},
]};

te["tab"] = { c:
[
	{ arg:["","",""] }, // ts
	{ input:["g","",null,null,"radio",null] },
	{ li:[null,null], ev:["_tab"], c:
	[
		//{ div:["c"], c:[ { img:["","",null,"20"] } ] },
		{ s:[null,null] },
		{ div:["e"] } // , arg:["_c","","30"] }
	]},
]};

// ---------------------------------------------------------------------------------------------------------------

te["dash_case_priority_vw_r"] = { div:["w50 gws mb1 h03"], c: // 
[
	{ s:["abs w50",""], c:
	[
		{ div:[null] },
		{ div:[null] },
		{ div:[null] },
		{ div:["e"] }
	]},
	{ div:["abs w55 t08 cw"], c:
	[
		{ s:["c xx w48 cw",null] },
		{ s:["d xx cb",""] },
		{ div:["e"] }
	]}
]};

te["dash_case_priority_vw"] = { c:
[
	//{ div:["xx g"], c:
	//[
	//	{ div:["c w17 cd"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gg",""] },
	//		{ s:["c x","Closed Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 go",""] },
	//		{ s:["c x","Ongoing Cases"] },
	//		{ div:["e"] }
	//	]},
	//	{ div:["c w16 cd mr"], c:
	//	[
	//		{ s:["c x02 y02 w01 h01 bd32 gbl",""] },
	//		{ s:["c x","Escalated Cases"] },
	//		{ div:["e"] }
	//	]},
	//				
	//	{ div:["e"] }
	//]},
	
	{ div:[] }, 
				
	{ div:["x"], c:  // 
	[
		{ dash_case_priority_vw_r:["c h02 y gg bb3_y","c h02 y gg bb3_p","c h02 y gg bb3_r","Closed Cases"] },
		{ dash_case_priority_vw_r:["c h02 y go bb3_y","c h02 y go bb3_p","c h02 y go bb3_r","Ongoing Cases"] },
		{ dash_case_priority_vw_r:["c h02 y gbl bb3_y","c h02 y gbl bb3_p","c h02 y gbl bb3_r","Escalated Cases"] },
	]},
				
	{ div:["x y"], c: 
	[
		{ ac:["c w11 ao mr1","","","xx y cb bd gws bb3_y",""], c:[ { s:["y tc n","Low Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_p",""], c:[ { s:["y tc n","Medium Priority"] }, { s:["y b tc h","0"] }] },
		{ ac:["c w12 ao mr1","","","xx y cb bd gws bb3_r",""], c:[ { s:["y tc n","High Priority"] }, { s:["y b tc h","0"] }] },				
		{ ac:["c w12 ao","","","xx yy gb cw bd ",""], c:[ { s:["tc h3","Total"] }, { s:["y b tc h","0"] }] },
		{ div:["e"]}
	]}
]};		

te["dash_case_priority"] = { c:
[
	{ pivot:[] },
	{ dash_case_priority_vw:[] },
	{ ufn:["case_prio_chart"] }
]};

te["dash_rpt_line"] = { c:
[
	{ pivot:[] }, 
	{ div:["w55"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["w55 yy"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt_pie"] = { c:
[
	{ pivot:[] }, 
	{ div:["c w22"], s:["",""], c:[ { canvas:["","","",""], uchart:[] } ] },
	{ div:["d ll"], s:["",""], utable:[] },
	{ div:["e"] }
]};

te["dash_rpt"] = { c: // dash_rpt:["Case Categories","bar","stacked","case_category_root_id","-","count","0","dash_rpt_pie-cases"]
[ 
	{ form:["yy","vrpt"], c:
	[
		{ s:["x15 y h3",null] },
		{ arg:["","type",null] }, 
		{ arg:["","stacked",null] },
		{ arg:["","xaxis",null] },
		{ arg:["","yaxis",null] },
		//{ arg:["","metrics",null] },
		{ input:["g","","rpt",null,"checkbox","1"] },
		{ arg:["","sortrpt","1"] }
	]},
	{ div:["xx yy",null], uwrpt:[] } 
]};

te["dash_src_r"] = { div:[], c:
[
	{ input:["g","","dash_src","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x y gw mb cb ",""], c:
	[
		{ s:["x y tc","%1"] },
		{ div:["x y w03 ma"], s:["%2",""], c:[ { img:["","","%3","30"] } ] },
		{ s:["x y b tc h3 h02","%4"] }
	]}
]};

te["dash_gbv_r"] = { div:[], c:
[
	{ input:["g","","dash_gbv","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_period_r"] = { div:[], c:
[
	{ input:["g","","dash_period","%0","radio","%9"] },
	{ ac:["opti_","","_dash","x15 y cb","%1"] }
]};

te["dash_view"] = { c:
[
	{ div:["","vc"], dash_rpt:["Dashboard: Case Status","bar","stacked","cat_0","-","case_count","dash_rpt_pie-cases"] },	
		
]}

te["dash"] = { c:
[
	{ div:[] },
	{ div:[], dash_view:[] }
]};

// ---------------------------------------------------------------------------------------------------------------

te["sbl"] = { div:[null], c: //
[
	{ input:["g","","sbl",null,"radio",null] },
	{ ac:["sbl ao",null,"_tab","yy cw",""], c: // todo: on hover show name
	[
		{ s:["tc h micon w06",null] },
		{ s:[" tc s",null] },
		{ u:[null] }
	]},
]};

te["sbl_cat"] = { arg:["",".id","0"] };

te["sbl_case"] = { arg:["","_title","all_cases"] };

te["user_cid"] = { arg:["user_cid","","%7"] }; 

te["user_usn"] = { div:[], c:[ { s:["xx y cb b","%5"] }, { div:["e"] } ] }; 

te["toolbar_default"] = { div:["ma w12"], c:
[
	//{ input:["g","","sbl_","1","radio","1"] },
	//{ input:["g","","sbr_","1","radio"] },
	//{ ac:["abs mtn45 ao t08 w12","","_activity_vw","xx bd gg cw",""], c:
	//[
	//	{ s:["c y","Walk In"]},
	//	{ div:["d t"], c:[ { img:["","","/helpline/images/walkin.png", "18"] } ] },
	//	{ div:["e"], c:[ { arg:["",".id","-1"] }, { arg:["","src","walkin"] } ] }
	//]},
]};
			
te["main"] = { c: 
[
	{ ufn:["vvcn"] },
	{ div:["x y07 gw"], c: // c
	[
		{ div:["c "], s:["",""], c:
		[
			//{ a:["c aa","","","/mahakama/"], c:[ { img:["","",APP_LOGO, "48"] } ] },
			{ div:["e"] }
		]}, 		
			
		{ div:["d r10"], c:
		[
			{ input:["g","","ntab","0","radio"] },
			{ ac:["ll ay rb","","_notif","gw bd x y micon h2_ cb","history"] }				
		]},
		
		{ div:["d mr"], c:
		[
			{ input:["g","","ntab","1","radio"] },
			{ ac:["l15 ay rb","","_notif","gw bd cb",""], c:
			[
				{ p:["abs g","notif_count"], s:["ml2 x07 y02  h01_ tc gr cw bd16 s",""] },
				{ s:["x y micon h2_","notifications"] }				
			]},
		]},
					
		{ div:["d mr"], c:
		[
			{ div:["ay","va"], ac:["","","_notif","gw bd cb",""], c:
			[
				{ input:["g","","ntab","0","radio"] },
				{ ac:["ll ay rb","","_dd","gw bd x y micon h2_ cb","account_circle"] }
			]},
			{ div:["w15 dd","vdd"], s:["xx yy gw ba",""], c:
			[	
				{ div:[""], u:["user_usn","auth"] }, // 

				
				
				{ div:["","va"], ac:["aa","myprofile-r_","_vp","xx y cb ",""], c:
				[
					{ s:["","My Profile"] },
					{ div:[] }
				]},
						
				{ div:["","va"], ac:["aa","logout-","_u","xx y cb ","Logout"], c:[ { arg:["","logout","1"] } ] },
			]},	

		]},

		{ p:["d xx","aa_status_ico"] },

		{ div:["e"] }
	]},
	
	{ div:["","vb"], toolbar_default:[] },
	
	{ div:["g"], c:  // 
	[
		{ div:["d w28"], s:["abs zz w28 gw mt",""], c:
		[
			{ div:[], c:
			[
				{ div:[], c:
				[
					{ input:["g","","ntabv","0","radio"] },
					{ div:["tabv"], c:
					[
						{ div:[""], c:
						[
							{ div:["bb_ y","va"], s:["",""], c:
							[
								{ s:["c l15 yy cd","Activities"] },
								// { ac:["c x t08 ay","","_dd","h02 w02 awb",""] },
								//{ ac:["d ay","","","x y bd_",""], c:[ { img:["","","/helpline/images/settings_black.png","18"] } ] },
								{ div:["e"] }
							]},
							{ div:["dd x y ba gw","vdd"], c:
							[
								{ ac:["w12","","","x y cb","Search"] },
							]}
						]},
						{ p:["","vt_activity"], u:["activity_lst","activities_ctx"] },
						{ div:[] }
					]}
				]},
				{ div:[], c:
				[
					{ input:["g","","ntabv","1","radio"] },
					{ div:["tabv"], c:
					[
						{ div:["gw bb_ x y07"], c:
                        			[
                        	        		{ ac:["c w03 ay","","","x07 y",""],  c:[ { img:["","","/helpline/images/search.png","","18"] } ] },
                        	        		{ div:["c w21","txa"], c:[ { input:["w21 xx t08 b05 gw n","name_","","0110223344","text","","Dial"] } ] },
                        	        		{ ac:["d w03 ay","","_dial","x07 y ",""],  c:[ { img:["","","/helpline/images/call.png","","18"] } ] },
                        	        		{ div:["e"] },
                        			]},
						{ p:["","call_sessions"] }, // el.p.p.p.f.c1.c1
					]}
				]}
			]},
			
		]},
		
		{ div:["e"] } 
	]},

	{ p:["abs zz y op_ga g","vp"], ev:["_uvpd"] }, // popup window	
	
	{ p:["abs zzzz y op_ga g","vip"], ev:["_uvpd"] }, // incoming call popup	
		
	{ div:["h80 gb abs","vb"], s:["sb_",""], c: 
	[
		{ sbl:["","1","1","","speed","Dash","noop"] },
		
		{ sbl:["","2","","cases-cases","work","Cases","sbl_case"] },
		
		{ sbl:["counsellor_","4","","advocates-advocates","approval","Advocates","noop"] },
		{ sbl:["supervisor_","4","","advocates-advocates","approval","Advocates","noop"] },
		{ sbl:["admin_","4","","advocates-advocates","approval","Advocates","noop"] },

		{ sbl:["","5","","contacts-contacts","group","Contacts","noop"] },				
		
		{ sbl:["admin_","6","","categories-categories","account_tree","Categories","sbl_cat"] },
		
		{ sbl:["admin_","7","","users-users","manage_accounts","Users","noop"] },

	]},

	{ div:["ml6"], c: // 
	[
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv mm gw","vfvwm"] } ] }, // activity: on notication
		{ div:[], c:[ { input:["g","","mtv","0","radio","1"] }, { p:["tabv mm gw","vfvwm"], u:["dash","dash"] } ] }, // dash board
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // cases
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // courts
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // advocates
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // contacts
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // categories
		{ div:[], c:[ { input:["g","","mtv","0","radio"] }, { p:["tabv","vfvwm"] } ] }, // users

	]}
]};

// ---------------------------------------------------------------------------------------------------------------

te["change_passwd_vw"] = { div:["w45 ma bd sh__ gw_","vddvw"], ev:["_undd"], c:
[
	{ div:["xx y"], c:
	[
		{ s:["c xx yy b cg","Password Changed Successful"] },
		{ ac:["d w03 ay y","","_uvp","x y tc h2 cb bd","&Cross;"] },
		{ div:["e"] }
	]},
]};

te["change_passwd"] = { div:["w50 ma bd sh__ gw_"], c:
[
	{ div:["x15 tt"], c:
	[
		{ s:["c xx y12 n b","Change Password"] },
		{ ac:["d","","_uvp","xx y08 h cb","&Cross;"] },
		{ div:["e"] }
	]},

	{ div:["","ve"], c:
	[
		{ div:["x25"], c:[ { p:["c w40","nb"], u:["nb","users_nb"] }, { div:["e"] } ] },
		{ p:["x25","o"], c:
		[
			{ div:["t15"], c:
			[ 
				{ s:["c w15 y","Current Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass0",""] }, { div:["e"] } 
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","New Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass1",""] }, { div:["e"] }
			]},
			{ div:["t15"], c:
			[
				{ s:["c w15 y","Confirm Password"] }, { passwd:["d w25 gw_ ba","w25 x y","","pass2",""] }, { div:["e"] }
			]},
		]},
		{ div:["x25 t30 b20"], vp_sav:["change_passwd-changeAuth","_postj","Change Password","Changing...","myprofile-user_","_vp","Cancel"] }
	]}
]};

te["myprofile"] = { div:["w70 ma bd sh__ gw","vddvw"], ev:["_undd"], c:
[

	{ div:["x15 y15"], c:
	[
		{ s:["x yy b cb h2","My Profile"] },
		{ ac:["","change_passwd-user_","_vp","x y",""], c:
		[
			{ s:["","Change Password"] },
			{ div:[] }
		]},
	]},
	{ div:["x15 yy"], c:
	[
		{ div:["c xx yy w40 gw mb mr10 g"], c:
		[
			{ s:["x yy","Active Campaigns"] },
		]},
		{ div:["c xx yy w40 gw mb mr10"], c:
		[
			{ s:["x y","Availability"] },
			{ s:["x y","Answered Calls"] },
			{ s:["x y","Missed Calls"] },
			{ s:["x y","Average Talk Time"] },
			{ s:["x y","Max Talk Time"] },
			{ s:["x y","Average Hold Time"] },
			{ s:["x y","Max Hold Time"] },
			{ s:["x y","Total Break Time Today"] },
			{ s:["x y","Average "] },
		]},
		{ div:["e"] }
	]},
	{ div:["x15 yy g"], c:
	[
		{ s:["x yy c b","Availability History"] }

	]}
	

]};

te["reset_password"] = { c:
[
	// 

]};

te["verify_otp"] = { c:
[
	

]};

te["send_otp"] = { c: // on forgot-password
[


]};

te["login"] = { div:["gw "], c:
[
	{ div:["loginbg"], s:["ma w100",""], c: 
	[
		{ div:["c t60 mt20"], c:
		[
			//{ s:["x t20 b hhh","Hello,"] },
			{ s:["x b y hhh","Mahakama"] }
		]},
		
		{ div:["d w32 mb12"], c:[ { div:["","ve"], c:
		[ 
		
			{ div:["ma w26 y40"], c:
			[ 

				// { div:["c w13 t15"], c:[ { img:["","",APP_LOGO, "100"] } ] },
				{ div:["e"] }
			]}, 
					
			{ p:["w26 x30 y30 gb bd cw","o"], c:
			[
				{ div:[""], c:
				[
					{ s:["hhh b cw","Log in"] }, 
					{ div:["e"] }
				]},
				{ div:["y"], c:
				[
					{ p:["","nb"], u:["nb","auth_nb"] },
					{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:[], s:["x y02 cw","Username"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","user","","text","","Enter Username"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t15"], c:
				[
					{ div:[], s:["x y02 cw","Password"] },
					{ div:["w26 gw bd"], c:[ { input:["w26 xx yy","","pass","","password","","Enter Password"] } ] },
					//{ div:["e"] }
				]},
				{ div:["t"], c:
				[
					{ div:["c"], s:["x y02 cw","Remember me"] },
					{ div:["d"], s:["x y02 cw","Forgot Password"] },
					{ div:["e"] }
				]},
				{ div:["t40"], c:
				[
					{ div:[], ac:["ag btn","login-","_postj","xx yy go cb bd b h3 tc","Login","0"] },
					{ div:["e"] },
					]}
			]} 
		]} ]}
	]},
	// { div:["y h50"]}
]};

function _dash ()
{
	this.previousSibling.checked = true;
	var p = __(this,"vdf");
	var a = {args:"?", ".id":""};
	argv (p, a);
	url (p.parentNode, "dash", "dash", a.args);
}

function case_prio_chart (el, u, a, r, m)
{
	var status = {"":0, "0":0, "1":1, "2":0, "3":2 }
	var prio = {"":0, "0":0, "1":0, "2":1, "3":2 };
	var rr = ra["cases_pivot"];
	var j = null;
	var k = null;
	var m = 0;
	var rr_ = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	for (var i=0; i<rr.length; i++)
	{
		j = status[rr[i][0]];
		k = prio[rr[i][1]];
		console.log ("[prio] ("+rr[i][0]+","+rr[i][1]+") ("+j+","+k+")")
		if (j==undefined) continue;
		if (k==undefined) continue;
		//console.log ("PRIO] "+j+","+k+" |"+ rr[i][0][0]+","+rr[i][1][0]);
		rr_[j][k] += 1*rr[i][2][0];
		rr_[3][k] += 1*rr[i][2][0];
	}
		
	for (var i=0; i<4; i++) rr_[i][3]=rr_[i][0]+rr_[i][1]+rr_[i][2];  // calc total
		
	for (var i=0; i<4; i++) el.childNodes[2].childNodes[i].firstChild.childNodes[1].innerHTML = rr_[3][i]; 
	
	console.log ("[PRIO] "+JSON.stringify (rr_)+" | "+m);
	
	for (var i=0; i<3; i++) 
	{
		el.childNodes[1].childNodes[i].childNodes[1].childNodes[1].innerHTML = rr_[i][3];
		var coll = el.childNodes[1].childNodes[i].firstChild.childNodes;
		for (j=0; j<3; j++) if (rr_[i][j]>0) 
		{
			var w = ((rr_[i][j]/rr_[3][3])*500)-1
			coll[j].style.width = w
			// console.log ("prio ("+i+","+j+") "+rr_[i][j]+" | "+w)
		}
	}
}

// -----------------------

function _phone_fmt (s)
{
	var a = 0;
	var n = s.length;
	for (var i=0; i<n; i++) 
	{
		var ch = s.substr (i,1);
		if (ch=="+" || ch=="0" || ch==" ") { a++; continue; }
		break;
	}
	if (n-a==9) return COUNTRY_CODE+s.substr (a,(n-a));
	return s.substr (a,(n-a));
}

function notifs ()
{
	var coll = document.getElementById ("vv").childNodes;
	var el = _(coll[0],"notif_count");
	var n = Object.keys (CALLS).length + ati_unread;
	var cn = "none";
	if (n>0) cn = "block"
	el.firstChild.innerHTML = n;
	el.style.display = cn;
}

function _notif ()
{
	var coll = document.getElementById ("vv").childNodes;
	var coll_ = coll[2].firstChild.firstChild.firstChild.childNodes; 
	var f = this.previousSibling.checked;
	if (f==true)
	{
		this.previousSibling.checked = false;
		coll[2].style.display = "none";
		coll[6].style.marginRight = "";	
		return
	}
	this.previousSibling.checked = true;
console.log ("_notif: "+this.previousSibling.value+" | "+coll_[this.previousSibling.value].firstChild.name)
	coll_[this.previousSibling.value].firstChild.checked=true;
	coll[2].style.display = "block";
	coll[6].style.marginRight = "280px";
}

function vvcn (el, u, a, r, m)
{
	var v = re["user_role"][ra["auth"][0][6]];
        if (v) document.getElementById ("vv").className = v[2];

}

window.onresize = function ()
{
	// show_notifications (1);
}

window.onload = function ()
{
	ra_ts = 0; // (Date.now()/1000)-ra_ts; 

	Chart.defaults.global.responsive = false;
	Chart.defaults.global.maintainAspectRatio = false;
	Chart.defaults.global.elements.line.tension = 1;
	// Chart.defaults.global.elements.line.stepped = true;
	// Chart.defaults.global.elements.line.backgroundColor = "rgba(255,255,255,0)";
	Chart.defaults.global.elements.line.borderWidth = 0;
	Chart.defaults.global.elements.point.radius = 3;
	//Chart.defaults.global.elements.point.borderColor = "rgba(255,0,0,1)";
	Chart.defaults.global.elements.point.hitRadius = 10;
	// Chart.defaults.global.animation.duration = 0;

	var c;
	for (var n =0; n < 256; n++)
	{
        	c = n;
        	for (var k =0; k < 8; k++)
        	{
        	    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
        	}
        	CRC_TABLE[n] = c;
        }
        
	var p = document.getElementById ("vv"); 
	
	url (p, "login","","");
}

