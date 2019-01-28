var livesettings = {};
//onload
window.onload = function()
{
   if(localStorage.getItem('livesettings'))
   {
      console.log(3e3)
      console.log('exist livesettings!');
      try {
        livesettings = JSON.parse(localStorage.getItem('livesettings'))
        initSpeed();
        others = ['mods', 'random', 'effect_flag', 'text_size', 'show_mission_target', 'se'];
        others.forEach(function(param){
          initOthers(param, livesettings[param]);
        });
      } 
      catch (e) {console.log(e); console.log('load local settings error!'); asDefault();}
   }
   else
   {
      console.log('not exist livesettings!');
      asDefault();
   }
}
function chg(param, val)
{
  livesettings[param] = val;
}
function initOthers(param, val)
{
  var a = param + String(val);
  document.getElementById(a).checked = "checked";
}
function initSpeed()
{
  var a = livesettings["speed"]; //Speed
  if(a==0)
  {
      document.getElementById('speedChoices1').checked = "checked";
      document.getElementById('speedslider').style = "display: none";
      document.getElementById('sliderval').style = "display: none";
  }
  else if(a==1)
  {
   document.getElementById('speedChoices2').checked = "checked";
   document.getElementById('speedSeconds').value = String(livesettings['speed_param']);
   document.getElementById('speedslider').style = "display: none";
   document.getElementById('sliderval').style = "display: none";
   document.getElementById('speedSeconds').style = "";
  }
  else
  {
   document.getElementById('speedChoices3').checked = "checked";
   document.getElementById('speedslider').value = String(livesettings['speed_param']);
   getSilderVal();
  }
}
function switchSpeedChoice(x)
{
   if(x==1)
   {
      if(livesettings['speed'] != 1)
      {
         livesettings['speed'] = 1;
         document.getElementById('speedslider').style = "display: none";
         document.getElementById('sliderval').style = "display: none";
         document.getElementById('speedSeconds').style = "";
         document.getElementById('speedSeconds').value = "0.45";
         getSilderVal();
         livesettings['speed_param'] = 0.45;
      }
   }
   else if(x==2)
   {
      if(livesettings['speed'] != 2)
      {
         livesettings['speed'] = 2;
         document.getElementById('speedSeconds').style = "display: none";
         document.getElementById('speedslider').style = "";
         document.getElementById('sliderval').style = "";
         document.getElementById('speedslider').value = 10;
         livesettings['speed_param'] = 10;
      }
   }
   else
   {
      if(livesettings['speed'] != 0)
      {
         livesettings['speed'] = 0;
         document.getElementById('sliderval').style = "display: none";
         document.getElementById('speedSeconds').style = "display: none";
         document.getElementById('speedslider').style = "display: none";
         livesettings['speed_param'] = undefined;
      }
   }
}
function asDefault()
{
   livesettings = {"mods":"0","speed":"2","random":"0",
   "cutin_flag":"2","effect_flag":"1","text_size":"1",
   "se":"1","no_skill":"0","cutin_color":"3","show_mission_target":"0",
   "note_style":1,"note_style_arrow":2,"note_style_parallel":2,
   "key_config":["a","s","d","f","g","h","j","k","l"],
   "speed_param":"10"};
   localStorage.setItem("livesettings", JSON.stringify(livesettings));
}
//设置按钮
function settingsShow()
{
   document.getElementById('settings-board').style = "";
}
function settingsSave(save)
{
   //Save all the settings
   if(livesettings['speed'] == 1)
   {
     var s = parseFloat(document.getElementById('speedSeconds').value);
     s = s >= 0.45? s: 0.45;
     s = s <= 2? s: 2;
     livesettings["speed_param"] = s;
   }
   localStorage.setItem("livesettings", JSON.stringify(livesettings));
   //close the tab
   document.getElementById('settings-board').style = "display: none";
}
//滑动条
function getSilderVal()
{
   var slider = document.getElementById('speedslider');
   var sliderval = document.getElementById('sliderval');
   livesettings["speed_param"] = slider.value;
   sliderval.innerText = String(slider.value);
   return slider.value;
}