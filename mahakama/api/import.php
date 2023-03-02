<?php
include "/var/www/mahakama_config.php";
$db = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could Not connect to Database Server.");
$db2 = mysqli_connect (null, THE_DB_USN, null, THE_DB_NAME, null, "/var/lib/mysql/mysql.sock") or die ("Could Not connect to Database Server.");
include "model_k.php";
include "model.php";
include "rest.php";
include "session.php";

function yuesc ($v)
{
	$i = 0;
	while (strstr ($v, "\\"))
	{
		$vo = json_decode (("[\"".$v."\"]"));
		if (!$vo) break; 
		// xecho  "<div>yuesc: ".$i.": ".$v."|".$vo[0]."</div>";
		$v = $vo[0];
		$i++;
	}
	return $v;
}
function import_loc ()
{
	$q = "SELECT name, category_name, category_level FROM hlp.category WHERE root_id=? ORDER BY level";
	$res = qryp ($q, "s", ["362560"], 0, "db2");
	if ($res==NULL) return;
	while ($row1 = mysqli_fetch_row ($res))
	{
		$p = [];
		$o = [];
		$o['i_']=0;
		$o["name"] = yuesc ($row1[0]);
		$o["pname"] = __VESC(yuesc ($row1[1]));

		$q = "SELECT id FROM category WHERE name=? AND level=?";
		$argv = [$o["pname"], ("".$row1[2])];
		$row = qryp ($q, "ss", $argv, 1);  
		// echo "<div>argv:".json_encode ($argv)."   ".($row==null?"fail":"ok")."</div>";
		$rt = 404;
		if ($row) 
		{
			$o["category_id"] = $row[0];
			$rt = rest_uri_post ("subcategories", "", NULL, $o, $p);
		}
		if ($rt!=201) 
		{ 
			echo "<div style='color:red;'><b>".$rt."</b> ".$argv[0].", ".$argv[1].", ".$o["name"]."</div>";
		}
	}

	echo "<h>done</h>";
}

// import_loc ();

?>
