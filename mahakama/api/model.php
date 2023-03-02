<?php

$FN = ["sendOTP"=>1, "verifyOTP"=>1, "setAuth"=>1, "resetAuth"=>1, "dash"=>1]; // non-crud endpoints

$RESOURCES = array 
(
	"au"=>			array ("au","",			"1","0","0",	"Audit Trail", 		"","",			""), 
	"addr"=>		array ("addr","",		"1","0","0",	"Registered Address", 	"id DESC","",		""), 
	"otp"=>			array ("otp","",		"1","0","0",	"OTP", 			"","",			""), 
	"files"=>		array ("file","",		"1","0","0",	"File", 		"","",			""),
	"categories"=>          array ("category","",           "3","0","0",    "Category",             "level,name","",	""),
        "subcategories"=>       array ("category","subcategory","3","0","0",    "Category",             "level,name","",        "categories"),
	"contacts"=>		array ("contact","",		"3","0","0",	"Contact", 		"fullname","",		""),
	"auth"=>		array ("auth","",		"0","0","0",	"Auth", 		"","",			""),
	"users"=>		array ("auth","user",		"3","0","0",	"User", 		"","",			""),

	"courts"=>          	array ("court","",           	"3","0","0",    "Court",             	"","",			""),	// master data
	"advocates"=>		array ("advocate","",       	"3","0","0",    "Advocate",  		"","",			""),	// master data

	"parties"=>		array ("party","",       	"3","0","0",    "Party",  		"","",			""),	// trx data
	"docs"=>		array ("doc","",       		"1","0","0",    "Document",  		"","",			""),	// trx data
//	"attachments"=>		array ("attachment","",		"3","0","0",	"Attachment",		"","",			""), 	// trx data
	"cases"=>		array ("kase","case",       	"3","0","0",    "Case",  		"","",			""),	// trx data
        "case_activities"=>     array ("kase_activity","ca",    "1","0","0",    "Case Activity",        "","",                  ""),	// trx data
	"activities"=>		array ("activity","",		"3","0","0",	"Activity", 		"","",			""), 	// trx data
	"actions"=>		array ("action","",		"1","0","0",	"Actions", 		"","",			""), 	// trx data
);

$RIGHTS_1 = array // sel:0,add:1,upd:2 // agent rights
(
	"au"=>		array ("0","0","0","1","1"),
	"addr"=>	array ("0","0","0","1","1"),
	"otp"=>		array ("0","0","0","1","1"),
	"files"=>	array ("1","1","0","1","1"),
	"attachments"=>	array ("1","1","1","1","1"),
	"categories"=>	array ("1","0","0","1","1"),
	"subcategories"=>array ("1","0","0","1","1"),
	"contacts"=>	array ("1","1","1","1","1"),
	"auth"=>	array ("1","0","0","1","1","id=","auth_id"),
	"users"=>	array ("1","0","0","1","1"),
	"courts"=>	array ("1","0","0","1","1"),
	"advocates"=>	array ("1","0","0","1","1"),
	"parties"=>	array ("1","1","1","1","1"),
	"docs"=>	array ("1","1","0","1","1"),
	"cases"=>	array ("1","1","1","0","0" ,"created_by_id=","auth_id"), // allow couselor to edit other peoples cases
	"case_activities"=>array ("1","0","0","1","1"),			
	"activities"=>	array ("1","1","1","1","1","created_by_id=","auth_id"),
	"actions"=>	array ("1","1","0","1","1"),
);

$RIGHTS_2 = array // sel:0,add:1,upd:2 // supervisor rights : view all but cannot add/edit master data
(
	"au"=>		array ("0","0","0","1","1"),
	"addr"=>	array ("0","0","0","1","1"),
	"otp"=>		array ("0","0","0","1","1"),
	"files"=>	array ("1","1","0","1","1"),
	"attachments"=>	array ("1","1","1","1","1"),
	"categories"=>	array ("1","0","0","1","1"),
	"subcategories"=>array ("1","0","0","1","1"),
	"contacts"=>	array ("1","1","1","1","1"),
	"auth"=>	array ("1","0","0","1","1","id=","auth_id"),
	"users"=>	array ("1","0","0","1","1"),
	"courts"=>	array ("1","1","1","1","1"),
	"advocates"=>	array ("1","1","1","1","1"),
	"parties"=>	array ("1","1","1","1","1"),
	"docs"=>	array ("1","1","0","1","1"),
	"cases"=>	array ("1","1","1","1","1"),
	"case_activities"=>array ("1","0","0","1","1"),			
	"activities"=>	array ("1","1","1","1","1","created_by_id=","auth_id"),
	"actions"=>	array ("1","1","0","1","1"),
);


$RIGHTS_99 = array // sel:0,add:1,upd:2,sel:id(other) // admin rights view/add/edit master/transactional data
(
	"au"=>		array ("0","0","0","1","1"),
	"addr"=>	array ("0","0","0","1","1"),
	"otp"=>		array ("0","0","0","1","1"),
	"files"=>	array ("1","1","0","1","1"),
	"attachments"=>	array ("1","1","1","1","1"),
	"categories"=>	array ("1","0","0","1","1"),
	"subcategories"=>array ("1","1","1","1","1"),
	"contacts"=>	array ("1","1","1","1","1"),
	"auth"=>	array ("1","0","0","1","1","id=","auth_id"),
	"users"=>	array ("1","1","1","1","1"),
	"courts"=>	array ("1","1","1","1","1"),
	"advocates"=>	array ("1","1","1","1","1"),
	"parties"=>	array ("1","1","1","1","1"),
	"docs"=>	array ("1","1","0","1","1"),
	"cases"=>	array ("1","1","1","1","1"),
	"case_activities"=>array ("1","0","0","1","1"),			
	"activities"=>	array ("1","1","1","1","1","created_by_id=","auth_id"),
	"actions"=>	array ("1","1","0","1","1"),
);

// ---------------------------------

$METRICS = array 
(
	"case_count"=>array ("COUNT(DISTINCT kase.id)",		"","","",  "","",  ""),


);

// ---------------------------------

