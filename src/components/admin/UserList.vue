<!--
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
            <form action="">
                <div class="modal_con">
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>姓名</span>
                        </div>
                        <input class="con_input_r con_input_alike" type="text" placeholder="请输入该运营人员姓名"
                               v-model="operateName"/>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>工号</span>
                        </div>
                        <input class="con_input_r con_input_alike" type="text" placeholder="请输入该运营人员工号"
                               v-model="operateNumber"/>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>联系方式</span>
                        </div>
                        <input class="con_input_r con_input_alike" type="text" placeholder="请输入该运营人员联系方式"
                               v-model="operateContact"/>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>性别</span>
                        </div>
                        <div class="label-sex">
                            <input id="item1" type="radio" name="item" value="男" v-model="operateSex">
                            <label for="item1"></label>
                            <span style="margin-left: 10px">男</span>
                        </div>
                        <div class="label-sex">
                            <input id="item2" type="radio" name="item" value="女" v-model="operateSex">
                            <label for="item2"></label>
                            <span style="margin-left: 10px">女</span>
                        </div>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>邮箱号</span>
                        </div>
                        <input class="con_input_r con_input_alike" type="text" placeholder="请输入该运营人员邮箱号"
                               v-model="operateEmail"/>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>家庭住址</span>
                        </div>
                        <input class="con_input_r con_input_alike" type="text" placeholder="请输入该运营人员家庭住址"
                               v-model="operateAddress"/>
                    </div>
                    <div class="con_input">
                        <div class="con_input_l con_input_alike">
                            <span>头像</span>
                            <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                                   @change="getFile($event)">
                        </div>
                    </div>
                </div>
                <div class="modal_sub">
                    <button type="submit" class="btn btn-default" @click="submitForm($event)">提交</button>
                    <a class="sub_no" @click="cancel">取消</a>
                </div>
            </form>
        </div>
        <div class="shadow" v-if="isActive"></div>
        <div class="tables" style="margin: 0">
            <div class="table_search anim">
                <input placeholder="请输入姓名查询" v-model="keywords" @keyup.enter="search"/>
                <div class="search" @click="search">搜索</div>
            </div>

            <div class="t_box anim">
                <div class="box_tit">
                    <span><b>运营人员</b></span>
                    <div class="box_add" @click="addStaff">添加</div>
                </div>
                <div class="box_table">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="active">
                            <th>序号</th>
                            <th>姓名</th>
                            <th>工号</th>
                            <th>联系方式</th>
                            <th>性别</th>
                            <th>邮箱</th>
                            <th>地址</th>
                            <th>头像</th>
                            <th>编辑</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(operate_list, index) in operateList" :key="index">
                            <td>{{operate_list._id}}</td>
                            <td>{{operate_list.operateName}}</td>
                            <td>{{operate_list.operateNumber}}</td>
                            <td>{{operate_list.operateContact}}</td>
                            <td>{{operate_list.operateSex}}</td>
                            <td>{{operate_list.operateEmail}}</td>
                            <td>{{operate_list.operateAddress}}</td>
                            <td class="urlImg"><img :src="imgUrl + operate_list.operatePortrait" alt=""></td>
                            <td>
                                <div class="operation">
                                    <a class="op_look">查看</a>
                                    <a class="op_agree">修改</a>
                                    <a class="op_refuse" @click="deleteOperate(operate_list._id)">删除</a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {Toast} from 'mint-ui'
    import {deleteOperateUser, findOperateUser} from '../../api/index'

    export default {
        data() {
            return {
                isActive: false,
                keywords: '', //  搜索关键字
                operateName: '',
                operateNumber: '',
                operateContact: '',
                operateSex: '',
                operateEmail: '',
                operateAddress: '',
                file: '',
                imgUrl: 'http://127.0.0.1:3000/'
            }
        },
        mounted() {
            this.$store.dispatch('reqOperateList')
        },
        computed: {
            ...mapState(['operateList'])
        },
        methods: {
            // 增加运营人员弹框
            addStaff() {
                this.isActive = true;
            },
            // 关闭
            closeModal() {
                this.isActive = false;
            },
            // 取消
            cancel() {
                this.isActive = false;
            },
            // input[type=file]
            getFile(event) {
                this.file = event.target.files[0];
                console.log(this.file);
            },
            // 添加
            submitForm(event) {
                const {operateName, operateNumber, operateContact, operateSex, operateEmail, operateAddress} = this;
                event.preventDefault();
                let formData = new window.FormData();
                formData.append('operateName', operateName);
                formData.append('operateNumber', operateNumber);
                formData.append('operateContact', operateContact);
                formData.append('operateSex', operateSex);
                formData.append('operateEmail', operateEmail);
                formData.append('operateAddress', operateAddress);
                formData.append('operatePortrait', this.file);
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                this.$http.post('/api/users/addOperateUser', formData, config).then((res) => {
                    let result = res.data;
                    console.log(result);
                    Toast(result.message);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                })
            },
            // 删除
            async deleteOperate(userID) {
                var r = confirm("你确定要删除吗？");
                if (r) {
                    const result = await deleteOperateUser(userID);
                    console.log(result);
                    Toast(result.message);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            },
            // 查找
            search() {
                // 将user保存到vuex的state
                this.$store.dispatch('searchOperate', this.keywords);
            }
        }

    }
</script>

<style scoped>
    button[type=submit] {
        height: 28px;
        line-height: 14px;
        background-color: #1e9fff;
        outline: none;
        color: #FFF;
        border-radius: 2px;
        padding: 0 10px;
    }

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
</style>
