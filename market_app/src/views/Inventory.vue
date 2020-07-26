<template>
  <div>
    <add-product/>
    <search-bar/>
  </div>
</template>

<script>

import productAdd from "@/components/addProduct.vue";
import barSearch from "@/components/searchBar.vue";
export default {
  name: "Inventory",
  components: {
    "add-product": productAdd,
    "search-bar": barSearch,
  }
};
</script>