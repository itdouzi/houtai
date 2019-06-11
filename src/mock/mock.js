import Mock from 'mockjs';

Mock.mock('http://localhost:8086/user',{
    'name':'@name', //随机生成姓名
    'email':'@email', //随机生成邮箱
    'age|1-10':5 //其他数据
});

Mock.mock('http://localhost:8086/menu',{
    'id':'@increment', //随机生成
    'name':'@menu', //随机生成
    'order|10-20':12 //其他数据
});