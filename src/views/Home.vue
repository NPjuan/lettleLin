<template>
  <main>
    <WeatherHeader></WeatherHeader>
  </main>
</template>

<script>
// @ is an alias to /src
import WeatherHeader from "../components/WeatherHeader"

export default {
  name: 'Home',
  components: {
    WeatherHeader
  }
}
</script>
