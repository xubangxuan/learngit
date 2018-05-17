<template>
    <div>
        <div class="search-bar">
            <van-row class="text-row">
                <van-col span="3" >
                   <div class="contents">
                        <img :src='locationIcon' style="width:1rem;height:1rem" class="location-Icon" alt="">
                   </div>
                </van-col>
                <van-col span="16">
                    <input style="font-size:.8rem;line-height:1.6rem" placeholder="查找" class="search-input" type="text">
                </van-col>
                <van-col span="5">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- banner -->
        <div class="swiper-area clearfix">
            <van-swipe :autoplay="2000">
                <van-swipe-item v-for="(banner,index) in bannerPicArrays" :key="index">
                    <img v-lazy="banner.image" width="100%" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 类别 -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%" alt="">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- 广告条 -->
        <div>
            <img v-lazy="adBanner" width="100%" alt="">
        </div>

        <!-- 商品推荐 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" width="80%" alt="图片">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFormat}}(￥{{item.mallPrice | moneyFormat}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>


        <!-- 楼层 -->
        <floorcomponent :floorData='floor1' :floorTitle='floorName.floor1' :floorNumber ='1'></floorcomponent>
        <floorcomponent :floorData='floor2' :floorTitle='floorName.floor2' :floorNumber ='2'></floorcomponent>
        <floorcomponent :floorData='floor3' :floorTitle='floorName.floor3' :floorNumber ='3'></floorcomponent>


        <!-- 热卖商品 -->
        <div class="hot-area">
            <div class="hot-title">
                热卖商品
            </div>
            <div class="hot-goods">
                <van-list>
                    <van-row gutter='20'>
                        <van-col span="12" v-for="(item ,index) in hotGoods" :key="index">
                            <goodinfos :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodinfos>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper , swiperSlide} from 'vue-awesome-swiper'
import floorcomponent from "../component/floor";
import goodinfos from "../component/goodsInfoComponent"
import {toMoney } from '@/filter/filterMoney'
    export default {
        components:{
            swiper,
            swiperSlide,
            floorcomponent,
            goodinfos
        },
        data(){
            return{
                msg:"ShoppingMall",
                locationIcon:require("../../assets/images/location.png"),
                
                category:[],
                adBanner:"",
                bannerPicArrays:[],
                recommendGoods:[],
                swiperOption:{
                    slidesPerView:3
                },
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:"",
                floorNumber:"",
                hotGoods:[]

            }
        },
        created(){
            axios({
                url:"https://www.easy-mock.com/mock/5ae830693b719e1a72e5249e/example/index",
                method:"get",
            })
            .then(response=>{
                console.log(response)
                if(response.status==200){
                    this.category = response.data.data.category;
                    this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArrays = response.data.data.slides;
                    this.recommendGoods = response.data.data.recommend;
                    this.floor1 = response.data.data.floor1;
                    this.floor2 = response.data.data.floor2;
                    this.floor3 = response.data.data.floor3;
                    this.floorName = response.data.data.floorName;
                    this.hotGoods = response.data.data.hotGoods;
                }
            })
            .catch(error=>{
                console.log(error)
            })
        },
        filters:{
            moneyFormat:function(money){
                return toMoney(money)
            }
        }
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
}
.search-input{
    width: 100%;
    height: 1.3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
}
input::-moz-placeholder{
    color: #fff
}
input::-webkit-input-placeholder{
    color: #fff
}
.location-Icon{
    padding-top: .3rem;
    padding-left: .3rem;
}
.clearfix{
    clear: both;
}
.swiper-area{
    max-height: 15rem;
    overflow: hidden;
}
.type-bar{
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-grow: row;
    flex-wrap: nowrap;
}
.type-bar div{
    padding-left: .3rem;
    font-size: 12px;
    text-align: center;
}
.recommend-area{
    background-color: #fff;
    margin-top: .3rem;
}
.recommend-title{
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
}
.recommend-body{
    border-bottom:1px solid #eee;
    padding-bottom: .4rem;
}
.recommend-item{
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
}
.contents{
    display: flex;
    justify-content: center;
}
.contents>img{
    margin-top: .5rem;
}
.hot-area{
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #e5017d;
}
</style>