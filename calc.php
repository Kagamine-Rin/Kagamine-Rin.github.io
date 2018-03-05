<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="res/main.css">
<title>PT calculator</title>
</head>
<body>

<nav class="navbar navbar-dark bg-primary navbar-static-top mb-1">
<div class="container">
<a class="navbar-brand" href="/">Vocaloid Ranking PT calculator&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
</div>
</nav>

<div class="container">
<div class="row">
<div class="col-xs-12 col-lg-9">
<?php
    $html = file_get_contents('http://ext.nicovideo.jp/thumb/sm32813465');
    echo $html;
?>
<input type="button" value="4444">

<div id="hitokoto">

</div>
</div>
</div>
</div>

<footer class="footer bg-info">
<div class="container">
 <p class="text-xs-right pt-1">Since 2007 version3</p>
 <p class="text-xs-right">ぼからんファン＆マニアに捧ぐ</p>
</div>
</footer>

<p id="page-top"><a href="#top">TOP</a></p>

</body>
</html>