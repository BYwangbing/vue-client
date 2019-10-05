<!--
 @Description:
 @author BY
 @date 2019/10/4-22:27
-->
<template>
    <div>
<!--        侧边栏-->
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>

        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    export default {
        components: {
            Sidebar,
            Header
        }
    }
</script>

<style scoped>

</style>
