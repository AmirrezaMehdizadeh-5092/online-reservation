<template>
  <div class="reserve1">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <div class="resform">
      <v-card id="fomcard">
        <v-card-title>
          <span class="text-h5">اطلاعات بیمار را وارد کیند</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="نام*"
                  v-model="fname"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  required
                  v-model="lname"
                  label="نام خانوادگی*"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="phone"
                  hint="باید 11 رقم باشد"
                  label="شماره تلفن*"
                  required
                  type="Number"
                ></v-text-field>
                <small style="color: red" v-if="phonerror">
                  شماره تلفن باید 11 رقم باشد</small
                >
              </v-col>
              <v-col cols="12">
                <v-text-field
                  hint="باید 10 رقم باشد"
                  label="کد ملی*"
                  required
                  type="Number"
                  v-model="code_meli"
                ></v-text-field>
                <small style="color: red" v-if="codemelierror"
                  >کد ملی باید 10 رقم باشد</small
                >
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="description"
                  label="توضیحات"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div @click="Record()" class="end"><span>ثبت</span></div>
        </v-card-actions>
      </v-card>
    </div>
    <div class="resinfo">
      <div class="doctorinfo">
        <img src="../../assets//doc.png" alt="" />
        <span>دکتر {{ doctorInfo.name }}</span>
      </div>
      <div class="date">
        <div class="p1">
          <i style="color: blue" class="fa fa-calendar"></i>
          <span style="padding: 0 10px; font-size: 14px">تاریخ</span>
        </div>
        <div class="p2">
          <span style="font-size: 14px"
            >{{ rooz }} {{ daynumber }} {{ month }}</span
          >
        </div>
      </div>
      <div
        class="date"
        style="border-bottom: 1px solid #cac9c9; padding-bottom: 20px"
      >
        <div class="p1">
          <i style="color: blue" class="fa fa-clock-o"></i>
          <span style="padding: 0 10px; font-size: 14px">ساعت حضور</span>
        </div>
        <div class="p2">
          <span style="font-size: 14px">{{ clock }}</span>
        </div>
      </div>
      <div class="matabinfo">
        <div class="sec1">
          <i style="color: blue" class="fa fa-map-marker"></i>
          <span style="font-size: 14px; padding: 0 10px">اطلاعات مطب</span>
        </div>
        <div class="sec2">
          <span style="color: #7d7a7a; font-size: 14px">{{
            doctorInfo.address
          }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import router from "../../plugin/router";
import { useStore } from "../../plugin/store";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Reservation1Comp",
  created() {
    document.title = "رزرو";
  },
  setup() {
    const store = useStore();
    const token = ref("");
    const rooz = ref("");
    const daynumber = ref("");
    const month = ref("");
    const clock = ref("");
    const doctorInfo = ref([]);
    const fname = ref("");
    const lname = ref("");
    const phone = ref("");
    const code_meli = ref("");
    const description = ref("");
    const phonerror = ref(false);
    const codemelierror = ref(false);

    const Record = () => {
      if (!fname.value && !lname.value && !phone.value && !code_meli.value) {
        alert("لطفا تمام فیلدهای ستاره دار را پر کنید");
      } else {
        if (phone.value.length != 11) {
          return (phonerror.value = true);
        }
        if (code_meli.value.length != 10) {
          return (codemelierror.value = true);
        } else {
          const obj = {
            fname: fname.value,
            lname: lname.value,
            phone: phone.value,
            code_meli: code_meli.value,
            description: description.value,
            rooz: rooz.value,
            daynumber: daynumber.value,
            month: month.value,
            clock: clock.value,
            token: token.value,
          };
          axios
            .post(`${store.api}/save_reserve`, obj)
            .then((response) => {
              console.log(response);
              if (response.status == 200) {
                Swal.fire({
                  icon: "success",
                  title: response.data,
                  confirmButtonText: "رفتن به صفحه اصلی",
                }).then(() => {
                  router.push("/");
                });
              }
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: error.response.data,
                confirmButtonText: "بستن",
              });
            });
        }
      }
    };

    onMounted(() => {
      token.value = sessionStorage.getItem("tokenn");
      rooz.value = sessionStorage.getItem("rooz");
      daynumber.value = sessionStorage.getItem("daynumber");
      month.value = sessionStorage.getItem("month");
      clock.value = sessionStorage.getItem("clock");
      if (
        token &&
        rooz.value &&
        daynumber.value &&
        month.value &&
        clock.value
      ) {
        axios.get(`${store.api}/get_doctor`).then((response) => {
          doctorInfo.value = response.data;
        });
      } else {
        router.push("/");
      }
    });

    return {
      store,
      rooz,
      daynumber,
      month,
      clock,
      token,
      doctorInfo,
      fname,
      lname,
      code_meli,
      phone,
      description,
      Record,
      phonerror,
      codemelierror,
    };
  },
};
</script>

<style>
.reserve1 {
  background-color: rgb(249, 249, 249);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
}
.reserve1 .resform {
  padding: 20px 0;
  width: 60%;
}
.reserve1 .resform #fomcard {
}
.reserve1 .resinfo {
  width: 35%;
}
.reserve1 .resinfo .doctorinfo {
  margin: 0 30px;
  padding: 20px 0px;
  width: 65%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #cac9c9;
}
.reserve1 .resinfo .doctorinfo img {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: 1px solid black;
}
.reserve1 .resinfo .doctorinfo span {
  padding: 0 10px;
}
.reserve1 .resinfo .date {
  width: 65%;
  margin: 0 30px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.reserve1 .resinfo .matabinfo {
  width: 65%;
  margin: 0 30px;
  padding: 10px 0px;
  border-bottom: 1px solid #cac9c9;
}
.reserve1 .resinfo .matabinfo .sec1,
.reserve1 .resinfo .matabinfo .sec2 {
  width: 100%;
  padding: 10px 0;
}
.reserve1 .resform .end {
  margin: 0 auto;
  height: 50px;
  width: 500px;
  background-color: rgb(49, 224, 49);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 0;
  margin-bottom: 45px;
}
.reserve1 .resform .end span {
  color: white;
}
.reserve1 .resform .end:hover {
  transition: 0.1s all ease-in-out;
  background-color: rgb(30, 144, 30);
}

@media (min-width: 320px) and (max-width: 480px) {
  .reserve1 .resform {
    margin: 0 auto;
    width: 100%;
  }
  .reserve1 .resinfo {
    width: 100%;
    padding-right: 50px;
  }
  .reserve1 .resform .end {
    width: 100%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .reserve1 .resform {
    margin: 0 auto;
    width: 100%;
  }
  .reserve1 .resinfo {
    width: 100%;
    padding-right: 75px;
  }
  .reserve1 .resform .end {
    width: 100%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .reserve1 .resform {
    margin: 0 auto;
    width: 100%;
  }
  .reserve1 .resinfo {
    width: 100%;
    padding-right: 150px;
  }
  .reserve1 .resform .end {
    width: 100%;
  }
}

</style>
