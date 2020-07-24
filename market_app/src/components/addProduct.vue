<template>
  <div class="container">
    <div class="card mt-5">
      <div class="card-header">
        <h4>Registrar producto</h4>
      </div>
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control mt-4 ml-5 mb-4" placeholder="Codigo">
          </div>
          <div>
            <input type="text" class="form-control ml-4" placeholder="Descripcion de producto">
          </div>
          <div>
            <input type="number" class="form-control ml-4" placeholder="Existencias">
          </div>
          <div>
            <input type="number" class="form-control ml-4" placeholder="Precio">
          </div>
          <button class="btn btn-primary form-control ml-4">Agregar</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name:'addProduct'
}
</script>
