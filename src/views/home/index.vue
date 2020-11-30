<template>
  <div class="container-fluid full">
    <div class="container-fluid full">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>
    </div>
    
    <div class="container-fluid full">
      <div class="carousel slide" data-ride ="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img :src="img_titile" alt ="" class ="img-fluid d-block w-100">
            <div class ="carousel-caption center">
              <h1><font size="7" color="white">The most luxurious mobile case and mobile mini bag in 2020</font></h1>
              <br />
              <br />
              <div class="container">
                <p> The reviews presented on this website are based on experiences and opinions of our team.
      We comprehensively test all the products and try to present the most objective ratings that are subject to change over the course of time.<br /><br />

      *The site earns commission from sales via affiliation with merchants
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid full">
      <img :src="img_titile" alt ="" class ="img-fluid d-block w-100">
    </div>
    <div class="container-fluid full">
      <img :src="img_titile" alt ="" class ="img-fluid d-block w-100">
    </div>
  </div>
</template>

<script>
import img_titile from '@/assets/images/01.jpg'
export default {
  name: 'home',
  data () {
    return {
      img_titile
    }
  },
  created () {
    //
  },
  methods:{

  }
}
</script>
<style>
.carousel-caption.center {
  top: 25%;
}
.container-fluid.full {
  padding-right:0px;
  padding-left: 0px;
}
</style>
