<template lang="html">
  <form id="bookings-form" v-on:submit="addBooking" method="post">
    <h2>Add a booking</h2>
    <label for="name">Name</label>
    <input type="text" v-model="name" required />

    <label for="email">Email</label>
    <input type="text" v-model="email" required />

    <label for="checkedIn">Checked In</label>
    <input type="checkbox" v-model="checkedIn" />

    <input type="submit" value="save" />
  </form>
</template>

<script>

import BookingService from '../services/BookingService.js'
import {eventBus} from '../main'

export default {
  name: "bookings-form",
  data(){
    return {
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    addBooking(event) {
      event.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingService.postBooking(booking) 
      .then(res => eventBus.$emit('booking-added', res));
      this.name = '',
      this.email = '',
      this.checkedIn = false
    }
  }
}
</script>

<style scoped>

</style>