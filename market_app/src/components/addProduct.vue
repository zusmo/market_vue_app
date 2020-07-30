<template>
    <div class="container">
            <div class="row mt-5"> 
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-header">
                            <h3>Agregar Producto</h3>
                        </div>
                        <form class="card-body">
                            <div class="form-group">
                                <input type="text"  placeholder="Codigo" class="form-control" v-model="code">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Descripcion" class="form-control" v-model="description">
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Existencias" class="form-control" v-model="stock">
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Precio" class="form-control" v-model="price">
                            </div>
                            <div>
                                <button type="submit" v-on:click.prevent="addProduct" class="btn btn-primary form-control" >Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
/*import firebase from "../common/firebase_setup"
import { firestore } from 'firebase';
const db = firebase.firestore();
const storage = firebase.storage().ref();

export default {
  data() {
    return {
      code:"",
      description:"",
      stock:0,
      price:0
    };
  },

  methods: {
    async addProduct () {
      try {

        const product = {
          code: this.code,
          description: this.description,
          stock: this.stock,
          price: this.price,
          userId: firebase.auth().currentUser.uid
        };

        const data = await db.collection("products").add(product);
      } catch (error) {
        console.log(error);
      }
    }
  }
  };*/
</script>
