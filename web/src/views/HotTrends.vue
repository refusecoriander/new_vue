<template>
    <el-tabs v-model="activeName" type="border-card" class="demo-tabs">
        <el-tab-pane label="知乎" name="zhihu" @tab-click="handleClick">
            <el-table :data="zhihuinfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="微博" name="weibo">
            <el-table :data="weiboinfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="百度" name="baidu">
            <el-table :data="baiduinfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="抖音" name="douyin">
            <el-table :data="douyininfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="B站" name="bili">
            <el-table :data="biliinfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="今日" name="toutiao">
            <el-table :data="toutiaoinfo" stripe style="width: 100%" :show-header="false">
                <el-table-column type="index" width="50" align="center" />
                <el-table-column prop="name" label="榜单" min-width="68%" align="left">
                    <template #default="scope">
                        <el-link :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.name }}</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="hot" label="热度" min-width="20%" align="center" />
            </el-table>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    data() {
        return {
            activeName: 'zhihu',
            zhihuinfo: [],
            weiboinfo: [],
            baiduinfo: [],
            douyininfo: [],
            biliinfo: [],
            toutiaoinfo: [],
            
        };
    },
    methods: {
        async getZhihuInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/zhihuhot');
                this.zhihuinfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getWeiboInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/weibohot');
                this.weiboinfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getBaiduInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/baiduhot');
                this.baiduinfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getDouyinInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/douyinhot');
                this.douyininfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getBiliInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/bilihot');
                this.biliinfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getToutiaoInfo() {
            try {
                const res = await this.axios.get('https://tenapi.cn/v2/toutiaohot');
                this.toutiaoinfo = res.data.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.getZhihuInfo();
        // this.getWeiboInfo();
    },

    watch: {
        activeName(newVal) {
            switch (newVal) {
                case 'zhihu':
                    this.getZhihuInfo();
                    break;
                case 'weibo':
                    this.getWeiboInfo();
                    break;
                case 'baidu':
                    this.getBaiduInfo();
                    break;
                case 'douyin':
                    this.getDouyinInfo();
                    break;
                case 'bili':
                    this.getBiliInfo();
                    break;
                case 'toutiao':
                    this.getToutiaoInfo();
                    break;
                default:
                    break;
            }
        }
    }
    // setup() {
    //     const zhihuhot = ref([]);
    //     const weibohot = ref([]);

    //     onMounted(async () => {
    //         // 获取热搜数据
    //         const res = await fetch('https://tenapi.cn/v2/zhihuhot');
    //         const data = await res.json();
    //         zhihuhot.value = data.data;
    //         console.log(zhihuhot.value)
    //     });

    //     return { zhihuhot };
    // },
};
</script>

<style>
.demo-tabs>.el-tabs__content {
    padding: 6px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>
