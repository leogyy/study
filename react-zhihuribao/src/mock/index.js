import Mock from 'mockjs';

//接口和模拟数据定义
Mock.mock('http://api.xxx.com/movie', 'get', {
    "subjects|10" :[
      {
          "rating": {
              "max": 10,
              "average": 7.7,
              "details": {
                  "1": 133,
                  "2": 532,
                  "3": 4166,
                  "4": 7240,
                  "5": 3113
              },
              "stars": "40",
              "min": 0
          },
          "genres|3-4": [
              "@cword(2,4)"
          ],
          "title": "@ctitle",
          "casts": [
              {
                  "avatars": {
                      "small": "@dataImage('70x100', '#999', 'small')",
                      "large": "https://img1.doubanio.com/img/celebrity/large/1467942867.09.jpg",
                      "medium": "https://img1.doubanio.com/img/celebrity/medium/1467942867.09.jpg"
                  },
                  "name_en": "@name",
                  "name": "@cname",
                  "alt": "https://movie.douban.com/celebrity/1325351/",
                  "id": "@id"
              },
              {
                  "avatars": {
                      "small": "https://img1.doubanio.com/img/celebrity/small/56339.jpg",
                      "large": "https://img1.doubanio.com/img/celebrity/large/56339.jpg",
                      "medium": "https://img1.doubanio.com/img/celebrity/medium/56339.jpg"
                  },
                  "name_en": "Robert Downey Jr.",
                  "name": "小罗伯特·唐尼",
                  "alt": "https://movie.douban.com/celebrity/1016681/",
                  "id": "1016681"
              },
              {
                  "avatars": {
                      "small": "https://img3.doubanio.com/img/celebrity/small/231.jpg",
                      "large": "https://img3.doubanio.com/img/celebrity/large/231.jpg",
                      "medium": "https://img3.doubanio.com/img/celebrity/medium/231.jpg"
                  },
                  "name_en": "Marisa Tomei",
                  "name": "玛丽莎·托梅",
                  "alt": "https://movie.douban.com/celebrity/1047974/",
                  "id": "1047974"
              }
          ],
          "durations": [
              "133分钟"
          ],
          "collect_count": 47460,
          "mainland_pubdate": "2017-09-08",
          "has_video": false,
          "original_title": "Spider-Man: Homecoming",
          "subtype": "movie",
          "directors": [
              {
                  "avatars": {
                      "small": "https://img3.doubanio.com/img/celebrity/small/1435142487.62.jpg",
                      "large": "https://img3.doubanio.com/img/celebrity/large/1435142487.62.jpg",
                      "medium": "https://img3.doubanio.com/img/celebrity/medium/1435142487.62.jpg"
                  },
                  "name_en": "Jon Watts",
                  "name": "乔·沃茨",
                  "alt": "https://movie.douban.com/celebrity/1350194/",
                  "id": "@id"
              }
          ],
          "pubdates|2-4": [
            "@date('yyyy-MM-dd')"
          ],
          "year": "2017",
          "images": {
              "small": "@dataImage('70x100')",
              "large": "@dataImage('70x100')",
              "medium": "@dataImage('70x100')"
          },
          "alt": "https://movie.douban.com/subject/24753477/",
          "id": "@id"
      },
    ]
}
);

// 模拟延迟
Mock.setup({
  timeout: 1500
})
