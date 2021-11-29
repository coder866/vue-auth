<template>
    <div class="container">
        <nav-bar/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from '@/navigation/navbar.vue'
    export default {
        components:{
            NavBar,
        }
    }
</script>

<style scoped>

</style>