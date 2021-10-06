<template>
  <div>
    <MenuBar>
      <div>
        <div style="text-align: center" class="mt-5">
          <div class="spinner-grow" role="status" v-show="loading">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-body" style="text-align: center">
              <img
                :src="product.image"
                class="imgstyle"
                alt="Product Image"
                width="50%"
              />
              <p>{{ product.title }}</p>
              <h5 class="my-4">{{ product.price }}</h5>
              <router-link
                class="btn btn-primary"
                :to="`/product/${product.id}`"
                >More Detail-></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </MenuBar>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar.vue";
import axios from "axios";
export default {
  components: {
    MenuBar,
  },
  name: "Product",
  data: function () {
    return {
      products: [],
      loading: true,
    };
  },

  created() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;
        this.loading = false;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
img.imgstyle {
  width: 80px;
  height: 100px;
}
</style>

