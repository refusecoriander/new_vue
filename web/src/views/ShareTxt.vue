<template>
    <div class="creattxt">
        <h1>输入文本</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="文本">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="copytxt">
        <h1>复制文本</h1>
        <el-form label-width="120px">
            <el-form-item label="文本">
                <el-input
                    v-model="placeholder1"
                    :autosize="{ minRows: 2}"
                    type="textarea"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">复制</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
// import { ElMessage, ElMessageBox } from 'element-plus'
export default {
    props: {
        id: {}
    },
    data() {
        return {
            items: {},
            model: {},
            placeholder1:'',
        }
    },
    methods: {
        async save() {
            const res = await this.$http.post('rest/share_txts', this.model)
            // }
            this.fetch()
        },

        async fetch() {
            const res = await this.$http.get('rest/share_txts')
            this.items = res.data
            this.placeholder1 = this.items[this.items.length - 1].name
        }, 
    },
    created() {
        this.fetch()
    }
}
</script>