<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <User></User>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import User from '../../components/admin/UserList'

    export default {
        components: {
            Sidebar,
            Header,
            User
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
