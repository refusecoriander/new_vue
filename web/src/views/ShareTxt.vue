<template>
    <el-row style="text-align:center;">
        <el-col :span="24">
            <h1 style="color:#2597d8;text-shadow: 0.5px #35495e">共享文本</h1>
        </el-col>
    </el-row>
    <div class="creattxt">
        <el-form label-width="80px" label-position="top" @submit.native.prevent="save">
            <el-form-item label="要发送的文本">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">发送</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div class="copytxt">
        <el-form label-width="50px" label-position="top">
            <el-form-item label="发送过来的文本">
                <el-input v-model="placeholder1" :autosize="{ minRows: 2 }" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="copyText">复制</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    props: {
        id: {}
    },
    data() {
        return {
            items: {},
            model: {},
            placeholder1: '',
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

        copyText() {
            navigator.clipboard.writeText(this.placeholder1)
                .then(() => {
                    console.log('Text copied to clipboard')
                })
                .catch((error) => {
                    console.error('Error copying text: ', error)
                })
        }
    },
    created() {
        this.fetch()
    },

}
</script>

<style>
.creattxt {
    padding: 10px;
    background-color: rgb(221 232 244);
    margin: 20px;
    border-radius: 15px;
}

.copytxt {
    padding: 10px;
    background-color: rgb(195 205 216);
    margin: 20px;
    border-radius: 15px;
}
</style>