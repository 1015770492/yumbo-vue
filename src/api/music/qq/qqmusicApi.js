/**
 * qq音乐api地址
 * 文档地址：https://jsososo.github.io/QQMusicApi/#/?id=start
 * 该文件用于全局配置网易云api的请求地址，例如在自己的服务器也搭建了api服务器
 * 将apiUrl替换成自己服务器的地址即可
 * @type {string}
 */
let apiUrl='http://yumbo.top:3300';
import ajax from '../../ajax';    //导入封装的axios

/**
 * 播放链接
 * @param id    歌曲的 songmid，必填，多个用逗号分割，该接口可用 post 或 get
 * 并不是所有的音乐都能获取到播放链接，如果是未登陆或非 vip 用户的 cookie，
 * 只能获取到非 vip 用户可听的歌曲， 其他像一些必须要购买数字专辑才能收听的歌曲，
 * 如果未购买也是无法获取的，无法获取到的播放链接则不会在返回的对象中出现，
 * 这点需要大家自己做好兼容，我这里服务器会默认使用自己会员的 cookie，如果需要使用自己的 cookie，请参考上面文档
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongUrls = (id)=>ajax(`${apiUrl}/song/urls/`,{id});
/**
 * 下载链接
 * @param id    songmid
 * @param type  默认 128 // 128：mp3 128k，320：mp3 320k，m4a：m4a格式 128k，flac：flac格式 无损，ape：ape格式 无损
 * @param mediaId 这个字段为其他接口中返回的 strMediaId 字段，可不传，不传默认同 songmid，但是部分歌曲不传可能会出现能获取到链接，但实际404， 所以有条件的大家都传吧
 * @param isRedirect    默认 0，非 0 时直接重定向到播放链接
 * 这个接口跟上个接口一样，也是依赖服务器的 Cookie 信息的，不支持批量获取，不一定是全部的歌曲都有无损、高品的， 要注意结合 size320，sizeape，sizeflac 等参数先判断下是否有播放链接
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongUrl = (id,type,mediaId,isRedirect)=>ajax(`${apiUrl}/song/url/`,{id,type,mediaId,isRedirect});
/**
 * 搜索
 * @param key   关键词 必填
 * @param pageNo 页码，默认 1
 * @param pageSize  一页返回数量，默认 20
 * @param t      搜索类型 默认为 0 // 0：单曲，2：歌单，7：歌词，8：专辑，9：歌手，12：mv
 * @returns {Promise | Promise<unknown>}
 */
export const reqSearch = (key,pageNo,pageSize,t)=>ajax(`${apiUrl}/search/`,{key,pageNo,pageSize,t});
/**
 * 获取热搜词   返回示例：k 为热搜词，n 为搜索量
 * @returns {Promise | Promise<unknown>}
 */
export const reqSearchHot = ()=>ajax(`${apiUrl}/search/hot/`);
/**
 * 快搜
 * @param key   关键词 必填
 * 快速给出少量符合条件的歌曲、mv、专辑、歌手
 * @returns {Promise | Promise<unknown>}
 */
