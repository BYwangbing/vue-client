<!--
 @Description:
 @author BY
 @date 2019/10/4-21:05
-->
<template>
    <div class="aside_nav">
        <div class="nav_tit flex"><span>Info</span></div>
        <ul>
            <li class="active">
                <a class="flex" href="">
                    <span>基本信息</span>
                </a>
            </li>
            <li>
                <a class="flex" href="">运营人员</a>
            </li>
            <li>
                <a class="flex" href="">信息管理</a>
            </li>
            <li>
                <a class="flex" href="">技术动态</a>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {}
</script>

<style scoped>
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* 框架  以及左侧导航栏样式*/
    /*aside nav 左侧导航栏*/
    .aside_nav {
        width: 210px;
        height: 100%;
        position: absolute;
        top: 0;
        background: #2F4050;
        left: 0;
    }
    .aside_nav .nav_tit {
        text-align: center;
        border-bottom: 1px #b6b6b6 solid;
        margin: 0;
        height: 150px;
        background-color: #233645;
    }

    .aside_nav .nav_tit span {
        color: #fff;
        font-family: serif;
        font-size: 25px;
        width: 70px;
        height: 70px;
        line-height: 70px;
        background-color: #4CAF50;
        border-radius:100%;
        text-align: center;
    }
    .aside_nav ul{
        padding:0px ;
        margin-top: 20px;
        position: relative;
        background: #2F4050;
    }
    .aside_nav ul li {

        font-weight: bold;
        height: 45px;
        line-height: 45px;
        position: relative;

    }
    .aside_nav ul .active a{
        color: #fff;
        background-color: #293846;
    }
    .aside_nav ul li a {

        color: #a7b1c2;
        font-weight: 600;
        padding: 0 25px;
        font-size: 13px;
        letter-spacing: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

    }
    .aside_nav ul li a img{
        width: 21px;
        margin-right: 5px;
    }

    .aside_nav ul li a:hover {
        color: #fff;
        text-decoration: none;
        background-color: #293846;
    }
</style>
