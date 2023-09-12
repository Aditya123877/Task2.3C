<template>
    <div>
      <h1>Home Page</h1>
      <p>Message from parent: {{ messageFromParent }}</p>
      <slot></slot> <!-- A slot for dynamic content from the parent -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props: {
      messageFromParent: String, // Receiving a prop from the parent component
    },
    watch: {
      messageFromParent(newValue, oldValue) {
        // Watcher for the prop changes
        console.log(`Prop changed from ${oldValue} to ${newValue}`);
      },
    },
  };
  </script>
  
  <style>
  /* Component-specific styles can go here if needed */
  </style>
  
  