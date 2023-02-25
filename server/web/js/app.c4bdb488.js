(function(){"use strict";var e={4959:function(e,t,n){var a=n(9242),l=n(3396);function o(e,t,n,a,o,i){const r=(0,l.up)("allmenu"),s=(0,l.up)("RouterView");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l.Wm)(s)],64)}var i={beforeCreate(){document.querySelector("body").setAttribute("style","margin:0;")}},r=n(89);const s=(0,r.Z)(i,[["render",o]]);var u=s,d=n(2483);const c={class:"login-container"},m=(0,l.Uk)("登录");function p(e,t,n,o,i,r){const s=(0,l.up)("el-input"),u=(0,l.up)("el-form-item"),d=(0,l.up)("el-button"),p=(0,l.up)("el-form"),h=(0,l.up)("el-card");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l.Wm)(h,{header:"请先登录",class:"login-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{"label-width":"80px","label-position":"top",onSubmit:(0,a.iM)(r.login,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"用户名"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{modelValue:i.model.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model.username=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,{label:"密码"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{type:"password",modelValue:i.model.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.model.password=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{style:{width:"100%",height:"40px","margin-top":"10px"},type:"primary","native-type":"submit"},{default:(0,l.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])}n(7658);var h={data(){return{model:{}}},methods:{async login(){const e=await this.$http.post("login",this.model);localStorage.token=e.data.token,this.$router.push("/"),this.$message({type:"success",message:"登录成功"})}}};const f=(0,r.Z)(h,[["render",p]]);var w=f;const b={class:"home"};function g(e,t,n,a,o,i){const r=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)("div",b,[(0,l.Wm)(r)])}var _={name:"home",components:{},data(){return{headTitle:"主页"}},methods:{}};const y=(0,r.Z)(_,[["render",g]]);var v=y;const W=e=>((0,l.dD)("data-v-47b214ba"),e=e(),(0,l.Cn)(),e),k=W((()=>(0,l._)("h1",{class:"Mytools"},"Mytools",-1))),x=W((()=>(0,l._)("h1",{style:{"margin-bottom":"2em",color:"#35495e"}},"拒绝香菜的小工具箱",-1))),I=(0,l.Uk)("热点趋势"),U=(0,l.Uk)("去水印"),C=(0,l.Uk)("推特视频下载"),T=(0,l.Uk)("二维码生成识别"),E=(0,l.Uk)("共享文本"),V=(0,l.Uk)("刘明野工具集");function B(e,t,n,a,o,i){const r=(0,l.up)("el-col"),s=(0,l.up)("el-row"),u=(0,l.up)("el-button"),d=(0,l.up)("el-main"),c=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(c,{class:"container"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"main"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{span:24},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(r,{span:24},{default:(0,l.w5)((()=>[x])),_:1})])),_:1}),(0,l.Wm)(s,{style:{"margin-left":"0","margin-right":"0"},gutter:20},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick5,plain:""},{default:(0,l.w5)((()=>[I])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick2,plain:""},{default:(0,l.w5)((()=>[U])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick3,plain:""},{default:(0,l.w5)((()=>[C])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick4,plain:""},{default:(0,l.w5)((()=>[T])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick6,plain:""},{default:(0,l.w5)((()=>[E])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{xs:24,sm:12,md:6},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"ToolBt",color:"#2597d8",onClick:i.cimsInputClick1,plain:""},{default:(0,l.w5)((()=>[V])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}var S={name:"navigation",components:{},data(){return{headTitle:"主页"}},methods:{handleSelect(e,t){},cimsInputClick1(){window.open("http://tools.liumingye.cn/","_blank")},cimsInputClick2(){this.$router.push({path:"/watermark"})},cimsInputClick3(){this.$router.push({path:"/twitterdown"})},cimsInputClick4(){this.$router.push({path:"/qrcode"})},cimsInputClick5(){this.$router.push({path:"/hottrends"})},cimsInputClick6(){this.$router.push({path:"/sharetxts"})}}};const Z=(0,r.Z)(S,[["render",B],["__scopeId","data-v-47b214ba"]]);var z=Z;const O=e=>((0,l.dD)("data-v-14c3fedc"),e=e(),(0,l.Cn)(),e),j=O((()=>(0,l._)("h1",{style:{color:"#2597d8","text-shadow":"0.5px #35495e"}},"短视频/图集在线去水印解析",-1))),D={class:"mt-4"},H=(0,l.Uk)("解析"),N={key:0,class:"waterfall"},P=(0,l.Uk)("提示 "),M=O((()=>(0,l._)("div",{style:{width:"23em"}},[(0,l._)("p",null,[(0,l._)("strong",null,"目前支持 "),(0,l.Uk)("抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue Vlog/小咖秀/西瓜视频")]),(0,l._)("p",null,[(0,l._)("strong",null,"温馨提示 "),(0,l.Uk)("粘贴视频地址时"),(0,l._)("u",null,"无需删除文案"),(0,l._)("small",null," 但如果视频链接正确但解析失败请删掉文案后重试")])],-1))),$=(0,l.Uk)("下载封面"),A=(0,l.Uk)("下载视频"),R=(0,l.Uk)("下载音乐"),q={class:"block"},L=["src"];function Y(e,t,n,a,o,i){const r=(0,l.up)("el-col"),s=(0,l.up)("el-row"),u=(0,l.up)("el-option"),d=(0,l.up)("el-select"),c=(0,l.up)("el-button"),m=(0,l.up)("el-input"),p=(0,l.up)("el-image"),h=(0,l.up)("el-popover"),f=(0,l.up)("el-main"),w=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(w,{class:"container"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{class:"main"},{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{span:24},{default:(0,l.w5)((()=>[j])),_:1})])),_:1}),(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l._)("div",D,[(0,l.Wm)(m,{placeholder:"请粘贴分享链接",modelValue:o.input,"onUpdate:modelValue":t[1]||(t[1]=e=>o.input=e),id:"url",lass:"input-with-select"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"select",modelValue:o.select,"onUpdate:modelValue":t[0]||(t[0]=e=>o.select=e),slot:"prepend",placeholder:"视频"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{label:"视频",value:"1"}),(0,l.Wm)(u,{label:"图集",value:"2"})])),_:1},8,["modelValue"])])),append:(0,l.w5)((()=>[(0,l.Wm)(c,{slot:"append",onClick:i.onSubmit},{default:(0,l.w5)((()=>[H])),_:1},8,["onClick"])])),_:1},8,["modelValue"]),o.iseen?((0,l.wg)(),(0,l.iD)("div",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.images_url,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"item",key:e},[(0,l.Wm)(p,{src:e,"preview-src-list":o.images_url},null,8,["src","preview-src-list"])])))),128))])):(0,l.kq)("",!0)])])),_:1})])),_:1}),(0,l.Wm)(s,{style:{"margin-top":"10px","margin-bottom":"10px"},gutter:4},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{span:6},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{width:"25em",placement:"bottom",trigger:"click"},{reference:(0,l.w5)((()=>[(0,l.Wm)(c,{style:{"padding-left":"12px",width:"100%"},class:"warning",type:"primary",slot:"reference"},{default:(0,l.w5)((()=>[P])),_:1})])),default:(0,l.w5)((()=>[M])),_:1})])),_:1}),(0,l.Wm)(r,{span:6},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"menubt",onClick:i.sendcoversrc,plain:""},{default:(0,l.w5)((()=>[$])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{span:6},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"menubt",onClick:i.sendurlsrc,plain:""},{default:(0,l.w5)((()=>[A])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(r,{span:6},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"menubt",onClick:i.sendmusicsrc,plain:""},{default:(0,l.w5)((()=>[R])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,l._)("div",q,[(0,l._)("iframe",{id:"Iframe1",src:o.downsrcs,scrolling:"no",style:{border:"0px",width:"100%",height:"100%"}},null,8,L)])])),_:1})])),_:1})}var F=n(6666),K={data(){return{downsrcs:"",info:{},input:"",select:"",music:!1,seen:!1,iseen:!1,loading:!1,images_url:{}}},methods:{onSubmit(){this.seen=!1,this.iseen=!1,this.loading=!0;const e=/(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input);"1"==this.select||""==this.select?this.axios.get("https://tenapi.cn/v2/video?url="+encodeURIComponent(e[0])).then((e=>{200==e.data.code?(null!=e.data.data.music&&(this.music=!0),this.seen=!0,this.info=e.data.data,this.loading=!1,(0,F.bM)({title:"解析成功",message:"请及时下载音视频",type:"success"})):(this.seen=!1,this.loading=!1,(0,F.bM)({title:"解析失败",message:"视频不存在或接口失效",type:"error"}))})):(this.seen=!1,this.axios.get("https://tenapi.cn/v2/images?url="+encodeURIComponent(e[0])).then((e=>{200==e.data.code?(this.iseen=!0,this.loading=!1,this.images_url=e.data.data.images,(0,F.bM)({title:"解析成功",message:"图集暂不支持批量下载，请长按下载或右键另存为",type:"success"})):(this.iseen=!1,this.loading=!1,(0,F.bM)({title:"解析失败",message:"图集不存在或接口失效",type:"error"})),console.log(this.images_url)})))},sendcoversrc(e){document.getElementById("Iframe1").src=document.getElementById("Iframe1").src=this.info.cover},sendurlsrc(e){document.getElementById("Iframe1").src=document.getElementById("Iframe1").src=this.info.url},sendmusicsrc(e){document.getElementById("Iframe1").src=document.getElementById("Iframe1").src=this.info.music.url}},mounted(){const e=document.getElementById("Iframe1"),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.style.width=Number(t)-26+"px",e.style.height=Number(n)-180+"px"}};const Q=(0,r.Z)(K,[["render",Y],["__scopeId","data-v-14c3fedc"]]);var X=Q;const G={class:"container"},J={class:"block"},ee=["src"];function te(e,t,n,a,o,i){return(0,l.wg)(),(0,l.iD)("div",G,[(0,l._)("div",null,[(0,l._)("div",J,[(0,l._)("iframe",{id:"Iframe",src:e.bdTokenUrl,scrolling:"no",frameborder:"0",style:{border:"0px",width:"100%",height:"100%"}},null,8,ee)])])])}var ne={components:{},data:function(){return{bdTokenUrl:"https://test.refusecoriander.top/racknerd",value1:""}},mounted(){const e=document.getElementById("Iframe"),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.style.width=Number(t)+"px",e.style.height=Number(n)+"px"},methods:{}};const ae=(0,r.Z)(ne,[["render",te]]);var le=ae;const oe={class:"container"},ie={class:"block"},re=["src"];function se(e,t,n,a,o,i){return(0,l.wg)(),(0,l.iD)("div",oe,[(0,l._)("div",null,[(0,l._)("div",ie,[(0,l._)("iframe",{id:"Iframe",src:e.bdTokenUrl,scrolling:"no",frameborder:"0",style:{border:"0px",width:"100%",height:"100%"}},null,8,re)])])])}var ue={components:{},data:function(){return{bdTokenUrl:"http://172.245.60.107:8888/c9b3323e/",value1:""}},mounted(){const e=document.getElementById("Iframe"),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.style.width=Number(t)+"px",e.style.height=Number(n)+"px"},methods:{}};const de=(0,r.Z)(ue,[["render",se]]);var ce=de;const me={class:"container"},pe={class:"block"},he=["src"];function fe(e,t,n,a,o,i){return(0,l.wg)(),(0,l.iD)("div",me,[(0,l._)("div",null,[(0,l._)("div",pe,[(0,l._)("iframe",{id:"Iframe",src:e.bdTokenUrl,scrolling:"no",frameborder:"0",style:{border:"0px",width:"100%",height:"100%"}},null,8,he)])])])}var we={components:{},data:function(){return{bdTokenUrl:"https://nerdvm.racknerd.com/login.php",value1:""}},mounted(){const e=document.getElementById("Iframe"),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.style.width=Number(t)+"px",e.style.height=Number(n)+"px"},methods:{}};const be=(0,r.Z)(we,[["render",fe]]);var ge=be;const _e={class:"container"},ye={class:"block"},ve=["src"];function We(e,t,n,a,o,i){return(0,l.wg)(),(0,l.iD)("div",_e,[(0,l._)("div",null,[(0,l._)("div",ye,[(0,l._)("iframe",{id:"Iframe",src:e.bdTokenUrl,scrolling:"",frameborder:"0",style:{border:"0px",width:"100%",height:"100%"}},null,8,ve)])])])}var ke={components:{},data:function(){return{bdTokenUrl:"https://www.twdown.net/",value1:""}},mounted(){const e=document.getElementById("Iframe"),t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;e.style.width=Number(t)+"px",e.style.height=Number(n)+"px"},methods:{}};const xe=(0,r.Z)(ke,[["render",We]]);var Ie=xe,Ue=n(4870),Ce=n(9356),Te=n.n(Ce);const Ee={class:"qrcode"},Ve={class:"custom-tabs-label"},Be=(0,l._)("span",null,"生成二维码",-1),Se=(0,l._)("h4",{style:{color:"#2597d8",margin:"0.5em","text-shadow":"0.5px #35495e"}},"在下面输入链接",-1),Ze={class:"custom-tabs-label"},ze=(0,l._)("span",null,"识别二维码",-1),Oe=(0,l.Uk)(" 123 ");var je=(0,l.aZ)({__name:"QRcode",setup(e){const t=(0,Ue.iH)("www.baidu.com"),n=(0,Ue.iH)(300),a=(0,Ue.iH)(0),o=(0,Ue.iH)(0);(0,l.bv)((()=>{i(),window.addEventListener("resize",i)}));const i=function(){a.value=window.innerWidth,o.value=window.innerHeight};return(e,a)=>{const o=(0,l.up)("calendar"),i=(0,l.up)("el-icon"),r=(0,l.up)("el-col"),s=(0,l.up)("el-row"),u=(0,l.up)("el-input"),d=(0,l.up)("el-tab-pane"),c=(0,l.up)("el-tabs"),m=(0,l.up)("el-container");return(0,l.wg)(),(0,l.j4)(m,{class:"container"},{default:(0,l.w5)((()=>[(0,l._)("main",Ee,[(0,l.Wm)(c,{style:{height:"100%"},stretch:!0,type:"border-card",class:"demo-tabs"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{label:(0,l.w5)((()=>[(0,l._)("span",Ve,[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o)])),_:1}),Be])])),default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{span:24,style:{margin:"0em"}},{default:(0,l.w5)((()=>[Se])),_:1})])),_:1}),(0,l.Wm)(s,{style:{"margin-bottom":"1em"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),placeholder:"请在这里输入要生成的内容！",class:"inputUrl"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(s,{style:{"justify-content":"center"}},{default:(0,l.w5)((()=>[(0,l.Wm)(Te(),{value:t.value,size:n.value},null,8,["value","size"])])),_:1})])),_:1}),(0,l.Wm)(d,null,{label:(0,l.w5)((()=>[(0,l._)("span",Ze,[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(o)])),_:1}),ze])])),default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[Oe])),_:1})])),_:1})])),_:1})])])),_:1})}}});const De=je;var He=De,Ne=n(7139);function Pe(e,t,n,a,o,i){const r=(0,l.up)("el-table-column"),s=(0,l.up)("el-link"),u=(0,l.up)("el-table"),d=(0,l.up)("el-tab-pane"),c=(0,l.up)("el-tabs");return(0,l.wg)(),(0,l.j4)(c,{modelValue:o.activeName,"onUpdate:modelValue":t[0]||(t[0]=e=>o.activeName=e),type:"border-card",class:"demo-tabs"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{label:"知乎",name:"zhihu"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.zhihuinfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1}),(0,l.Wm)(d,{label:"微博",name:"weibo"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.weiboinfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1}),(0,l.Wm)(d,{label:"百度",name:"baidu"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.baiduinfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1}),(0,l.Wm)(d,{label:"抖音",name:"douyin"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.douyininfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1}),(0,l.Wm)(d,{label:"B站",name:"bili"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.biliinfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1}),(0,l.Wm)(d,{label:"今日",name:"toutiao"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{data:o.toutiaoinfo,stripe:"",style:{width:"100%"},"show-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{type:"index",width:"50",align:"center"}),(0,l.Wm)(r,{prop:"name",label:"榜单","min-width":"68%",align:"left"},{default:(0,l.w5)((e=>[(0,l.Wm)(s,{href:e.row.url,target:"_blank",class:"buttonText"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,Ne.zw)(e.row.name),1)])),_:2},1032,["href"])])),_:1}),(0,l.Wm)(r,{prop:"hot",label:"热度","min-width":"20%",align:"center"})])),_:1},8,["data"])])),_:1})])),_:1},8,["modelValue"])}var Me={data(){return{activeName:"zhihu",zhihuinfo:[],weiboinfo:[],baiduinfo:[],douyininfo:[],biliinfo:[],toutiaoinfo:[]}},methods:{async getZhihuInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/zhihuhot");this.zhihuinfo=e.data.data}catch(e){console.error(e)}},async getWeiboInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/weibohot");this.weiboinfo=e.data.data}catch(e){console.error(e)}},async getBaiduInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/baiduhot");this.baiduinfo=e.data.data}catch(e){console.error(e)}},async getDouyinInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/douyinhot");this.douyininfo=e.data.data}catch(e){console.error(e)}},async getBiliInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/bilihot");this.biliinfo=e.data.data}catch(e){console.error(e)}},async getToutiaoInfo(){try{const e=await this.axios.get("https://tenapi.cn/v2/toutiaohot");this.toutiaoinfo=e.data.data}catch(e){console.error(e)}}},created(){this.getZhihuInfo(),this.getWeiboInfo(),this.getBaiduInfo(),this.getDouyinInfo(),this.getBiliInfo(),this.getToutiaoInfo()},watch:{activeName(e){switch(e){case"zhihu":this.getZhihuInfo();break;case"weibo":this.getWeiboInfo();break;case"baidu":this.getBaiduInfo();break;case"douyin":this.getDouyinInfo();break;case"bili":this.getBiliInfo();break;case"toutiao":this.getToutiaoInfo();break;default:break}}}};const $e=(0,r.Z)(Me,[["render",Pe]]);var Ae=$e;const Re=(0,l._)("h1",{style:{color:"#2597d8","text-shadow":"0.5px #35495e"}},"共享文本",-1),qe={class:"creattxt"},Le=(0,l.Uk)("发送"),Ye={class:"copytxt"},Fe=(0,l.Uk)("复制");function Ke(e,t,n,o,i,r){const s=(0,l.up)("el-col"),u=(0,l.up)("el-row"),d=(0,l.up)("el-input"),c=(0,l.up)("el-form-item"),m=(0,l.up)("el-button"),p=(0,l.up)("el-form");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u,{style:{"text-align":"center"}},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{span:24},{default:(0,l.w5)((()=>[Re])),_:1})])),_:1}),(0,l._)("div",qe,[(0,l.Wm)(p,{"label-width":"80px","label-position":"top",onSubmit:(0,a.iM)(r.save,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"要发送的文本"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:i.model.name,"onUpdate:modelValue":t[0]||(t[0]=e=>i.model.name=e)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{type:"primary","native-type":"submit"},{default:(0,l.w5)((()=>[Le])),_:1})])),_:1})])),_:1},8,["onSubmit"])]),(0,l._)("div",Ye,[(0,l.Wm)(p,{"label-width":"50px","label-position":"top"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{label:"发送过来的文本"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{modelValue:i.placeholder1,"onUpdate:modelValue":t[1]||(t[1]=e=>i.placeholder1=e),autosize:{minRows:2},type:"textarea"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{type:"primary",onClick:r.copyText},{default:(0,l.w5)((()=>[Fe])),_:1},8,["onClick"])])),_:1})])),_:1})])],64)}var Qe={props:{id:{}},data(){return{items:{},model:{},placeholder1:""}},methods:{async save(){await this.$http.post("rest/share_txts",this.model);this.fetch()},async fetch(){const e=await this.$http.get("rest/share_txts");this.items=e.data,this.placeholder1=this.items[this.items.length-1].name},copyText(){navigator.clipboard.writeText(this.placeholder1).then((()=>{console.log("Text copied to clipboard")})).catch((e=>{console.error("Error copying text: ",e)}))}},created(){this.fetch()}};const Xe=(0,r.Z)(Qe,[["render",Ke]]);var Ge=Xe;const Je=[{path:"/login",name:"login",component:w,meta:{isPublic:!0}},{path:"/",name:"home",component:v,children:[{path:"/",name:"navigation",component:z},{path:"/watermark",name:"watermark",component:X},{path:"/xui",name:"xui",component:le},{path:"/baota",name:"baota",component:ce},{path:"/racknerd",name:"racknerd",component:ge},{path:"/twitterdown",name:"twitterdown",component:Ie},{path:"/qrcode",name:"qrcode",component:He},{path:"/hottrends",name:"hottrends",component:Ae},{path:"/sharetxts",name:"sharetxts",component:Ge}]}],et=(0,d.p7)({history:(0,d.PO)(),routes:Je});et.beforeEach(((e,t,n)=>{if(!e.meta.isPublic&&!localStorage.token)return n("/login");n()}));var tt=et,nt=n(8587),at=n(2748);n(4415);const lt={class:"allmenu"},ot=(0,l._)("span",{slot:"title"},"主页",-1),it=(0,l._)("span",{slot:"title"},"X-UI面板",-1),rt=(0,l._)("span",{slot:"title"},"宝塔面板",-1),st=(0,l._)("span",{slot:"title"},"Racknerd",-1);var ut=(0,l.aZ)({__name:"AllMenu",setup(e){const t=(0,Ue.iH)(!1),n=(0,Ue.iH)("ltr");function a(){t.value=!1}const o=(e,t)=>{},i=(e,t)=>{};return(e,r)=>{const s=(0,l.up)("el-button"),u=(0,l.up)("el-affix"),d=(0,l.up)("el-menu-item"),c=(0,l.up)("el-menu"),m=(0,l.up)("el-drawer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",lt,[(0,l.Wm)(u,{position:"top",offset:200},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"allmenubt",type:"primary",icon:(0,Ue.SU)(at.Menu),onClick:r[0]||(r[0]=e=>t.value=!0)},null,8,["icon"])])),_:1})]),(0,l.Wm)(m,{modelValue:t.value,"onUpdate:modelValue":r[1]||(r[1]=e=>t.value=e),direction:n.value,"with-header":!1},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{router:!0,class:"el-menu-vertical-demo",onOpen:o,onClose:i},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{style:{padding:"0px"},onClick:a,index:"/"},{default:(0,l.w5)((()=>[ot])),_:1}),(0,l.Wm)(d,{style:{padding:"0px"},onClick:a,index:"/xui"},{default:(0,l.w5)((()=>[it])),_:1}),(0,l.Wm)(d,{style:{padding:"0px"},onClick:a,index:"/baota"},{default:(0,l.w5)((()=>[rt])),_:1}),(0,l.Wm)(d,{style:{padding:"0px"},onClick:a,index:"/racknerd"},{default:(0,l.w5)((()=>[st])),_:1})])),_:1})])),_:1},8,["modelValue","direction"])],64)}}});const dt=ut;var ct=dt,mt={install(e){e.component("allmenu",ct)}},pt=n(70),ht=n(6423);const ft=pt.ZP.create({baseURL:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL||"/web/api"});ft.interceptors.request.use((function(e){return e&&e.headers&&localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),ft.interceptors.response.use((e=>e),(e=>(e.response.data.message&&(a.ri.prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&tt.push("/login")),Promise.reject(e))));var wt=ft;const bt=(0,a.ri)(u);bt.use(tt),bt.use(nt.Z),bt.use(mt),bt.use(ht.Z,pt.ZP),bt.config.globalProperties.$http=wt;for(const[gt,_t]of Object.entries(at))bt.component(gt,_t);bt.mixin({computed:{uploadUrl(){return this.$http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders(){return{Authorization:`Bearer ${localStorage.token||""}`}}}}),bt.mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,l,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],l=e[d][1],o=e[d][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,o,i=a[0],r=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(s)var d=s(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self["webpackChunkweb"]=self["webpackChunkweb"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4959)}));a=n.O(a)})();
//# sourceMappingURL=app.c4bdb488.js.map