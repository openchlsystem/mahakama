<?php
//error_reporting(0);

define('ENVIRONMENT', 'production');
define('THE_DB_USN', 'nginx');
define('THE_DB_PASSWD', '');
define('THE_DB_HOST', 'localhost');
define('THE_DB_NAME', 'mahakama');
define('DAT', '/home/mahakama');

date_default_timezone_set('Africa/Nairobi');


$APP_API_PATH = "/mahakama/api/";
$APP_LOGO = "/mahakama/images/logo.png";
$COUNTRY_CODE = "254";
$CASE_ID_PREFIX = "DCS-";
$LOCATION_HIERARCHY = '"","County","Constituency","Ward","Village"';

// --- CATEGORY ROOT IDs ---
$CASE_STAGE_ROOT_ID = "49726";
$CASE_PARTY_TYPE_ROOT_ID = "49725"; 
$CASE_DOC_TYPE_ROOT_ID = "49724";
$LOCATION_ROOT_ID = "47935";
$EXPERTISE_ROOT_ID = "61020"; 
$JURISDICTION_ROOT_ID = "49723";

// --- CATEGORY IDs ---

$PARTY_TYPE_PLAINTIFF_ID = "61029";
$PARTY_TYPE_DEFENDANT_ID = "61027";
$PARTY_TYPE_WITNESS_ID = "61028";

?>
