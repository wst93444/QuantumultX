const regex='<head>';const replace_str='<head>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://raw.githubusercontent.com/wst93444/QuantumultX/master/list/Adblock4limbo.user(1).js"></script>\
'
if($response.body){var body=$response.body.replace(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