export const reqQuick = (key)=>ajax(`${apiUrl}/quick/`,{key});
/**
 * 查找音乐，单个查找
 * @param key 关键词
 * 这个接口就像是简化版的搜索，根据关键词获取到搜出的第一个歌曲，不过他会直接带上播放链接，参数为 url，
 * 如果没有则表示无法获取到播放链接。这个接口的作用是，对于其他平台的歌单如果需要获取到企鹅音乐的信息时，
 * 可以通过 歌名 + 歌手 + 专辑 等关键词获取大致的歌曲，当然这是并不能保障稳定的。
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongFind = (key)=>ajax(`${apiUrl}/song/find/`,{key});
/**
 * 批量查找音乐
 * @param data  对象
 * @param key   歌曲id
 * @param value 搜索关键词
 * 同样，并不是所有传过去的 id 都会有返回，没返回就是没有找到，返回的歌曲也都是会包含播放链接
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongFinds = (data,key,value)=>ajax(`${apiUrl}/song/finds/`,{data,key,value},'post');
/**
 * 设置用户Cookie
 * @param data  字符串，cookie 信息，格式如下 aaa=bbb; ccc=ddd; ....
 * 该方法仅支持 post 请求，content-type 选择 application/json，同时，当且仅当传入的 cookie 为写配置的 QQ 号（启动参数 或 bin/config.js）时才会
 * 被作为默认的公用 cookie 存储使用，各位在搭建自己的服务时记得修改这里的信。参考 http://static.jsososo.com/200521/140442/bd3dd265f2da8be02429436592876b5b.png
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserSetCookie = (data)=>ajax(`${apiUrl}/user/setCookie/`,{data},'post');
/**
 * 查看当前Cookie
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserCookie = ()=>ajax(`${apiUrl}/user/cookie/`);
/**
 * 用户主页详情
 * @param id    QQ号，必填
 * 返回中 mymusic 为喜欢的音乐，mydiss 为用户创建的歌单，需要注意的是，喜欢的音乐中的歌单id为 id，歌单中的歌单id为 dissid
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserDetail = (id)=>ajax(`${apiUrl}/user/detail/`,{id});
/**
 * 用户创建歌单
 * @param id    QQ号，必填
 * 这个接口比上一个接口更纯粹，只获取创建的歌单，且数据结构更简单，非必须登陆 Cookie，但如果用户未公开主页时，只有本人的 Cookie 才能获取数据
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserSonglist = (id)=>ajax(`${apiUrl}/user/songlist/`,{id});
/**
 * 用户收藏的专辑
 * @param id    QQ号，必填，默认取cookie中uin
 * @param pageNo    默认1
 * @param pageSize  默认20
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserCollectSonglist = (id,pageNo,pageSize)=>ajax(`${apiUrl}/user/collect/songlist/`,{id,pageNo,pageSize});
/**
 * 歌单
 * @param id    歌单id，必填
 * 这些表示各种码率对应的文件大小，如果为0则表示该格式的文件不存在{"size128": 1922927,"size320": 4803503,"sizeape": 10810010,"sizeflac": 10827560, }
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglist = (id)=>ajax(`${apiUrl}/songlist/`,{id});
/**
 * 获取歌单分类
 * 返回几种类型下的小分类 id 和 name，不同于歌手的筛选，搜索歌单时只能用一个 id，不能用且关系。
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistCategory = ()=>ajax(`${apiUrl}/songlist/category`);
/**
 * 根据分类获取歌单
 * @param pageSize  默认20
 * @param pageNo    默认1
 * @param sort      默认是 5，// 5: 推荐，2: 最新，其他数字的排列值最后都会返回推荐
 * @param category  分类 id，默认 10000000 （全部），其他值从上面的分类接口获取
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistList = (pageSize,pageNo,sort,category)=>ajax(`${apiUrl}/songlist/list`,{pageSize,pageNo,sort,category});
/**
 * 歌曲id、mid的哈希表
 * @param dirid 默认 201 我喜欢的歌单
 * 只能获取用户自己创建的歌单且只会返回歌曲的 id 和 mid 的哈希表，不包含其他数据
 * 强制使用浏览器传来的用户 Cookie 信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistMap = (dirid)=>ajax(`${apiUrl}/songlist/map`,{dirid});
/**
 * 添加歌曲到歌单
 * @param mid   歌曲 mid 必填，多个用 , 分割
 * @param dirid 必填，歌单id
 * 强制使用浏览器传来的用户 Cookie 信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistAdd = (mid,dirid)=>ajax(`${apiUrl}/songlist/add`,{mid,dirid});
/**
 * 从歌单中移除歌曲
 * @param id    歌曲id必填，多个用逗号分割
 * @param dirid 必填
 * 强制使用浏览器传来的用户 Cookie 信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistRemove = (id,dirid)=>ajax(`${apiUrl}/songlist/remove`,{id,dirid});
/**
 * 新建歌单
 * @param name  歌单名，不能为空
 * 强制使用浏览器传来的用户 Cookie 信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistCreate = (name)=>ajax(`${apiUrl}/songlist/create`,{name});
/**
 * 删除歌单
 * @param dirid 歌单id必填
 * 强制使用浏览器传来的用户 Cookie 信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistDelete = (dirid)=>ajax(`${apiUrl}/songlist/delete`,{dirid});
/**
 * 收藏/取消收藏歌单
 * @param id    歌单id 必填
 * @param op    必填 1 收藏；2 取消收藏
 * @returns {Promise | Promise<unknown>}
 */
