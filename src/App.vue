<template>
  <div id="app">
    <Form />
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

