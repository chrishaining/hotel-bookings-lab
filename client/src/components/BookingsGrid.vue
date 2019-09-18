<template>
  <div id="bookingsGrid">
    <div v-for="booking in bookings">
      <p>Name: {{booking.name}}</p>
      <p>Email: {{booking.email}}</p>
      <!-- <h2>Checked in? {{booking.checkedIn}}</h2> -->
      <p>Checked in? {{booking.checkedIn ? "Yes" : "No"}}</p>

      <!-- <h2>Checked in? </h2> -->
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
