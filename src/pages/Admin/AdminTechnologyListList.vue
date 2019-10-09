<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <Technology></Technology>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import Technology from '../../components/admin/TechnologyList'
    export default {
        components: {
            Sidebar,
            Header,
            Technology,
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
