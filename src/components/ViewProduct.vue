<template>
  <div class="view-product">
    <div class="row">
       <div class="col-lg-3">
          <h1 class="my-4">Vue Shop</h1>
          <div class="list-group">
            <a href="#" class="list-group-item">Category 1</a>
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a>
          </div>
        </div>
        <div class="col-lg-9">
            <h1>{{ product.name }}</h1> <hr>
            <div class="row">
            <div class="col-lg-6">
              <img class="card-img-top" :src="getProductImage(product.productImage)">
              <click-confirm>
                <button class="btn btn-primary col-md-12" @click="placeOrder">Place Order</button>
              </click-confirm>
            </div>
            <div class="col-lg-6">
              {{ product.description }}
            </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import app from "../config/app";
import clickConfirm from "click-confirm";
import axios from "axios";

export default {
  name: "view-product",
  data() {
    return {
      product: []
    };
  },
  components: {
    clickConfirm
  },
  watch: {
    $route: "fetchPost"
  },
  created() {
    let productId = this.$route.params.productId;
    let url = app.baseURL + "products/" + productId;
    axios
      .get(url)
      .then(product => {
        this.product = product.data.product;
      })
      .catch(error => {
        this.product = [];
      });
  },
  methods: {
    getProductImage(image) {
      if (image === "" || image == undefined) {
        return "http://placehold.it/700x400";
      }
      return "http://localhost:8081" + "/" + image;
    },
    placeOrder() {
      alert("Yes order placed now man.");
    }
  }
};
</script>
