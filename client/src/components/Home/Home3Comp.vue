<template>
  <div class="home3">
    <h2>سوالات متداول</h2>
    <div style="padding: 20px 30px">
      <v-expansion-panels style="padding: 10px 0">
        <v-expansion-panel
          id="ss"
          style="color: rebeccapurple"
          :title="title1"
          :text="text1"
        ></v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels style="padding: 10px 0">
        <v-expansion-panel
          style="color: rebeccapurple"
          :title="title2"
          :text="text2"
        ></v-expansion-panel>
      </v-expansion-panels>
      <v-expansion-panels style="padding: 10px 0">
        <v-expansion-panel
          style="color: rebeccapurple"
          :title="title3"
          :text="text3"
        ></v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useStore } from "../../plugin/store";

export default {
  name: "Home3Comp",
  setup() {
    const store = useStore();
    const title1 = ref("");
    const title2 = ref("");
    const title3 = ref("");
    const text1 = ref("");
    const text2 = ref("");
    const text3 = ref("");

    onMounted(() => {
      axios.get(`${store.api}/get_doctor`).then((response) => {
        title1.value = `هزینه ویزیت دکتر ${response.data.name} چقدر است ؟`;
        title2.value = `نزدیک‌ترین نوبت دکتر ${response.data.name} چه زمانی است؟`;
        title3.value = `تحصیلات دکتر ${response.data.name} چیست؟`;
        text1.value = `هزینه ویزیت و به طور کلی درمان، عدد ثابتی نیست و به نوع خدمتی که از دکتر ${response.data.name} دریافت می کنید بستگی دارد .`;
        text2.value = `برای اطلاع از نزدیک‌ترین نوبت دکتر ${response.data.name} به قسمت دریافت نوبت در پروفایل ایشان مراجعه کنید. در صورتیکه دکتر سید علی موسوی نوبت خالی نداشت، با کلیک روی گزینه « نوبت دار شد اطلاع بده » سریع‌تر از دیگران از اولین نوبت خالی ایشان باخبر شوید.`;
        text3.value = `تحصیلات دکتر ${response.data.name} تخصص , در زمینه  ${response.data.tazasos} است.`;
      });
    });

    return {
      store,
      title1,
      title2,
      title3,
      text1,
      text2,
      text3,
    };
  },
};
</script>

<style>
.home3 {
  width: 81%;
  border: 0.5px solid #e1e1e1;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 35px;
  margin-bottom: 60px;
}
.home3 h2 {
  padding: 20px 20px;
  font-size: 18px;
  font-weight: 400;
}
</style>
