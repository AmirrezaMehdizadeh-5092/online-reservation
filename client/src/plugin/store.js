import { defineStore } from "pinia";

export const useStore = defineStore('my-store',{
    state:()=>({
        api : 'http://localhost:4100'
    })
})