export const reqSonglistCollect = (id,op)=>ajax(`${apiUrl}/songlist/collect`,{id,op});
/**
 * 歌曲信息（单个获取）
 * @param songmid   必填
 * 接口包含了很多的歌曲信息，包括歌手、专辑、语种、曲风等，但是不包含歌词，
 * songinfo.data.track_info.album.mid 为专辑的 mid， 下面为专辑封面图片的路径，在搜索接口中也能获取到这个参数。
 * @returns {Promise | Promise<unknown>}
 */
export const reqSong = (songmid)=>ajax(`${apiUrl}/song/`,{songmid});
/**
 * 批量获取
 * @param songmids  必填
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongBatch = (songmids)=>ajax(`${apiUrl}/song/batch/`,{songmids});
/**
 * 相似歌曲
 * @param id    歌曲songid，必填
 * 返回相似歌曲列表
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongSimilar = (id)=>ajax(`${apiUrl}/song/similar/`,{id});
/**
 *
 * @param id    歌曲songid，必填
 * 返回歌单列表
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongPlaylist = (id)=>ajax(`${apiUrl}/song/playlist/`,{id});
/**
 * 相关mv
 * @param id    歌曲songid，必填
 * @returns {Promise | Promise<unknown>}
 */
export const reqSongMv = (id)=>ajax(`${apiUrl}/song/mv/`,{id});
/**
 * 歌词
 * @param songmid   歌曲id必填
 * 返回的接口中 lyric 和 trans 分别是歌词和翻译，转成了base64，这里node进行了解码。
 * @returns {Promise | Promise<unknown>}
 */
export const reqLyric = (songmid)=>ajax(`${apiUrl}/lyric/`,{songmid});
/**
 * 为你推荐歌单
 * @returns {Promise | Promise<unknown>}
 */
export const reqRecommendPlaylistU = ()=>ajax(`${apiUrl}/recommend/playlist/u/`);
/**
 * 按分类推荐歌单
 * @param id     分类id，默认为 3317 // 3317: 官方歌单，59：经典，71：情歌，3056：网络歌曲，64：KTV热歌
 * @param pageNo    页码，默认为 1
 * @param pageSize  每页返回数量，默认为 20
 * @returns {Promise | Promise<unknown>}
 */
export const reqRecommendPlaylist = (id,pageNo,pageSize)=>ajax(`${apiUrl}/recommend/playlist/`,{id,pageNo,pageSize});
/**
 * 每日推荐
 * 强制使用传进来的 Cookie，返回日推歌单信息
 * @returns {Promise | Promise<unknown>}
 */
export const reqRecommendDaily = ()=>ajax(`${apiUrl}/recommend/daily/`);
/**
 * 返回专辑推荐，但是只能获取 albumid，非 albummid
 * @returns {Promise | Promise<unknown>}
 */
export const reqRecommendBanner = ()=>ajax(`${apiUrl}/recommend/banner/`);
/**
 * 新碟推荐(专辑)
 * @param type  地区分类，默认为 1 // 1：内地，2：港台，3：欧美，4：韩国，5：日本，6：其他
 * @param num   默认 10
 * @returns {Promise | Promise<unknown>}
 */
export const reqNewAlbum = (type,num)=>ajax(`${apiUrl}/new/album/`,{type,num});
/**
 * 新mv推荐
 * @param type  类型，默认为 0 // 0: 精选 1：内地，2：港台，3：欧美，4：韩国，5：日本
 * 官方这个参数就更乱了，中英结合，还把日本拼成了 janpan，真是捉鸡
 * @returns {Promise | Promise<unknown>}
 */
