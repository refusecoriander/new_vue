<template>
    <div class="usercreat">
        <h1>{{id ? '编辑':'新建'}}用户</h1>
        <el-form label-width="120px" @submit.native.prevent="save">

            <el-form-item label="用户名">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="密码">
                <el-input type="text" v-model="model.password"></el-input>
            </el-form-item> -->
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
                res = await this.$http.put(`rest/users/${this.id}`,this.model)
            }else{
                res = await this.$http.post('rest/users',this.model)
            }
            
            this.$router.push('/users/list')
            // ElMessageBox
            //     .then(() => {
            //         ElMessage({
            //             type: 'success',
            //             message: '添加成功',
            //         })
            //         this.fetch()
            //     })
            //     .catch(() => {
            //         ElMessage({
            //             type: 'info',
            //             message: '取消删除',
            //         })
            //     })
                
            // this.$message({
            //     type: 'succes',
            //     mesage: '保存成功'
            // })
        },

        async fetch(){
            const res = await this.$http.get(`rest/users/${this.id}`)
            this.model = res.data
        }
        // async save() {
        //     let res
        //     if (this.id) {
        //         res = await this.$http.put(`rest/admin_users/${this.id}`, this.model)
        //     } else {
        //         res = await this.$http.post('rest/admin_users', this.model)
        //     }
        //     this.$router.push('/admin_users/list')
        //     this.$message({
        //         type: 'success',
        //         message: '保存成功'
        //     })
        // },
        // async fetch() {
        //     const res = await this.$http.get(`rest/admin_users/${this.id}`)
        //     this.model = res.data
        // },


    },
    created() {
        this.id && this.fetch()
    }
}
</script>