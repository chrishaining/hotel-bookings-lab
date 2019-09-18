<template>
  <div id="app">
    <bookings-grid :bookings="bookings" /> 
  </div>
</template>

<script>

import BookingService from './services/BookingService.js'
import BookingsGrid from './components/BookingsGrid'

export default {
  name: 'app',
  data () {
    return {
    bookings: []
    }
  },
  components: {
    'bookings-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();
  }, 
  methods: {
    fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style scoped>

</style>