export const reqNewMv = (type)=>ajax(`${apiUrl}/new/mv/`,{type});
/**
 * 歌手介绍
 * @param singermid 必填
 * 获取歌手的一些详细信息介绍
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerDesc = (singermid)=>ajax(`${apiUrl}/singer/desc/`,{singermid});
/**
 * 获取热门歌曲
 * @param singermid 必填
 * @param num   返回歌曲数量
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerSongs = (singermid,num)=>ajax(`${apiUrl}/singer/songs/`,{singermid,num});
/**
 * 获取歌手专辑
 * @param singermid   必填
 * @param pageNo      分页，默认1
 * @param pageSize    默认20
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerAlbum = (singermid,pageNo,pageSize)=>ajax(`${apiUrl}/singer/album/`,{singermid,pageNo,pageSize});
/**
 * 获取mv
 * @param singermid 必填
 * @param pageNo    默认1
 * @param pageSize  默认20
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerMv = (singermid,pageNo,pageSize)=>ajax(`${apiUrl}/singer/mv/`,{singermid,pageNo,pageSize});
/**
 * 相似歌手
 * @param singermid 必填
 * 官方接口是有返回数量参数的，但是最多只返回10个，所以这里就写死返回 10 个
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerSim = (singermid)=>ajax(`${apiUrl}/singer/sim/`,{singermid});
/**
 * 获取歌手分类
 * 接口没有参数，会返回 地区：area，类型：genre，首字母：index，性别/组合：sex 这些分类项的各个数据
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerCategory = ()=>ajax(`${apiUrl}/singer/category/`);
/**
 * 根据分类获取歌手列表
 * @param area  地区，默认 -100
 * @param genre 风格，默认 -100
 * @param index 首字母，默认 -100
 * @param sex   性别/组合，默认 -100
 * @param pageNo    默认 1
 * @returns {Promise | Promise<unknown>}
 */
export const reqSingerList = (area,genre,index,sex,pageNo)=>ajax(`${apiUrl}/singer/list/`,{area,genre,index,sex,pageNo});
/**
 * 获取专辑信息
 * @param albummid  必填
 * @returns {Promise | Promise<unknown>}
 */
export const reqAlbum = (albummid)=>ajax(`${apiUrl}/album/`,{albummid});
/**
 * 获取专辑内歌曲
 * @param albummid  必填
 * @returns {Promise | Promise<unknown>}
 */
export const reqAlbumSongs = (albummid)=>ajax(`${apiUrl}/album/songs/`,{albummid});
/**
 * 获取评论
 * @param id    singid, albumid, tid, topid, vid 必填
 * @param pageNo    默认1
 * @param pageSize  默认20
 * @param type      默认 0 // 0：获取最新评论，1：获取热评
 * @param biztype   获取评论类型 1: 歌曲 2: 专辑 3: 歌单 4: 排行榜 5: mv
 * 当 pageNo 为 1 且 type 为 0 时，会返回15条热评 hot_comment
 * 返回结果说明：ispraise 表示这条评论是否被赞过，1: 是，0: 否；enable_delete 表示这条评论是否能被删除，1: 是，0: 否
 * 上述的判断以 cookie 中的 uin 账号为准
 * @returns {Promise | Promise<unknown>}
 */
export const reqComment = (id,pageNo,pageSize,type,biztype)=>ajax(`${apiUrl}/comment/`,{id,pageNo,pageSize,type,biztype});
/**
 * 发送评论
 * @param id    singid, albumid, tid, topid, vid 必填
 * @param biztype   发送评论类型 1: 歌曲 2: 专辑 3: 歌单4: 排行榜 5: mv
 * @param content   评论内容，必填，不超过300字
 * 需要登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqCommentSend = (id,biztype,content)=>ajax(`${apiUrl}/comment/send/`,{id,biztype,content},'post');
/**
 * 删除评论
 * @param id  commentid 必填
 * 需要登录 只要登陆情况下，一般这个接口返回的都是操作成功，不管 id 是否存真实在（是鹅厂这样返回的！）
 * @returns {Promise | Promise<unknown>}
 */
export const reqCommentDel = (id)=>ajax(`${apiUrl}/comment/del/`,{id});
/**
 * 点赞评论
 * @param id    commentid 必填
 * @param type  1：点赞，2：取消赞，默认 1
 * @returns {Promise | Promise<unknown>}
 */
export const reqCommentLike = (id,type)=>ajax(`${apiUrl}/comment/like/`,{id,type});
/**
 * 电台分类
 * @returns {Promise | Promise<unknown>}
 */
export const reqRadioCategory = ()=>ajax(`${apiUrl}/radio/category/`);
/**
 * 获取电台歌曲
 * @param id    电台id，从上面的分类接口中获取
 * 获取电台中歌曲，其中个性电台需要登陆 cookie
 * @returns {Promise | Promise<unknown>}
 */
export const reqRadio = (id)=>ajax(`${apiUrl}/radio/`,{id});
/**
 * 获取mv信息
 * @param id    视频的 vid，必填
 * 返回 info 为 MV 信息，recommend 为相关推荐的 MV
 * @returns {Promise | Promise<unknown>}
 */
