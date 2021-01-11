/**
 * 封装网易云音乐api
 * 网易云音乐api地址
 * 文档地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=安装
 * 该文件用于全局配置网易云api的请求地址，例如在自己的服务器也搭建了api服务器
 * 将apiUrl替换成自己服务器的地址即可
 * @type {string}
 */
const apiUrl='http://yumbo.top:3000';//网易云音乐服务器地址，服务器搭建访问前面文档地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=安装
import ajax from '../../ajax';    //导入封装的axios

/**定义api调用开始 未声明可选参数的都是必选参数**/
/**
 * 手机登录
 * @param phone  手机号码
 * @param password 密码
 * @param countrycode 可选参数，国家码，例如美国手机号传入1
 * @returns {Promise<unknown>}
 */
export const reqLoginPhone = (phone,password,countrycode)=>ajax(`${apiUrl}/login/cellphone/`,{phone,password,countrycode});
/**
 * 邮箱登录
 * @param email  邮箱号
 * @param password  密码
 * @returns {Promise<unknown>}
 */
export const reqLoginEmail = (email,password)=>ajax(`${apiUrl}/login/`,{email,password});
/**
 * 刷新登录
 * 刷新登录状态
 * @returns {Promise<unknown>}
 */
export const reqLoginRefresh = ()=>ajax(`${apiUrl}/login/refresh/`);
/**
 * 发送验证码
 * @param phone 手机号码
 * @param ctcode  可选参数，国家区号,默认86即中国
 * @returns {Promise<unknown>}
 */
export const reqSentCaptcha = (phone,ctcode)=>ajax(`${apiUrl}/captcha/sent/`,{phone,ctcode});
/**
 * 验证验证码
 * 传入手机号码和验证码, 可校验验证码是否正确
 * @param phone  手机号码
 * @param captcha 验证码
 * @param ctcode 可选参数，默认中国86
 * @returns {Promise<unknown>}
 */
export const reqVerifyCaptcha = (phone,captcha,ctcode)=>ajax(`${apiUrl}/captcha/verify/`,{phone,captcha,ctcode});
/**
 * 注册(修改密码)
 * 传入手机号码和验证码,密码,昵称, 可注册网易云音乐账号(同时可修改密码)
 * @param captcha 验证码
 * @param phone  手机号码
 * @param password 密码
 * @param nickname 昵称
 * @returns {Promise<unknown>}
 */
export const reqRegisterPhone = (captcha,phone,password,nickname)=>ajax(`${apiUrl}/register/cellphone/`,{captcha,phone,password,nickname});
/**
 * 检测手机号码是否已注册
 * @param phone 手机号码
 * @returns {Promise<unknown>}
 */
export const reqExistencePhone = (phone)=>ajax(`${apiUrl}/cellphone/existence/check/`,{phone});
/**
 * 初始化名称
 * 刚注册的账号(需登录),调用此接口 ,可初始化昵称
 * @param nickname  昵称
 * @returns {Promise<unknown>}
 */
export const reqInitNickname = (nickname)=>ajax(`${apiUrl}/activate/init/profile/`,{nickname});
/**
 * 更换绑定手机
 * 更换绑定手机(流程:先发送验证码到原手机号码,再发送验证码到新手机号码然后再调用此接口)
 * @param oldcaptcha 原手机验证码
 * @param captcha 新手机验证码
 * @param phone 手机号码
 * @param ctcode 国家区号,默认86即中国
 * @returns {Promise<unknown>}
 */
export const reqRebindPhone = (oldcaptcha,captcha,phone,ctcode)=>ajax(`${apiUrl}/rebind/`,{oldcaptcha,captcha,phone,ctcode});
/**
 * 退出登录
 * @returns {Promise<unknown>}
 */
export const reqLogout = ()=>ajax(`${apiUrl}/logout/`);
/**
 * 登录状态
 * @returns {Promise<unknown>}
 */
export const reqLoginStatus = ()=>ajax(`${apiUrl}/login/status/`);
/**
 * 获取用户详情
 * 传入用户 id, 可以获取用户详情
 * @param uid 用户id
 * @returns {Promise<unknown>}
 */
export const reqUserDetail = (uid)=>ajax(`${apiUrl}/user/detail/`,{uid});
/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量  (登陆后可用)
 * @returns {Promise<unknown>}
 */
export const reqSubcount = ()=>ajax(`${apiUrl}/user/subcount/`);
/**
 * 更新用户信息  所有参数都必选
 * @param gender    性别 0:保密 1:男性 2:女性
 * @param birthday  出生日期,时间戳 unix timestamp
 * @param nickname  用户昵称
 * @param province  省份id
 * @param city      城市id
 * @param signature 用户签名
 * @returns {Promise<unknown>}
 */
export const reqUserUpdate = (gender,birthday,nickname,province,city,signature)=>ajax(`${apiUrl}/user/update/`,{gender,birthday,nickname,province,city,signature});
/**
 * 获取用户歌单
 * 传入用户 id, 可以获取用户歌单
 * @param uid  用户id
 * @returns {Promise<unknown>}
 */
export const reqUserPlayList = (uid)=>ajax(`${apiUrl}/user/playlist/`,{uid});
/**
 * 更新歌单，所有参数必选
 * @param id    歌单id
 * @param name  歌单名字
 * @param desc  歌单描述
 * @param tags  歌单标签(多个用';'隔开,只能用官方规定的标签)
 * @returns {Promise<unknown>}
 */
export const reqPlayListUpdate = (id,name,desc,tags)=>ajax(`${apiUrl}/playlist/update/`,{id,name,desc,tags});
/**
 * 更新歌单描述
 * @param id 歌单id
 * @param desc 歌单描述
 * @returns {Promise<unknown>}
 */
export const reqPlayListDescUpdate = (id,desc)=>ajax(`${apiUrl}/playlist/desc/update/`,{id,desc});
/**
 * 更新歌单名
 * 单独更新用户歌单名
 * @param id  歌单id
 * @param name  歌单名
 * @returns {Promise<unknown>}
 */
