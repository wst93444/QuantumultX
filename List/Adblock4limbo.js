const regex='<head>';const replace_str='<head>\
<link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
<script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>\
'
if($response.body){var body=$response.body.replace(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
