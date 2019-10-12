<<!--
 @Description:
 @author BY
 @date 2019/10/5-16:26
-->
<template>
    <div>
        <div class="add_modal" :class="{'tran_scale':isActive}">
            <div class="modal_tit">添加运营人员</div>
            <div class="modal_oper" @click="closeModal">
                <a href="javascript:;" class="oper_close"></a>
            </div>
            <div class="modal_con">
                <div class="con_input">
                    <div class="con_input_l con_input_alike">
                        <span>公司名称</span>
                    </div>
                    <input class="con_input_r con_input_alike" type="text" placeholder="请输入添加的公司名称"/>
                </div>
                <div class="con_input">
                    <div class="con_input_l con_input_alike">
                        <span>工号</span>
                    </div>
                    <input class="con_input_r con_input_alike" type="text" placeholder="请输入公司工号的前四位"/>
                </div>
            </div>
            <div class="modal_sub">
                <a class="sub_yes">提交</a>
                <a class="sub_no" @click="cancel">取消</a>
            </div>
        </div>
        <div class="shadow" v-if="isActive"></div>
        <div class="tables" style="margin: 0" v-if="modifyOperate">
            <div class="t_box anim">
                <div class="box_tit">
                    <span><b>修改运营人员信息 </b></span>
                    <div class="box_add" @click="backHistory">返回</div>
                </div>
                <div class="box_table">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="active">
                            <th>姓名</th>
                            <th>工号</th>
                            <th>年龄</th>
                            <th>联系方式</th>
                            <th>性别</th>
                            <th>邮箱</th>
                            <th>地址</th>
                            <th>头像</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(operate_list, index) in modifyOperate" :key="index">
                            <td>{{operate_list.operateName}}</td>
                            <td>{{operate_list.operateNumber}}</td>
                            <td>{{operate_list.operateAge}}</td>
                            <td>{{operate_list.operateContact}}</td>
                            <td>{{operate_list.operateSex}}</td>
                            <td>{{operate_list.operateEmail}}</td>
                            <td>{{operate_list.operateAddress}}</td>
                            <td class="urlImg"><img :src="imgUrl + operate_list.operatePortrait" alt=""></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="box_table" style="width: 700px; margin: 0 auto;">
                    <div class="details">
                        <form action="">
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>姓名</span>
                                </div>
                                <input v-model="operateName" name="operateName" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>工号</span>
                                </div>
                                <input v-model="operateNumber" name="operateNumber" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>年龄</span>
                                </div>
                                <input v-model="operateAge" name="operateAge" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>联系方式</span>
                                </div>
                                <input v-model="operateContact" name="operateContact" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>性别</span>
                                </div>
                                <div class="label-sex">
                                    <input id="item1" type="radio" name="operateSex" value="男" v-model="operateSex">
                                    <label for="item1"></label>
                                    <span style="margin-left: 10px">男</span>
                                </div>
                                <div class="label-sex">
                                    <input id="item2" type="radio" name="operateSex" value="女" v-model="operateSex">
                                    <label for="item2"></label>
                                    <span style="margin-left: 10px">女</span>
                                </div>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>邮箱</span>
                                </div>
                                <input v-model="operateEmail" name="operateEmail" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>地址</span>
                                </div>
                                <input v-model="operateAddress" name="operateAddress" class="details-item-r"/>
                            </div>
                            <div class="details-item">
                                <div class="details-item-l">
                                    <span>头像</span>
                                </div>
                                <input type="file" name="file"
                                       accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                                       @change="getFile($event)" class="details-item-r">
                            </div>
                            <img class="userImg" :src="imgUrl + file" alt="用户头像">
                            <div class="details-result">
                                <input class="result result-yes" type="submit" value="修改" @click="submitForm($event)"/>
                                <div class="result result-no" @click="$router.back()">取消</div>
                            </div>
                        </form>
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
                operateName: '',
                operateNumber: '',
                operateAge: '',
                operateContact: '',
                operateSex: '',
                operateEmail: '',
                operateAddress: '',
                operatePortrait: '',
                isActive: false,
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
            backHistory(){
                this.$router.go(-1);//返回上一层
            },
            addStaff() {
                this.isActive = true;
            },
            closeModal() {
                this.isActive = false;
            },
            cancel() {
                this.isActive = false;
            },
            // input[type=file]
            getFile(event) {
                this.file = event.target.files[0];
                console.log(this.file);
            },
            // 修改
            submitForm(event) {
                const {operateName, operateNumber, operateAge, operateContact, operateSex, operateEmail, operateAddress} = this;
                event.preventDefault();
                let formData = new window.FormData();
                const _id = this.$route.params.id;
                formData.append('_id', _id);
                formData.append('operateName', operateName);
                formData.append('operateNumber', operateNumber);
                formData.append('operateAge', operateAge);
                formData.append('operateContact', operateContact);
                formData.append('operateSex', operateSex);
                formData.append('operateEmail', operateEmail);
                formData.append('operateAddress', operateAddress);
                formData.append('operatePortrait', this.file);
                console.log(formData.getAll('operatePortrait'));
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                this.$http.post('/api/users/editOperateUser', formData, config).then((res) => {
                    let result = res.data;
                    console.log(result);
                    Toast(result.message);
                    setTimeout(() => {
                        // 去运营人员列表页
                        this.$router.replace('/admin/userList');
                    }, 1000);
                }).catch(error => {
                    console.log(error);
                })
            },
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

    .result {
        text-align: center;
        float: left;
        margin-right: 30px;
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        padding: 1px 6px;
    }

    .result-yes {
        background-color: #009688;
        margin-left: 10%;
        border: none 0;
    }

    .result-no {
        background-color: #FF5722;
    }

    .userImg {
        width: 100px;
        margin: 0 0 20px 110px;
    }
</style>
