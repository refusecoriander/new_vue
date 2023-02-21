<template>
    <div class="picsedit">
        <h1>{{ id ? '编辑' : '新建' }}照片</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图片">
                <el-upload class="avatar-uploader" 
                :action="$http.defaults.baseURL + '/upload'"  
                :show-file-list="false" 
                :on-success="afterUpload" 
                >
                    <img v-if="model.pic" :src="model.pic" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { Plus } from '@element-plus/icons-vue'
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

    // setup(){
    //     const imgupload = reactive({
    //         model
    //     })
    //     return {
    //         imgupload
    //     }
    // },

    methods: {
        afterUpload(res){
            this.model.pic=res.url
        },

        async save() {
            let res
            if (this.id) {
                res = await this.$http.put(`rest/pics/${this.id}`, this.model)
            } else {
                res = await this.$http.post('rest/pics', this.model)
            }

            this.$router.push('/pics/list')
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

        async fetch() {
            const res = await this.$http.get(`rest/pics/${this.id}`)
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

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>