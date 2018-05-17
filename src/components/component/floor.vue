<template>
    <div>
        <div class="floor">
            <div class="floor-title"><span class="floor-number">{{floorNumber}}F</span>{{floorTitle}}</div>
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img :src="floorData0.image" width='100%' alt="">
                </div>
                <div>
                    <div>
                        <div class="floor-two">
                            <img :src="floorData1.image" width='100%' alt="">
                        </div>
                        <div>
                            <img :src="floorData2.image" width='100%' alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item,index) in floorData.slice(3)" :key="index">
                    <img :src="item.image" width="100%" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['floorData','floorTitle','floorNumber'],
        data() {
            return {
                floorData0: {},
                floorData1: {},
                floorData2: {},
            }
        },
        created(){  
           
        },
        watch:{
            floorData:function(val){
                console.log(this.floorData)
                this.floorData0 = this.floorData[0]
                this.floorData1 = this.floorData[1]
                this.floorData2 = this.floorData[2]
            },
        }
    }
</script>

<style scoped>
.floor-title{
    text-align: center;
    font-size: .8rem;
    padding: .4rem;
    color: #df3f11;
}
.floor-number{
    display:  inline-block;
    background-color: #df3f11;
    color: #ffffff;
    border-radius: 50%;
    padding: .2rem;
    margin-right: .5rem;
}
.floor-anomaly{
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
.floor-anomaly div{
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing:border-box; 
}
.floor-one{
    border-right: 1px solid #ddd;
}
.floor-two{
    border-bottom: 1px solid #ddd;
}
.floor-rule{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
}
.floor-rule div{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width:50%;
    border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd){
    border-right: 1px solid #ddd;
}
</style>