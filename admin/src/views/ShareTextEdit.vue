<template>
    <div class="usercreat">
        <h1>{{id ? '编辑':'新建'}}文本</h1>
        <el-form label-width="120px" @submit.native.prevent="save">

            <el-form-item label="文本">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
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
            model: {},

        }
    },
    methods: {
        async save(){
            let res
            if(this.id){
                res = await this.$http.put(`rest/share_txts/${this.id}`,this.model)
            }else{
                res = await this.$http.post('rest/share_txts',this.model)
            }
            
            this.$router.push('/sharetxts/list')
        },

        async fetch(){
            const res = await this.$http.get(`rest/share_txts/${this.id}`)
            this.model = res.data
        }
    },
    created() {
        this.id && this.fetch()
    }
}
</script>