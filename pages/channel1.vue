<template>
  <div>
    <div class="top-image" >
      <img src="../assets/img/Rectangle_2.png" style="width:100%;max-height:230px;"/>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="foodbanner">
            <img src="../assets/img/foodbanner.png"/>
          </div>
        </div>

        <div class="col-md-9">
          <div class="title"> Food </div>
          <div class="row">
            <div class="col-md-12">
              <div>
                Description of the channel comes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur ex id nulla bibendum, malesuada bibendum dolor vestibulum. Mauris vitae turpis quis ex lacinia tristique sit amet id enim.
              </div>
            </div>
          </div>

          <br>
          <div class="row">
            <div class="col-md-3">
              <div class="btn-blue-radius" style="margin-bottom:15px">
                SUBSCRIBE
              </div>
            </div>
            <div class="col-md-3">
              <div class="btn-blue-radius-outline">
                Contact
              </div>
            </div>
            <div class="col-md-3">
              <div>

              </div>
            </div>
            <div class="col-md-3">
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="col-md-12">
          <div class="image-box">
            <img src="../assets/img/path1.png" class="title-image"/>
          </div>
            <div class="description">
              <div>Raheela Taj</div>
              <div>Food Category Name</div>
            </div>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_video()">
            <video style="height:300px" controls>
              <source src="../assets/video/1.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_video1()">
             <video style="height:300px" controls>
              <source src="../assets/video/2.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_video2()">
             <video style="height:300px" controls>
              <source src="../assets/video/3.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="col-md-12">
          <div class="image-box">
            <img src="../assets/img/path1.png" class="title-image"/>
          </div>
            <div class="description">
              <div>Raheela Taj</div>
              <div>Food Category Name</div>
            </div>
        </div>
      </div>

      <br>
      <div class="row">
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_image()">
            <img src="../assets/img/4.jpg" style="height:100% !important; width:100% !important;">
          </div>
        </div>
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_image1()">
            <img src="../assets/img/5.jpg" style="height:100% !important; width:100% !important;">
          </div>
        </div>
        <div class="col-md-4 box">
          <div class="border-box" @click="show_modal_image2()">
            <img src="../assets/img/6.jpg" style="height:100% !important; width:100% !important;">
          </div>
        </div>
      </div>
    </div>


      <div id="mmodal" class="mmodal_video" ref="mmodal_video">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left" style="padding: 27px 0px;">
                <video width="720" controls>
                  <source src="../assets/video/1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>

              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of video</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mmodal1" class="mmodal_video" ref="mmodal_video1">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left" style="padding: 27px 0px;">
                <video width="720" controls>
                  <source src="../assets/video/2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>

              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of video</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mmodal2" class="mmodal_video" ref="mmodal_video2">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left" style="padding: 27px 0px;">
                <video width="720" controls>
                  <source src="../assets/video/3.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>

              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of video</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="mmodal_image" class="mmodal_image" ref="mmodal_image">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left">
                 <img src="../assets/img/4.jpg" style="width:100%;height:100% !important;">
              </div>
              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of Image</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="mmodal_image1" class="mmodal_image" ref="mmodal_image1">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left">
                 <img src="../assets/img/5.jpg" style="width:100%;height:100% !important;">
              </div>
              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of Image</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="mmodal_image2" class="mmodal_image" ref="mmodal_image2">
        <div class="mmodal-body-video">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left">
                 <img src="../assets/img/6.jpg" style="width:100%;height:100% !important;">
              </div>
              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of Image</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div id="mmodal_image" ref="mmodal_image">
        <div class="mmodal-body-image">
          <div class="mmodal-body-video" style="height:100%">
            <div class="content">
              <div class="content-left">
                  <img src="../assets/img/5.jpg"/>
              </div>

              <div class="content-right">
                <div class="d-row">
                  <div class="avatar" style="float:left">

                  </div>
                  <div class="d-desc">
                    <div>Channel</div>
                    <div>Name/Person</div>
                    <div>Name</div>
                  </div>
                </div>
                <br>
                <br>
                <div class="d-row">
                  <div class="d-body">
                    <div style="font-size:18px"><strong>Title of video</strong></div>
                    <div>Description of the video</div>

                    <br>
                    <br>
                    <div>hashtags</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCoreVideoPlayer from 'vue-core-video-player';
