<template lang="html">
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" /> 
  </div>
</template>

<script>

import BookingService from './services/BookingService.js'
import BookingsGrid from './components/BookingsGrid'
import BookingsForm from './components/BookingsForm'
import {eventBus} from './main'

export default {
  name: 'app',
  data () {
    return {
    bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking);
    })

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.indexOf(booking => booking.id === id);
      this.bookings.splice(index, 1);
    })
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