<template>
  <div class="home1">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="info">
      <div class="img">
        <img src="../../assets//doc.png" alt="" />
        <div class="share" @click="share()">
          <i class="fa fa-share-alt"></i>
          <span>اشتراک گذاری</span>
        </div>
      </div>
      <div class="subinfo">
        <div class="name">
          <i class="fa fa-check-square-o"></i>
          <h3>دکتر {{ doctorInfo.name }}</h3>
        </div>
        <div class="takhasos">
          <span>متخصص {{ doctorInfo.tazasos }}</span>
        </div>
        <div class="city">
          <i class="fa fa-map-marker"></i>
          <span>{{ doctorInfo.city }}</span>
        </div>
        <div class="rate">
          <div class="left">
            <div
              class="top"
              style="
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <span>533</span>
            </div>
            <div
              class="top"
              style="
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="color: rgb(99, 113, 128); font-size: 14px"
                >نظرات</span
              >
            </div>
          </div>
          <div class="right">
            <div
              class="top"
              style="
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <i
                class="fa fa-star"
                style="color: rgb(191, 191, 14); padding: 0 5px"
              ></i>
              <span>{{ doctorInfo.emtiaz }}</span>
            </div>
            <div
              class="top"
              style="
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <span style="color: rgb(99, 113, 128); font-size: 14px"
                >میانگین نمرات</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reserve">
      <div class="top">
        <i class="fa fa-users"></i>
        <h3>دریافت نوبت</h3>
      </div>
      <div id="checkvisit" class="checkvisit">
        <div id="matab" class="matab">
          <input
            name="gender"
            id="male"
            type="radio"
            style="cursor: pointer"
            value="matab"
            v-model="selectedOption"
            @click="checkSelectedOption1('matab')"
          />
          <label for="male">ویزیت در مطب</label>
        </div>
        <div id="phone" class="phone">
          <input
            name="gender"
            id="female"
            type="radio"
            value="phone"
            style="cursor: pointer"
            v-model="selectedOption"
            @click="checkSelectedOption1('phone')"
          />
          <label for="femail">مشاوره تلفنی</label>
        </div>
      </div>
      <div class="matabyes" v-if="matabyes">
        <div class="sec1">
          <span>ویزیت</span>
        </div>
        <div class="selectday">
          <span
            style="cursor: pointer"
            @click="beforDay(rooz, daynumber, monthnumber)"
            >روز قبل</span
          >
          <span>{{ rooz }} {{ daynumber }} {{ month }}</span>
          <span
            style="cursor: pointer"
            @click="nextDay(rooz, daynumber, monthnumber)"
            >روز بعد</span
          >
        </div>
        <div class="time" v-if="rooz != 'جمعه' && !notReserveTime">
          <div
            id="time1"
            @click="saveReserveTime(rooz, daynumber, month, '16:00', 'time1')"
            class="timediv"
          >
            <span>16:00</span>
          </div>
          <div
            id="time2"
            @click="saveReserveTime(rooz, daynumber, month, '16:15', 'time2')"
            class="timediv"
          >
            <span>16:15</span>
          </div>
          <div
            id="time3"
            @click="saveReserveTime(rooz, daynumber, month, '16:30', 'time3')"
            class="timediv"
          >
            <span>16:30</span>
          </div>
          <div
            id="time4"
            @click="saveReserveTime(rooz, daynumber, month, '16:45', 'time4')"
            class="timediv"
          >
            <span>16:45</span>
          </div>
          <div
            id="time5"
            @click="saveReserveTime(rooz, daynumber, month, '17:00', 'time5')"
            class="timediv"
          >
            <span>17:00</span>
          </div>
          <div
            id="time6"
            @click="saveReserveTime(rooz, daynumber, month, '17:15', 'time6')"
            class="timediv"
          >
            <span>17:15</span>
          </div>
          <div
            id="time7"
            @click="saveReserveTime(rooz, daynumber, month, '17:30', 'time7')"
            class="timediv"
          >
            <span>17:30</span>
          </div>
          <div
            id="time8"
            @click="saveReserveTime(rooz, daynumber, month, '17:45', 'time8')"
            class="timediv"
          >
            <span>17:45</span>
          </div>
          <div
            id="time9"
            @click="saveReserveTime(rooz, daynumber, month, '18:00', 'time9')"
            class="timediv"
          >
            <span>18:00</span>
          </div>
          <div
            id="time10"
            @click="saveReserveTime(rooz, daynumber, month, '18:15', 'time10')"
            class="timediv"
          >
            <span>18:15</span>
          </div>
          <div
            id="time11"
            @click="saveReserveTime(rooz, daynumber, month, '18:30', 'time11')"
            class="timediv"
          >
            <span>18:30</span>
          </div>
          <div
            id="time12"
            @click="saveReserveTime(rooz, daynumber, month, '18:45', 'time12')"
            class="timediv"
          >
            <span>18:45</span>
          </div>
        </div>
        <div class="tatil">
          <span style="color: red; text-align: center" v-if="rooz == 'جمعه'"
            >تعطیل!</span
          >
        </div>
        <div
          class="notreservetime"
          @click="gotoFisrtReserve()"
          v-if="notReserveTime"
        >
          <span>رفتن به اولین نوبت خالی</span>
        </div>
        <v-locale-provider rtl>
          <v-dialog v-if="dialog" v-model="dialog" width="800">
            <v-card>
              <v-card-text>
                <h3>ملاحظات پزشک</h3>
                <br />
                <span
                  style="
                    text-align: justify;
                    text-justify: rihgt;
                    font-weight: 1;
                    color: red;
                  "
                  >زمان نوبت دریافتی، زمان مراجعه شما به مطب می باشد و به دلیل
                  مراجعات اورژانسی، ممکن است زمان ویزیت پزشک با تأخیر انجام شود.
                  اخذ نوبت ویزیت فقط با پرداخت اینترنتی انجام خواهد شد. مبلغ
                  دریافتی علی الحساب می باشد و الباقی مبلغ در هنگام ویزیت دریافت
                  خواهد شد. بعد از اخذ نوبت داشتن کد رهگیری هنگام مراجعه به مطب
                  ضروری است. در صورت عدم مراجعه در روز تعیین شده نوبت شما باطل
                  شده ،وجه آن به هیچ وجه مسترد نخواهد گردید.</span
                >
                <br />
                <br />
                <h3>قوانین نوبت دهی</h3>
                <br />
                <span
                  style="
                    text-align: justify;
                    text-justify: rihgt;
                    font-weight: 1;
                    color: red;
                  "
                  >لطفا در انتخاب نوع و زمان نوبت خود دقت کنید ساعت نوبت دریافت
                  شده به معنی زمان پذیرش بیمار در مرکز درمانی است. پس از پذیرش
                  بیمار، زمان تقریبی ویزیت پزشک مشخص و در مرکز درمانی به بیمار
                  اعلام خواهد شد. برای دریافت نوبت از پزشک، مبلغ مشخص شده به
                  صورت بیعانه است و بیمار باقی‌مانده مبلغ ویزیت را در مرکز
                  درمانی به پزشک پرداخت می‌کند. لطفا برای لغو نوبت حداکثر تا 24
                  ساعت قبل از زمان پذیرش، نوبت خود را لغو کنید و پس از حذف نوبت
                  برای دریافت وجه با پشتیبانی دکتردکتر تماس بگیرید.</span
                >
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="dialog = false"
                >
                  بستن
                </v-btn>
                <v-btn
                  color="green-darken-1"
                  variant="text"
                  @click="
                    dialog = false;
                    getReserveTime();
                  "
                >
                  تایید و ادامه
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-locale-provider>
      </div>
      <div class="matabno" v-if="!matabyes">
        <span> نوبت مشاوره تلفنی خالی وجود ندارد</span>
      </div>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="#C0CA33"
      ></v-progress-linear>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { ref, watch, onMounted } from "vue";
