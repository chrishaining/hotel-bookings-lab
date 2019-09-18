<template>
  
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