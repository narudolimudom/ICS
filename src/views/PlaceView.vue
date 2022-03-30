<template>
  <div>
      <v-container fluid class="">
          
          <v-row  no-gutters>
              <v-col cols="0" sm="1" md="1" >
              </v-col>
              <v-col cols="12" sm="11" md="11">
                <div class="menu-back">
                    <router-link to="/" tag="button" class="back-btn"> &lt; Back</router-link>
                </div>
              </v-col>
          </v-row>
         
          <v-row  class="d-flex d-sm-none">
            <v-col cols="0" sm="1" md="1">
                
 
              </v-col>
              <v-col cols="12" sm="11" md="11" class="">
               <button class="btn1">INFORMATION</button>
               <button class="btn2">IMAGE</button>
               
                </v-col>
          </v-row>
          <v-row >
              <v-col cols="0" sm="1" md="1" ></v-col>
              <v-col cols="12" sm="11" md="11" class="control">
                  <div class="main-content ">
                      <v-row >
                          
                          <v-col class="" cols="12" sm="6" md="6">
                              <v-img class="head-img" :aspect-ratio="16 / 9" :src="ResultPlace.headImage"></v-img>
                                <div class="text-info">
              <div class="place-name-rating">
                <h2>{{ResultPlace.namePlace}}</h2>
                <div class="rating-box">
                 <span class="dot"></span>
                <p>{{ResultPlace.rating}}</p>
              </div>
              </div>
              <div class="text-desc">
                <div class="desc-box">
                  <div class="address-head">
                  <h2>Address :</h2>
                  </div>
                  <div class="text-address">
                  <p>{{ResultPlace.address}}</p>
                </div>
                </div>
                 <div class="open-box">
                  <div class="opering-head">
                  <h2>Opening Hour :</h2>
                  </div>
                  <div class="opering-time">
                  <ul>
                    <li v-for="opTime in ResultPlace.openHour" :key="opTime">{{opTime.day+": "+closedCheck(opTime.time_open, opTime.time_close)}}</li>
            
                    
                  </ul>
                </div>
                </div>
              </div>
            </div>
                          </v-col>
                          <v-spacer></v-spacer>
                          <v-col class=" img-box d-none d-sm-flex" cols="12" sm="5" md="5">
                                          <section class="place-img">
            <div class="background-section ">
            <div class="img-label">
              <h2>Images</h2>
            </div>
            <div class="three-images">
              <v-img class="first-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[0]"></v-img>
               <v-img class="second-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[1]"></v-img>
                <v-img class="third-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[2]"></v-img>
              </div>
            </div>
          </section>
                          </v-col>
                      </v-row>
                      <v-row>
                                                <v-col class=" d-flex d-sm-none" cols="12" sm="5" md="5">
                                          <section class="place-img">
            <div class="background-section2">
            <div class="img-label">
              <h2>Images</h2>
            </div>
            <div class="three-images">
              <v-img class="first-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[0]"></v-img>
               <v-img class="second-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[1]"></v-img>
                <v-img class="third-img" :aspect-ratio="16 / 9" :src="this.ResultPlace.imageList[2]"></v-img>
              </div>
            </div>
          </section>
                          </v-col>
                      </v-row>
                  </div>
              </v-col>
          </v-row>
        
      </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return {
      ResultPlace:{
        "headImage": '',
        "namePlace": '',
        "rating": '',
        "address": '',
        "openHour": [],
        "imageList": [],
      }
    }
  },
    created(){
    this.Getroutedata()
  },
    methods:{
    ...mapActions(['GetProdByID']),
    
    async Getroutedata(){
    let ProdID = this.$route.query.ID
    // console.log(ProdID);
    await this.GetProdByID(ProdID).then((res) =>{
      this.ResultPlace.headImage = res[0].profile_image_url
      this.ResultPlace.namePlace = res[0].name
      this.ResultPlace.rating = res[0].rating
      this.ResultPlace.address = res[0].address
      this.ResultPlace.imageList = res[0].images.map(item => item)
      this.ResultPlace.openHour = res[0].operation_time.map(item => item)
    })
    },

    closedCheck(timeOpen,timeClosed){
      if(timeOpen  == "closed"){
        return 'Closed'
      }
      else{
        return timeOpen+" AM - "+timeClosed+" PM"
      }

    }

  }
}
</script>

<style scoped>

.addb{
    border: 2px solid red;
}

.img-box{
    margin-right: 1rem;
}
.control{
    margin-left: -1rem;
}
.back-btn{
  display: inline-block;
  font-weight: 500;
font-size: 18px;
line-height: 26px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background: #134B8A;
  border: none;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 0.46px;
  height: 39px;
  width: 98px;
}
.btn1{
  display: inline-block;
font-weight: 500;
font-size: 14px;
line-height: 26px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background: #134B8A;
  border: none;
  border-radius: 30px;
  letter-spacing: 0.46px;
  height: 34px;
  width: 188px;
  text-transform: capitalize;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}
