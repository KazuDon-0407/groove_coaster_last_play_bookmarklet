const href=location.href;
var match=href.match("https://mypage.groovecoaster.jp/sp/#/mc/");
if(match==null){
    alert("%E3%83%AA%E3%82%B6%E3%83%AB%E3%83%88%E7%94%BB%E9%9D%A2%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84");
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
    var alert_disp="Hello World";
    alert(alert_disp);
}
