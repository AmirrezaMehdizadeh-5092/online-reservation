<template>
  <div class="home2">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="aboutDoctor">
      <div class="maintitle">
        <span @click="scrol('about')">درباره پزشک</span>
        <span @click="scrol('contact')">اطلاعات تماس</span>
        <span @click="scrol('rate')">نظر و امتیاز</span>
      </div>
      <h2>درباره پزشک</h2>
      <div class="code">
        <h3>کد نظام پزشکی :</h3>
        <div class="codee">
          <span>{{ docinfo.code_nezam_pezeshki }}</span>
        </div>
      </div>
      <h3 id="time">میانگین زمان انتظار در مطب 2 ساعت می باشد.</h3>
      <div class="info1">
        <span
          >دکتر سیدعلی موسوی متخصص و جراح گوش، حلق و بینی و جراحی سروگردن مدرک
          پزشکی عمومی خود را از دانشگاه علوم پزشکی یزد دریافت کردند. دکتر موسوی
          دوره تخصص گـــــوش حلق و بینی و جراحی سروگردن خود را در دانشگاه علوم
          پزشکی شیراز گذراندند. دکـــتر سیـــــد علی موسوی در زمینه جراحی مجاری
          اشکی با آندوسکوپی و جراحی تیروئید مهارت ویژه دارنــــد و بیماران زیادی
          توسط پزشکان همکار در این زمینه به دکتر موسوی ارجاع داده می‌شوند.</span
        >
      </div>
      <h2 style="padding-top: 30px">سوابق و افتخارات دکتر سیدعلی موسوی</h2>
      <div class="ul1">
        <ul>
          <li>چاپ یک کتاب به زبان انگلیسی</li>
          <li>چاپ بیش از ۱۲ مقاله داخلی وخارجی</li>
          <li>انجام بیش از ۱۰ هزار عمل جراحی در ۱۰ سال گذشته</li>
        </ul>
      </div>
      <h2>خدمات ارائه شده توسط دکتر سید علی موسوی</h2>
      <div class="ul1">
        <ul>
          <li>جا اندازی شکستگی بینی تحت بی حسی موضعی</li>
          <li>کوتر بینی تحت بی حسی موضعی</li>
          <li>خروج سیلاستیک بینی</li>
          <li>شستشوی گوش</li>
          <li>رزکسیون بافت نرم کانال گوش</li>
          <li>نمونه برداری از پولیپ گوش</li>
          <li>اندوسکوپی تشخیصی بینی و سینوس ها</li>
          <li>لارنگوسکوپی</li>
          <li>میرنگوتومی</li>
        </ul>
      </div>
      <h2>بیمارستان‌های همکار</h2>
      <div class="ul1">
        <ul>
          <li>بیمارستان دکتر مجیبیان</li>
          <li>بیمارستان شهدای کارگر</li>
        </ul>
      </div>
    </div>
    <div class="contact">
      <h2>اطلاعات تماس</h2>
      <h3>مطب {{ docinfo.name }}</h3>
      <div class="n24">
        <i style="color: blue" class="fa fa-phone"></i>
        <span id="s1">نوبت دهی تلفنی ۲۴ساعته:</span>
        <span style="padding: 0 20px; color: rgb(44, 44, 190)">{{
          docinfo.telephone_24
        }}</span>
      </div>
      <div class="n24">
        <i style="color: blue" class="fa fa-phone"></i>
        <span id="s1">تلفن تماس مطب:</span>
        <span style="padding: 0 20px; color: rgb(44, 44, 190)">{{
          docinfo.telephone_matab
        }}</span>
      </div>
      <div class="n24">
        <i style="color: blue" class="fa fa-map-marker"></i>
        <span id="s1">آدرس مطب:</span>
        <span id="s1">{{ docinfo.address }}</span>
      </div>
    </div>
    <div class="rate">
      <h2>نظر و امتیاز</h2>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="1024">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> ثبت نظر و امتیاز </v-btn>
          </template>
          <v-card class="card">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="dialog = false"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useStore } from "../../plugin/store";

export default {
  name: "Home2Comp",
  setup() {
    const store = useStore();
    const docinfo = ref([]);
    const dialog = ref(false);
    const rating = ref(3);

    const scrol = (check) => {
      switch (check) {
        case "about":
          window.scrollTo(0, 725);
          break;
        case "contact":
          window.scrollTo(0, 1580);
          break;
        case "rate":
          alert("rate");
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      axios.get(`${store.api}/get_doctor`).then((response) => {
        docinfo.value = response.data;
      });
    });

    return {
      store,
      docinfo,
      scrol,
      dialog,
      rating,
    };
  },
};
</script>

<style>
.home2 .aboutDoctor,
.home2 .contact,
.home2 .rate {
  width: 600px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-right: 140px;
  border-radius: 7px;
  padding-bottom: 50px;
  margin-bottom: 20px;
}
.home2 .aboutDoctor .maintitle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e1e1e1;
}
.home2 .aboutDoctor .maintitle span {
  padding: 0 25px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
}
.home2 .aboutDoctor .maintitle span:hover {
  transition: 0.1s all ease-in-out;
  color: #6e59e4;
}
.home2 .aboutDoctor h2 {
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 600;
}
.home2 .aboutDoctor .code {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}
.home2 .aboutDoctor .code h3 {
  padding-right: 20px;
  font-size: 16px;
  font-weight: 700;
}
.home2 .aboutDoctor .code span {
  padding: 0 10px;
  color: #3d5afe;
}
.home2 .aboutDoctor .code .codee {
  background-color: #e0e0e0;
  padding: 5px 5px;
  margin-right: 10px;
}
.home2 .aboutDoctor #time {
  padding: 20px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #ff3d00;
}
.home2 .aboutDoctor .info1 span {
  font-size: 15px;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 300;
  opacity: 0.8;
}
.home2 .aboutDoctor .info1 {
  width: 99%;
  padding: 0 20px;
}
.home2 .aboutDoctor .ul1 {
  width: 100%;
  padding: 0 20px;
}
.home2 .aboutDoctor .ul1 ul {
  padding: 0 30px;
}
.home2 .aboutDoctor .ul1 ul li {
  font-size: 15px;
  font-size: 300;
  opacity: 0.8;
}
.home2 .contact h2 {
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 600;
}
.home2 .contact h3 {
  padding: 0 20px;
  font-size: 16px;
  font-weight: 600;
}
.home2 .contact .n24 {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 20px;
  padding-top: 20px;
}
.home2 .contact .n24 #s1 {
  font-size: 15px;
  font-size: 300;
  opacity: 0.8;
  padding: 0 10px;
}
.home2 .rate h2 {
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 600;
}
.home2 .rate .card .sec1 {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: red;
}

@media (min-width: 481px) and (max-width: 768px) {
  .home2 .aboutDoctor,
  .home2 .contact {
    margin: 0 auto;
    width: 90%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home2 .aboutDoctor,
  .home2 .contact {
    margin: 0 auto;
    width: 70%;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .home2 .aboutDoctor,
  .home2 .contact {
    margin: 0 auto;
    width: 60%;
  }
}

@media (min-width: 1201px) and (max-width: 1500px) {
  .home2 .aboutDoctor,
  .home2 .contact {
    margin: 0 auto;
    width: 70%;
  }
}
</style>