export default {
  components: {
    VueCoreVideoPlayer
  },
  mounted(){
    window.addEventListener("click", function(event){
      if(event.target==document.getElementById("mmodal")) {
        document.getElementById("mmodal").classList.remove("show")
        }

        if(event.target==document.getElementById("mmodal1")) {
        document.getElementById("mmodal1").classList.remove("show")
        }

        if(event.target==document.getElementById("mmodal2")) {
        document.getElementById("mmodal2").classList.remove("show")
        }

        if(event.target==document.getElementById("mmodal_image")) {
        document.getElementById("mmodal_image").classList.remove("show")
        }

        if(event.target==document.getElementById("mmodal_image1")) {
        document.getElementById("mmodal_image1").classList.remove("show")
        }

        if(event.target==document.getElementById("mmodal_image2")) {
        document.getElementById("mmodal_image2").classList.remove("show")
        }
      // if(event.target==document.getElementById("mmodal")) document.getElementById("mmodal").classList.remove("show")
    })
  },
  methods: {
    show_modal_video(){
      if(this.$refs.mmodal_video.classList.contains("show")){
        this.$refs.mmodal_video.classList.remove("show")
      }else{
        this.$refs.mmodal_video.classList.add("show")
      }
    },

    show_modal_video1(){
      if(this.$refs.mmodal_video1.classList.contains("show")){
        this.$refs.mmodal_video1.classList.remove("show")
      }else{
        this.$refs.mmodal_video1.classList.add("show")
      }
    },

    show_modal_video2(){
      if(this.$refs.mmodal_video2.classList.contains("show")){
        this.$refs.mmodal_video2.classList.remove("show")
      }else{
        this.$refs.mmodal_video2.classList.add("show")
      }
    },

    show_modal_image(){
      if(this.$refs.mmodal_image.classList.contains("show")){
        this.$refs.mmodal_image.classList.remove("show")
      }else{
        this.$refs.mmodal_image.classList.add("show")
      }
    },
     show_modal_image1(){
      if(this.$refs.mmodal_image1.classList.contains("show")){
        this.$refs.mmodal_image1.classList.remove("show")
      }else{
        this.$refs.mmodal_image1.classList.add("show")
      }
    },
     show_modal_image2(){
      if(this.$refs.mmodal_image2.classList.contains("show")){
        this.$refs.mmodal_image2.classList.remove("show")
      }else{
        this.$refs.mmodal_image2.classList.add("show")
      }
    },
    close_modal(){
      this.$refs.mmodal_image.classList.remove("show")
      this.$refs.mmodal_video.classList.remove("show")
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 50px;
    font-weight: 700;
  }

  .btn-blue-radius-outline{
    cursor: pointer;
    /* width: 100%;
    height: 40px; */
    padding: 7px 0px;
    text-align: center;
    background-color:#ffffff;
    border: 1px solid #355DE9;
    border-radius: 30px;
    transition-property: border, background-color, color;
    transition-duration: 0.9s;
  }

  .btn-blue-radius-outline:hover{
    cursor: pointer;
    color: white;
    background-color:#355DE9;
    border: 1px solid #355DE9;
  }

  .btn-blue-radius{
    cursor: pointer;
    /* width: 100%;
    height: 40px; */
    padding: 7px 0px;
    text-align: center;
    background-color:#355DE9;
    border: 1px solid #355DE9;
    color: white;
    border-radius: 30px;
    transition-property: border, background-color, color;
    transition-duration: 0.9s;
  }

  .btn-blue-radius:hover{
    color: black;
    background-color:#ffffff;
    border: 1px solid #07289e;
  }

  .d-row{
    display: block;
  }

  .d-desc{
    margin-left: 80px;
    font-size: 14px;

  }

  .avatar{
    background: grey;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }


  .content{
    display: flex;
    width: 100%;
    height: 100%;
  }

  .content-left{
    vertical-align: middle;
    height: 100%;
    width:60%;
    background: rgb(0, 0, 0);

  }

  .content-right{
    padding: 30px;
    height: 100%;
    width: 40%;
    background: rgb(255, 255, 255);
  }

  .border-box{
    height: 330px;

    border: 1px solid #979797;
    background: black;
  }

  .border-box:hover{
    cursor: pointer;
    border: 1px solid #686767;
    background: black;
  }

  .box{
    padding: 20px;
  }

  .title-image{
    width: 100px;
    height: 100px;
  }

  .image-box{
    float: left;
  }
  .description{
    padding-top: 30px;
    padding-left: 120px;
  }

  .foodbanner{
    margin-top: -25%;
  }
  .top-image{
    /* background-image: url('../assets/img/Rectangle_2.png'); */
    margin-top: 100px;
    /* background: red; */
    width: 100%;
    height: 230px;
  }

  .mmodal_video {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
    opacity: 0;
    transform: translate(0, 20px);
    -webkit-transform: translate(0, 20px);
    -moz-transform: translate(0, 20px);
    -ms-transform: translate(0, 20px);
    -o-transform: translate(0, 20px);
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
  }

  .mmodal_image {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
    opacity: 0;
    transform: translate(0, 20px);
    -webkit-transform: translate(0, 20px);
    -moz-transform: translate(0, 20px);
    -ms-transform: translate(0, 20px);
    -o-transform: translate(0, 20px);
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
  }

  .mmodal_video.show {
      z-index: 1004;
      opacity: 1;
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
  }

  .mmodal_image.show {
      z-index: 1004;
      opacity: 1;
      transform: translate(0, 0);
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
  }

  .mmodal-wrap {
      position: absolute;
      overflow-y: scroll;
      width: 48%;
      background-color: transparent;
      right: 0;
      top: 0;
      bottom: 0;
  }

  .mmodal-body-video {
    width: 1200px;
    height: 460px;
    background-color: #FFF;
    margin: 0 auto;
    margin-top: 200px;
  }

  .mmodal-body-image {
    padding: 40px;
    width: 400px;
    height: 300px;
    background-color: #FFF;
    margin: 0 auto;
    margin-top: 200px;
  }

  .items-center{
    align-items: top !important;
  }
  .header_modal {
      border: none !important;
      padding: 10px 10px 3px 10px !important;
  }

  .modal-body{
    padding:0px !important;
  }

  .modal_title_div {
      padding-top: 18px;
  }

  .modal_title {
      font-size: 15px;
      font-weight: initial;
  }

  .modal_close {
      text-align: right;
      padding-right: 0px;
      cursor: pointer;
  }
</style>
