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
                        <el-input v-model="value" placeholder="请在这里输入要生成的内容！" class="inputUrl">
                            <template #append>
                                <el-button :icon="Search" />
                            </template>
                        </el-input>
                        <!-- <input type="text" v-model="value" placeholder="请在这里输入要生成的内容！" /> -->
                        <!-- <button>
                        添加图标
                        <input type="file" accept="image/*" @change="upFile" />
                    </button> -->
                    </el-row>

                    <el-row>
                        <div class="code" ref="code">
                            <QRCodeVue3 :margin="margin" :width="width" :height="height" :value="value"
                                :qrOptions="qrOptions" :image="image" :imageOptions="imageOptions"
                                :dotsOptions="dotsOptions" :backgroundOptions="backgroundOptions"
                                :cornersSquareOptions="cornersSquareOptions" :cornersDotOptions="cornersDotOptions" />
                        </div>
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
                </el-tab-pane>
            </el-tabs>
        </main>
    </el-container>
</template>

<script lang="ts">

import { defineComponent, reactive, toRefs, nextTick } from "vue";
import QRCodeVue3 from "qrcode-vue3";
import image from "@/assets/logo.png";
import { Calendar } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'

export default defineComponent({
    name: "viewQrcode",
    components: {
        QRCodeVue3,
    },
    setup() {
        const data = reactive({
            //基础配置 https://qr-code-styling.com
            width: 340, // 二维码宽度
            height: 340, // 二维码高度
            value: "https://mytools.refusecoriander.top", // 二维码内容

            margin: 6, // 二维码图像的外边距

            //背景配置
            backgroundOptions: {
                //二维码背景色
                color: "white",
            },

            //二维码配置
            qrOptions: {
                typeNumber: "0", // 类型编号 0 - 40
                mode: "Byte", // 模式 Numeric | Alphanumeric | Byte | Kanji
                errorCorrectionLevel: "Q", // 错误级别 L | M | Q | H
            },

            //图像配置（中心图片）
            image, // 二维码中心的图片
            imageOptions: {
                hideBackgroundDots: true, // 隐藏图片背后有点
                imageSize: 0.5,
                margin: 5,
                crossOrigin: "anonymous", // anonymous | use-credentials
            },
            //二维码点配置
            dotsOptions: {
                type: "rounded", // 二维码样式 square | dots | rounded | extra-rounded | classy | classy-rounded
                color: "#6a1a4c",
                // 渐变色
                gradient: {
                    type: "linear", // linear线性渐变 | radial径向渐变
                    rotation: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#ff00ea",
                        },
                        {
                            offset: 1,
                            color: "#0062ff",
                        },
                    ],
                },
            },
            //角落广场配置
            cornersSquareOptions: {
                type: "extra-rounded", // none | square | dot | extra-rounded
                color: "#00ff91",
                gradient: {
                    type: "linear",
                    rotation: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#006eff",
                        },
                        {
                            offset: 1,
                            color: "#00ffbf",
                        },
                    ],
                },
            },
            //角落点配置
            cornersDotOptions: {
                type: "dot", // none | square | dot
                color: "#000000",
                gradient: {
                    type: "radial",
                    rotation: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#ff00ea",
                        },
                        {
                            offset: 1,
                            color: "#00aaff",
                        },
                    ],
                },
            },
        });

        const upFile = (event) => {
            const value = data.value,
                [file] = event.target.files || event.dataTransfer.files;
            try {
                data.image = URL.createObjectURL(file);
            } catch (err) {
                const fr = new FileReader(err);
                fr.readAsDataURL(file);
                fr.onload = ({ target }) => {
                    data.image = target.result;
                };
            } finally {
                data.value = "";
                nextTick(() => {
                    data.value = value;
                });
            }
        };

        return {
            Calendar,
            Search,
            upFile,
            ...toRefs(data),
        };
    },
});
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
}

.el-container {
    height: 100%;
}
</style>