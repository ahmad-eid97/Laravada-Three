<template>
    <div class="banner">
        <h2>
            do you have a construction project we can help with?
        </h2>
        <a href="#" class="btn">
            Get A Free Quote
        </a>
    </div> 
</template>

<script>
export default {
    name: 'AppHomeBanner',
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
    .banner {
        padding-top: 50px;
        margin-top: 0px;
        padding-right: 30px;
        padding-bottom: 50px;
        margin-bottom: 0px;
        padding-left: 30px;
        background-color: var(--main-color);
        text-align: center;
    }
    .banner h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 41.6px;
        letter-spacing: 1px;
        text-transform: capitalize;
    }
    @include xs {
        .banner h2 {
            font-size: 22px;
            line-height: 30px;
        }
    }
    .banner .btn {
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: -108px;
        margin-left: 10px;
        padding: 13px 29px;
        line-height: 21px;
        font-size: 14px;
        color: #fff;
        background-color: #333333;
        font-weight: 700;
        border-radius: 0;
        letter-spacing: 2px;
        border: 2px solid #fff;
    }
    .banner .btn:hover {
        color: rgb(51, 51, 51);
        background-color: #fff;
        border-color: #333333;
    }
    
</style>