//全局变量
var livesettings = {"mods":"0","speed":"2","random":"0",
   "cutin_flag":"2","effect_flag":"1","text_size":"1",
   "se":"1","no_skill":"0","cutin_color":"3","show_mission_target":"0",
   "note_style":1,"note_style_arrow":2,"note_style_parallel":2,
   "key_config":["a","s","d","f","g","h","j","k","l"],
   "speed_param":"10"};
//设置按钮
function settingsShow()
{
   document.getElementById('settings-board').style = "";
}
//保存
function settingsSave()
{
   //Save all the settings
   livesettings["speed_param"] = getSilderVal();
   localStorage.setItem("livesettings", JSON.stringify(livesettings));
   //close the tab
   document.getElementById('settings-board').style = "display: none";
}
//滑动条
function getSilderVal()
{
   var slider = document.getElementById('slider');
   var sliderval = document.getElementById('sliderval');
   sliderval.innerText = String(slider.value);
   return slider.value;
}