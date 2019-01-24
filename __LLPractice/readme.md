__LLPractice/1/index.html?file 后面加.map文件的文件名
可以翻译LLPRactice中的谱面

LLPractice中 starttime endtime 都以ms表示
而ayaselive中 以s 表示
ayaselive: effect:1-普通 value:2
2：表示这个note在传统活动里能获得道具 value:2
3:长key value:持续时间(s)
4.星星 value：2
双键似乎不需要考虑？

attribute-icon-id和note-attribute: 1红 2绿 3蓝
notes-level:目前 没有见到不是1的

Ayaselive js文件 各个项目：（只写有用的，）
"difficulty" 大难度（0-challenge 1-easy 2-normal 3-hard 4-expert 5-没用 6-master）
"stage_level" 星数
"live_icon_asset" 封面图标
"name" html中用到
"c（b,a,s）_rank_score（combo）" 不用多说了吧
"member_category" 默认图标 1μ 2水
"title_asset" 刚开始打歌的时候正下方的小图
"sound_asset" bgm（*）
"asset_background" 背景图片（*）
"json_name" *启用上述各项功能？还是别开了

bg: 1136*640  (1.775/1) cd_cover:256*256 按键：128*128