const nav = require('./config/nav')
const collect = require('./config/data')
//const sidebar = require('./config/sidebar')

module.exports = {
    base: '/myblog/',
    "title": "WilliamNote",
    "description": "Code For Future",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/myfavicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        valineConfig: {
            appId: 'pnnIXpivf6cNb2UAWSm8yiz1-MdYXbMMI',// your appId
            appKey: 'zyok4spmzGsDy40iJeSEv8rM', // your appKey
            pageSize: 5,
            placeholder: '欢迎评论，昵称框输入QQ号可以自动获取头像噢！',
            meta: ['nick', 'mail'],
            enableQQ: true,
            visitor: true
        },
        'subSidebar': 'auto',
        noFoundPageByTencent: false,
        nav,
        //sidebar,
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类",
                'icon': 'fenlei'
            },
            "tag": {
                "location": 3,
                "text": "标签",
                'icon': 'shijian'
            },
            socialLinks:[
                {
                    link:'http://wpa.qq.com/msgrd?v=3&uin=840454995&site=qq&menu=yes',
                    icon:'qq',
                    type:'_blank',
                    size:'30'
                },
                {
                    link: '/myblog/docs/friend',
                    icon:'weixin',
                    type:'_self',
                    size:'30'
                },
                {
                    link: '/myblog/docs/friend',
                    icon:'pyq',
                    type:'_self',
                    size:'30'
                },
                {
                    link:'mailto:chenzhiwei93@aliyun.com?subject=WilliamNote',
                    icon:'mail',
                    type:'_blank',
                    size:'30'
                },
                {
                    link:'https://github.com/WlisonChan',
                    icon:'github',
                    type:'_blank',
                    size:'30'
                }
            ]
        },
        "friendLink": [
            {
                "title": "小菜鸡の博客",
                "logo": "http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640",
                "link": "http://wilsoncz.gitee.io/myblog"
            },
            {
                "title": "午后南杂",
                "logo": "https://www.recoluan.com/head.png",
                "link": "https://www.recoluan.com/"
            },
            {
                "title": "ZNOTE",
                "logo": "https://zpj80231.gitee.io/znote/vuepress/head-fish.jpg",
                "link": "http://zpj80231.gitee.io/znote/"
            },
            {
                "title": "大菠萝",
                "logo": "http://palapple.gitee.io/giteeblog/_media/icon.svg",
                "link": "http://palapple.gitee.io/giteeblog/"
            }
        ],
        'collectData':collect,
        'blogSuffix':'http://wilsoncz.gitee.io/',
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "最近更新",
        "author": "William",
        "authorAvatar": "http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640",
        "record": "Hello World",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        /*        [
                    '@vuepress/pwa', {
                    serviceWorker: true,
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                }
                ],*/
        ['@goy/svg-icons', {svgsDir: 'svgs'}],
        [
            //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
            "cursor-effects",
            {
                size: 3,                    // size of the particle, default: 2
                shape: ['circle'],  // shape of the particle, default: 'star'
                zIndex: 999999999           // z-index property of the canvas, default: 999999999
            }
        ],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
            tip: {
                content: "复制成功!"
            }
        }],
        [
            "vuepress-plugin-auto-sidebar", {
            // options
            title: {
                // more options:
                // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
                mode: "titlecase"
            },
            collapse: {
                open: true
            }
        }
        ],
        ["@vuepress/medium-zoom", {
            selector: "img.zoom-custom-imgs",
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }],
        [
            'flowchart'
        ],
        [
            '@vuepress-reco/vuepress-plugin-bgm-player',
            {
                audios: [
                    // 网络文件示例
                    {
                        name: 'King',
                        artist: '夏了个天呐',
                        url: 'http://music.163.com/song/media/outer/url?id=1806604813.mp3',
                        cover: 'http://wilsoncz.gitee.io//myblog/music.png'
                    }
                ],
                position:{
                    right: '10px', bottom: '10px', 'z-index': '999999'
                },
                autoShrink:true,
                shrinkMode:'mini',
                floatPosition:'right'
            }
        ]
    ]
}
