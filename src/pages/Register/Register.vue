<!--
 @Description:
 @author BY
 @date 2019/9/29-22:27
-->
<template>
    <div class="htmleaf-container">
        <p class="center">{{tips}}</p>
        <div id="wrapper" class="login-page">
            <div id="login_form" class="form" :class="{'shake_effect':isActive}">
                <input type="text" placeholder="邮箱号" id="r_user_email" v-model="email"/>
                <input type="text" placeholder="用户名" id="r_user_name" v-model="username"/>
                <input type="password" placeholder="密码" id="r_password" v-model="password"/>
                <input type="password" placeholder="确认密码" id="re_password" v-model="rePassword"/>
                <button id="create" @click="register">创建账户</button>
                <p class="message">已经有了一个账户?
                    <router-link to="/login">立刻登录</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {register} from '../../api'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                username: '',
                email: '',
                password: '',
                rePassword: '', // 确认密码
                isActive: false, //是否摇晃
                tips: '欢迎注册~~' // 提示信息
            }
        },
        methods: {
            // 信息提示
            showAlert(alertText) {
                this.tips = alertText;
                this.isActive = true;
                setTimeout(() => {
                    this.isActive = false;
                }, 1000);
                Toast({
                    message: alertText,
                    position: 'bottom',
                    duration: 2500
                });
            },
            async register() {
                const {username, email, password, rePassword, showAlert} = this;
                // var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                // if (!regEmail.test(email)) {
                //     showAlert('邮箱格式不正确');
                // }
                let result = await register(username, email, password, rePassword);
                showAlert(result.message);
                if (result.code === 0) {
                    this.$router.push('/login');
                }
            }
        }
    }
</script>


<style scoped>
    @import "../../../static/css/htmleaf-demo.css";
    @import "../../../static/css/normalize.css";

    .login-page {
        width: 360px;
        padding: 4% 0 0;
        margin: auto;
    }

    .form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    .form input {
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }

    button {
        text-transform: uppercase;
        outline: 0;
        background: #4CAF50;
        width: 100%;
        border: 0;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .form button:hover, .form button:active, .form button:focus {
        background: #43A047;
    }

    .form .message {
        margin: 15px 0 0;
        color: #b3b3b3;
        font-size: 12px;
    }

    .form .message a {
        color: #4CAF50;
        text-decoration: none;
    }


    .shake_effect {
        -webkit-animation-name: shake;
        animation-name: shake;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
    }

    @-webkit-keyframes shake {
        from, to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
        }
    }

    @keyframes shake {
        from, to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
        }
    }

    p.center {
        color: #fff;
        font-weight: 700;
        line-height: 32px;
    }
</style>
