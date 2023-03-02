<html>
<head>
<meta charset=UTF-8>
<title>Mahakama</title>
<script>
<?php
include "/var/www/mahakama_config.php";

echo "var APIPATH = \"".$APP_API_PATH."\";\r\n";
echo "var APP_LOGO = \"".$APP_LOGO."\";\r\n";
echo "var COUNTRY_CODE = \"".$COUNTRY_CODE."\";\r\n";
echo "var CASE_ID_PREFIX = \"".$CASE_ID_PREFIX."\";\r\n";

// --- CATEGORY ROOT IDs ---

echo "var CASE_STAGE_ROOT_ID = \"".$CASE_STAGE_ROOT_ID."\";\r\n";
echo "var CASE_PARTY_TYPE_ROOT_ID = \"".$CASE_PARTY_TYPE_ROOT_ID."\";\r\n";
echo "var CASE_DOC_TYPE_ROOT_ID = \"".$CASE_DOC_TYPE_ROOT_ID."\";\r\n";
echo "var LOCATION_ROOT_ID = \"".$LOCATION_ROOT_ID."\";\r\n";
echo "var EXPERTISE_ROOT_ID = \"".$EXPERTISE_ROOT_ID."\";\r\n";
echo "var JURISDICTION_ROOT_ID = \"".$JURISDICTION_ROOT_ID."\";\r\n";


// --- CATEGORY IDs ---
echo "var PARTY_TYPE_PLAINTIFF_ID = \"".$PARTY_TYPE_PLAINTIFF_ID."\";\r\n";
echo "var PARTY_TYPE_DEFENDANT_ID = \"".$PARTY_TYPE_DEFENDANT_ID."\";\r\n";
echo "var PARTY_TYPE_WITNESS_ID = \"".$PARTY_TYPE_WITNESS_ID."\";\r\n";


?>
</script>

</head>
<body id="vdd" style="height:100%;" onclick='undd(this);' >
<?php
echo "
<style>
";
include "screen.css";
echo "
</style>
<script>
";

include "js/te.js";
include "js/sel.js";
include "js/chk.js";
include "js/enum.js";
include "js/cal.js";
include "js/tf.js";
include "js/rpt.js";
include "js/xlsx.js";
include "js/chart.js";

include "app/user.js";
include "app/contact.js";
include "app/advocate.js";
include "app/party.js";
include "app/doc.js";
include "app/court.js";
include "app/category.js";
include "app/case.js";
include "app/case_activity.js";
include "app/activity.js";

echo "\r\nrz[\"location\"]=[".$LOCATION_HIERARCHY."];\r\n";

include "app/app.js";


echo "</script>
";
?>
<div oncontextmenu=""><div id='vv'></div></div>
<div class='g' id='lds'></div>
</body>
</html>
