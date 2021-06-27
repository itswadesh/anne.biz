<template>
  <EditProfile />
</template>
<script>
import EditProfile from '~/components/User/Dashboard/EditProfile'
export default {
  components: {
    EditProfile,
  },
  layout: 'account',
  middleware: ['isAuth'],
  head() {
    return {
      title: 'User Profile',
    }
  },
}
</script>
