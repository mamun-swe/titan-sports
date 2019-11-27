<template>
    <div>
        <UserNavbar></UserNavbar>
        <router-view></router-view>
        <UserFooter></UserFooter>
    </div>
</template>
<script>
import UserNavbar from '../../components/custom-nav'
import UserFooter from '../../components/custom-footer'
export default {
    name: 'user-routing',
    components: {
        UserNavbar,
        UserFooter
    }
}
</script>