$au_def = array 
(
	array ("id","",			"0","2","","",	"","","", 	"",""),
	array ("created_on","",		"0","3","","",	"","","", 	"",""),
	array ("created_by","",		"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",	"0","2","","",	"","","", 	"",""),

	array ("aub_id","",		"1","2","","",	"","","", 	"",""), 
	array ("row_id","",		"1","2","","",	"","","", 	"",""), 
	array ("t","",			"1","2","","",	"","","", 	"",""), 
	array ("k","",			"1","2","","",	"","","", 	"",""), 
	array ("v","",			"1","1","","",	"","","", 	"",""), 
	array ("v_","",			"1","1","","",	"","","", 	"",""), 
);

$addr_def = array 
(
	array ("id","",				"0","2","","",	"","","", 	"",""),
	array ("created_on","",			"0","3","","",	"","","", 	"",""),
	array ("created_by","",			"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",		"0","2","","",	"","","", 	"",""),

	array ("addr","",			"1","2","u","",	"","","", 	"",""), 
	array ("type","",			"1","2","","",	"","","", 	"",""), 

	array ("auth_id","",			"1","2","u","",	"","","", 	"",""), 
	array ("contact_id","",			"1","2","u","",	"","","", 	"",""), 
	array ("contact_fullname","",		"1","2","","",	"","","", 	"",""), 

);

$otp_def = array 
(
	array ("id","",				"0","2","","",	"","","", 	"",""),
	array ("created_on","",			"0","3","","",	"","","", 	"",""),
	array ("created_by","",			"0","2","","",	"","","", 	"",""),
	array ("created_by_id","",		"0","2","","",	"","","", 	"",""),

	array ("otp","",			"1","2","","",		"","","", 	"",""), 
	array ("expiry","",			"1","3","","",		"","","", 	"",""), 
	array ("action","",			"1","2","","",		"","","", 	"",""), 

	array ("addr_id","",			"1","2","m","f", 	"","","", 	"",""), 
	array ("addr_addr","",			"1","2","m","",		"","","", 	"",""), // /[1-9][0-9]{9,12}/
	array ("addr_type","",			"1","2","","",		"","","", 	"",""), 

	array ("auth_id","",			"1","2","m","f",	"","","", 	"",""), // 'm' flag means users cannot selfregister / if self-register will be null forn new
	array ("contact_id","",			"1","2","","", 		"","","", 	"",""), 
	array ("contact_fullname","",		"1","2","","",	"","","", 	"",""), 
);

$auth_def = array 
(
	array ("id","",				"0","2","","", "","","", "ID",""),
	array ("created_on","",			"0","3","","", "","","", "Created On",""),
	array ("created_by","",			"0","2","","", "","","", "Created By",""),
	array ("created_by_id","",		"0","2","","", "","","", "Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", "Created By Role",""),

	array ("usn","",			"3","2","u","", "","","", "Username",""),
	array ("role","",			"3","2","m","", "","","", "Role",""),
	array ("exten","",			"3","2","","", "","","", "Extension",""),
	array ("agentno","",			"1","2","","", "","","", "AgentNo",""),
	array ("chatid","",			"1","2","","", "","","", "Extension",""),
	array ("mac","",			"1","2","","", "","","", "Phone MAC Address",""), // for dhcp autoprovisioning

	array ("contact_id","",			"1","2","","f", "","","", "Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","", "Fullname",""),
	array ("contact_fname","",		"3","1","","", "","","", "First Name",""),
	array ("contact_lname","",		"3","1","","", "","","", "Last Name",""),
	array ("contact_phone","",		"3","1","","", "","","", "Phone",""),
	array ("contact_email","",		"3","1","","", "","","", "Email",""),
	array ("contact_location","",		"3","2","","", "","","", "Location",""),
	
);
$users_def = $auth_def;

$contacts_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("fullname","",			"4","1","","", "contacts","CONCAT(TRIM(fname),' ',TRIM(lname))","",	"Fullname",""),
	array ("fname","",			"3","1","","", "","","",	"Name",""),
	array ("lname","",			"3","1","","",  "","","",	"Last Name",""),
	array ("phone","",			"3","1","","", "","","",	"Phone",""), // todo: regex
	array ("email","",			"3","2","","", "","","",	"Email",""),
	array ("primary_contact_id","",		"1","2","","", "","","",	"Primary Contact ID",""), 
	
	array ("location_id","",		"3","2","","f", "","","",	"Location ID","",    "category","level","location_id_"),
	array ("location","",			"3","2","","", "","","",	"Location",""),
	array ("location_id_0","",		"3","2","","", "","","",	"",""),
	array ("location_id_1","",		"3","2","","", "","","",	"",""),
	array ("location_id_2","",		"3","2","","", "","","",	"",""),
	array ("location_id_3","",		"3","2","","", "","","",	"",""),
	array ("location_id_4","",		"3","2","","", "","","",	"",""),
	array ("location_id_5","",		"3","2","","", "","","",	"",""),
	array ("location_id_6","",		"3","2","","", "","","",	"",""),
	array ("location_0","",			"3","2","","", "","","",	"",""),
	array ("location_1","",			"3","2","","", "","","",	"",""),
	array ("location_2","",			"3","2","","", "","","",	"",""),
	array ("location_3","",			"3","2","","", "","","",	"",""),
	array ("location_4","",			"3","2","","", "","","",	"",""),
	array ("location_5","",			"3","2","","", "","","",	"",""),
	array ("location_6","",			"3","2","","", "","","",	"",""),
);