import { useStore } from "../../plugin/store";
import persianDate from "persian-date";
import router from "../../plugin/router";

export default {
  name: "Home1Comp",
  created() {
    document.title = "صفحه اصلی";
  },
  setup() {
    const store = useStore();
    const doctorInfo = ref([]);
    const selectedOption = ref("matab");
    const matabyes = ref(true);
    const daynumber = ref("");
    const rooz = ref("");
    const month = ref("");
    const monthnumber = ref("");
    const dialog = ref(false);
    const notReserveTime = ref(false);
    const loading = ref(false);

    watch(loading, (val) => {
      if (!val) return;
      setTimeout(() => (loading.value = true), 3000);
    });

    const share = () => {
      let link = window.location.href;
      navigator.clipboard.writeText(link);
      Swal.fire({
        icon: "success",
        title: "آدرس صفحه کپی شد",
        confirmButtonText: "اوکی",
      });
    };

    const checkSelectedOption1 = (index) => {
      const a = [...document.querySelector("#checkvisit").children];
      a.forEach((element) => {
        element.style.border = "1px solid black";
        element.style.backgroundColor = "white";
      });
      document.getElementById(index).style.border = "1px solid blue";
      document.getElementById(index).style.backgroundColor = "#5cd1e687";
      if (index == "phone") {
        matabyes.value = false;
      }
      if (index == "matab") {
        matabyes.value = true;
      }
    };

    const nextDay = (r, n, mn) => {
      if (r == "پنج‌شنبه") {
        notReserveTime.value = false;
        const rrr = new persianDate().toLocale("en").format();
        const daynumberr = parseInt(rrr.substring(8, 10));
        console.log(daynumber.value);
        if (notReserveTime.value == true && n + 1 >= daynumberr) {
          notReserveTime.value = false;
        }
        const datw = new persianDate([1402, mn, n + 1]);
        month.value = datw.format("MMMM");
        rooz.value = datw.format("dddd");
        const rr = new persianDate([1402, mn, n + 1]).toLocale("en").format();
        daynumber.value = parseInt(rr.substring(8, 10));
      }
      const rrr = new persianDate().toLocale("en").format();
      const daynumberr = parseInt(rrr.substring(8, 10));
      console.log(daynumber.value);
      if (notReserveTime.value == true && n + 1 >= daynumberr) {
        notReserveTime.value = false;
      }
      const datw = new persianDate([1402, mn, n + 1]);
      month.value = datw.format("MMMM");
      rooz.value = datw.format("dddd");
      const rr = new persianDate([1402, mn, n + 1]).toLocale("en").format();
      daynumber.value = parseInt(rr.substring(8, 10));
    };

    const beforDay = (r, n, mn) => {
      if (r == "شنبه") {
        notReserveTime.value = false;
        if (notReserveTime.value == true && n >= daynumber.value) {
          notReserveTime.value = true;
        }
        const datw = new persianDate([1402, mn, n + -1]);
        month.value = datw.format("MMMM");
        rooz.value = datw.format("dddd");
        const rr = new persianDate([1402, mn, n - 1]).toLocale("en").format();
        daynumber.value = parseInt(rr.substring(8, 10));
      } else {
        notReserveTime.value = true;
        if (notReserveTime.value == true && n >= daynumber.value) {
          notReserveTime.value = true;
        }
        const datw = new persianDate([1402, mn, n + -1]);
        month.value = datw.format("MMMM");
        rooz.value = datw.format("dddd");
        const rr = new persianDate([1402, mn, n - 1]).toLocale("en").format();
        daynumber.value = parseInt(rr.substring(8, 10));
      }
    };

    const saveReserveTime = (r, n, m, clock, id) => {
      sessionStorage.setItem("rooz", r);
      sessionStorage.setItem("daynumber", n);
      sessionStorage.setItem("month", m);
      sessionStorage.setItem("clock", clock);

      const obj = {
        rooz: r,
        daynumber: n,
        month: m,
        clock: clock,
      };

      axios
        .post(`${store.api}/find_reserved`, obj)
        .then((response) => {
          if (response.status == 200) {
            dialog.value = true;
          }
        })
        .catch((error) => {
          if (error.response.status == 400) {
            document.getElementById(id).style.display = "none";
            Swal.fire({
              icon: "error",
              title: error.response.data,
              confirmButtonText: "انتخاب نوبت دیگر",
            });
          }
        });
    };

    const getReserveTime = () => {
      const token = sessionStorage.getItem("tokenn");
      if (token) {
        loading.value = true;
        setTimeout(() => {
          router.push("/reservation");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "احراز هویت شما تایید نشد.لطفا وارد شوید",
          confirmButtonText: "اوکی",
        });
      }
    };

    const gotoFisrtReserve = () => {
      notReserveTime.value = false;
      const datw = new persianDate();
      const rr = new persianDate().toLocale("en").format();
      month.value = datw.format("MMMM");
      rooz.value = datw.format("dddd");
      daynumber.value = parseInt(rr.substring(8, 10));
      monthnumber.value = parseInt(rr.substring(5, 7));
    };

    onMounted(() => {
      axios.get(`${store.api}/get_doctor`).then((response) => {
        doctorInfo.value = response.data;
      });

      const datw = new persianDate();
      const rr = new persianDate().toLocale("en").format();
      month.value = datw.format("MMMM");
      rooz.value = datw.format("dddd");
      daynumber.value = parseInt(rr.substring(8, 10));
      monthnumber.value = parseInt(rr.substring(5, 7));
    });

    return {
      share,
      store,
      doctorInfo,
      selectedOption,
      checkSelectedOption1,
      matabyes,
      daynumber,
      rooz,
      month,
      monthnumber,
      nextDay,
      beforDay,
      saveReserveTime,
      getReserveTime,
      dialog,
      notReserveTime,
      gotoFisrtReserve,
      loading,
    };
  },
};
</script>

