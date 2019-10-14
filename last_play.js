var xmlHttp=new XMLHttpRequest();
xmlHttp.open("GET","https://mypage.groovecoaster.jp/sp/json/music_list.php",false);
xmlHttp.send(null);
var data=JSON.parse(xmlHttp.responseText);
var newer_time_str=data.music_list[0].last_play_time;
//var older_time_str=data.music_list[data.length-1].last_play_time;
console.log(typeof(newer_time_str));
