<template>
  <div>
    <Header />
    <Counter />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "@/components/Counter/Counter";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

@Component({
  components: {
    Header,
    Counter,
    Footer
  }
})
export default class Home extends Vue {}
</script>
