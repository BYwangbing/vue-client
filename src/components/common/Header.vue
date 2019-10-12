<!--
 @Description:
 @author BY
 @date 2019/10/4-21:04
-->
<template>
    <div class="header">
        <ul class="rt_nav">
            <li>
                <img class="nav_img" src="../../assets/img/default.jpg" alt="">
                &emsp;
                <span>用户名:  &emsp;<b>{{username}}</b></span>
            </li>
            <li>
                <a class="quit_icon">
                    <img src="../../assets/img/quit.png" alt="">
                    <span @click="logOut">安全退出</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                username: ''
            }
        },
        mounted() {
            const userStr = window.localStorage .getItem('user');
            const userObj = JSON.parse(userStr);
            this.username = userObj.username;
        },
        methods: {
            async logOut() {
                var r = confirm("你确定要退出登录吗？");
                if (r) {
                    this.$store.dispatch('login_Out');

                    Toast('退出登录，一秒后跳转到登录页面...');
                    setTimeout(() => {
                        this.$router.replace('/login');
                    }, 1000);
                }

            }
        }
    }
</script>

<style scoped>

</style>
