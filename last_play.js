var xmlHttp=new XMLHttpRequest();
xmlHttp.open("GET","https://mypage.groovecoaster.jp/sp/json/music_list.php",false);
xmlHttp.send(null);
var data=JSON.parse(xmlHttp.responseText);
console.log(data);
