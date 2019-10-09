<!--
 @Description:
 @author BY
 @date 2019/10/4-21:05
-->
<template>
    <div class="aside_nav">
        <div class="nav_tit flex"><span>Info</span></div>
        <ul>
            <li :class="{active: '/admin' === $route.path}">
                <router-link class="flex" to="/admin">
                    <img src="../../assets/img/base.png" alt="">
                    <span>基本信息</span>
                </router-link>
            </li>
            <li :class="{active: '/admin/userList' === $route.path}">
                <router-link class="flex" to="/admin/userList">
                    <span>运营人员</span>
                </router-link>
            </li>
            <li :class="{active: '/admin/informList' === $route.path}">
                <router-link class="flex" to="/admin/informList">
                    <span>信息管理</span>
                </router-link>
            </li>
            <li :class="{active: '/admin/technologyList' === $route.path}">
                <router-link class="flex" to="/admin/technologyList">
                    <span>技术动态</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {}
</script>

<style scoped>

</style>
