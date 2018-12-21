// 1,加载模块
const express=require("express");
const pool=require("./pool");
//2,创建express对象
var app=express();
// 配置脚手架的跨域
const cors=require("cors");
app.use(cors({
    origin:["http://127.0.0.1:3002","http://localhost:3002"],
    credentials:true
}))
//3，指定静态目录,服务器指定目录，用绝对路径
app.use(express.static(__dirname+"/public"));
//4，绑定监听接口
app.listen(3000);

//功能一，乐蜂首页轮播图
app.get("/imagelist",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/lb/b1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/lb/b2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/lb/b3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/lb/b4.png"}
];
    res.send(obj);
})
//功能二：特卖专场的图片列表

app.get("/goodslist",(req,res)=>{
    var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/home/c1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/home/c2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/home/c3.png"},
    {id:4,img_url:"http://127.0.0.1:3000/img/home/c2.png"}
];
    res.send(obj);
})
//功能三：分类页面的图片列表
app.get("/selectlist",(req,res)=>{
    var obj=[
        {id:1,title:"护肤套装",img_url:"http://127.0.0.1:3000/img/select/s1.png"},
        {id:2,title:"洁面",img_url:"http://127.0.0.1:3000/img/select/s2.png"},
        {id:3,title:"精油",img_url:"http://127.0.0.1:3000/img/select/s3.png"},
        {id:4,title:"眼部护理",img_url:"http://127.0.0.1:3000/img/select/s4.png"},
        {id:5,title:"晚霜",img_url:"http://127.0.0.1:3000/img/select/s5.png"},
        {id:6,title:"面部精华",img_url:"http://127.0.0.1:3000/img/select/s6.png"},
        {id:7,title:"男性香水",img_url:"http://127.0.0.1:3000/img/select/s7.png"},
        {id:8,title:"漱口水",img_url:"http://127.0.0.1:3000/img/select/s8.png"},
        {id:9,title:"女性香水",img_url:"http://127.0.0.1:3000/img/select/s9.png"},
        {id:10,title:"洗发护发",img_url:"http://127.0.0.1:3000/img/select/s10.png"},
        {id:11,title:"粉底液",img_url:"http://127.0.0.1:3000/img/select/s11.png"},
        {id:12,title:"妆前乳",img_url:"http://127.0.0.1:3000/img/select/s12.png"},
];
    res.send(obj);
})
//功能四，商场页面的小图标列表
app.get("/littlelist",(req,res)=>{
    var obj=[
        {id:1,title:"护肤套装",img_url:"http://127.0.0.1:3000/img/shop/ss1.png"},
        {id:2,title:"洁面",img_url:"http://127.0.0.1:3000/img/shop/ss2.png"},
        {id:3,title:"精油",img_url:"http://127.0.0.1:3000/img/shop/ss3.png"},
        {id:4,title:"眼部护理",img_url:"http://127.0.0.1:3000/img/shop/ss4.png"},
        {id:5,title:"晚霜",img_url:"http://127.0.0.1:3000/img/shop/ss5.png"},
        {id:6,title:"面部精华",img_url:"http://127.0.0.1:3000/img/shop/ss6.png"},
        {id:7,title:"男性香水",img_url:"http://127.0.0.1:3000/img/shop/ss7.png"},
        {id:8,title:"漱口水",img_url:"http://127.0.0.1:3000/img/shop/ss8.png"},
    ];
    res.send(obj);
})
//功能五：商场页面的护肤攻略图标
app.get("/hfgllist",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/shop/ds1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/shop/ds2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/shop/ds3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/shop/ds4.png"}, 
    ];
    res.send(obj);
})
//功能六：商场页面的品牌图标
app.get("/pplist",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/shop/sa1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/shop/sa2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/shop/sa3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/shop/sa4.png"},
        {id:5,img_url:"http://127.0.0.1:3000/img/shop/sa5.png"},
        {id:6,img_url:"http://127.0.0.1:3000/img/shop/sa6.png"},
        
    ];
    res.send(obj);
})
//功能七：人气榜 
 var goodlist=[
            {id:1,title:"美即",details:"美即清透补水面膜（30片）气垫新品",now:199.99,old:229.99,img_url:"http://127.0.0.1:3000/img/shop/sz1.png",count:3},
            {id:2,title:"美即",details:"美即山水蜜光补水亮白面膜（57片）蜂蜜",now:99.99,old:199.99,img_url:"http://127.0.0.1:3000/img/shop/sz2.png",count:3},
            {id:3,title:"美即",details:"美即水光针补水亮白面膜（21片）水光肌",now:99.99,old:199.99,img_url:"http://127.0.0.1:3000/img/shop/sz3.png",count:3},
            {id:4,title:"美即",details:"美即蚕丝亮白面膜（60片）蜂蜜",now:199.99,old:299.99,img_url:"http://127.0.0.1:3000/img/shop/sz4.png",count:3},
    ];
