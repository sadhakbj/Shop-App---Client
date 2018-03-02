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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "view-product",
  data() {
    return {
      post: []
    };
  },
  watch: {
    $route: "fetchPost"
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/` +
          this.$route.params.postId
      )
      .then(response => {
        this.post = response.data;
      })
      .catch(err => {
        alert(err.message);
      });
  }
};
</script>