export const reqPlayListNameUpdate = (id,name)=>ajax(`${apiUrl}/playlist/name/update/`,{id,name});
/**
 * 更新歌单标签
 * @param id 歌单id
 * @param tags 歌单标签
 * @returns {Promise<unknown>}
 */
export const reqPlayListTagsUpdate = (id,tags)=>ajax(`${apiUrl}/playlist/tags/update/`,{id,tags});
/**
 * 调整歌单顺序
 * @param ids   歌单id列表  调整顺序例如ids=[111,222]
 * @returns {Promise<unknown>}
 */
export const reqPlayListOrderUpdate = (ids)=>ajax(`${apiUrl}/playlist/order/update/`,{ids});
/**
 * 调整歌曲顺序
 * 例如：?pid=2039116066&ids=[5268328,1219871]
 * @param pid 歌单id
 * @param ids 歌曲id列表
 * @returns {Promise<unknown>}
 */
export const reqSongOrderUpdate = (pid,ids)=>ajax(`${apiUrl}/song/order/update/`,{pid,ids});
/**
 * 获取用户电台(需要登录后)
 * 登录后传入用户 id, 可以获取用户电台
 * @param uid 用户id
 * @returns {Promise<unknown>}
 */
export const reqUserDj = (uid)=>ajax(`${apiUrl}/user/dj/`,{uid});
/**
 * 获取用户关注列表
 * @param uid       用户id
 * @param limit    默认值为30
 * @param offset   偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqUserFollows = (uid,limit,offset)=>ajax(`${apiUrl}/user/follows/`,{uid,limit,offset});
/**
 * 获取用户粉丝列表
 * @param uid  用户id
 * @param limit 默认为30  可选
 * @param lasttime  可选 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
 * @returns {Promise<unknown>}
 */
export const reqUserFolloweds = (uid,limit,lasttime)=>ajax(`${apiUrl}/user/followeds/`,{uid,limit,lasttime});
/**
 * 获取用户动态
 * 传入用户 id, 可以获取用户动态
 * @param uid  用户id
 * @param limit  可选 返回数量，默认30
 * @param lasttime  可选 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
 * @returns {Promise<unknown>}  18分享单曲   19分享专辑   17、28分享电台节目   22转发  39发布视频  35、13分享歌单  24分享专栏文章  41、21分享视频
 */
export const reqUserEvent = (uid,limit,lasttime)=>ajax(`${apiUrl}/user/event/`,{uid,limit,lasttime});
/**
 * 转发用户动态
 * @param evId   动态 id
 * @param forwards   转发的评论
 * @returns {Promise<unknown>}
 */
export const reqEventForward = (evId,forwards)=>ajax(`${apiUrl}/event/forward/`,{evId,forwards});
/**
 * 删除用户动态
 * @param evId  动态 id
 * @returns {Promise<unknown>}
 */
export const reqEventDel = (evId)=>ajax(`${apiUrl}/event/del/`,{evId});
/**
 * 分享歌曲、歌单、mv、电台、电台节目到动态
 * @param id     资源 id （歌曲，歌单，mv，电台，电台节目对应 id）
 * @param type  可选  资源类型，默认歌曲 song，可传 song,playlist,mv,djradio,djprogram
 * @param msg   可选  内容，140 字限制，支持 emoji，@用户名（/user/follows接口获取的用户名，用户名后和内容应该有空格），图片暂不支持
 * @returns {Promise<unknown>}
 */
export const reqShareResource = (id,type,msg)=>ajax(`${apiUrl}/share/resource/`,{id,type,msg});
/**
 * 获取动态评论（需要登录后调用）
 * @param threadId   动态 id，可通过 /event，/user/event 接口获取
 * @returns {Promise<unknown>}
 */
export const reqCommentEvent = (threadId)=>ajax(`${apiUrl}/comment/event/`,{threadId});
/**
 * 关注/取消关注用户（需要登录）
 * @param id    用户id
 * @param t     1为关注，其它为取消
 * @returns {Promise<unknown>}
 */
export const reqFollow = (id,t)=>ajax(`${apiUrl}/follow/`,{id,t});
/**
 * 获取用户播放记录
 * @param uid   用户 id
 * @param type  type=1 时只返回 weekData, type=0 时返回 allData
 * @returns {Promise<unknown>}
 */
export const reqUserRecord = (uid,type)=>ajax(`${apiUrl}/user/record/`,{uid,type});
/**
 * 获取热门话题
 * @param limit     取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @returns {Promise<unknown>}
 */
export const reqHotTopic = (limit,offset)=>ajax(`${apiUrl}/hot/topic/`,{limit,offset});
/**
 * 云村热评(需要登录)
 * @returns {Promise<unknown>}
 */
export const reqCommentHotwallList = ()=>ajax(`${apiUrl}/comment/hotwall/list/`);
/**
 * 心动模式/智能播放
 * @param pid   必选参数，歌单id
 * @param sid   可选 要开始播放的歌曲的 id
 * @returns {Promise<unknown>}
 */
export const reqPlayModeIntelligenceList = (pid,sid)=>ajax(`${apiUrl}/playmode/intelligence/list/`,{pid,sid});
/**
 * 获取动态消息
 * 获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息 ，如分享的视频，音乐，照片等！
 * @param pagesize  每页数据,默认20
 * @param lasttime  返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
 * @returns {Promise<unknown>}
 */
export const reqEvent = (pagesize,lasttime)=>ajax(`${apiUrl}/event/`,{pagesize,lasttime});
/**
 * 歌手分类列表
 * @param cat   必选 cat必选即category Code,歌手类型,默认 1001,返回华语男歌手数据
 * @param limit 可选参数默认30
 * @param offset 可选参数 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param initial 可选参数 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
 * @param type  可选参数 type(全部-1，男歌手1，女歌手2，乐队3)/
 * @param area  可选参数 area（全部-1，华语7，欧美96，日本8，韩国16，其它0）
 * @returns {Promise<unknown>}
 */