app.get("/goodlist",(req,res)=>{
  
    res.send(goodlist);
})
//功能八：我的list
app.get("/mylist",(req,res)=>{
    var obj=[
        {id:1,title:"待支付",img_url:"http://127.0.0.1:3000/img/my-list/m4.png"},
        {id:2,title:"待收货",img_url:"http://127.0.0.1:3000/img/my-list/m5.png"},
        {id:3,title:"待评价",img_url:"http://127.0.0.1:3000/img/my-list/m6.png"},
        {id:4,title:"退货",img_url:"http://127.0.0.1:3000/img/my-list/m7.png"},
        
    ];
    res.send(obj);
})
//功能九：
app.get("/alist",(req,res)=>{
    var obj=[
        {id:1,title:"护肤套装",img_url:"http://127.0.0.1:3000/img/a-list/aa1.png"},
        {id:2,title:"面膜",img_url:"http://127.0.0.1:3000/img/a-list/aa2.png"},
        {id:3,title:"保湿水乳",img_url:"http://127.0.0.1:3000/img/a-list/aa3.png"},
        {id:4,title:"眼霜",img_url:"http://127.0.0.1:3000/img/a-list/aa4.png"},
        {id:5,title:"洁面卸妆",img_url:"http://127.0.0.1:3000/img/a-list/aa5.png"},
        {id:6,title:"底妆",img_url:"http://127.0.0.1:3000/img/a-list/aa6.png"},
        {id:7,title:"洗发套装",img_url:"http://127.0.0.1:3000/img/a-list/aa7.png"},
        {id:8,title:"身体护理",img_url:"http://127.0.0.1:3000/img/a-list/aa8.png"},
        {id:9,title:"口红",img_url:"http://127.0.0.1:3000/img/a-list/aa9.png"},
        {id:10,title:"签到有礼",img_url:"http://127.0.0.1:3000/img/a-list/aa10.png"},
       
    ];
    res.send(obj);
})
//功能十：
app.get("/aalist",(req,res)=>{
    var obj=[
            {id:1,title:"阿芙精油面膜礼盒，共36片",new:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/zj/t1.png"},
            {id:2,title:"嘉媚乐玫瑰水",new:115.99,old:229.99,img_url:"http://127.0.0.1:3000/img/zj/t2.png"},
            {id:3,title:"牛奶身体护理滋润套装",new:99.99,old:229.99,img_url:"http://127.0.0.1:3000/img/zj/t3.png"},
            {id:4,title:"舒客立体亮白牙膏",new:69.99,old:129.99,img_url:"http://127.0.0.1:3000/img/zj/t4.png"},
            {id:5,title:"阿芙精油面膜礼盒，共36片",new:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/zj/t5.png"},
            {id:6,title:"阿芙精油面膜礼盒，共36片",new:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/zj/t6.png"},
          
    ];
    res.send(obj);
})

//功能十一：
app.get("/tmlist",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/tm/tt1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/tm/tt2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/tm/tt3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/tm/tt4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/tm/tt5.jpg"},
        {id:6,img_url:"http://127.0.0.1:3000/img/tm/tt6.jpg"},
        {id:7,img_url:"http://127.0.0.1:3000/img/tm/tt7.jpg"},
        {id:8,img_url:"http://127.0.0.1:3000/img/tm/tt8.jpg"},
        {id:9,img_url:"http://127.0.0.1:3000/img/tm/tt9.jpg"},
        {id:10,img_url:"http://127.0.0.1:3000/img/tm/tt10.jpg"},
        {id:11,img_url:"http://127.0.0.1:3000/img/tm/tt11.jpg"},
        {id:12,img_url:"http://127.0.0.1:3000/img/tm/tt12.jpg"},
    ];
    res.send(obj);
})
//功能十二：
app.get("/jxlist",(req,res)=>{
    var obj=[
            {id:1,title:"阿芙",detail:"阿芙精油面膜礼盒，共36片",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp1.png"},
            {id:2,title:"欧莱雅",detail:"嘉媚乐玫瑰水",now:115.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp2.png"},
            {id:3,title:"相宜本草",detail:"牛奶身体护理滋润套装",now:99.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp3.png"},
            {id:4,title:"佰草集",detail:"舒客立体亮白牙膏",now:69.99,old:129.99,img_url:"http://127.0.0.1:3000/img/jx/pp4.png"},
            {id:5,title:"雪花秀",detail:"阿芙精油面膜礼盒，共36片",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp5.png"},
            {id:6,title:"娇兰",detail:"阿芙精油面膜礼盒，共36片",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp6.png"},
            {id:7,title:"美肤宝",detail:"阿芙精油面膜礼盒，共36片",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp7.png"},
            {id:8,title:"卡姿兰",detail:"卡姿兰控油遮瑕cc气垫",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp8.png"},
            {id:9,title:"美即",detail:"美即多彩手绘补水面膜礼盒，共36片",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp9.png"},
            {id:10,title:"韩束",detail:"韩束红景天水润抗衰老套装",now:139.99,old:229.99,img_url:"http://127.0.0.1:3000/img/jx/pp10.png"},
          
    ];
    res.send(obj);
})
//功能十三：
app.get("/goodsdetail",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/goods/g1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/goods/g2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/goods/g3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/goods/g4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/goods/g5.jpg"},
        {id:6,img_url:"http://127.0.0.1:3000/img/goods/g6.jpg"},
        {id:7,img_url:"http://127.0.0.1:3000/img/goods/g7.jpg"},
        {id:8,img_url:"http://127.0.0.1:3000/img/goods/g8.jpg"},
        {id:9,img_url:"http://127.0.0.1:3000/img/goods/g9.jpg"},
        
    ];
    res.send(obj);
})
//功能十四：评价系统

app.get("/pjlist",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3000/img/m10.png",title:"满意",phone:"123***23413",ctime:"2018-12-12",text:"商品很好，使用方便，舒适"},
        {id:2,img_url:"http://127.0.0.1:3000/img/m10.png",title:"满意",phone:"黑风洞**413",ctime:"2018-12-12",text:"商品很好，使用方便，舒适"}, 
        {id:3,img_url:"http://127.0.0.1:3000/img/m10.png",title:"满意",phone:"123***23413",ctime:"2018-12-12",text:"商品很好，使用方便，舒适"}, 
        {id:4,img_url:"http://127.0.0.1:3000/img/m10.png",title:"满意",phone:"Dois**up",ctime:"2018-12-12",text:"商品很好，使用方便，舒适"},
        
    ];
    res.send(obj);

})
//功能十五，登录功能
var obj=[
    {pnum:"13496700990",pwd:"yy0iu07"},
    {pnum:"13556756567",pwd:"htygh5r07"},
    {pnum:"13835460990",pwd:"5645htu07"},
    {pnum:"13967023453",pwd:"w5624u07"},
    {pnum:"13496787898",pwd:"wyrewyu07"},
];
app.get("/loginform",(req,res)=>{
    res.send(obj);
})
//接受注册信息
app.get("/getMsg",(req,res)=>{
    var pnum=req.query.pnum;
    var pwd=req.query.pwd;
    var arr={pnum,pwd}
    obj.push(arr)
    console.log(obj)
    
})
//接收加入购物车数据
app.get("/addcart",(req,res)=>{
    var id=parseInt(req.query.id)+4;
    var title=req.query.title;
    var details=req.query.details;
    var now=req.query.now;
    var img_url=req.query.img_url;
    var atr={id,now,title,details,img_url,count:3};
   goodlist.push(atr)
   
})
//接收删除id，删除相对应的信息


