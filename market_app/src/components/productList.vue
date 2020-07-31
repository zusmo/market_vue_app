<template>
  <div class="container mt-4">
      <div class="card">
          <div class="card-header">
              <h4>Invetario</h4>
          </div>
          <div class="card-body">
              <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Existencias</th>
                    <th scope="col">Precio/Lps</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="prods in products" v-bind:key="prods.id">
                    <th scope="row">{{ prods.code }}</th>
                    <td>{{ prods.description }}</td>
                    <td class="">{{ prods.stock }}</td>
                    <td>{{ prods.price }}/Lps</td>
                    </tr>
                </tbody>
                </table>
          </div>
      </div>
  </div>
</template>

<script>
/*FIRESTORE*/
import firebase from "../common/firebase_setup"
const db = firebase.firestore();

export default {
    name: "Products",
    props: ["code", "description","stock","price"],

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
        };
        this.products.push(data);
      });
    });
  }
};

</script>

