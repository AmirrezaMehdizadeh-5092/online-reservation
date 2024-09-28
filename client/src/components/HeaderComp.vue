<template>
  <div class="header">
    <h1>سامانه نوبت دهی آنلاین دکتر سید علی موسوی</h1>
    <div class="login-reg" @click="dialog = true">
      <h4>ورود / عضویت</h4>
    </div>
  </div>

  <v-locale-provider rtl>
    <v-row justify="center" v-if="dialog">
      <v-dialog v-model="dialog" persistent width="1024">
        <v-card>
          <v-card-title>
            <span class="text-h5">برای ادامه یک ایمیل معتبر وارد نمایید</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    bg-color="white"
                    v-model="email"
                    color="red"
                    label="ایمیل*"
                    required
                  ></v-text-field>
                </v-col>
                <small
                  v-if="EmailNotEmpty"
                  style="margin-right: 20px; color: red"
                  >لطفا ایمیل خود را وارد کنید</small
                >
                <small
                  v-if="EmailNotValid"
                  style="margin-right: 20px; color: red"
                  >لطفا ایمیل را به درستی وارد کنید</small
                >
                <small v-if="waitEmail" style="margin-right: 20px; color: red"
                  >لطفا صبر کنید</small
                >
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="
                dialog = false;
                EmailNotEmpty = false;
              "
            >
              بستن
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="login_reg()">
              ادامه
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-locale-provider>
</template>

<script>
import { ref } from "vue";
import { useStore } from "../plugin/store";
import axios from "axios";

export default {
  name: "HeaderComp",
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const email = ref("");
    const EmailNotEmpty = ref(false);
    const waitEmail = ref(false);
    const EmailNotValid = ref(false);
    const emailRegex = ref(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    const login_reg = async () => {
      if (email.value == "") {
        return (EmailNotEmpty.value = true);
      } else {
        const checkemail = emailRegex.value.test(email.value);
        if (checkemail == true) {
          EmailNotValid.value = false;
          axios
            .post(`${store.api}/login_reg`, {
              email: email.value,
            })
            .then((response) => {
              if (response.data.emailValid == "ok") {
                waitEmail.value = true;
                if (response.data.status == "Login") {
                  dialog.value = false;
                  alert("ورود شما موفقیت آمیز بود");
                  sessionStorage.setItem("tokenn", response.data.token);
                  email.value = "";
                } else if (response.data.status == "Register") {
                  dialog.value = false;
                  alert("ثبت نام شما موفقیت آمیز بود");
                  sessionStorage.setItem("tokenn", response.data.token);
                  email.value = "";
                }
              }
            })
            .catch(() => {
              EmailNotValid.value = true;
            });
        } else {
          EmailNotValid.value = true;
        }
      }
    };

    return {
      dialog,
      email,
      login_reg,
      EmailNotEmpty,
      EmailNotValid,
      waitEmail,
    };
  },
};
</script>

<style>
.header {
  padding: 30px 0;
  width: 100%;
  background-color: #00bfd6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
}

.header h1,
.header h4 {
  color: white;
}

.header .login-reg {
  border-radius: 20px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  cursor: pointer;
}
.header .login-reg:hover {
  transition: 0.3s all;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  transform: rotate(360deg);
}

@media (min-width: 320px) and (max-width: 480px) {
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .header h1 {
    text-align: center;
    padding: 0 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .header {
    padding: 30px 20px;
  }
  .header h1 {
    padding: 0 20px;
  }
}
</style>