$categories_def = array
(
        array ("id","",                         "0","2","","", "","","", "ID",""),
        array ("created_on","",                 "0","3","","", "","","", "Created On",""),
        array ("created_by","",                 "0","2","","", "","","", "Created By",""),
        array ("created_by_id","",              "0","2","","", "","","", "Created By ID",""),
        array ("created_by_role","",            "0","2","","", "","","", "Created By Role",""),

        array ("name","",                       "3","1","u","", "","","",       "Category Name",""),
        array ("fullname","",                   "4","1","","", "subcategories","CONCAT(category_fullname, '^', name)","",               "Fullname",""),
        array ("fullname_id","",                "4","1","","", "subcategories","CONCAT(category_fullname_id, id, ':', name, '^')","",   "Fullname ID",""),

        array ("category_id","",                "1","6","","", "","","",        "Parent ID",""),
        array ("category_name","",              "3","1","","", "","","",        "Parent Name",""),
        array ("category_fullname","",          "3","1","","", "","","",        "Parent Full Name",""),
        array ("category_fullname_id","",       "3","1","","", "","","",        "Parent Full Name ID",""),
        array ("category_level","",             "3","1","","", "","","",        "Parent Level",""),
        array ("category_category_id","",       "3","1","","", "","","",        "Parent Category ID",""),
        array ("category_root_id","",           "3","1","","", "","","",        "Root ID",""),
        array ("category_root_name","",         "3","1","","", "","","",        "Root Name",""),

        array ("level","",                      "4","2","","", "subcategories","category_level+1","", "Level",""),
        array ("root_id","",                    "4","2","","", "subcategories","IF(category_category_id=0,category_id,category_root_id)","",    "Root ID",""),
        array ("root_name","",                  "4","2","","", "subcategories","IF(category_category_id=0,category_name,category_root_name)","", "Root Name",""),

        array ("uuid","",                       "3","1","","", "","","",        "UUID",""),
        array ("code","",                       "3","1","","", "","","",        "Code",""),

        array ("isactive","",                   "3","1","v","", "","1","",      "Active",""),
        array ("category_id_","",               "5","2","","", "subcategories","IF(isactive='1',category_id,'-9')","",   "Link ID",""),
        array ("root_id_","",                   "5","2","","", "subcategories","IF(isactive='1',root_id,'-9')","",       "Root Link ID",""),
);
$subcategories_def = $categories_def; //  

