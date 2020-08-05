<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Form from "@/views/form"
import Dash from "@/views/dash"

export default {
  name: "app",
  components: {
    Form,
    Dash
  }
}
</script>

