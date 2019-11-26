<template>
    <div>
        <UserNavbar></UserNavbar>
        <router-view></router-view>
    </div>
</template>
<script>
import UserNavbar from '../../components/custom-nav'
export default {
    name: 'user-routing',
    components: {
        UserNavbar
    }
}
</script>