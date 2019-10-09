<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <Inform></Inform>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import Inform from '../../components/admin/InformList'

    export default {
        components: {
            Sidebar,
            Header,
            Inform
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
