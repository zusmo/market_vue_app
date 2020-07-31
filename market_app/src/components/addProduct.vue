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
                                <input type="text"  placeholder="Codigo" class="form-control" v-model="code" required>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Descripcion" class="form-control" v-model="description" required>
                            </div>
                            <div class="form-group">
                                  <input type="number" placeholder="Existencias" class="form-control" v-model="stock" required>
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Precio" class="form-control" v-model="price" required>
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
import firebase from "../common/firebase_setup"
const db = firebase.firestore();

export default {
  data() {
    return {
      code:null,
      description:null,
      stock:null,
      price:null
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

        await db.collection("products").add(product);

        this.$router.push({ name: "inventory" });
      } catch (error) {
        console.log(error);
      }
    }
    
  }
    /*
    addProd () {
      db.collection('products').add({
        code: this.code,
        description: this.description,
        stock: this.stock,
        price: this.price
      })
    }
    */
  };
</script>
