<template>
    <el-container class="container">
        <main class="qrcode">
            <el-tabs style="height:100%" :stretch="true" type="border-card" class="demo-tabs">
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <calendar />
                            </el-icon>
                            <span>生成二维码</span>
                        </span>
                    </template>
                    <el-row>
                        <el-col :span="24" style="margin:0em">
                            <h4 style="color:#2597d8;margin:0.5em;text-shadow: 0.5px #35495e">在下面输入链接</h4>
                        </el-col>
                    </el-row>
                    <el-row style="margin-bottom:1em">
                        <el-input v-model="qrCode123" placeholder="请在这里输入要生成的内容！" class="inputUrl">
                            <!-- <template #append>
                                <el-button :icon="Search" />
                            </template> -->
                        </el-input>
                    </el-row>

                    <el-row style="justify-content:center">
                        <qrcode-vue :value="qrCode123" :size="qrSize"></qrcode-vue>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <el-icon>
                                <calendar />
                            </el-icon>
                            <span>识别二维码</span>
                        </span>
                    </template>
                    <el-row>
                        123
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </main>
    </el-container>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import QrcodeVue from 'qrcode.vue'
//import { Search} from '@element-plus/icons-vue'

const qrCode123 = ref("www.baidu.com")
const qrSize = ref(300)


const windowWidth = ref(0)
const windowHeight = ref(0)

onMounted(() => {
    getWindowResize()
    window.addEventListener('resize', getWindowResize)
})

const getWindowResize = function () {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
}

</script>

<style lang="less">
.inputUrl {
    margin-top: 10px;
    height: 44px;
}

.demo-tabs>.el-tabs__content {
    height: 100%;
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    font-size: 1.25em;
    vertical-align: middle;
    margin-left: 4px;
}

.qrcode {

    background-color: #ffffff;
    color: #333;
    text-align: center;
    padding: 0px;
    height: 100%;
    width: 100%;

    .code {
        margin: auto;
        padding: 8px;
        width: 340px;
        height: 340px;
        border-radius: 6px;
        border: 1px solid gray;
    }
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
}

.el-main {
    background-color: rgb(255, 255, 255);
    padding: 10px;
    height: 100%;
}

.el-container {
    height: 100%;
}
</style>