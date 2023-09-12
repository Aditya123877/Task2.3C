<template>
    <div>
      <h1>About Page</h1>
      <p>Message from parent: {{ messageFromParent }}</p>
      <p>Computed Property: {{ computedValue }}</p>
      <button @click="emitCustomEvent">Emit Custom Event</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
    props: {
      messageFromParent: String, // Receiving a prop from the parent component
    },
    computed: {
      computedValue() {
        // A computed property example
        return this.messageFromParent.toUpperCase();
      },
    },
    methods: {
      emitCustomEvent() {
        // Emitting a custom event to the parent component
        this.$emit('custom-event', 'Data sent from About.vue');
      },
    },
  };
  </script>
  
  <style>
  /* Component-specific styles can go here if needed */
  </style>
  
  