<template>
    <div>
        <h1>图片列表</h1>
        <el-table :data="items">
            <el-table-column prop="_id" label="图片ID" width="220"></el-table-column>
            <el-table-column prop="pic" label="图片" padding-top="0">
                <template v-slot="scope" >
                    <img :src="scope.row.pic" style="height:3rem;padding-top:0px;padding-bottom:0px" />
                </template>
            </el-table-column>
            <el-table-column prop="name" label="图片名"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template v-slot="scope">
                    <el-button type="primary" size="small" @click="$router.push(`/pics/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button type="danger" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
    data() {
        return {
            items: []
        }
    },
    methods: {

        async fetch() {
            const res = await this.$http.get('rest/pics')
            this.items = res.data
        },
        async remove(row) {
            ElMessageBox.confirm(
                `是否确定要删除用户 "${row.name}"？`,
                '提示',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
                .then(async() => {
                    const res = this.$http.delete(`rest/pics/${row._id}`)
                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    })
                    this.fetch()
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '取消删除',
                    })
                })
                
        }
    },
    created() {
        this.fetch()
    }
}
</script>
