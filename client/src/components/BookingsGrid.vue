<template>
  <div id="bookingsGrid">
    <div v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <h2>{{booking.email}}</h2>
      <h2>{{booking.checkedIn}}</h2>
      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
    </div>
  </div>
</template>

<script>

import BookingService from '../services/BookingService'
import {eventBus} from '../main'

export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    deleteBooking(id) {
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>

<style scoped>

</style>