.btn2{
  display: inline-block;
font-weight: 500;
font-size: 14px;
line-height: 26px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #134B8A;
  background: #fff;
  border: none;
  border-radius: 30px;
  
  letter-spacing: 0.46px;
  height: 34px;
  width: 184px;
  text-transform: capitalize;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  margin-left: -2rem;
  z-index: -1;

}
/********MAIN CONTENT */
.main-content{
  /* border : 1px solid red; */
  background-color: #C4D3E9;
  border-radius: 5px;
  height: 1250px;
  margin-left: 2rem;
  margin-top: 1.3rem;
  
}

@media (max-width: 768px) {
    .main-content {
         background-color: #ffff;
    }
}

.head-img{
  width: 677px;
  height: 380px;
  border-radius: 10px 10px 0px 0px;
  margin-left: 1.6rem;
  margin-top: 1rem;
}

.text-info{
  background-color: #ffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 657px;
  margin-left: 1.6rem;
  
  
}
.text-info h2{
  margin-left: 1.3rem;
  margin-top: 1.5rem;
  
}

.place-name-rating{
  display: flex;
  justify-content: space-between;
}
.place-name-rating h2{
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  font-weight: 500;
  font-size: 24px;
  
}

.rating-box {
  display: flex;
  align-items: center;
  margin-top: 1.25rem;
  margin-right: 1rem;
}

.rating-box span {
  margin-left: 96px;
  height: 11px;
  width: 11px;
  background-color: #134b8a;
  border-radius: 50%;
  display: inline-block;
  margin-top: -1rem;
}

.rating-box p {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
  color: #134b8a;
  margin-left: 7px;
}

.desc-box{
  display: flex;
  /* justify-content: space-between; */
  margin-left:1.3wrem ;
  
}
.desc-box h2{
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  font-weight: 700;
font-size: 16px;
}
.desc-box p{
  color: #000000;
  letter-spacing: 0.15px;
  font-weight: 400;
font-size: 16px;
line-height: 150%;
margin-left: 1.6rem;


}
.address-head{
  min-width: 100px;
}

.address-box{
  /* border: red 1px solid; */
  margin-top: -0.8rem;

}

.text-address{
  /* border: solid red 2px; */
  margin-left: 26px;
  color: #000000;
  margin-right: 2.9rem;
  letter-spacing: 0.15px;
  margin-top: 1.6rem;

}

.text-address p{
  letter-spacing: 0.15px;
  font-weight: 400;
font-size: 16px;
color: #000000;
}


.open-box{
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
  height: 242px;
  
}
.open-box h2{
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  font-weight: 700;
font-size: 16px;
}
.open-box p{
  color: #000000;
  letter-spacing: 0.15px;
  font-weight: 400;
font-size: 16px;
line-height: 150%;
margin-left: 1.6rem;


}

.opering-head{
  min-width: 140px;
}

.opering-time ul li {
  list-style-type:none;
}

.opering-time{
  margin-left: 0.5rem;
  /* border: red 2px solid; */
  width: 100%;
  margin-top: 1.6rem;
}

/**********-RIGHT BOX */
/* .place-img{
 
  margin-top: 1.2rem;
} */

.background-section2{
  background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-right: 0.4rem;
  border-radius: 10px;
  width: 550px;
}
.background-section{
      background-color: #fff;
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-right: 0.8rem;
  border-radius: 10px;
  width: 540px;
  margin-top: 1rem;
  height: 1050px;
  
  
  
}

.background-section h2{
  color: rgba(0, 0, 0, 0.87);

  letter-spacing: 0.15px;
  font-weight: 500;
  font-size: 20px;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.background-section2 h2{
  color: rgba(0, 0, 0, 0.87);

  letter-spacing: 0.15px;
  font-weight: 500;
  font-size: 20px;
  margin-left: 4.2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.first-img{
  width: 479px;
  height: 318px;
  border-radius: 10px 10px 0px 0px;
  margin-top: -0.2rem;
  margin-left: 2.3rem;

}
.first-img2{
  width: 479px;
  height: 318px;
  border-radius: 10px 10px 0px 0px;
  margin-top: -0.2rem;
  margin-left: 1.4rem;

}

.second-img{
  width: 479px;
  height: 318px;
   margin-left: 2.3rem;
}

.third-img{
  width: 479px;
  height: 318px;
   margin-left: 1.4rem;
  border-radius: 0px 0px 10px 10px;
  margin-left: 2.3rem;
}


.second-img2{
  width: 479px;
  height: 318px;
   margin-left: 1.4rem;
}

.third-img2{
  width: 479px;
  height: 318px;
   margin-left: 1.4rem;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 2.2rem;
}

</style>