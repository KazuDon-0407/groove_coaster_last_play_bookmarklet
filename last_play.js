const href=location.href;
var match=href.match("https://mypage.groovecoaster.jp/sp/#/mc/");
if(match==null){
    alert("リザルト画面で実行してください");
}
else{
    const music_id=href.replace(/[^0-9]/g,'');
    var xmlHttp=new XMLHttpRequest();
    xmlHttp.open("GET","https://mypage.groovecoaster.jp/sp/json/music_list.php",false);
    xmlHttp.send(null);
    var data=JSON.parse(xmlHttp.responseText);
    var last_play_time;
  console.log(data.music_list.length);
    for(var i=0;i<data.music_list.length;i++){
       if(data.music_list[i].music_id==music_id) last_play_time=data.music_list[i].last_play_time;
    }
    var alert_disp="";
    alert_disp+="最終プレイ日時:"+last_play_time;
    alert(alert_disp);
}
