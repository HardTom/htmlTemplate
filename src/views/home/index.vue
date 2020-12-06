<template>
  <div class="container-fluid body">
    <div class="container-fluid top">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">XIBU Ectronics Hub</a>
      </nav>
    </div>

    <div class="container-fluid head" :style="img_head_url">
      <div class="container-fluid headfont text-center">
        <h1><font size="7" color="white">The most luxurious mobile case and mobile mini bag in 2020</font></h1>
        <br/>
        <p> The reviews presented on this website are based on experiences and opinions of our team.We comprehensively test all the products and try to present the most objective ratings that are subject to change over the course of time.<br/><br/>*The site earns commission from sales via affiliation with merchants
        </p>
      </div>
    </div>

    <div class="container-fluid section">
      <div class="container-fluid newsletter">
        <div class="container text-center">
          <h1>Rating of TOP Phone Case 2020</h1>
        </div>
        <div class="container-fluid page">
          <div class="row">
            <div class="col-sm-6 text-right">
              <img :src="img_titile" class="img-fluid">
            </div>
            <div class="col-sm-6">
              <h2>Louis Vuitton</h2>
              <p> Specifically for iPhone Xr (6.1") 2018. Top quality. Made with Premium PU Leather. 100% Handmade.All-Powerful design iPhone XR flip phone case. Easy access to all ports and controls.iPhone XR leather wallet case with card holders, designed for you to put debit card, credit card or ID card while on the go.Kickstand function is convenient for movie-watching or video-chatting.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>
      </div>
    </div>
    <div class="container-fluid section">
      <div class="container-fluid newsletter">
        <div class="container text-center">
          <h1>Rating of TOP Phone Case 2020</h1>
        </div>
        <div class="row">
          <div class="col-sm-8">col-sm-8</div>
          <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div>
      </div>
    </div>
    <div class="container-fluid section section-color-about">
      <div class="container-fluid newsletter">
        <div class="container text-center">
          <h1>Advertising Disclosure</h1>
          <p>The site earns commission from sales via affiliation with merchants. This helps us to provide the most up-to-date reviews and comparisons based solely on our own experiences with using the listed products.</p>
        </div>
      </div>
    </div>
    <div class="container-fluid section">
      <div class="container-fluid newsletter">
        <div class="container text-center">
          <h5>
            contact details:<font color="#bac1c9">608-525-4011</font>
            <br>
            For cooperation queries contact us at:<font color="#bac1c9">80fmw_e6@temporary-mail.net</font>
          </h5>
        </div>
      </div>
    </div>
    <div class="container-fluid section footer-color-footer">
      <div class="container-fluid newsletter">
        <div class="container text-center">
          <p><font color="white">All rights reserved. © 2020</font></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img_titile from '@/assets/images/01.jpg'
export default {
  name: 'home',
  data () {
    return {
      img_titile,
      img_head_url: 'background-image: url(' + img_titile + ')'
    }
  },
  created () {
    //
    console.log("created")
  },
  methods: {

  },
  watch: {
  }
}
</script>
<style>

.container-fluid.body {
  padding-right:0px;
  padding-left: 0px;
}

.container-fluid.top {
  padding-right:0px;
  padding-left: 0px;
}

.container-fluid.head {
  background-image: url("");
  padding-right:0px;
  padding-left: 0px;
}

.container-fluid.headfont {
  padding: 75px 75px;
}

.container-fluid.section {
  padding-right:0px;
  padding-left: 0px;
}

.container-fluid.section.index-section {
  margin: 75px 0;
  padding-right:0px;
  padding-left: 0px;
}

.container-fluid.page {
  padding-right: 75px;
  padding-left: 75px;
}

.container-fluid.section.collection {
  margin: 0px 0;
}

.container-fluid.newsletter {
  padding: 3em 0;
}

.section-color-about {
  background-color: #f9f9f9;
  color: #1c1d1d;
}

.footer-color-footer {
  background-color: #333333;
}

@media (max-width:1440px){
}
@media (max-width:1366px){
}
@media (max-width:1280px){
}
@media (max-width:1024px){
  .container-fluid.section.index-section {
    margin: 50px 0;
    padding-right:0px;
    padding-left: 0px;
  }

  .container-fluid.page {
    padding-right: 50px;
    padding-left: 50px;
  }
}
@media (max-width:768px){
  .container-fluid.section.index-section {
    margin: 25.5px 0;
    padding-right:0px;
    padding-left: 0px;
  }
  .container-fluid.footer {
    padding: 2em 0;
  }

  .container-fluid.page {
    padding-right: 0px;
    padding-left: 0px;
  }

  .container-fluid.headfont {
    padding: 45px 45px;
  }
}
@media (max-width:640px){
  .carousel-caption.top {
    top: 60px;
  }

  .container-fluid.headfont {
    padding: 25px 25px;
  }
}
@media (max-width:480px){
  .carousel-caption.top {
    top: 30px;
  }

  .container-fluid.headfont {
    padding: 0 0;
  }
}

@media (max-width:420px){
  .carousel-caption.top {
    top: 0px;
  }
}

@media (max-width:320px){
  .container-fluid.footer {
    padding: 1em 0;
  }
}

</style>