export const reqArtistList = (cat,limit,offset,initial,type,area)=>ajax(`${apiUrl}/artist/list/`,{cat,limit,offset,initial,type,area});
/**
 * 收藏/取消收藏歌手
 * @param artistId 歌手 id
 * @param t 操作,1 为收藏,其他为取消收藏
 * @returns {Promise<unknown>}
 */
export const reqArtistSub = (artistId,t)=>ajax(`${apiUrl}/artist/sub/`,{artistId,t});
/**
 * 歌手热门50首歌曲
 * @param id    歌手id
 * @returns {Promise<unknown>}
 */
export const reqArtistTopSong = (id)=>ajax(`${apiUrl}/artist/top/song/`,{id});
/**
 * 收藏歌手列表
 * @returns {Promise<unknown>}
 */
export const reqArtistSublist = ()=>ajax(`${apiUrl}/artist/sublist/`);
/**
 * 收藏视频
 * @param id    视频id
 * @param t  1表示收藏，其它表示取消
 * @returns {Promise<unknown>}
 */
export const reqVideoSub = (id,t)=>ajax(`${apiUrl}/video/sub/`,{id,t});
/**
 * 收藏/取消收藏MV
 * @param mvid 视频id
 * @param t 1 为收藏,其他为取消收藏
 * @returns {Promise<unknown>}
 */
export const reqMvSub = (mvid,t)=>ajax(`${apiUrl}/mv/sub/`,{mvid,t});
/**
 * 收藏的mv列表
 * @returns {Promise<unknown>}
 */
export const reqMvSublist = ()=>ajax(`${apiUrl}/mv/sublist/`);
/**
 * 歌单分类
 * 获取歌单分类,包含 category 信息
 * @returns {Promise<unknown>}
 */
export const reqPlaylistCatlist = ()=>ajax(`${apiUrl}/playlist/catlist/`);
/**
 * 热门歌单分类
 * 可获取歌单分类,包含 category 信息
 * @returns {Promise<unknown>}
 */
export const reqPlaylistHot = ()=>ajax(`${apiUrl}/playlist/hot/`);
/**
 * 歌单(网友精选碟)
 * @param order 可选参数   可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * @param cat   cat按种类搜索歌单 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param tag   tag按标签搜索歌单 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)  cat和tag同时传入返回cat的数据
 * @param limit 取出评论数量 , 默认为 50
 * @param offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 * @returns {Promise<unknown>}
 */
export const reqTopPlaylist = (order,cat,tag,limit,offset)=>ajax(`${apiUrl}/top/playlist/`,{order,cat,tag,limit,offset});
/**
 * 获取精品歌单
 * @param cat  按种类搜索, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param tag  按标签搜索, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)  cat和tag同时传入返回cat的数据
 * @param limit 取出评论数量 , 默认为 20
 * @param before    分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
 * @returns {Promise<unknown>}
 */
export const reqTopPlaylistHighQuality = (cat,tag,limit,before)=>ajax(`${apiUrl}/top/playlist/highquality/`,{cat,tag,limit,before});
/**
 * 相关歌单推荐
 * @param id    歌单id
 * @returns {Promise<unknown>}
 */
export const reqRelatedPlaylist = (id)=>ajax(`${apiUrl}/related/playlist/`,{id});
/**
 * 获取歌单详情
 * 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，
 * 但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds
 * 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
 * @param id    歌单id
 * @param s     歌单最近的 s 个收藏者
 * @returns {Promise<unknown>}
 */
export const reqPlaylistDetail = (id,s)=>ajax(`${apiUrl}/playlist/detail/`,{id,s});
/**
 * 获取音乐url
 * 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url( 不需要登录 )
 * 注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
 * @param id  必选参数  音乐 id
 * @param br    码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * @returns {Promise<unknown>}
 */
export const reqSongUrl = (id,br)=>ajax(`${apiUrl}/song/url/`,{id,br});
/**
 * 音乐是否可用
 * 传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
 * @param id    必选，歌曲id
 * @param br    可选，码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * @returns {Promise<unknown>}
 */
export const reqCheckmusic = (id,br)=>ajax(`${apiUrl}/check/music/`,{id,br});
/**
 * 搜索
 * 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 ,
 * 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ),
 * 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
 * @param keywords  必选参数，关键字
 * @param limit     可选参数，返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param type      搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 * @returns {Promise<unknown>}
 */
export const reqSearch = (keywords,limit,offset,type)=>ajax(`${apiUrl}/search/`,{keywords,limit,offset,type});
/**
 * 默认搜索关键字
 * 获取默认搜索关键字
 * @returns {Promise<unknown>}
 */
export const reqSearchDefault = ()=>ajax(`${apiUrl}/search/default/`);
/**
 * 搜索列表（简略搜索）
 * 获取热门搜索列表
 * @returns {Promise<unknown>}
 */
export const reqSearchHot = ()=>ajax(`${apiUrl}/search/hot/`);
/**
 * 热搜列表（详细搜索）
 * 获取热门搜索列表
 * @returns {Promise<unknown>}
 */
export const reqSearchHotDetail = ()=>ajax(`${apiUrl}/search/hot/detail/`);
/**
 * 搜索建议
 * 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * @param keywords  关键字
 * @param type      如果传 'mobile' 则返回移动端数据
 * @returns {Promise<unknown>}
 */
export const reqSearchSuggest = (keywords,type)=>ajax(`${apiUrl}/search/suggest/`,{keywords,type});
/**
 * 搜索多重匹配
 * 传入搜索关键词可获得搜索结果
 * @param keywords    关键字
 * @returns {Promise<unknown>}
 */
export const reqSearchMultimatch = (keywords)=>ajax(`${apiUrl}/search/multimatch/`,{keywords});
/**
 * 新建歌单
 * 传入歌单名字可新建歌单
 * @param name  歌单名
 * @param privacy   是否设置为隐私歌单，默认否，传'10则设置成隐私歌单'
 * @returns {Promise<unknown>}
 */
