let axios = require('axios');
//异步函数 爬虫获取实时json文件
(async function(){
    let httpUrl = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=';
    let res = await axios.get(httpUrl + new Date().getTime()); //t=后面是一个时间戳，用new Date().getTime()获取时间戳
})()