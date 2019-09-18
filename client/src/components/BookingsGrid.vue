<template>
  <div id="bookingsGrid">
    <div v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <h2>{{booking.email}}</h2>
      <h2>{{booking.checkedIn}}</h2>
    </div>
  </div>
</template>

<script>

import BookingService from '../services/BookingService'

export default {
  name: "bookings-grid",
  props: ["bookings"]
}
</script>

<style scoped>

</style>