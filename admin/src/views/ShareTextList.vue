<template>
    <div>
        <h1>分享历史</h1>
        <el-table :data="items">
            <el-table-column prop="_id" label="文本ID" width="240"></el-table-column>
            <el-table-column prop="name" label="文本"></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template v-slot="scope">
                    <el-button type="primary" size="small" @click="$router.push(`/sharetxts/edit/${scope.row._id}`)">编辑</el-button>
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
            const res = await this.$http.get('rest/share_txts')
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
                    const res = this.$http.delete(`rest/share_txts/${row._id}`)
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