<style>
.home1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
}
.home1 .info {
  height: 500px;
  width: 600px;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-right: 100px;
  border-radius: 7px;
}
.home1 .info .img {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.home1 .info .img img {
  border-radius: 50%;
  border: 1px blue solid;
}
.home1 .info .img .share {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.home1 .info .img .share span {
  padding: 0 5px;
  color: blueviolet;
}
.home1 .info .img .share i {
  color: blueviolet;
}
.home1 .info .subinfo .name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -10px;
}
.home1 .info .subinfo .name h3 {
  font-weight: 400;
  padding: 0 10px;
}
.home1 .info .subinfo .name i {
  color: green;
}
.home1 .info .subinfo .takhasos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 15px;
}
.home1 .info .subinfo .city {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
}
.home1 .info .subinfo .city span {
  font-weight: 100;
  font-size: 14px;
  padding: 0 5px;
}
.home1 .info .subinfo .city i {
  color: blue;
}
.home1 .info .subinfo .rate {
  background: rgb(249, 249, 249);
  height: 70px;
  margin: 35px auto;
  width: 250px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home1 .info .subinfo .rate .left,
.home1 .info .subinfo .rate .right {
  width: 50%;
  height: 70px;
  text-align: center;
}
.home1 .reserve {
  width: 600px;
  background-color: white;
  margin-top: 40px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  margin-left: 100px;
  margin-bottom: 20px;
}
.home1 .reserve .top {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
}
.home1 .reserve .top h3 {
  font-weight: 400;
  padding: 0 5px;
  color: blue;
}
.home1 .reserve .top i {
  color: blue;
}
.home1 .reserve .checkvisit {
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
}
.home1 .reserve .checkvisit .matab {
  background-color: #5cd1e687;
  height: 50px;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 10px;
}
.home1 .reserve .checkvisit .phone {
  height: 50px;
  width: 47%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}
.home1 .reserve .checkvisit .matab #male,
.home1 .reserve .checkvisit .phone #female {
  height: 30px;
  width: 30px;
}
.home1 .reserve .checkvisit .matab label,
.home1 .reserve .checkvisit .phone label {
  padding: 0 10px;
}
.home1 .reserve .matabno {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin: 25px 0;
}
.home1 .reserve .matabno span {
  color: red;
}
.home1 .reserve .matabyes {
  width: 100%;
}
.home1 .reserve .matabyes .sec1 {
  width: 95%;
  border: 1px solid rgba(0, 0, 0, 0.304);
  border-radius: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 20px auto;
  padding: 10px 20px;
  cursor: pointer;
}
.home1 .reserve .matabyes .sec1:hover {
  border: 1px solid blue;
}
.home1 .reserve .matabyes .sec1 span {
  font-size: 15px;
  font-weight: 100;
}
.home1 .reserve .matabyes .selectday {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: 50px auto;
}
.home1 .reserve .matabyes .time {
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  padding-bottom: 30px;
}
.home1 .reserve .matabyes .time .timediv {
  height: 40px;
  width: 100px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(9, 210, 9);
  border-radius: 8px;
  cursor: pointer;
}
.home1 .reserve .matabyes .time .timediv span {
  color: rgb(9, 210, 9);
}

