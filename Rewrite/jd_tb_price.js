hostname = api.m.jd.com, trade-acs.m.taobao.com

# script 源仓库 https://github.com/yichahucha/surge/tree/master
# updateTime：2021-05-07 17:30
# 注意
# 不生效或失效的，需要卸载 taobao 重装，**注意** 不开脚本进 taobao 会失效
# taobao历史价格在 保障 哪里显示

# Display jd historical price
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js
# 京东比价
#^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/JDHelloWorld/jd_price/main/jd_price.js

# Display taobao historical price
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