$files_def = array   
(
	array ("id","",				"1","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","f", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("name","",			"1","1","","", "","","",	"",""), 
	array ("mime","",			"1","1","","", "","","",	"",""),
	array ("size","",			"1","5","","", "","","",	"",""),
	array ("uploadstatus","",		"1","2","","", "","","",	"",""),
	array ("movestatus","",			"1","2","","", "","","",	"",""),

	array ("channels","",			"1","2","","", "","","",	"",""),
	array ("sample_rate","",		"1","2","","", "","","",	"",""),
	array ("duration","",			"1","2","","", "","","",	"",""),

	array ("batch_id","",			"1","2","","", "","","",	"",""),
);

$courts_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
	
	array ("name","",			"3","1","m","", "","","",	"Court's Name",""),
	array ("court_rules","",		"3","1","","", "","","",	"Court Rules",""),
	array ("online_services","",		"3","1","","", "","","",	"Online Services",""),
	
	array ("jurisdiction_id","",		"3","2","m","f", "","","",	"Jurisdiction ID","",    "category","level","jurisdiction_id_"),
   	array ("jurisdiction","",		"3","2","","", "","","",	"Jurisdiction",""),	
	array ("jurisdiction_id_0","",		"3","2","","", "","","",	"Jurisdiction 0 ID",""),
	array ("jurisdiction_id_1","",		"3","2","","", "","","",	"Jurisdiction 1 ID",""),
	array ("jurisdiction_id_2","",		"3","2","","", "","","",	"Jurisdiction 2 ID",""),
	array ("jurisdiction_id_3","",		"3","2","","", "","","",	"Jurisdiction 3 ID",""),
	array ("jurisdiction_id_4","",		"3","2","","", "","","",	"Jurisdiction 4 ID",""),
	array ("jurisdiction_id_5","",		"3","2","","", "","","",	"Jurisdiction 5 ID",""),
	array ("jurisdiction_id_6","",		"3","2","","", "","","",	"Jurisdiction 6 ID",""),
	array ("jurisdiction_0","",		"3","2","","", "","","",	"Jurisdiction 0",""),
	array ("jurisdiction_1","",		"3","2","","", "","","",	"Jurisdiction 1",""),
	array ("jurisdiction_2","",		"3","2","","", "","","",	"Jurisdiction 2",""),
	array ("jurisdiction_3","",		"3","2","","", "","","",	"Jurisdiction 3",""),
	array ("jurisdiction_4","",		"3","2","","", "","","",	"Jurisdiction 4",""),
	array ("jurisdiction_5","",		"3","2","","", "","","",	"Jurisdiction 5",""),
	array ("jurisdiction_6","",		"3","2","","", "","","",	"Jurisdiction 6",""),

	array ("location_id","",		"3","2","","f", "","","",	"Court's Location ID","",    "category","level","location_id_"),
	array ("location","",			"3","2","","", "","","",	"Location",""),
	array ("location_id_0","",		"3","2","","", "","","",	"Location Level 0 ID",""),
	array ("location_id_1","",		"3","2","","", "","","",	"Location Level 1 ID",""),
	array ("location_id_2","",		"3","2","","", "","","",	"Location Level 2 ID",""),
	array ("location_id_3","",		"3","2","","", "","","",	"Location Level 3 ID",""),
	array ("location_id_4","",		"3","2","","", "","","",	"Location Level 4 ID",""),
	array ("location_id_5","",		"3","2","","", "","","",	"Location Level 5 ID",""),
	array ("location_id_6","",		"3","2","","", "","","",	"Location Level 6 ID",""),
	array ("location_0","",			"3","2","","", "","","",	"Location Level 0",""),
	array ("location_1","",			"3","2","","", "","","",	"Location Level 1",""),
	array ("location_2","",			"3","2","","", "","","",	"Location Level 2",""),
	array ("location_3","",			"3","2","","", "","","",	"Location Level 3",""),
	array ("location_4","",			"3","2","","", "","","",	"Location Level 4",""),
	array ("location_5","",			"3","2","","", "","","",	"Location Level 5",""),
	array ("location_6","",			"3","2","","", "","","",	"Location Level 6",""),
		
	array ("contact_id","",			"3","2","","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"Contact Person First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Phone",""),
	array ("contact_email","",		"3","2","","", "","","",	"Email",""),
	array ("contact_primary_contact_id","",	"1","2","h","", "","","",	"Primary Contact ID",""), 
	
	array ("contact_location_id","",	"3","2","","f", "","","",	"Contact Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Contact Location",""),
	array ("contact_location_id_0","",	"3","2","","", "","","",	"Contact County ID",""),
	array ("contact_location_id_1","",	"3","2","","", "","","",	"Contact Constituency ID",""),
	array ("contact_location_id_2","",	"3","2","","", "","","",	"Contact Ward ID",""),
	array ("contact_location_id_3","",	"3","2","","", "","","",	"Contact Location Level 3 ID",""),
	array ("contact_location_id_4","",	"3","2","","", "","","",	"Contact Location Level 4 ID",""),
	array ("contact_location_id_5","",	"3","2","","", "","","",	"Contact Location Level 5 ID",""),
	array ("contact_location_id_6","",	"3","2","","", "","","",	"Contact Location Level 6 ID",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Contact Location Level 0",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Contact Location Level 1",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Contact Location Level 2",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Contact Location Level 3",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Contact Location Level 4",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Contact Location Level 5",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Contact Location Level 6",""),
);

$advocates_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
		
	array ("contact_id","",			"3","2","","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Advocate's Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"Advocate's First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Phone",""),
	array ("contact_email","",		"3","2","","", "","","",	"Email",""),
	array ("contact_primary_contact_id","",	"1","2","h","", "","","",	"Primary Contact ID",""), 

	array ("contact_location_id","",	"3","2","","f", "","","",	"Contact Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Contact Location",""),
	array ("contact_location_id_0","",	"3","2","","", "","","",	"Contact County ID",""),
	array ("contact_location_id_1","",	"3","2","","", "","","",	"Contact Constituency ID",""),
	array ("contact_location_id_2","",	"3","2","","", "","","",	"Contact Ward ID",""),
	array ("contact_location_id_3","",	"3","2","","", "","","",	"Contact Location Level 3 ID",""),
	array ("contact_location_id_4","",	"3","2","","", "","","",	"Contact Location Level 4 ID",""),
	array ("contact_location_id_5","",	"3","2","","", "","","",	"Contact Location Level 5 ID",""),
	array ("contact_location_id_6","",	"3","2","","", "","","",	"Contact Location Level 6 ID",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Contact Location Level 0",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Contact Location Level 1",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Contact Location Level 2",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Contact Location Level 3",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Contact Location Level 4",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Contact Location Level 5",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Contact Location Level 6",""),
	
	array ("interests","",			"3","1","","", "","","",	"Interests",""),
	array ("expertise","",			"3","1","","", "","","",	"Expertise",""), // todo: expertise checkbox
	array ("influence","",			"3","2","","", "","","",	"Influence",""),
	array ("org_history","",		"3","2","","", "","","",	"Organisation History",""),
	array ("social_media","",		"3","2","","", "","","",	"Social Media",""),
	array ("impact_metrics","",		"3","2","","", "","","",	"Impact Metrics",""),
	array ("notes","",			"3","2","","", "","","",	"Notes",""),
	array ("tags","",			"3","2","","", "","","",	"Tags",""),

);

$parties_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
		
	array ("contact_id","",			"3","2","","f", "","","",	"Contact ID",""),
	array ("contact_fullname","",		"3","1","","", "","","",	"Fullname",""),
	array ("contact_fname","",		"3","1","m","", "","","",	"First Name",""),
	array ("contact_lname","",		"3","1","","",  "","","",	"Last Name",""),
	array ("contact_phone","",		"3","2","","p", "","","",	"Phone",""),
	array ("contact_email","",		"3","2","","", "","","",	"Email",""),
	array ("contact_primary_contact_id","",	"1","2","","", "","","",	"Primary Contact ID",""), 
	array ("contact_location_id","",	"3","2","","f", "","","",	"Contact Location ID",""),
	array ("contact_location","",		"3","2","","", "","","",	"Contact Location",""),
	array ("contact_location_id_0","",	"3","2","","", "","","",	"Contact County ID",""),
	array ("contact_location_id_1","",	"3","2","","", "","","",	"Contact Constituency ID",""),
	array ("contact_location_id_2","",	"3","2","","", "","","",	"Contact Ward ID",""),
	array ("contact_location_id_3","",	"3","2","","", "","","",	"Contact Location Level 3 ID",""),
	array ("contact_location_id_4","",	"3","2","","", "","","",	"Contact Location Level 4 ID",""),
	array ("contact_location_id_5","",	"3","2","","", "","","",	"Contact Location Level 5 ID",""),
	array ("contact_location_id_6","",	"3","2","","", "","","",	"Contact Location Level 6 ID",""),
	array ("contact_location_0","",		"3","2","","", "","","",	"Contact Location Level 0",""),
	array ("contact_location_1","",		"3","2","","", "","","",	"Contact Location Level 1",""),
	array ("contact_location_2","",		"3","2","","", "","","",	"Contact Location Level 2",""),
	array ("contact_location_3","",		"3","2","","", "","","",	"Contact Location Level 3",""),
	array ("contact_location_4","",		"3","2","","", "","","",	"Contact Location Level 4",""),
	array ("contact_location_5","",		"3","2","","", "","","",	"Contact Location Level 5",""),
	array ("contact_location_6","",		"3","2","","", "","","",	"Contact Location Level 6",""),
	
	array ("party_type_id","",		"1","2","m","f", "","","",	"Party Type ID",""),
	array ("party_type","",			"1","2","","", "","","",	"Party Type",""),
	array ("case_id","",			"1","2","","f", "","","",	"Case ID",""),
	array ("case_id_","",			"3","2","","f", "","","",	"Link ID",""),
);

$docs_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("name","",			"3","1","","", "","","",	"Name",""),
	array ("detail","",			"3","1","","", "","","",	"Detail",""),
	array ("doc_type_id","",		"1","2","","f", "","","",	"Doc Type ID",""),
	array ("doc_type","",			"1","2","","", "","","",	"Doc Type",""),
	array ("case_id","",			"1","2","","f", "","","",	"Case ID",""),
	array ("edms_ref","",			"1","1","","", "","","",	"EDMS REF",""),
);

$cases_def = array 
(
	array ("id","",				"0","2","","", "","","",	"CASE ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On","d M Y H:i:s"),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role","::role:0:1"),

	array ("case_number","",		"3","1","","", "","","",	"Case Number",""),

	array ("citation","",			"3","1","","", "","","",	"Citation",""),
	array ("nature","",			"3","1","m","", "","","",	"Nature of Case",""),
	array ("issues","",			"3","1","m","", "","","",	"Issues for Determination",""),
	array ("outcome","",			"3","1","","", "","","",	"Case Outcome",""),
	
	array ("stage_id","",			"3","2","","f",	"","","", 	"Stage ID",""), 
	array ("stage","",			"3","2","","",	"","","", 	"Stage",""),
					
	array ("advocate_id","",		"3","2","","f",	"","","",	"Advocate ID",""), // Assigned to
	array ("advocate_fullname","",		"3","1","","",	"","","",	"Advocate FullName",""),
	
	array ("court_id","",			"3","2","","f",	"","","",	"Court ID",""),
	array ("court_name","",			"3","1","","",	"","","",	"Court Name",""),
	
	array ("court_jurisdiction_id","",	"3","2","","", "","","",	"Court Jurisdiction ID",""),
   	array ("court_jurisdiction","",		"3","2","","", "","","",	"Court Jurisdiction",""),
   	array ("court_jurisdiction_id_0","",	"3","2","","", "","","",	"Court Jurisdiction 0 ID",""),
	array ("court_jurisdiction_id_1","",	"3","2","","", "","","",	"Court Jurisdiction 1 ID",""),
	array ("court_jurisdiction_id_2","",	"3","2","","", "","","",	"Court Jurisdiction 2 ID",""),
	array ("court_jurisdiction_id_3","",	"3","2","","", "","","",	"Court Jurisdiction 3 ID",""),
	array ("court_jurisdiction_id_4","",	"3","2","","", "","","",	"Court Jurisdiction 4 ID",""),
	array ("court_jurisdiction_id_5","",	"3","2","","", "","","",	"Court Jurisdiction 5 ID",""),
	array ("court_jurisdiction_id_6","",	"3","2","","", "","","",	"Court Jurisdiction 6 ID",""),
	array ("court_jurisdiction_0","",	"3","2","","", "","","",	"Court Jurisdiction 0",""),
	array ("court_jurisdiction_1","",	"3","2","","", "","","",	"Court Jurisdiction 1",""),
	array ("court_jurisdiction_2","",	"3","2","","", "","","",	"Court Jurisdiction 2",""),
	array ("court_jurisdiction_3","",	"3","2","","", "","","",	"Court Jurisdiction 3",""),
	array ("court_jurisdiction_4","",	"3","2","","", "","","",	"Court Jurisdiction 4",""),
	array ("court_jurisdiction_5","",	"3","2","","", "","","",	"Court Jurisdiction 5",""),
	array ("court_jurisdiction_6","",	"3","2","","", "","","",	"Court Jurisdiction 6",""),
		
	array ("court_location_id","",		"3","2","","f", "","","",	"Location ID",""),
	array ("court_location","",		"3","2","","", "","","",	"Location",""),
	array ("court_location_id_0","",	"3","2","","", "","","",	"Location Level 0 ID",""),
	array ("court_location_id_1","",	"3","2","","", "","","",	"Location Level 1 ID",""),
	array ("court_location_id_2","",	"3","2","","", "","","",	"Location Level 2 ID",""),
	array ("court_location_id_3","",	"3","2","","", "","","",	"Location Level 3 ID",""),
	array ("court_location_id_4","",	"3","2","","", "","","",	"Location Level 4 ID",""),
	array ("court_location_id_5","",	"3","2","","", "","","",	"Location Level 5 ID",""),
	array ("court_location_id_6","",	"3","2","","", "","","",	"Location Level 6 ID",""),
	array ("court_location_0","",		"3","2","","", "","","",	"Location Level 0",""),
	array ("court_location_1","",		"3","2","","", "","","",	"Location Level 1",""),
	array ("court_location_2","",		"3","2","","", "","","",	"Location Level 2",""),
	array ("court_location_3","",		"3","2","","", "","","",	"Location Level 3",""),
	array ("court_location_4","",		"3","2","","", "","","",	"Location Level 4",""),
	array ("court_location_5","",		"3","2","","", "","","",	"Location Level 5",""),
	array ("court_location_6","",		"3","2","","", "","","",	"Location Level 6",""),
	
	array ("activity_count","",		"4","4","","",	"case_activities","COUNT(id)","", 			"Activity Count",""),
	array ("activity_ids","",		"4","1","","",	"case_activities","GROUP_CONCAT(id)","", 		"Activity IDs",""),
	array ("activity_last_id","",		"4","2","","f",	"case_activities","MAX(id)","activity_last_id", 	"Last Activity ID",""),

	array ("activity_on","",		"5","3","","",	"case_activities","created_on","", 			"Last Activity On",""),	
	array ("activity_by","",		"5","2","","",	"case_activities","created_by","", 			"Last Activity By",""),	
	array ("activity_by_id","",		"5","2","","",	"case_activities","created_by_id","", 			"Last Activity By ID",""),	
	array ("activity_by_role","",		"5","2","","",	"case_activities","created_by_role","", 		"Last Activity By Role",""),	
	
	array ("yr","",				"4","2","","",   "cases","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "cases","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "cases","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","",				"4","2","","",   "cases","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 

	array ("uuid","",			"1","2","","", "","","",					"",""),
);

$case_activities_def = array 
(
	array ("id","",				"0","2","","", "","","",	"ID",""),
	array ("created_on","",			"0","3","","", "","","",	"Created On",""),
	array ("created_by","",			"0","2","","", "","","",	"Created By",""),
	array ("created_by_id","",		"0","2","","", "","","",	"Created By ID",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
		
	array ("aub_id","",			"1","2","","",	"","","", 	"Audit ID",""), 	
	array ("case_id","",			"1","2","","",	"","","", 	"Case ID",""), 	
	array ("case_number","",		"1","2","","",	"","","", 	"Case Number",""), 
	
	array ("activity","",			"1","2","","",	"","","", 	"Activity",""),  // [attendance,internal_update,add_witness,add_doc,edit]	
	array ("activity_ref","",		"1","2","","",	"","","", 	"Activity Ref",""), 	
	array ("detail","",			"1","1","","",	"","","", 	"Detail",""), 
					
	array ("stage_id","",			"1","2","","f",	"","","", 	"Stage ID",""), // updated by action (not dropdown)
	array ("stage","",			"1","2","","",	"","","", 	"Stage",""),

	array ("changes","",			"4","1","","",  "au","GROUP_CONCAT(k)","", 	"Fields Affected",""), 			
	array ("change_count","",		"4","4","","",  "au","COUNT(id)","", 	"Fields Count",""), 		

	array ("yr","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "case_activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","",				"4","2","","",   "case_activities","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 
);

$activities_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),

	array ("activity","",			"1","2","","",	"","","",	"",""),
	array ("activity_ts","",		"1","3","","",	"","","",	"",""),
	array ("activity_duration","",		"1","2","","",	"","","",	"",""),
	array ("is_read","",			"3","2","","",	"","","",	"",""),
		
	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_ts","",			"1","2","","",	"","","", 	"Channel Timestamp",""),
	array ("src_uid","",			"1","2","","",	"","","", 	"Channel Uniqueid",""),
	array ("src_callid","",			"1","2","","",	"","","", 	"Channel CallID",""),
	array ("src_address","",		"1","2","","P",	"","","", 	"Channel Address",""),
	array ("src_usr","",			"1","2","","",	"","","", 	"Channel User",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),
	array ("src_state_ts","",		"3","3","","",	"","","", 	"Channel Status Ts",""),
	array ("src_status","",			"3","2","","",	"","","", 	"Channel Status",""),
	array ("src_status_duration","",	"3","4","","",	"","","", 	"Channel Status Duration",""),
	array ("src_end_ts","",			"3","3","","",	"","","", 	"Channel End Ts",""),
	array ("src_uid2","",			"1","2","","",	"","","", 	"Channel Uniqueid 2",""),
	
        array ("case_ids","",			"4","1","","",  "dispositions","GROUP_CONCAT(case_id)","",     "Case IDs",""),  
        array ("dispositions","",		"4","1","","",  "dispositions","GROUP_CONCAT(disposition)","",     "Disposition",""),  
        
	array ("yr","",				"4","2","","",  "activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-01-01'))","",   "Year",":d:y:0: "), 
        array ("mn","",				"4","2","","",   "activities","UNIX_TIMESTAMP(CONCAT(YEAR(FROM_UNIXTIME(created_on)),'-',MONTH(FROM_UNIXTIME(created_on)),'-01'))","",   "Month",":d:my:0: "), 
        array ("wk","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) - (DAYOFWEEK(FROM_UNIXTIME(created_on))*86400)","",   "Week",":d:dmy:0: "), 
        array ("dt","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on)))","",   "Date",":d:dmy:0: "), 
	array ("hr","",				"4","2","","",   "activities","UNIX_TIMESTAMP(DATE(FROM_UNIXTIME(created_on))) + (HOUR(FROM_UNIXTIME(created_on))*3600)","",   "Hour",":d:dmyh:0: "), 
        array ("h","hour",			"4","2","","",   "activities","HOUR(FROM_UNIXTIME(created_on))","",   "Hour",""), 
	
);

$actions_def = array 
(
	array ("id","",				"0","2","","", "","","",	"",""),
	array ("created_on","",			"0","3","","", "","","",	"",""),
	array ("created_by","",			"0","2","","", "","","",	"",""),
	array ("created_by_id","",		"0","2","","", "","","",	"",""),
	array ("created_by_role","",		"0","2","","", "","","", 	"Created By Role",""),
			
	array ("src","",			"1","2","","",	"","","", 	"Channel",""),
	array ("src_uid","",			"1","2","","",	"","","", 	"Channel Uniqueid",""),
	array ("src_ts","",			"1","2","","",	"","","", 	"Channel Timestamp",""),
	array ("src_address","",		"1","2","","P",	"","","", 	"Channel Address",""),
	array ("src_usr","",			"1","2","","",	"","","", 	"Channel User",""),
	array ("src_vector","",			"1","2","","",	"","","", 	"Channel Direction",""),
	array ("src_status","",			"1","2","","",	"","","", 	"Channel Status",""),
	array ("src_uid2","",			"1","2","","",	"","","", 	"Channel Uniqueid 2",""),

	array ("case_id","",			"1","2","","f", "","","",	"Case ID",""), 
	array ("disposition_id","",		"1","2","","f", "","","",	"Disposition ID",""), 
	array ("disposition","",		"1","2","","",  "","","",	"Disposition",""),  

	array ("action","",			"1","2","","",	"","","",	"",""),
	array ("activity","",			"1","2","","",	"","","",	"",""),
	array ("activity_ts","",		"1","3","","",	"","","",	"",""),
	array ("activity_duration","",		"1","2","","",	"","","",	"",""),
	array ("is_read","",			"1","2","","",	"","","",	"","")
);

// ------------------------------------------------------------------------

$addr_dup = array ("addr","","dup","addr","addr", NULL,"id"); 
$otp_dup = array ("otp","","dup","addr","addr","expiry",":>now",NULL,"id"); // check if already pending
$otpv_dup = array ("otp","","dup","addr","addr","expiry",":>now", "otp","otp", NULL,"id", "addr_id", "addr"); // verify otp
$auth_dup = array ("users","","dup","usn","email",NULL, "id","contact_id","contact_fullname"); 

$subcategories_api = array // todo: on update (202) transverse descendants and run rest_api_post
(
        array ("subcategories","","dup","id","subcategory_id", NULL, "category_id:category_id"),
        array ("subcategories","","dup","name","name","category_id","category_id","id",":!=:subcategory_id:", NULL,"name:name"), // check duplicate name
        array ("categories","","dup","id","category_id",NULL,"id","name","fullname","fullname_id","level","root_id","root_name","category_id"), 
        array ("subcategories","",""),
        array ("subcategories","subcategories","agg4",  "id","subcategory_id", NULL,  "id","subcategory_id","category_id",":>: 0"), // agg only non-root
        array ("subcategories","subcategories","agg5",  "id","subcategory_id", NULL,  "id","subcategory_id","category_id",":>: 0"), // agg only non-root
);

$files_api = array
(
	array ("files","","file"),
);

$contacts_api = array // todo: primary_contact_id (link secondary phone number )
(
	array ("categories","","duf","id","location_id",NULL, "id:location_id", "fullname:location","fullname_id:location_fullname_id"),
	array ("contacts","","lvl","location_fullname_id","7","^",":", "location_","id_",""), // split loc levels
	array ("contacts","",""), // create | update contact
	array ("contacts","contacts","agg4",  "id","contact_id",NULL,  "id","contact_id"), // concat fullname
);

$contacts_dup_api = array
(
	array ("contacts","","dup","id","contact_id",NULL, 
"id","fullname", "fname", "lname", "phone", "email", 
"location_id", "location",
"location_id_0", "location_id_1", "location_id_2", "location_id_3", "location_id_4", "location_id_5", "location_id_6", 
"location_0", "location_1", "location_2", "location_3", "location_4", "location_5", "location_6")
);

$users_api = array
(
	array ("users","","dup","id","user_id",NULL,"contact_id:contact_id"), // get contact_id 
        array ("users","","dup","usn","usn","id",":!=:user_id:0",NULL,"usn:usn"), // check duplicate usn
        //array ("users","","dup","exten","exten","id",":!=:user_id:0",NULL,"exten:exten"), // check duplicate exten
        array ("users","","params", "contact_fname","fname", "contact_phone","phone"), // used by try // avoid duplicating contact
        array ("users","","try"), // test if will succeed
        array ("contacts","","include"), 
        array ("contacts","_dup","include"), 
        array ("users","",""),
);

$advocates_api = array
(
	array ("advocates","","dup","id","advocate_id",NULL,"contact_id:contact_id"), // get contact_id 
        //array ("advocates","","dup","usn","usn","id",":!=:advocate_id:0",NULL,"usn:usn"), // check duplicate advocate
	array ("advocates","","params", "contact_fname","fname", "contact_phone","phone"), // used by try // avoid duplicating contact
	array ("advocates","","try"), // test if will succeed
        array ("contacts","","include"), 
        array ("contacts","_dup","include"), 
        array ("advocates","",""),
);

$courts_api = array
(
	array ("categories","","duf","id","jurisdiction_id",NULL, "id:jurisdiction_id", "fullname:jurisdiction","fullname_id:jurisdiction_fullname_id"),
	array ("courts","","lvl","jurisdiction_fullname_id","7","^",":", "jurisdiction_","id_",""), // split juris levels
	array ("courts","","dup","id","court_id",NULL,"contact_id:contact_id"), // get contact_id 
        //array ("courts","","dup","usn","usn","id",":!=:jurisdiction_fullname_id:0",NULL,"usn:usn"), // check duplicate court
        array ("courts","","params", "contact_fname","fname", "contact_phone","phone"), // used by try // avoid duplicating contact
        array ("courts","","try"), // test if will succeed
        array ("contacts","","include"), 
        array ("contacts","_dup","include"), 
        array ("courts","",""),
);

$parties_api = array
(
	// todo: case_Activity
	array ("categories","","duf","id","party_type_id",NULL, "id:party_type_id", "fullname:party_type"),
	array ("cases","","dup","id","case_id",NULL, "id:case_id", "case_number:case_number"),
	array ("parties","","dup","id","party_id",NULL,"contact_id:contact_id"), // get contact_id 
        //array ("parties","","dup","usn","usn","id",":!=:user_id:0",NULL,"usn:usn"), // check duplicate parties
	array ("parties","","params", "contact_fname","fname", "contact_phone","phone"), // used by try // avoid duplicating contact
	array ("parties","","try"), // test if will succeed
        array ("contacts","","include"), 
        array ("contacts","_dup","include"), 
        array ("parties","",""),
);

$attachments_api = array
(
        array ("files","","dup","id","file_id",NULL,"id","name","mime","size","uploadstatus","movestatus","channels","sample_rate","duration"),
        array ("cases","","dup","id","case_id",NULL,"id"),
        array ("attachments","","params", "case_id_","case_id"),
        array ("attachments","","aub"),
        array ("attachments","",""),

        array ("reporters","_dup","include"),
        array ("case_activities","","params", "activity_ref","attachment_id","detail","file_name"),
        array ("case_activities","","include"),
);

$attachments_del_api = array
(
        array ("attachments","","dup","id","attachment_id", NULL, "file_id:file_id", "file_name:file_name", "case_id:case_id"), // needed for case_Activity
        array ("attachments","","params", "case_id_"," 0"),
        array ("attachments","","aub"),
        array ("attachments","",""),

        array ("reporters","_dup","include"),
        array ("case_activities","","params","activity_ref","attachment_id","detail","file_name"),
        array ("case_activities","","include")
);


$cases_api = array 
(
	array ("cases","","aub"),

	array ("categories","","duf","id","stage_id",NULL, "id:stage_id", "fullname:stage"),
	array ("courts","","duf","id","court_id",NULL, "id", "name", "jurisdiction", "location"),
	array ("advocates","","duf","id","advocate_id",NULL, "id:advocate_id", "contact_fullname:advocate_fullname"),

	array ("cases","",""), 
	array ("cases","cases","agg4", "id","case_id",NULL,  "id","case_id"), // update dt		
	array ("parties","_plaintiff","array","1",""),		// update case_id during case create only
	array ("parties","_defendant","array","1",""), 		// update case_id during case create only
	array ("parties","_witness","array","1",""),		// update case_id during case create only
	
//	array ("case_activities","","params", "activity_ref","case_id", "detail","plan"),
//	array ("case_activities","","include"),
);

$parties_plaintiff_api = [ ["parties","","params", "case_id_","case_id"], ["parties","","","1"] ];
$parties_defendant_api = [ ["parties","","params", "case_id_","case_id"], ["parties","","","1"] ];
$parties_witness_api = [ ["parties","","params", "case_id_","case_id"], ["parties","","","1"] ];

$case_activities_api = array 
(
	array ("case_activities","",""),
	array ("case_activities","au","agg4",  "id","ca_id",NULL,  "aub_id","aub_id"),
);

$activities_api = array
(
	array ("activities","","dup","src","src","src_uid","src_uid","created_by_id","auth_id",NULL,"id","src_uid2:src_uid2"), // get activity_id (if exists)
	array ("actions","","params", "action"," activity"),
	array ("actions","",""),
	array ("activities","",""),
	array ("activities","","_agg","include"),
);

$actions_api = array
(
	array ("activities","","dup","src","src","src_uid","src_uid","created_by_id","auth_id",NULL,"id","src_uid2:src_uid2"), // get activity_id (if exists)
	array ("dispositions","","dup","src","src","src_uid","src_uid","case_id"," 0",NULL,"id"), // get disposition_id (if exists)
	array ("categories","","dup","id","disposition_id",NULL, "id:disposition_id", "name:disposition"),
	array ("actions","","params", "action"," disposition"),
	array ("actions","",""),
	array ("dispositions","",""),
	array ("activities","",""), // create activity if it does not exist
	array ("activities","","_agg","include"),
);

// ------------------------------------------------------------------------

$categories_subs = 
[
["subcategories","","", "category_id_","category_id"]
];

$cases_subs = 
[
["case_activities","","","case_id","case_id"],
["parties","_plaintiff","","case_id_","case_id","party_type_id",(" ".$PARTY_TYPE_PLAINTIFF_ID)],
["parties","_defendant","","case_id_","case_id","party_type_id",(" ".$PARTY_TYPE_DEFENDANT_ID)],
["parties","_witness","","case_id_","case_id","party_type_id",(" ".$PARTY_TYPE_WITNESS_ID)],
];

$activities_subs = 
[

];

// ------------------------------------------------------------------------

$calls_join = 
[
"dispositions"=>["dispositions",  "disposition", "disposition.src='call' && disposition.src_uid2=chan.uniqueid"],
];

$contacts_join = 
[
"cases"=>["cases",  "kase", "kase.reporter_contact_id=contact.id"],
];

$cases_join = 
[
"clients"=>["clients",  "client", "client.case_id_=kase.id"],
"perpetrators"=>["perpetrators", "perpetrator", "perpetrator.case_id_=kase.id"],
"services"=>["services", "service", "service.case_id_=kase.id"],
"referals"=>["referals", "referal", "referal.case_id_=kase.id"]
];

$dispositions_join = 
[
"contacts"=>["contacts",  "contact", "disposition.src_address=contact.phone && src_address!=''"],
];

// ------------------------------------------------------------------------

$cases_csv=array(
"id",
"created_on",
"created_by",
"created_by_role",
"src",
//"case_category_root_id",
"cat_0",
"cat_1",
"cat_2",
"cat_3",
"cat_4",
"gbv_related",
"is_reporter_client",
"is_medical_exam_done",
"is_incidence_reported",
"is_hiv_tested",
"is_pep_given",
"is_art_given",
"is_ecp_given",
"is_counselling_given",
"police_ob_no",
"incidence_when",
"incidence_location",
"hiv_test_result",
"counseling_org",
"justice",
"assessment",
"escalated_to",
"priority",
"status",
"knowabout116",
"reporter_fullname",
"reporter_phone",
"reporter_phone2",
"reporter_dob",
"reporter_age",
"reporter_age_group",
"reporter_sex",
"reporter_national_id",
"reporter_nationality",
"reporter_tribe",
"reporter_lang",
"reporter_landmark",
"reporter_location_0",
"reporter_location_1",
"reporter_location_2",
"reporter_location_3",
"reporter_location_4",
"reporter_location_5",
"narrative",
"plan");

$clients_csv=array(
"contact_fullname",
"contact_phone",
"contact_phone2",
"contact_dob",
"contact_age",
"contact_age_group",
"contact_sex",
"contact_national_id",
"contact_nationality",
"contact_tribe",
"contact_lang",
"contact_landmark",
"contact_location_0",
"contact_location_1",
"contact_location_2",
"contact_location_3",
"contact_location_4",
"contact_location_5",
"relationship",
"relationship_comment",
"is_disabled",
"disability",
"health",
"hiv",
"special_services",
"in_school",
"school_type",
"school_level",
"school_attendance",
"school_name",
"school_address",
"not_in_school_reason",
"is_married",
"marital",
"spouse_profession",
"spouse_fullname",
"is_guardian_known",
"guardian_marital",
"guardian_fullname",
"guardian_national_id",
"household",
"household_adults",
"household_head_occupation",
"is_disabled_refered",
"is_disabled_referals",
"not_in_school");

$perpetrators_csv=array(
"contact_fullname",
"contact_phone",
"contact_phone2",
"contact_dob",
"contact_age",
"contact_age_group",
"contact_sex",
"contact_national_id",
"contact_nationality",
"contact_tribe",
"contact_lang",
"contact_landmark",
"contact_location_0",
"contact_location_1",
"contact_location_2",
"contact_location_3",
"contact_location_4",
"contact_location_5",
"relationship",
"shareshome",
"marital",
"health",
"employment",
"guardian_fullname",
"notes");

$services_csv=array("category_name");

$referals_csv=array("category_name");

// ------------------------------------------------------------------------

$hangupreason_enum = [ "peer"=>["peer","Agent"], "self"=>["self","Customer"] ];

$vector_enum = ["1"=>["1","Inbound"], "2"=>["2","Outbound"]];

$yesno_enum = 
[
"0"=>["0","No","No","Negative"], 
"1"=>["1","Yes","Yes","Positive"], 
"2"=>["2","Unknown","Unknown","Unknown"]
];

$charge_enum = ["0"=>["0","No"], "1"=>["1","Positive"], "2"=>["2","Unknown"]];

$role_enum = [
"1"=>["1","Counsellor"],
"2"=>["2","Supervisor"],
"3"=>["3","Case Manager"],
"4"=>["4","Case Worker"],
"5"=>["5","Partner"],
"99"=>["99","Administator"]
];

$case_type_enum = [
"87"=>["87","Abuse"],
"361944"=>["361944","Counseling"],
"362305"=>["362305","Information Inquiry"],
];
$case_status_enum = [""=>["","Unknown"], "0"=>["0","Unknown"], "1"=>["1","Ongoing"], "2"=>["2","Closed"]];

$case_priority_enum = [""=>["","Unknown"], "0"=>["0","Unknown"], "1"=>["1","Low"], "2"=>["2","Medium"], "3"=>["3","High"]];

$src_enum = 
[
"call"=>["call","Call","Phone Number"]
];

?>