.home1 .reserve .matabyes .tatil {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
}
.home1 .reserve .matabyes .notreservetime {
  height: 46px;
  background-color: #536dfe;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  margin-top: -30px;
  margin-bottom: 30px;
  border-radius: 7px;
  cursor: pointer;
}
.home1 .reserve .matabyes .notreservetime:hover {
  transition: 0.2s all;
  background-color: #283593;
}
.home1 .reserve .matabyes .notreservetime span {
  color: white;
  font-size: 16px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .home1 .info {
    margin-right: 0;
  }
  .home1 .reserve {
    margin-left: 0;
    margin-top: 20px;
    padding: 0;
  }
  .home1 .reserve .top {
    margin-right: 0;
    padding-right: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .home1 .info {
    margin-right: 0;
  }
  .home1 .reserve {
    margin-left: 0;
    margin-top: 20px;
  }
  .home1 .reserve .top {
    margin-right: 0;
    padding-right: 10px;
  }
  .home1 .reserve .top {
    margin-right: 0;
    padding-right: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home1 .info {
    margin-right: 0;
  }
  .home1 .reserve {
    margin-left: 0;
    margin-top: 20px;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .home1 .info {
    margin-right: 0;
  }
  .home1 .reserve {
    margin-left: 0;
    margin-top: 20px;
  }
}

@media (min-width: 1201px) and (max-width: 1500px) {
  .home1 .info {
    margin-right: 0;
  }
  .home1 .reserve {
    margin-left: 0;
  }
}
</style>
