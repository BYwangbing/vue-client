<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <UserView></UserView>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import UserView from '../../components/admin/UserView'

    export default {
        components: {
            Sidebar,
            Header,
            UserView
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
