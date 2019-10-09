<template>
    <div>
        <Sidebar></Sidebar>
        <div class="wrap">
            <Header></Header>
            <Base></Base>
        </div>
    </div>
</template>
<script>
    import Sidebar from '../../components/common/Sidebar'
    import Header from '../../components/common/Header'
    import Base from '../../components/admin/BaseIndex'

    export default {
        components: {
            Sidebar,
            Header,
            Base
        }
    }
</script>

<style scoped>
    @import "../../assets/css/public.css";
</style>
