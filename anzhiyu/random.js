var posts=["2023/06/17/HIT-Computer-Science-Technology/","2023/05/23/PMDG Boeing737检查单/","2023/06/12/“喜欢早晨的阳光，好像什么都可以重新开始”/","2023/05/03/MHWGO/","2023/05/10/Study Goals/","2023/05/02/“放弃一个自己很爱的人，也是一件很了不起的事情。”/","2023/05/03/今日飞行日志/","2023/05/02/“等到苦尽甘来的那一刻 山河星月都做贺礼”/","2023/06/09/内心的恐惧都来源于你的幻想/","2023/05/04/大提琴Cello笔记/","2023/05/24/卡农 D大调/","2023/06/16/宫崎骏的夏天！/","2023/05/25/大提琴演奏——枫/","2023/05/22/疾风亦有归途！/","2023/06/07/风很温柔，花很烂漫，你很特别，我很喜欢！/","2023/05/25/钢琴演奏——遇见/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};