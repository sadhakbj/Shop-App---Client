<template>
  <div>
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Vue Shop</h1>
          <div class="list-group">
            <a href="#" class="list-group-item">Category 1</a>
            <a href="#" class="list-group-item">Category 2</a>
            <a href="#" class="list-group-item">Category 3</a>
          </div>
        </div>

        Admin

        <div class="col-lg-9">
          <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" :key="product._id" v-for="product in products">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" :src="getProductImage(product.productImage)" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <router-link :to="{ name: 'view-product', params: { productId: product._id } }">{{ product.name }}</router-link>
                  </h4>
                  <h5>रु {{ product.price }}</h5>
                  <p class="card-text">{{ product.description }}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">★ ★ ★ ★ ☆</small>
                </div>
              </div>
            </div>
        
        
        
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "admin"
};
</script>

