<?php
include "/var/www/mahakama_config.php";

$db = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could Not connect to Database Server.");
$db2 = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could Not connect to Database Server.");

include "model_k.php";
include "model.php";
include "rest.php";
include "session.php";
include "XLSXbuf.php"; 

function _dash (&$o, &$p)
{
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];
	$dash_period = "this_month";
	$dash_gbv = "both";
	$dash_src = "all";
	if (isset ($_GET["dash_period"])) $dash_period = $_GET["dash_period"];
	if (isset ($_GET["dash_gbv"])) $dash_gbv = $_GET["dash_gbv"];
	if (isset ($_GET["dash_src"])) $dash_src = $_GET["dash_src"];

	$_gbv_ = array ("both"=>"", "vac"=>"0", "gbv"=>"1" );	
	$_src_ = array ("all"=>"", "call"=>"call", "sms"=>"sms", "email"=>"email", "social"=>"social", "walkin"=>"walkin" );
	$dash_ts = _str2ts ($dash_period);
	
	echo '"dash":[["'.$dash_period.'","'.$dash_gbv.'","'.$dash_src.'","'.$dash_ts.'","'.$_gbv_[$dash_gbv].'","'.$_src_[$dash_src].'"]]';
		
	$aa = array ("ctx"=>"", "f"=>"", "w"=>"", "s"=>"", "sort"=>"", "lim"=>"");
	$av = [];
	ctx_rights ("cases", $aa, $av, $p, $rights["cases"]);
	// if (strlen ($_gbv_[$dash_gbv])>0) k_c ("kase", "gbv_related", explode (",", $_gbv_[$dash_gbv]), $aa, $av);
	if (strlen ($dash_ts)>0) 	  k_d ("kase", "created_on", explode (";", $dash_ts), $aa, $av);
	$q = "SELECT court_name, COUNT(id) FROM kase ".$aa["w"]." GROUP BY court_name";
	error_log ("[dash] ".$q." | ".json_encode ($av)." | ".$_SESSION["cc_user_role"]);
	$res = qryp ($q, $aa["s"], $av);
	$i = 0;
	$tot = 0;
	echo ',"case_source":{';
	while ($row = mysqli_fetch_row ($res))
	{
		if ($i>0) echo ","; 
		echo '"'.$row[0].'":["'.$row[0].'","'.$row[1].' Cases"]';
		$i++;
		if ($row[0] && strlen ($row[0])>0) $tot += $row[1]; 
	}
	if ($i>0) echo ","; 
	echo '"total":["total","'.$tot.' Cases"]}';
	return 200;
}

function _home (&$o, &$p)
{
	if (!isset ($GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])])) return 403;
	$rights = $GLOBALS[("RIGHTS_".$_SESSION["cc_user_role"])];
	$aa = [];
	$fo = [];
		
        header ("HTTP/1.0 200 OK");
	header ('Content-Type: application/json');
        echo "{";
       
	ss ();
	
	echo ",";
	if (rest_uri_get ("auth","", $p["auth_id"], $fo, $p, $aa)==200) rest_uri_response ("auth","", $p["auth_id"], $o, $p, $aa, 0);
        	
	echo ",";
	if (rest_uri_get ("contacts","", "0", $fo, $p, $aa)==200) rest_uri_response ("contacts","", "0", $o, $p, $aa, 0); // load contacts_k
	
	echo ",";
	if (rest_uri_get ("categories","", "-9", $fo, $p, $aa)==200) rest_uri_response ("categories","", "-9", $o, $p, $aa, 0);

       	echo ",";
	if (rest_uri_get ("cases","", "0", $fo, $p, $aa)==200) rest_uri_response ("cases","", "0", $o, $p, $aa, 0); // also load case_subs

	echo ",";
	if (rest_uri_get ("parties","", "0", $fo, $p, $aa)==200) rest_uri_response ("parties","", "0", $o, $p, $aa, 0); // also load case_subs

	echo ",";
	$fo_=["_c"=>"10"];
	if (rest_uri_get ("activities","", NULL, $fo_, $p, $aa)==200) rest_uri_response ("activities","", NULL, $o, $p, $aa, 0); // load activities
	
	echo ",";
	_dash ($o, $p);

        echo "}";
        return 200;
}

function _request_ ()
{
	$u = "";
	$suffix = "";
	$id = NULL;
	$o = [];
	$p = [];
	$fo = [];

	$rt = rest_uri_parse ($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"], 3, $u, $suffix, $id, $o);
	if ($rt!=0) return $rt;

	if ($u=="sendOTP") return _sendOTP ($o,$p);

	if ($u=="verifyOTP") return _verifyOTP ($o,$p); // onverify creates a temp session
	
	$rt = auth ($o);
	error_log ("auth (".$u.") ---------------------------------------------------------|".$rt);
	if ($rt!=0) return $rt;
	
	$p["auth_id"] = _S("cc_user_id");
	$p["auth_exten"] = _S("cc_user_exten");
	$p["profile_id"] = _S("cc_user_contact_id"); 
	
	if (strlen($u)<1) return _home ($o,$p);

	if ($u=="changeAuth") return changeAuth ($o, $p);

	if ($u=="resetAuth") return changeAuthAdmin ($id);
	
	if ($u=="dash") 
	{
		echo '{';
		_dash ($o, $p);
		echo '}';
		return 200;
	}
	
	if ($_SERVER["REQUEST_METHOD"]=="GET") 
	{
		$fo = $_GET;
		$rt = 200;
	}
	
	if ($_SERVER["REQUEST_METHOD"]=="POST")
	{
		$o['i_']=0;
		error_log ("  [o] ". json_encode ($o));
		$rt = rest_uri_post ($u, $suffix, $id, $o, $p);

		if (isset ($o['_c'])) $fo['_c']=$o['_c'];

		$a_ = $GLOBALS[($u."_def")];
		$k = model_k_id ($u, $a_);
		$id = "-2";
		if (($rt==201 || $rt==202) && isset ($p[$k])) $id = $p[$k];
	}
	
	if ($rt==200 || $rt==201 || $rt==202)
	{
		$rt_ = $rt;
		$aa = [];
		$rt = rest_uri_get ($u, $suffix, $id, $fo, $p, $aa);
		if ($rt==200) 
		{
			return rest_uri_response ($u, $suffix, $id, $o, $p, $aa, $rt_);
		}
	}
	
	return $rt;
}

$rt = _request_ ();
if ($rt>299) rest_uri_response_error ($rt);
if ($rt==203)
{
	header ("HTTP/1.0 203 Wait");
	header ('Content-Type: application/json');
	echo '{ "action":[["nottice","async"]] }'; 
}

?>
