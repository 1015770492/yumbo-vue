/**
 * 封装网易云音乐api
 * 网易云音乐api地址
 * 文档地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=安装
 * 该文件用于全局配置网易云api的请求地址，例如在自己的服务器也搭建了api服务器
 * 将apiUrl替换成自己服务器的地址即可
 * @type {string}
 */
const apiUrl='http://www.huashengshu.top:3000';//网易云音乐服务器地址，服务器搭建访问前面文档地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=安装
import ajax from '../../ajax';//导入封装的axios
// 1.登录
export const reqLoginPhone = (phone,password)=>ajax(`${apiUrl}/login/cellphone/`,{phone,password});
export const reqLoginEmail = (email,password)=>ajax(`${apiUrl}/login/`,{email,password});
// 2.刷新登录
export const reqLoginRefresh = ()=>ajax(`${apiUrl}/login/refresh/`);
// 3.发送验证码
export const reqSentCaptcha = (phone)=>ajax(`${apiUrl}/captcha/sent/`,{phone});
// 4.校验验证码 ctcode：国家区号,默认86即中国
export const reqVerifyCaptcha = (phone,captcha,ctcode)=>ajax(`${apiUrl}/captcha/verify/`,{phone,captcha,ctcode});
// 5.注册(修改密码)
export const reqRegisterPhone = (captcha,phone,password,nickname)=>ajax(`${apiUrl}/register/cellphone/`,{captcha,phone,password,nickname});
//检测手机号码是否已注册
export const reqExistencePhone = (phone)=>ajax(`${apiUrl}/cellphone/existence/check/`,{phone});
//初始化名称oldcaptcha: 原手机验证码;captcha: 新手机验证码; phone : 手机号码; ctcode : 国家区号,默认86即中国
export const reqInitNickname = (nickname)=>ajax(`${apiUrl}/activate/init/profile/`,{nickname});
//更换绑定手机
export const reqRebindPhone = (oldcaptcha,captcha,phone,ctcode)=>ajax(`${apiUrl}/rebind/`,{oldcaptcha,captcha,phone,ctcode});
//退出登录
export const reqLogout = ()=>ajax(`${apiUrl}/logout/`);
//登录状态
export const reqLoginStatus = ()=>ajax(`${apiUrl}/login/status/`);
//获取用户详情
export const reqUserDetail = (uid)=>ajax(`${apiUrl}/user/detail/`,{uid});
// 6.获取用户信息 , 歌单，收藏，mv, dj 数量  (登陆后可用)
export const reqSubcount = ()=>ajax(`${apiUrl}/user/subcount/`);
//更新用户信息  所有参数都必选
export const reqUserUpdate = (gender,birthday,nickname,province,city,signature)=>ajax(`${apiUrl}/user/update/`,{gender,birthday,nickname,province,city,signature});
// 7.获取用户歌单
export const reqUserPlayList = (uid)=>ajax(`${apiUrl}/user/playlist/`,{uid});
//更新歌单，所有参数必选  歌单id、歌单名字name、歌单描述desc、歌单标签tags（多个用;隔开,只能用官方规定的标签）
export const reqPlayListUpdate = (id,name,desc,tags)=>ajax(`${apiUrl}/playlist/update/`,{id,name,desc,tags});
//更新歌单描述
export const reqPlayListDescUpdate = (id,desc)=>ajax(`${apiUrl}/playlist/desc/update/`,{id,desc});
//更新歌单名
export const reqPlayListNameUpdate = (id,name)=>ajax(`${apiUrl}/playlist/name/update/`,{id,name});
//更新歌单标签
export const reqPlayListTagsUpdate = (id,tags)=>ajax(`${apiUrl}/playlist/tags/update/`,{id,tags});
//调整歌单顺序 ids为列表例如ids=[111,222]
export const reqPlayListOrderUpdate = (ids)=>ajax(`${apiUrl}/playlist/order/update/`,{ids});
//调整歌曲顺序  例如：pid=2039116066&ids=[5268328,1219871]
export const reqSongOrderUpdate = (pid,ids)=>ajax(`${apiUrl}/song/order/update/`,{pid,ids});
// 8.获取用户电台
export const reqUserDj = (uid)=>ajax(`${apiUrl}/user/dj/`,{uid});
// 9.获取用户关注列表   limit返回数量默认值为30，offset偏移数量
export const reqUserFollows = (uid,limit,offset)=>ajax(`${apiUrl}/user/follows/`,{uid,limit,offset});
// 10.获取用户粉丝列表。传入上一次返回结果的 lasttime,将会返回下一页的数据
export const reqUserFolloweds = (uid,limit,lasttime)=>ajax(`${apiUrl}/user/followeds/`,{uid,limit,lasttime});
// 11.获取用户动态 uid必选。传入上一次返回结果的 lasttime,将会返回下一页的数据。更多查看：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=获取用户动态
export const reqUserEvent = (uid,limit,lasttime)=>ajax(`${apiUrl}/user/event/`,{uid,limit,lasttime});
//转发用户动态
export const reqEventForward = (evId,forwards)=>ajax(`${apiUrl}/event/forward/`,{evId,forwards});
//删除用户动态
export const reqEventDel = (evId)=>ajax(`${apiUrl}/event/del/`,{evId});
//分享歌曲、歌单、mv、电台、电台节目到动态，type可以为song、playlist、mv、djradio、djprogram;    msg内容，140 字限制，支持 emoji，@用户名(/user/follows接口获取的用户名)
export const reqShareResource = (id,type,msg)=>ajax(`${apiUrl}/event/del/`,{id,type,msg});
//获取动态评论 threadId通过/event或者/user/event接口获取
export const reqCommentEvent = (threadId)=>ajax(`${apiUrl}/comment/event/`,{threadId});
//关注/取消关注用户 t=1为关注，其它值为取消关注
export const reqFollow = (id,t)=>ajax(`${apiUrl}/follow/`,{id,t});
// 12.获取用户播放记录  type=1只返回weekData，type=0返回allData
export const reqUserRecord = (uid,type)=>ajax(`${apiUrl}/user/record/`,{uid,type});
//获取热门话题  limit去除评论数量，默认为20
export const reqHotTopic = (limit,offset)=>ajax(`${apiUrl}/hot/topic/`,{limit,offset});
//云村热评
export const reqCommentHotwallList = ()=>ajax(`${apiUrl}/comment/hotwall/list/`);
//心动模式/智能播放pid:歌单id; sid : 要开始播放的歌曲的 id
export const reqPlayMode = (pid,sid)=>ajax(`${apiUrl}/playmode/intelligence/list/`,{pid,sid});
//获取动态消息  传入上一次返回结果的 lasttime,将会返回下一页的数据
export const reqEvent = (pagesize,lasttime)=>ajax(`${apiUrl}/event/`,{pagesize,lasttime});
//歌手分类列表cat必选即category Code,歌手类型,默认 1001,返回华语男歌手数据，可选参数limit/offset/type(全部-1，男歌手1，女歌手2，乐队3)/area（全部-1话语7欧美96日本8韩国16其它0）
export const reqArtistList = (cat,limit,offset,type,area)=>ajax(`${apiUrl}/artist/list/`,{cat,limit,offset,type,area});
//收藏/取消收藏歌手 artistId歌手id,t=1为收藏其它为取消收藏
export const reqArtistSub = (artistId,t)=>ajax(`${apiUrl}/artist/sub/`,{artistId,t});
//歌手热门50首歌曲歌手id
export const reqArtistTopSong = (id)=>ajax(`${apiUrl}/artist/top/song/`,{id});
//收藏歌手列表
export const reqArtistSublist = ()=>ajax(`${apiUrl}/artist/sublist/`);
//收藏视频 t=1表示收藏，其它为取消收藏，id为视频id
export const reqVideoSub = (id,t)=>ajax(`${apiUrl}/video/sub/`,{id,t});
//收藏/取消收藏MV
export const reqMvSub = (mvid,t)=>ajax(`${apiUrl}/mv/sub/`,{mvid,t});
//收藏的mv列表
export const reqMvSublist = ()=>ajax(`${apiUrl}/mv/sublist/`);
//歌单分类
export const reqPlaylistCatlist = ()=>ajax(`${apiUrl}/playlist/catlist/`);
//歌单分类
export const reqPlaylistHot = ()=>ajax(`${apiUrl}/playlist/hot/`);
//歌单(网友精选碟)
export const reqTopPlaylist = (order,cat,limit,offset)=>ajax(`${apiUrl}/top/playlist/`,{order,cat,limit,offset});
// 13.获取精品歌单cat可以是 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
export const reqTopPlaylistHighQuality = (order,cat,limit,offset)=>ajax(`${apiUrl}/top/playlist/highquality/`,{order,cat,limit,offset});
//获取相关歌单推荐
export const reqRelatedPlaylist = (id)=>ajax(`${apiUrl}/related/playlist/`,{id});
// 14.获取歌单详情 歌单id 可选参数s最近s个收藏者
export const reqPlaylistDetail = (id,s)=>ajax(`${apiUrl}/playlist/detail/`,{id,s});
//获取音乐url 音乐id必选，码率br
export const reqSongUrl = (id,br)=>ajax(`${apiUrl}/song/url/`,{id,br});

