<template>
    <el-container class="container">
        <el-main class="main">
            <el-row>
                <el-col :span="24">
                    <h1 style="color:#2597d8;text-shadow: 0.5px #35495e">短视频/图集在线去水印解析</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <div class="mt-4">
                        <el-input placeholder="请粘贴分享链接" v-model="input" id="url" lass="input-with-select">
                            <template #prepend>
                                <el-select class="select" v-model="select" slot="prepend" placeholder="视频">
                                    <el-option label="视频" value="1"></el-option>
                                    <el-option label="图集" value="2"></el-option>
                                </el-select>
                            </template>
                            <template #append>
                                <el-button slot="append" @click="onSubmit">解析</el-button>
                            </template>
                        </el-input>
                        <div class="waterfall" v-if="iseen">
                            <div class="item" v-for="url in images_url" :key="url">
                                <el-image :src="url" :preview-src-list="images_url">
                                </el-image>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row style="margin-top:10px;" :gutter="4">
                <el-col :span="6">
                    <el-popover width="25em" placement="bottom" trigger="click">
                        <template #reference>
                            <el-button style="padding-left: 12px; width:100%" class="warning" type="primary"
                                slot="reference">提示
                            </el-button>
                        </template>
                        <template #default>
                            <div style="width:23em;">
                                <p><strong>目前支持
                                    </strong>抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue
                                    Vlog/小咖秀/西瓜视频</p>
                                <p><strong>温馨提示 </strong>粘贴视频地址时<u>无需删除文案</u><small> 但如果视频链接正确但解析失败请删掉文案后重试</small></p>
                            </div>
                        </template>
                    </el-popover>
                </el-col>
                <el-col :span="6">
                    <el-button class="menubt" @click="sendcoversrc" plain>下载封面</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button class="menubt" @click="sendurlsrc" plain>下载视频</el-button>
                </el-col>
                <el-col :span="6">
                    <el-button class="menubt" @click="sendmusicsrc" plain>下载音乐</el-button>
                </el-col>
            </el-row>
            <div class="block">
                <iframe id="Iframe1" :src="downsrcs" scrolling="no"
                    style=" border:0px; width:100%;height:100%;"></iframe>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import { ElNotification } from 'element-plus' 

export default {
    data() {
        return {
            downsrcs: '',
            info: {},
            input: '',
            select: '',
            music: false,
            seen: false,
            iseen: false,
            loading: false,
            images_url: {}
        }
    },
    methods: {
        onSubmit() {
            this.seen = false
            this.iseen = false
            this.loading = true
            const url = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input)
            //const url = /http[s]?:\/\/[\w.]+[\w/]*[\w.]*\??[\w=&:\-+%]*[/]*/.exec(this.input)
            if (this.select == '1' || this.select == '') {
                this.axios.get('https://tenapi.cn/v2/video?url=' + encodeURIComponent(url[0])).then((res) => {
                //this.axios.get('https://tenapi.cn/v2/video/?url=' + url).then((res) => {
                    if (res.data.code == 200) {
                        if (res.data.data.music != null) {
                            this.music = true
                        }
                        this.seen = true
                        this.info = res.data.data
                        this.loading = false
                        ElNotification({
                            title: '解析成功',
                            message: '请及时下载音视频', 
                            type: 'success'
                        });
                    } else {
                        this.seen = false
                        this.loading = false
                        ElNotification({
                            title: '解析失败',
                            message: '视频不存在或接口失效', 
                            type: 'error'
                        })
                    }
                })
            } else {
                this.seen = false
                this.axios.get('https://tenapi.cn/v2/images?url=' + encodeURIComponent(url[0])).then((res) => {
                //this.axios.get('https://tenapi.cn/v2/images/?url=' + url).then((res) => {
                    if (res.data.code == 200) {
                        this.iseen = true
                        this.loading = false
                        this.images_url = res.data.data.images
                        ElNotification({
                            title: '解析成功',
                            message: '图集暂不支持批量下载，请长按下载或右键另存为', 
                            type: 'success'
                        });
                    } else {
                        this.iseen = false
                        this.loading = false
                        ElNotification({
                            title: '解析失败',
                            message: '图集不存在或接口失效', 
                            type: 'error'
                        })
                    }
                    console.log(this.images_url);
                })
            }
        },
        sendcoversrc(downsrcs) {
            document.getElementById('Iframe1').src = document.getElementById('Iframe1').src = this.info.cover;
        },
        sendurlsrc(downsrcs) {
            document.getElementById('Iframe1').src = document.getElementById('Iframe1').src = this.info.url;
        },
        sendmusicsrc(downsrcs) {
            document.getElementById('Iframe1').src = document.getElementById('Iframe1').src = this.info.music;
        },
    },
    mounted() {
        //document.getElementById('Iframe1').src=document.getElementById('Iframe1').src;
        const oIframe = document.getElementById('Iframe1');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.width = (Number(deviceWidth) - 26) + 'px'; //数字是页面布局宽度差值
        oIframe.style.height = (Number(deviceHeight) - 170) + 'px'; //数字是页面布局高度差
    },
}
</script>
  
<style scoped>

.main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    padding: 0px;
    height: 100%;
    width: 100%;
  }

.select {
    width: 5.5em;
}

::selection {
    background: rgba(0, 149, 255, .1);
}

body:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .3;
    z-index: -1;
    content: "";
    position: fixed;
    background-image: linear-gradient(135deg, #CE9FFC 10%, #7367F0 100%);
}

.el-main {
    background-color: rgb(255, 255, 255);
    padding: 10px;
}
.menubt {
    padding-left: 12px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;

}
.waterfall {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
}

.item {
    padding: 5px;
    break-inside: avoid;
}

.item img {
    width: 100%;
    margin-bottom: 10px;
}

.typo {
    text-align: left;
}

.typo a {
    color: #2c3e50;
    text-decoration: none;
}

hr {
    height: 10px;
    margin-bottom: .8em;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .12);
}

.block {
    margin-top: 0px;

}
</style>
  