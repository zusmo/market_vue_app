<template>
  <div>
    <add-product/>
    <search-bar/>
    <product-list/>
  </div>
</template>

<script>
/*COMPONENTS IMPORTS*/
import productAdd from "@/components/addProduct.vue";
import barSearch from "@/components/searchBar.vue";
import listProduct from "@/components/productList.vue";


export default {
  name: "Inventory",
  components: {
    "add-product": productAdd,
    "search-bar": barSearch,
    "product-list": listProduct,
  }
};
</script>