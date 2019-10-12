<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <UserEdit></UserEdit>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import UserEdit from '../../components/admin/UserEdit'

    export default {
        components: {
            Sidebar,
            Header,
            UserEdit
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
