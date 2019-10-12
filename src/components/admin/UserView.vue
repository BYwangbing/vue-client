<template>
    <div>
        <div class="tables" style="margin: 0" v-if="modifyOperate">
            <div class="t_box anim">
                <div class="box_tit">
                    <span><b>查看运营人员信息 </b></span>
                    <div class="box_add" @click="goTo">修改</div>
                </div>
                <div class="box_table" style="width: 700px; margin: 0 auto;">
                    <div class="details">
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>姓名</span>
                            </div>
                            <div class="details-item-r">{{operateName}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>工号</span>
                            </div>
                            <div class="details-item-r">{{operateNumber}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>年龄</span>
                            </div>
                            <div class="details-item-r">{{operateAge}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>联系方式</span>
                            </div>
                            <div class="details-item-r">{{operateContact}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>性别</span>
                            </div>
                            <div class="details-item-r">{{operateSex}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>邮箱</span>
                            </div>
                            <div class="details-item-r">{{operateEmail}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>地址</span>
                            </div>
                            <div class="details-item-r">{{operateAddress}}</div>
                        </div>
                        <div class="details-item">
                            <div class="details-item-l">
                                <span>头像</span>
                            </div>
                        </div>
                        <img class="userImg" :src="imgUrl + file" alt="用户头像">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                _id: '',
                operateName: '',
                operateNumber: '',
                operateAge: '',
                operateContact: '',
                operateSex: '',
                operateEmail: '',
                operateAddress: '',
                operatePortrait: '',
                file: '',
                imgUrl: 'http://127.0.0.1:3000/'
            }
        },
        computed: {
            ...mapState(['modifyOperate'])
        },
        mounted() {
            // 遍历修改运营人员信息
            var id = this.$route.params.id;
            this.$store.dispatch('editOperate', id);
            // input框赋值
            setTimeout(() => {
                this._id = this.modifyOperate[0]._id;
                this.operateName = this.modifyOperate[0].operateName;
                this.operateNumber = this.modifyOperate[0].operateNumber;
                this.operateAge = this.modifyOperate[0].operateAge;
                this.operateContact = this.modifyOperate[0].operateContact;
                this.operateSex = this.modifyOperate[0].operateSex;
                this.operateEmail = this.modifyOperate[0].operateEmail;
                this.operateAddress = this.modifyOperate[0].operateAddress;
                this.operatePortrait = this.modifyOperate[0].operatePortrait;
                this.file = this.modifyOperate[0].operatePortrait;
            }, 1000)
        },
        methods: {
            goTo() {
                var _id = this.$route.params.id;
                this.$router.push({name:'OperateView',params:{operate_list:_id}});
            }
        }
    }
</script>

<style scoped>
    /*性别单选框*/
    .label-sex {
        position: relative;
        display: inline-block;
        line-height: 30px;
        margin-left: 12px;
    }

    input[type="radio"] {
        width: 20px;
        height: 20px;
        opacity: 0;
    }

    label {
        position: absolute;
        left: 5px;
        top: 8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #999;
    }

    /*设置选中的input的样式*/
    /* + 是兄弟选择器,获取选中后的label元素*/
    input:checked + label {
        background-color: #1e9fff;
        border: 1px solid #1e9fff;
    }

    input:checked + label::after {
        position: absolute;
        content: "";
        width: 5px;
        height: 10px;
        top: 3px;
        left: 6px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg)
    }

    /* 详情页面的表单 */
    .details {
        width: 100%;
    }

    .details-item {
        width: 100%;
        margin: 20px 0;
    }

    .details-item:after {
        clear: both;
        content: '';
        display: block;
    }

    .details-item-l {
        width: 12%;
        float: left;
        text-align: right;
        box-sizing: border-box;
        padding-right: 15px;
        line-height: 35px;
    }

    .details-item-r {
        width: 74.5%;
        float: left;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
        height: 35px;
        line-height: 35px;
        padding: 0 10px;
        background-color: inherit;
    }

    .details-result {
        width: 100%;
    }

    .details-result:after {
        clear: both;
        content: '';
        display: block;
    }

    .userImg {
        width: 100px;
        margin: 0 0 20px 110px;
    }
</style>
