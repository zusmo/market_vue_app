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
/*FIRESTORE*/
import firebase from "../common/firebase_setup"
import { firestore } from 'firebase';
const db = firebase.firestore();

export default {
  name: "Inventory",
  components: {
    "add-product": productAdd,
    "search-bar": barSearch,
    "product-list": listProduct,
  },
  data () {
    return {
      products: []
    }
  },
  created () {
    db.collection("products").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'code': doc.data().code,
          'description': doc.data().description,
          'stock': doc.data().stock,
          'price': doc.data().price
        }
        this.products.push(data)
      })
    })
  }
};
</script>