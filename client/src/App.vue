<template>
  <div id="app">
    <h1>Hello world</h1>
    <bookings-grid :bookings="bookings" /> 
  </div>
</template>

<script>

import BookingService from './services/BookingService'

export default {
  name: 'app',
  data () {
    return {
    bookings: []
    }
  },
methods: {
  fetchData() {
    BookingService.getBookings()
    .then(bookings => this.bookings = bookings);
  }
}
}
</script>

<style>

</style>