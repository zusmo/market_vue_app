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
                    <th scope="col">Descrpcion</th>
                    <th scope="col">Existencias</th>
                    <th scope="col">Precio/Lps</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">8569</th>
                    <td>Zambos Platano Ceviche 140gr</td>
                    <td>250</td>
                    <td>28.95</td>
                    </tr>
                </tbody>
                </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Products",
    props: ["code", "description","stock","price"]
}

</script>

<style>

</style>