export const reqPlaylistCreate = (name,privacy)=>ajax(`${apiUrl}/playlist/create/`,{name,privacy});
/**
 * 删除歌单
 * 传入歌单id可删除歌单
 * @param id    歌单id
 * @returns {Promise<unknown>}
 */
export const reqPlaylistDelete = (id)=>ajax(`${apiUrl}/playlist/delete/`,{id});
/**
 * 收藏/取消收藏歌单
 * 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
 * @param t     类型，1.收藏，2.取消收藏
 * @param id    歌单id
 * @returns {Promise<unknown>}
 */
export const reqPlaylistSubscribe = (t,id)=>ajax(`${apiUrl}/playlist/subscribe/`,{t,id});
/**
 * 歌单收藏者
 * 传入歌单id可获取歌单的所有收藏者
 * @param id    必选，歌单id
 * @param limit 可选，取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @returns {Promise<unknown>}
 */
export const reqPlaylistSubscribers = (id,limit,offset)=>ajax(`${apiUrl}/playlist/Subscribers/`,{id,limit,offset});
/**
 * 对歌单添加或删除歌曲
 * 可以添加到歌单或者从歌单删除某首歌曲需要登陆
 * @param op    从歌单增加单曲为 add, 删除为 del
 * @param pid   歌单 id tracks: 歌曲 id,可多个,用逗号隔开
 * @returns {Promise<unknown>}
 */
export const reqPlaylistTracks = (op,pid)=>ajax(`${apiUrl}/playlist/tracks/`,{op,pid});
/**
 * 获取歌词
 * 传入音乐id可获得对应音乐的歌词（不需要登录）
 * @param id    音乐id
 * @returns {Promise<unknown>}
 */
export const reqLyric = (id)=>ajax(`${apiUrl}/lyric/`,{id});
/**
 * 新歌速递
 * 可获取新歌速递
 * @param type  地区类型id(全部0，华语7，欧美96，日本8，韩国16)
 * @returns {Promise<unknown>}
 */
export const reqTopSong = (type)=>ajax(`${apiUrl}/top/song`,{type});
/**
 * 歌曲评论
 * 传入音乐id和limit参数，可获得该音乐得所有评论(不需要登陆)
 * @param id    音乐 id
 * @param limit 取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentMusic = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/music/`,{id,limit,offset,before});
/**
 * 专辑评论
 * 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )
 * @param id    专辑 id
 * @param limit 取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentAlbum = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/album/`,{id,limit,offset,before});
/**
 * 歌单评论
 * 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
 * @param id    歌单 id
 * @param limit 取出评论数量 , 默认为 20
 * @param offset     偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentPlaylist = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/playlist/`,{id,limit,offset,before});
/**
 * mv 评论
 * 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
 * @param id    mv的id
 * @param limit  取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentMv = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/mv/`,{id,limit,offset,before});
/**
 * 电台节目评论
 * 传入音乐 id 和 limit 参数 , 可获得该 电台节目 的所有评论 ( 不需要登录 )
 * @param id
 * @param limit
 * @param offset
 * @param before
 * @returns {Promise<unknown>}
 */
