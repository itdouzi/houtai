import Mock from 'mockjs';

Mock.mock('http://localhost:8081/login',{
    'name':'@name', //随机生成姓名
    'email':'@email', //随机生成邮箱
    'token':"77ae89be36504adfb5c09ef71409ea0e"
    
});  

Mock.mock('http://localhost:8081/user',{
    'name':'@name', //随机生成姓名
    'email':'@email', //随机生成邮箱
    'age|1-10':5 //其他数据
});

Mock.mock('http://localhost:8081/menu',{
    'id':'@increment', //随机生成
    'name':'@menu', //随机生成
    'order|10-20':12 //其他数据
});