<template>
  <MenuBar>
    <div>
      <div style="text-align: center" class="mt-5">
        <div class="spinner-grow" role="status" v-show="load">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" alt="" class="styleimage" />
        </div>
        <div class="col-md-6 mt-5">
          <h3>{{ product.category }}</h3>
          <h3 v-show="!load">$ {{ product.price }}</h3>
          <p>{{ product.description }}</p>

          <div>
            <router-link
              to="/product"
              class="btn btn-outline-dark"
              type="button" v-show="!load"
              >Go Back</router-link
            >
            <router-link to="/" class="btn btn-success" type="button" v-show="!load"
              >Add to Card</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </MenuBar>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";
import axios from "axios";
export default {
  components: {
    MenuBar,
  },
  name: "prodcutDetail",
  data() {
    return {
      product: {},
      load : true
    };
  },
  created() {
    axios
      .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then((res) => {
        console.log(res);
        this.load = false
        this.product = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
img.styleimage {
  width: 50%;
}
</style>