export const reqCommentDj = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/dj/`,{id,limit,offset,before});
/**
 * 视频评论
 * 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 ( 不需要登录 )
 * @param id    视频的 id
 * @param limit     取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentVideo = (id,limit,offset,before)=>ajax(`${apiUrl}/comment/video/`,{id,limit,offset,before});
/**
 * 热门评论
 * 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 )
 * @param id    资源 id
 * @param type   数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频类型（歌曲0，mv1，歌单2，专辑3，电台4，视频5）
 * @param limit 取出评论数量 , 默认为 20
 * @param offset    偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns {Promise<unknown>}
 */
export const reqCommentHot = (id,type,limit,offset,before)=>ajax(`${apiUrl}/comment/hot/`,{id,type,limit,offset,before});
/**
 * 给评论点赞
 * 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
 * @param id    资源 id, 如歌曲 id,mv id
 * @param cid   评论 id
 * @param t     是否点赞 ,1 为点赞 ,0 为取消点赞
 * @param type  数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应（歌曲0，mv1，歌单2，专辑3，电台4，视频5，动态6）
 * @returns {Promise<unknown>}
 */
export const reqCommentLike = (id,cid,t,type)=>ajax(`${apiUrl}/comment/like/`,{id,cid,t,type});
/**
 * 发送/删除评论
 * @param t         1 发送, 2 回复，0删除  评论
 * @param type      （歌曲0，mv1，歌单2，专辑3，电台4，视频5，动态6）
 * @param id        资源id
 * @param content   要发送的内容
 * @param commentId 回复的评论id (回复评论时必填)
 * @returns {Promise<unknown>}
 */
export const reqComment = (t,type,id,content,commentId)=>ajax(`${apiUrl}/comment/`,{t,type,id,content,commentId});
/**
 * 获取轮播图banner
 * @param type  （pc0，android1，iphone2，ipad3）
 * @returns {Promise<unknown>}
 */
export const reqBanner = (type)=>ajax(`${apiUrl}/banner/`,{type});
/**
 * 资源点赞
 * @param type  (mv1,电台4，视频5，动态6)
 * @param t     1 为点赞,其他未取消点赞
 * @param id    资源 id
 * @returns {Promise<unknown>}
 */
export const reqResourceLike = (type,t,id)=>ajax(`${apiUrl}/resource/like/`,{type,t,id});
/**
 * 获取歌曲详情
 * 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)
 * @param ids   音乐 id, 如 ids=347230,347231
 * @returns {Promise<unknown>}
 */
export const reqSongDetail = (ids)=>ajax(`${apiUrl}/song/detatil/`,{ids});
/**
 * 获取专辑内容
 * @param id    专辑 id
 * @returns {Promise<unknown>}
 */
export const reqAlbum = (id)=>ajax(`${apiUrl}/album/`,{id});
/**
 * 专辑动态信息
 * 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
 * @param id    专辑 id
 * @returns {Promise<unknown>}
 */
export const reqAlbumDetailDynamic = (id)=>ajax(`${apiUrl}/album/detail/dynamic`,{id});
/**
 * 收藏/取消收藏专辑
 * @param id    专辑 id
 * @param t     1 为收藏,其他为取消收藏
 * @returns {Promise<unknown>}
 */
export const reqAlbumSub = (id,t)=>ajax(`${apiUrl}/album/sub/`,{id,t});
/**
 * 获取已收藏专辑列表
 * @param limit     取出数量 , 默认为 25
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*25, 其中 25 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqAlbumSublist = (limit,offset)=>ajax(`${apiUrl}/album/sublist/`,{limit,offset});
/**
 * 获取歌手单曲
 * 传入歌手 id, 可获得歌手部分信息和热门歌曲
 * @param id     歌手 id, 可由搜索接口获得
 * @returns {Promise<unknown>}
 */
export const reqArtists = (id)=>ajax(`${apiUrl}/artists/`,{id});
/**
 * 获取歌手MV
 * 传入歌手 id, 可获得歌手 mv 信息 , 具体 mv 播放地址可调 用/mv传入此接口获得的 mvid 来拿到 , 如 : /artist/mv?id=6452,/mv?mvid=5461064
 * @param id    歌手 id, 可由搜索接口获得
 * @returns {Promise<unknown>}
 */
export const reqArtistsMv = (id)=>ajax(`${apiUrl}/artists/mv/`,{id});
/**
 * 获取歌手专辑
 * @param id        歌手 id
 * @param limit     取出数量 , 默认为 50
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqArtisiAlbum = (id,limit,offset)=>ajax(`${apiUrl}/artist/album/`,{id,limit,offset});
/**
 * 获取歌手描述
 * @param id    歌手 id
 * @returns {Promise<unknown>}
 */
export const reqArtistDesc = (id)=>ajax(`${apiUrl}/artist/desc/`,{id});
/**
 * 获取相似歌手
 * @param id    歌手 id
 * @returns {Promise<unknown>}
 */
export const reqSimiArtisit = (id)=>ajax(`${apiUrl}/simi/artist/`,{id});
/**
 * 获取相似歌单
 * @param id    歌曲 id
 * @returns {Promise<unknown>}
 */
export const reqSimiPlaylist = (id)=>ajax(`${apiUrl}/simi/playlist/`,{id});
/**
 * 相似mv
 * @param mvid  mv的id
 * @returns {Promise<unknown>}
 */
export const reqSimiMv = (mvid)=>ajax(`${apiUrl}/simi/mv/`,{mvid});
/**
 * 获取相似音乐
 * @param id    歌曲 id
 * @returns {Promise<unknown>}
 */
export const reqSimiSong = (id)=>ajax(`${apiUrl}/simi/song/`,{id});
/**
 * 获取最近5个听了这首歌的用户
 * @param id    歌曲 id
 * @returns {Promise<unknown>}
 */
export const reqSimiUser = (id)=>ajax(`${apiUrl}/artist/user`,{id});
/**
 * 获取每日推荐歌单
 * 可获得每日推荐歌单 ( 需要登录 )
 * @returns {Promise<unknown>}
 */
export const reqRecommandResource = ()=>ajax(`${apiUrl}/recommnd/resource`);

/**
 * 获取每日推荐歌曲  调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
 * @returns {Promise<unknown>}
 */
export const reqRecommendSongs = ()=>ajax(`${apiUrl}/recommend/song/`);
/**
 * 私人FM  需要登录
 * @returns {Promise<unknown>}
 */
export const reqPersonal_fm = ()=>ajax(`${apiUrl}/personal_fm/`);
/**
 * 签到
 * 传入签到类型 (可不传 , 默认安卓端签到 ), 可签到 ( 需要登录 ), 其中安卓端签到可获得 3 点经验 , web/PC 端签到可获得 2 点经验
 * @param type   签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
 * @returns {Promise<unknown>}
 */
export const reqDaily_signin = (type)=>ajax(`${apiUrl}/daily_signin/`,{type});
/**
 * 喜欢音乐  调用此接口 , 传入音乐 id, 可喜欢该音乐
 * @param id    歌曲 id
 * @returns {Promise<unknown>}
 */
export const reqLike = (id)=>ajax(`${apiUrl}/like/`,{id});
/**
 * 喜欢音乐列表
 * 传入用户 id, 可获取已喜欢音乐id列表(id数组)
 * @param uid   用户id
 * @returns {Promise<unknown>}
 */
export const reqLikeList = (uid)=>ajax(`${apiUrl}/likelist/`,{uid});
/**
 * 垃圾桶
 * 传入音乐 id, 可把该音乐从私人 FM 中移除至垃圾桶
 * @param id    音乐id
 * @returns {Promise<unknown>}
 */
export const reqFm_Trash = (id)=>ajax(`${apiUrl}/fm_trash/`,{id});
/**
 * 新碟上架
 * 获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30
 * @param limit     取出数量 , 默认为 50
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqTopAlbum = (limit,offset)=>ajax(`${apiUrl}/top/album/`,{limit,offset});
/**
 * 获取最新专辑
 * 获取云音乐首页新碟上架数据
 * @returns {Promise<unknown>}
 */
export const reqAlbumNewest = ()=>ajax(`${apiUrl}/album/newest/`);
/**
 * 听歌打卡 time歌曲播放视觉单位秒
 * @param id    歌曲 id, sourceid: 歌单或专辑 id
 * @param time
 * @returns {Promise<unknown>}
 */
export const reqScrobble = (id,time)=>ajax(`${apiUrl}/scrobble/`,{id,time});
/**
 * 热门歌手
 * @param limit     取出数量 , 默认为 50
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqTopArtists = (limit,offset)=>ajax(`${apiUrl}/top/artists/`,{limit,offset});
/**
 * 全部mv  都为可选参数
 * @param area  地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 type: 类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
 * @param type  类型,可选值为全部,官方版,原生,现场版,网易出品,不填则为全部
 * @param order 排序,可选值为上升最快,最热,最新,不填则为上升最快
 * @param limit 取出数量 , 默认为 30
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqMvAll = (area,type,order,limit,offset)=>ajax(`${apiUrl}/mv/all/`,{area,type,order,limit,offset});
/**
 * 最新mv
 * @param area      地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部
 * @param limit     取出数量 , 默认为 30
 * @returns {Promise<unknown>}
 */
export const reqMvFirst = (area,limit)=>ajax(`${apiUrl}/mv/first/`,{area,limit});
/**
 * 网易出品mv
 * @param limit     取出数量 , 默认为 30
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqMvExclusiveRcmd = (limit,offset)=>ajax(`${apiUrl}/mv/exclusive/rcmd/`,{limit,offset});
/**
 * 推荐mv
 * @returns {Promise<unknown>}
 */
export const reqPersonalizedMv = ()=>ajax(`${apiUrl}/personalized/mv/`);
/**
 * 推荐歌单
 * @param limit 取出数量 , 默认为 30 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqPersonalized = (limit)=>ajax(`${apiUrl}/personalized/`,{limit});
/**
 * 获取推荐新音乐
 * @returns {Promise<unknown>}
 */
export const reqPersonalizedNewSong = ()=>ajax(`${apiUrl}/personalized/newsong/`);
/**
 * 获取推荐电台
 * @returns {Promise<unknown>}
 */
export const reqPersonalizedDjprogram = ()=>ajax(`${apiUrl}/personalized/djprogram/`);
/**
 * 获取推荐节目
 * @returns {Promise<unknown>}
 */
export const reqProgramRecommend = ()=>ajax(`${apiUrl}/program/recommend/`);
/**
 * 独家放送(入口列表)
 * @returns {Promise<unknown>}
 */
export const reqPersonalizedPrivatecontent = ()=>ajax(`${apiUrl}/personalized/privatecontent/`);
/**
 * 独家放松列表
 * @param limit     返回数量 , 默认为 60
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqPersonalizedPrivateContentList = (limit,offset)=>ajax(`${apiUrl}/personalized/privatecontent/list/`,{limit,offset});
/**
 * 取出数量 , 默认为 30
 * @param limit 取出数量 , 默认为 30
 * @param area  地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @param offset    偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * @returns {Promise<unknown>}
 */
export const reqTopMv = (limit,area,offset)=>ajax(`${apiUrl}/top/mv/`,{limit,area,offset});
/**
 * 获取mv数据
 * 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 ,
 * 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * @param mvid      mvid是mv的id
 * @returns {Promise<unknown>}
 */
export const reqMvDetail = (mvid)=>ajax(`${apiUrl}/mv/detail/`,{mvid});
/**
 * 获取mv点赞转发评论数数据
 * 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
 * @param mvid      mvid是mv的id
 * @returns {Promise<unknown>}
 */
export const reqMvDetailInfo = (mvid)=>ajax(`${apiUrl}/mv/detail/`,{mvid});
/**
 * 获取mv地址
 * @param id    mv的id
 * @returns {Promise<unknown>}
 */
export const reqMvUrl = (id)=>ajax(`${apiUrl}/mv/url/`,{id});
/**
 * 获取视频标签列表
 * @returns {Promise<unknown>}
 */
export const reqVideoGroupList = ()=>ajax(`${apiUrl}/video/group/list/`);
/**
 * 获取视频标签下的视频
 * 传入id,可获取到相关的视频。 (ps：无法分页，每次请求返回内容都不一样，官方桌面软件是打开先请求两次，然后每次滚动到底部的时候再请求一次)
 * @param id    videoGroup 的 id
 * @returns {Promise<unknown>}
 */
export const reqVideoGroup = (id)=>ajax(`${apiUrl}/video/group/`,{id});
/**
 * 相关视频
 * @param id    视频 的 id
 * @returns {Promise<unknown>}
 */
export const reqRelatedAllVideo = (id)=>ajax(`${apiUrl}/related/allvideo/`,{id});
/**
 * 视频详情
 * @param id    视频 的 id
 * @returns {Promise<unknown>}
 */
export const reqVideoDetail = (id)=>ajax(`${apiUrl}/video/detail/`,{id});
/**
 * 获取视频点赞转发评论数数据
 * @param vid   视频的id
 * @returns {Promise<unknown>}
 */
export const reqVideoDetailInfo = (vid)=>ajax(`${apiUrl}/video/detail/info/`,{vid});
/**
 * 获取视频播放地址
 * @param id    视频的id
 * @returns {Promise<unknown>}
 */
export const reqVideoUrl = (id)=>ajax(`${apiUrl}/video/url/`,{id});
/**
 * 获取排行榜数据
 * @param idx 必选参数
 "0": 云音乐新歌榜,   "1": 云音乐热歌榜,    "2": 网易原创歌曲榜,   "3": 云音乐飙升榜,    "4": 云音乐电音榜,    "5": UK排行榜周榜,
 "6": 美国Billboard周榜 "7": KTV嗨榜, "8": iTunes榜,   "9": Hit FM Top榜,   "10": 日本Oricon周榜
 "11": 韩国Melon排行榜周榜,    "12": 韩国Mnet排行榜周榜,  "13": 韩国Melon原声周榜,  "14": 中国TOP排行榜(港台榜),    "15": 中国TOP排行榜(内地榜)
 "16": 香港电台中文歌曲龙虎榜, "17": 华语金曲榜,    "18": 中国嘻哈榜,    "19": 法国 NRJ EuroHot 30周榜,  "20": 台湾Hito排行榜,
 "21": Beatport全球电子舞曲榜, "22": 云音乐ACG音乐榜,    "23": 云音乐说唱榜    "24": 云音乐古典音乐榜  "25": 云音乐电音榜
 "26": 抖音排行榜    "27": 新声榜   "28": 云音乐韩语榜    "29": 英国Q杂志中文版周榜    "30": 电竞音乐榜
 "31": 云音乐欧美热歌榜 "32": 云音乐欧美新歌榜  "33": 说唱TOP榜
 * @param id    榜单id,传入后idx将失效
 * @returns {Promise<unknown>}
 */
export const reqTopList = (idx,id)=>ajax(`${apiUrl}/top/list/`,{idx,id});
/**
 * 所有榜单
 * @returns {Promise<unknown>}
 */
export const reqAllTopList = ()=>ajax(`${apiUrl}/toplist/`);
/**
 * 所有榜单内容摘要
 * @returns {Promise<unknown>}
 */
export const reqTopListDetail = ()=>ajax(`${apiUrl}/toplist/detail/`);
/**
 * 歌手榜
 * @returns {Promise<unknown>}
 */
export const reqTopListArtist = ()=>ajax(`${apiUrl}/toplist/artist/`);
/**
 * 云盘
 * @param limit 返回数量 , 默认为 200
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*200, 其中 200 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqUserCloud = (limit,offset)=>ajax(`${apiUrl}/user/cloud/`,{limit,offset});
/**
 * 云盘数据详情
 * @param id    歌曲id必选，可以多个逗号隔开
 * @returns {Promise<unknown>}
 */
export const reqUserCloudDetail = (id)=>ajax(`${apiUrl}/user/cloud/detail/`,{id});
/**
 * 云盘歌曲删除
 * @param id    歌曲id 可以多个逗号隔开
 * @returns {Promise<unknown>}
 */
export const reqUserCloudDel = (id)=>ajax(`${apiUrl}/user/cloud/del/`,{id});
/**
 * 电台轮播图banner
 * @returns {Promise<unknown>}
 */
export const reqDjBanner = ()=>ajax(`${apiUrl}/dj/banner/`);
/**
 * 用户电台
 * @param uid   用户id
 * @returns {Promise<unknown>}
 */
export const reqUserAudio = (uid)=>ajax(`${apiUrl}/user/audio/`,{uid});
/**
 * 热门电台
 * @param limit     返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 接口地址 : /dj/hot
 * @returns {Promise<unknown>}
 */
export const reqDjHot = (limit,offset)=>ajax(`${apiUrl}/dj/hot/`,{limit,offset});
/**
 * 电台-节目榜
 * @param limit     返回数量 , 默认为 100
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqDjProgramTopList = (limit,offset)=>ajax(`${apiUrl}/dj/program/toplist/`,{limit,offset});
/**
 * 电台-付费精品
 * @param limit  返回数量 , 默认为 100 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqDjTopListPay = (limit)=>ajax(`${apiUrl}/dj/toplist/pay/`,{limit});
/**
 * 电台24小时节目榜
 * @param limit   返回数量 , 默认为 100 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqDjProgramTopListHours = (limit)=>ajax(`${apiUrl}/dj/program/toplist/hours/`,{limit});
/**
 * 电台24小时主播榜
 * @param limit   返回数量 , 默认为 100 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqDjTopListHours = (limit)=>ajax(`${apiUrl}/dj/toplist/hours/`,{limit});
/**
 * 电台主播新人榜
 * @param limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqDjTopListNewcomer = (limit)=>ajax(`${apiUrl}/dj/toplist/newcomer/`,{limit});
/**
 * 电台最热主播榜
 * @param limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns {Promise<unknown>}
 */
export const reqDjTopListPopular= (limit)=>ajax(`${apiUrl}/dj/toplist/popular/`,{limit});
/**
 * 电台 - 新晋电台榜/热门电台榜
 * @param limit     返回数量 , 默认为 100
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
 * @param type      榜单类型, new 为新晋电台榜,hot为热门电台榜
 * @returns {Promise<unknown>}
 */
export const reqDjTopList = (limit,offset,type)=>ajax(`${apiUrl}/dj/toplist/`,{limit,offset,type});
/**
 * 电台-类别热门电台
 * @param limit     返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param cateId    类别 id,可通过 /dj/category/recommend 接口获取
 * @returns {Promise<unknown>}
 */
export const reqDjRadioHot = (limit,offset,cateId)=>ajax(`${apiUrl}/dj/radio/hot/`,{limit,offset,cateId});
/**
 * 电台-推荐
 * @returns {Promise<unknown>}
 */
export const reqDjRecommend = ()=>ajax(`${apiUrl}/dj/recommend/`);
/**
 * 电台-分类
 * @returns {Promise<unknown>}
 */
export const reqDjCatelist = ()=>ajax(`${apiUrl}/dj/catelist/`);
/**
 * 电台-分类推荐
 * 登录后，传入分类,可获得对应类型电台列表
 * @param type  电台类型 , 数字 , 可通过/dj/catelist获取 , 对应关系为 id 对应 此接口的 type, name 对应类型
 * @returns {Promise<unknown>}
 */
export const reqDjRecommendType = (type)=>ajax(`${apiUrl}/dj/recommend/type/`,{type});
/**
 * 电台-订阅
 * 需要登录后传入rid, 可订阅 dj,dj 的 rid 可通过搜索指定 type='1009' 获取其 id, 如/search?keywords= 代码时间 &type=1009
 * @param rid
 * @returns {Promise<unknown>}
 */
export const reqDjSub = (rid)=>ajax(`${apiUrl}/dj/sub/`,{rid});
/**
 * 电台的订阅列表
 * 登陆后调用此接口 , 可获取订阅的电台列表
 * @returns {Promise<unknown>}
 */
export const reqDjSublist = ()=>ajax(`${apiUrl}/dj/sublist/`);
/**
 * 电台-付费精选
 * @param limit     返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqDjPaygift = (limit,offset)=>ajax(`${apiUrl}/dj/paygift/`,{limit,offset});
/**
 * 电台-非热门类型
 * 登陆后, 可获得电台非热门类型
 * @returns {Promise<unknown>}
 */
export const reqCategoryExcludeHot = ()=>ajax(`${apiUrl}/dj/category/excludehot/`);
/**
 * 电台-推荐类型
 * @returns {Promise<unknown>}
 */
export const reqDjCategoryRecommend = ()=>ajax(`${apiUrl}/dj/category/recommend/`);
/**
 * 电台-今日优选
 * 登陆后, 可获得电台今日优选
 * @returns {Promise<unknown>}
 */
export const reqDjTodayPerfered = ()=>ajax(`${apiUrl}/dj/today/perfered/`);
/**
 * 电台-详情
 * @param rid 电台的id
 * @returns {Promise<unknown>}
 */
export const reqDjDetail = (rid)=>ajax(`${apiUrl}/dj/detail/`,{rid});
/**
 * 电台-节目
 * 登录后，传入rid, 可查看对应电台的电台节目以及对应的 id, 需要 注意的是这个接口返回的 mp3Url 已经无效 , 都为 null,
 * 但是通过调用 /song/url 这 个接口 , 传入节目 id 仍然能获取到节目音频 , 如 /song/url?id=478446370 获取代 码时间的一个节目的音频
 * @param rid
 * @param limit
 * @param offset
 * @param asc
 * @returns {Promise<unknown>}
 */
export const reqDjProgram = (rid,limit,offset,asc)=>ajax(`${apiUrl}/dj/program/`,{rid,limit,offset,asc});
/**
 * 电台-节目详情
 * 传入电台节目id,可获得电台节目详情
 * @param id    电台节目 的 id
 * @returns {Promise<unknown>}
 */
export const reqDjProgramDetail = (id)=>ajax(`${apiUrl}/dj/program/detail/`,{id});
/**
 * 通知-私信
 * 登陆后 ,可获取私信
 * @param limit     返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqMsgPrivate = (limit,offset)=>ajax(`${apiUrl}/msg/private/`,{limit,offset});
/**
 * 发送私信
 * 登陆后, 传入用户 id 和要发送的信息, 可以发送私信,返回内容为历史私信,包含带歌单的私信信息(注:不能发送私信给自己)
 * @param user_ids  必选参数，用户 id,多个需用逗号隔开
 * @param msg       必选参数，要发送的信息
 * @returns {Promise<unknown>}
 */
export const reqSendText = (user_ids,msg)=>ajax(`${apiUrl}/send/text/`,{user_ids,msg});
/**
 * 私信内容
 * 登陆后 , 可获取私信内容
 * @param uid       用户 id
 * @param limit     返回数量 , 默认为 30
 * @param before    分页参数,取上一页最后一项的 time 获取下一页数据
 * @returns {Promise<unknown>}
 */
export const reqMsgPrivateHistory = (uid,limit,before)=>ajax(`${apiUrl}/msg/comments/`,{uid,limit,before});
/**
 * 发送私信(带歌单)
 * 登录后，传入用户 id 和要发送的信息和歌单 id, 可以发送带歌单的私信(注:不能发送重复的歌单)
 * @param user_ids
 * @param msg
 * @returns {Promise<unknown>}
 */
export const reqSendPlaylist = (user_ids,msg)=>ajax(`${apiUrl}/send/playlist/`,{user_ids,msg});
/**
 * 通知-评论
 * 登陆后 ,可获取评论
 * @param uid   必选参数，用户 的 id，只能和登录账号的 id 一致
 * @param limit 可选参数，返回数量 , 默认为 30
 * @param before    可选参数，分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
 * @returns {Promise<unknown>}
 */
export const reqMsgComments = (uid,limit,before)=>ajax(`${apiUrl}/msg/comments/`,{uid,limit,before});
/**
 * 通知-@我
 * @param limit     返回数量 , 默认为 30
 * @param offset    偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns {Promise<unknown>}
 */
export const reqMsgForwards = (limit,offset)=>ajax(`${apiUrl}/msg/forwards/`,{limit,offset});
/**
 * 通知-通知
 * @param limit     返回数量 , 默认为 30
 * @param lasttime  返回数据的 time ,默认-1,传入上一次返回结果的 time,将会返回下一页的数据
 * @returns {Promise<unknown>}
 */
export const reqMsgNotices = (limit,lasttime)=>ajax(`${apiUrl}/msg/notices/`,{limit,lasttime});

/**
 * 设置
 * 登陆后 ,可获取用户设置
 * @returns {Promise<unknown>}
 */
export const reqSetting = ()=>ajax(`${apiUrl}/setting/`);
/**
 * 我的数字专辑
 * 需要登录后调用
 * @returns {Promise<unknown>}
 */
export const reqDigitalAlbumPurchased = ()=>ajax(`${apiUrl}/digitalAlbum/purchased/`);
/**
 * 购买数字专辑
 * 登陆后调用此接口 ,可获取购买数字专辑的地址,把地址生成二维码后,可扫描购买专辑
 * @param id        专辑id
 * @param payment   支付方式0支付宝、3微信
 * @param quantity  购买数量
 * @returns {Promise<unknown>}
 */
export const reqDigitalAlbumOrdering = (id,payment,quantity)=>ajax(`${apiUrl}/digitalAlbum/ordering/`,{id,payment,quantity});
/**
 * 批量请求
 * 登陆后调用此接口 ,传入接口和对应原始参数(原始参数非文档里写的参数,需参考源码),可批量请求接口
 * 调用例子 :
 *  使用GET方式:/batch?/api/v2/banner/get={"clientType":"pc"}
 *  使用POST方式传入参数:{ "/api/v2/banner/get": {"clientType":"pc"} }
 * @returns {Promise<unknown>}
 */
export const reqBatch = ()=>ajax(`${apiUrl}/batch/`);
