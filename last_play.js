var xmlHttp=new XMLHttpRequest();
xmlHttp.open("GET","https://mypage.groovecoaster.jp/sp/json/music_list.php",false);
xmlHttp.send(null);
var data=JSON.parse(xmlHttp.responseText);
var last_time_str=data.music_list[0].last_play_time;
console.log(last_time_str);