export const reqMv = (id)=>ajax(`${apiUrl}/mv/`,{id});
/**
 * 获取mv播放链接
 * @param id    视频的 vid , 必填，多个用,分割
 * @returns {Promise | Promise<unknown>}
 */
export const reqMvUrl = (id)=>ajax(`${apiUrl}/mv/url/`,{id});
/**
 * 获取mv分类
 * @returns {Promise | Promise<unknown>}
 */
export const reqMvCategory = ()=>ajax(`${apiUrl}/mv/category/`);
/**
 * 根据分类获取mv列表
 * @param pageNo    默认1
 * @param pageSize  默认20
 * @param area      地区，默认 15 全部，具体数值从上面分类接口获取
 * @param version   MV 类型，默认 7 全部，具体数值从上面分类接口获取
 * @returns {Promise | Promise<unknown>}
 */
export const reqMvList = (pageNo,pageSize,area,version)=>ajax(`${apiUrl}/mv/list/`,{pageNo,pageSize,area,version});
/**
 * 获取榜单列表
 * @param showDetail    是否显示前三歌曲简单信息和榜单介绍，0，不显示，1 显示，默认 0
 * 列出了几个榜单的分类，包含了榜单名、榜单 id、更新时间、播放量，（榜单介绍、前三歌曲非必传回）
 * @returns {Promise | Promise<unknown>}
 */
export const reqTopCategory = (showDetail)=>ajax(`${apiUrl}/top/category/`,{showDetail});
/**
 * 获取榜单详情
 * @param id    默认 4，从上面的列表中取值
 * @param pageSize  默认 100 // 部分接口不支持这个字段，所以这里默认选择100
 * @param period    榜单的时间，从上面的列表中取值，非必填
 * @param time  默认当前时间，如果有 period，此参数无效
 * 返回说明
 time: 当前榜单的发布时间，可能是天，也可能是周
 timeType: 当前榜单的时间格式 YYYY_W 或 YYYY-MM-DD
 rank: 在榜单的排名
 rankType: 1 上升，2 减少，3 持平，4 新歌，6 上升百分比
 rankValue: 排名改变值
 传入的 time、period并非必定与传回参数相同，比如，当榜单最新时间为 2019_49, 而传入 period=2019_50时，会返回 2019_49的榜单，
 虽然这里不传或传入错误的 period 也会返回正确的数值，但是实际是通过第一次请求返回的结果来验证 period 是否正确，
 如果不正确会再进行第二次请求， 因此会造成返回的比较慢，尽量都传入上一个接口中返回的 period
 * @returns {Promise | Promise<unknown>}
 */
export const reqTop = (id,pageSize,period,time)=>ajax(`${apiUrl}/top/`,{id,pageSize,period,time});
/**
 * 获取关注的歌手列表
 * @param pageNo    默认 1
 * @param pageSize  默认20
 * @param id    用户qq号，默认当前登录用户
 * 需要登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserFollowSingers = (pageNo,pageSize,id)=>ajax(`${apiUrl}/user/follow/singers/`,{pageNo,pageSize,id});
/**
 * 获取关注的用户列表
 * @param pageNo    默认 1
 * @param pageSize  默认20
 * @param id    用户qq号，默认当前登录用户
 * 需要登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserFollowUsers = (pageNo,pageSize,id)=>ajax(`${apiUrl}/user/follow/singers/`,{pageNo,pageSize,id});
/**
 * 获取用户的粉丝列表
 * @param pageNo    默认 1
 * @param pageSize  默认20
 * @param id    用户qq号，默认当前登录用户
 * 需要登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserFans = (pageNo,pageSize,id)=>ajax(`${apiUrl}/user/fans/`,{pageNo,pageSize,id});
/**
 * 关注/取消关注 歌手
 * @param singermid 关注的歌手 mid，必填
 * @param operation 操作，1：关注，2：取消关注，默认为 1
 * 需要登录
 * @returns {Promise | Promise<unknown>}
 */
export const reqUserFollow = (singermid,operation)=>ajax(`${apiUrl}/user/fans/`,{singermid,operation});
/**
 * 获取数据统计
 * @param type  默认 ip，可选：ip, browser, browserVersion, os, osVersion, path, url, host
 * @param startTime 默认当前时间
 * @param endTime   默认当前时间
 * @returns {Promise | Promise<unknown>}
 */
export const reqData = (type,startTime,endTime)=>ajax(`${apiUrl}/data/`,{type,startTime,endTime});


