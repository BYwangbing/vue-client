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
            <div class="modal_con">
                <div class="con_input">
                    <div class="con_input_l con_input_alike">
                        <span>公司名称</span>
                    </div>
                    <input class="con_input_r con_input_alike" type="text" placeholder="请输入添加的公司名称" />
                </div>
                <div class="con_input">
                    <div class="con_input_l con_input_alike">
                        <span>工号</span>
                    </div>
                    <input class="con_input_r con_input_alike" type="text" placeholder="请输入公司工号的前四位" />
                </div>
            </div>
            <div class="modal_sub">
                <a class="sub_yes">提交</a>
                <a class="sub_no" @click="cancel">取消</a>
            </div>
        </div>
        <div class="shadow" v-if="isActive"></div>
        <div class="tables" style="margin: 0">
            <div class="table_search anim">
                <input placeholder="请输入公司名称" />
                <div class="search">搜索</div>
            </div>

            <div class="t_box anim">
                <div class="box_tit">
                    <span><b>基本信息</b></span>
                    <div class="box_add" @click="addStaff">添加</div>
                </div>
                <div class="box_table">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="active">
                            <th>序号</th>
                            <th>用户名</th>
                            <th>邮箱号</th>
                            <th>密码</th>
                            <th>头像</th>
                            <th>编辑</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-if="userInfo">
                                <td>{{userInfo._id}}</td>
                                <td>{{userInfo.username}}</td>
                                <td>{{userInfo.email}}</td>
                                <td>{{userInfo.password}}</td>
                                <td>头像</td>
                                <td>
                                    <div class="operation">
                                        <a class="op_look">查看</a>
                                        <a class="op_agree">编辑</a>
                                        <a class="op_refuse">删除</a>
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
    export default {
        data(){
            return {
                isActive: false
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        methods: {
            addStaff() {
                this.isActive = true;
            },
            closeModal() {
                this.isActive = false;
            },
            cancel() {
                this.isActive = false;
            }
        }
    }
</script>

<style scoped>

</style>
