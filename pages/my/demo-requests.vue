<template>
  <DemoRequests />
</template>
<script>
import DemoRequests from '~/components/User/Dashboard/DemoRequests'
export default {
  components: {
    DemoRequests,
  },
  layout: 'account',
  middleware: ['isAuth'],
  head() {
    return {
      title: 'My Demo Requests',
    }
  },
}
</script>
