<template>
    <div class="Reservation">
        <HeaderComp></HeaderComp>
        <Reservation1Comp></Reservation1Comp>
    </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import Reservation1Comp from "./reserve/Reservation1Comp.vue";


export default
{
    name: "ReservationComp",
    components: { HeaderComp, Reservation1Comp }
}

</script>