// 15.搜索
// 16.搜索建议
// 17.获取歌词
// 18.歌曲评论
// 19.收藏单曲到歌单
// 20.专辑评论
// 21.歌单评论
// 22.mv 评论
// 23.电台节目评论
// 24.banner
// 25.获取歌曲详情
// 26.获取专辑内容
// 27.获取歌手单曲
// 28.获取歌手 mv
// 29.获取歌手专辑
// 30.获取歌手描述
// 31.获取相似歌手
// 32.获取相似歌单
// 33.相似 mv
// 34.获取相似音乐
// 35.获取最近 5 个听了这首歌的用户
// 36.获取每日推荐歌单
// 37.获取每日推荐歌曲
// 38.私人 FM
// 39.签到
// 40.喜欢音乐
// 41.垃圾桶
// 42.歌单 ( 网友精选碟 )
// 43.新碟上架
// 44.热门歌手
// 45.最新 mv
// 46.推荐 mv
// 47.推荐歌单
// 48.推荐新音乐
// 49.推荐电台
// 50.推荐节目
// 51.独家放送
// 52.mv 排行
// 53.获取 mv 数据
// 54.播放 mv/视频
// 55.排行榜
// 56.歌手榜
// 57.云盘
// 58.电台 - 推荐
// 59.电台 - 分类
// 60.电台 - 分类推荐
// 61.电台 - 订阅
// 62.电台 - 详情
// 63.电台 - 节目
// 64.给评论点赞
// 65.获取动态
// 66.热搜列表(简略)
// 67.发送私信
// 68.发送私信歌单
// 69.新建歌单
// 70.收藏/取消收藏歌单
// 71.歌单分类
// 72.收藏的歌手列表
// 73.订阅的电台列表
// 74.相关歌单推荐
// 75.付费精选接口
// 76.音乐是否可用检查接口
// 77.登录状态
// 78.获取视频播放地址
// 79.发送/删除评论
// 80.热门评论
// 81.视频评论
// 82.退出登录
// 83.所有榜单
// 84.所有榜单内容摘要
// 85.收藏视频
// 86.收藏 MV
// 87.视频详情
// 88.相关视频
// 89.关注用户
// 90.新歌速递
// 91.喜欢音乐列表(无序)
// 92.收藏的 MV 列表
// 93.获取最新专辑
// 94.听歌打卡
// 95.获取视频标签下的视频
// 96.已收藏专辑列表
// 97.获取动态评论
// 98.歌单收藏者列表
// 99.云盘歌曲删除
// 100.热门话题
// 101.电台 - 推荐类型
// 102.电台 - 非热门类型
// 103.电台 - 今日优选
// 104.心动模式/智能播放
// 105.转发动态
// 106.删除动态
// 107.分享歌曲、歌单、mv、电台、电台节目到动态
// 108.通知-私信
// 109.通知-评论
// 110.通知-@我
// 111.通知-通知
// 112.设置
// 113.云盘数据详情
// 114.私信内容
// 115.我的数字专辑
// 116.batch批量请求接口
// 117.获取视频标签列表
// 118.全部mv
// 119.网易出品mv
// 120.收藏/取消收藏专辑
// 121.专辑动态信息
// 122.热搜列表(详细)
// 123.更换绑定手机
// 124.检测手机号码是否已注册
// 125.初始化昵称
// 126.更新歌单描述
// 127.更新歌单名
// 128.更新歌单标签
// 129.默认搜索关键词
// 130.删除歌单
// 131.电台banner
// 132.用户电台
// 133.热门电台
// 134.电台 - 节目详情
// 135.电台 - 节目榜
// 136.电台 - 新晋电台榜/热门电台榜
// 137.类别热门电台
// 138.云村热评
// 139.电台24小时节目榜
// 140.电台24小时主播榜
// 141.电台最热主播榜
// 142.电台主播新人榜
// 143.电台付费精品榜
// 144.歌手热门50首歌曲
// 145.购买数字专辑
// 146.获取 mv 点赞转发评论数数据
// 147.获取视频点赞转发评论数数据
// 148.调整歌单顺序
// 149.调整歌曲顺序
// 150.独家放送列表
