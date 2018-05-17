<template>
    <div class="goods-info">
        <div class="goods-image">
            <img v-lazy='goodsImage' width="90%" alt="">
        </div>
        <div class="good-name">{{goodsName}}</div>
        <div class="good-price">￥{{goodsPrice | changeMoney}}</div>
    </div>
</template>

<script>
    import { toMoney } from '@/filter/filterMoney.js'
    export default {
        props:['goodsImage','goodsName','goodsPrice'],
        data() {
            return {
               
            }
        },
        filters:{
            changeMoney(money){
                return toMoney(money)
            }
        }
    }
</script>

<style scoped>
.good-name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>