// 首页数据
export default (req, res) => {
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: {
      // banner
      banner: [
        {
          img: '/img/banner1.png',
          title: '5天用公式巧学英语',
          courseId: 301,
        },
        {
          img: '/img/banner2.png',
          title: '3天带你摆脱“哑巴英语”',
          courseId: 302,
        },
        {
          img: '/img/banner3.png',
          title: '雅思从迷茫到7分，备考规划三步走',
          courseId: 303,
        },
        {
          img: '/img/banner4.png',
          title: '【延考必备】一节课带你吃透专八听力（不设回放）',
          courseId: 304,
        },
        {
          img: '/img/banner5.png',
          title: '【延考必备】一节课带你吃透专八听力（不设回放）',
          courseId: 305,
        },
      ],
      // banner
      nav: [
        {
          img: '/img/banner-child-1.png',
          title: '小学',
          courseId: 1,
        },
        {
          img: '/img/banner-child-2.png',
          title: '初中',
          courseId: 2,
        },
        {
          img: '/img/banner-child-3.png',
          title: '高中',
          courseId: 3,
        },
        {
          img: '/img/banner-child-4.png',
          title: '四六级',
          courseId: 4,
        },
        {
          img: '/img/banner-child-5.png',
          title: '考研',
          courseId: 5,
        },
        {
          img: '/img/banner-child-6.png',
          title: '实用英语',
          courseId: 6,
        },
        {
          img: '/img/banner-child-7.png',
          title: '兴趣技能',
          courseId: 7,
        },
        {
          img: '/img/banner-child-8.png',
          title: '小语种',
          courseId: 8,
        },
        {
          img: '/img/banner-child-9.png',
          title: '专四专八',
          courseId: 9,
        },
        {
          img: '/img/banner-child-10.png',
          title: '公务员',
          courseId: 10,
        },
        {
          img: '/img/banner-child-11.png',
          title: '职业考证',
          courseId: 11,
        },
        {
          img: '/img/banner-child-13.png',
          title: '雅思考试',
          courseId: 12,
        },
        {
          img: '/img/banner-child-14.png',
          title: '少儿变成',
          courseId: 13,
        },
        {
          img: '/img/banner-child-15.png',
          title: '兴趣培养',
          courseId: 14,
        },
        {
          img: '/img/banner-child-16.png',
          title: '少儿美术',
          courseId: 15,
        },
        {
          img: '/img/banner-child-17.png',
          title: '泡妞技能',
          courseId: 16,
        },
      ],
      // 弹窗
      popup: {
        img: '/img/banner1.png',
        courseId: 305,
      },
      // 公开课
      talk: {
        recommend: [
          {
            img: '/img/talk1.png',
            title: '教你用中文思维学韩语',
            type: 'left',
            courseId: 305,
          },
          {
            img: '/img/talk2.png',
            title: '比动漫有趣的日语入门课',
            type: 'rightTop',
            courseId: 307,
          },
          {
            img: '/img/talk3.png',
            title: '教你用中文思维学韩语',
            type: 'rightBottom',
            courseId: 308,
          },
        ],
        card: [
          {
            title: '【备战9月 抢分计划】四六级听力涨分必备技巧指导（不设回放）',
            type: 'talk',
            teacher: {
              img: '/img/image(1).png',
              title: '欧阳萍',
            },
            courseId: 309,
          },
          {
            title: '【新高一】高中物理运动学问题初探（第九期）',
            type: 'talk',
            teacher: { title: '杨超' },
            courseId: 310,
          },
          {
            title: '【升初三】数学几何快速提升攻略',
            type: 'talk',
            teacher: { title: '孟亚飞' },
            courseId: 311,
          },
          {
            title: '雅思从迷茫到7分，备考规划三步走',
            type: 'talk',
            teacher: { title: '丁爽' },
            courseId: 312,
          },
        ],
      },
      // 一级分类入口
      fixedEntries: [
        {
          img: '/img/image(1).png',
          id: 1001,
          title: '小学',
        },
        {
          img: '/img/image(1).png',
          id: 1002,
          title: '初中',
        },
        {
          img: '/img/image(1).png',
          id: 1003,
          title: '高中',
        },
        {
          img: '/img/image(1).png',
          id: 1004,
          title: '四六级',
        },
        {
          img: '/img/image(1).png',
          id: 1005,
          title: '实用英语',
        },
        {
          img: '/img/image(1).png',
          id: 1006,
          title: '考研',
        },
        {
          img: '/img/image(1).png',
          id: 1007,
          title: '兴趣技能',
        },
        {
          img: '/img/image(1).png',
          id: 1008,
          title: '逻辑英语',
        },
        {
          img: '/img/image(1).png',
          id: 1009,
          title: '专四专八',
        },
        {
          img: '/img/image(1).png',
          id: 1010,
          title: '教师资格',
        },
        {
          img: '/img/image(1).png',
          id: 1011,
          title: '雅思托福',
        },
        {
          img: '/img/image(1).png',
          id: 1012,
          title: '编程开发',
        },
      ],
    },
  })
}
