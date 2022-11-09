<template>
    <section class="values">
        <div class="container">
            <div class="row intro-text">
                <h2>Our Core Values</h2>
                <div class="col-12 seprator">

                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                </p>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="value">
                        <div class="heading">
                            <div class="row mx-0 justify-content-center">
                                <div class="icon">
                                    <font-awesome-icon icon="fa-solid fa-house-chimney" />
                                </div>
                                <h2>Great Services</h2>
                            </div>
                        </div>
                        <div class="content">
                            <div class="row mx-0 justify-content-center">
                                <div class="separator">
                                </div>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="value">
                        <div class="heading">
                            <div class="row mx-0 justify-content-center">
                                <div class="icon" style="background-color: rgb(81, 122, 210)">
                                    <font-awesome-icon icon="fa-solid fa-gear" />
                                </div>
                                <h2>Highest Standards</h2>
                            </div>
                        </div>
                        <div class="content">
                            <div class="row mx-0 justify-content-center">
                                <div class="separator">
                                </div>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="value">
                        <div class="heading">
                            <div class="row mx-0 justify-content-center">
                                <div class="icon" style="background-color: rgb(254, 129, 62)">
                                    <font-awesome-icon icon="fa-solid fa-users" />
                                </div>
                                <h2>Professional Team</h2>
                            </div>
                        </div>
                        <div class="content">
                            <div class="row mx-0 justify-content-center">
                                <div class="separator">
                                </div>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="value">
                        <div class="heading">
                            <div class="row mx-0 justify-content-center">
                                <div class="icon" style="background-color: rgb(132, 203, 1)">
                                    <font-awesome-icon icon="fa-solid fa-lightbulb" />
                                </div>
                                <h2>Creative Solutions</h2>
                            </div>
                        </div>
                        <div class="content">
                            <div class="row mx-0 justify-content-center">
                                <div class="separator">
                                </div>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppHomeValues',
    data() {
        return {
            
        }
    }
}
</script>
<style>
    .values {
        padding-top: 90px;
        margin-top: 0px;
        padding-right: 30px;
        padding-bottom: 20px;
        margin-bottom: 0px;
        padding-left: 30px;
        background-color: rgb(245, 245, 245)
    }
    .values .intro-text {
        padding: 3% 15% !important;
    }
    .values h2 {
        font-weight: 400;
        line-height: 41.6px;
        letter-spacing: 1px;
        text-transform: capitalize;
        margin-bottom: 20px;
    }
    .values .seprator {
        align-self: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 30px;
        width: 100%;
        max-width: 206px;
        border-color: var(--main-color);
        border-top-width: 2px;
        border-top-style: solid
    }
    .values p {
        color: rgb(116, 116, 116);
        font-size: 15px;
        font-weight: 500;
        line-height: 34.05px;

    }
    .value .icon  {
        background-color: rgb(33, 166, 181);
        box-sizing: content-box;
        height: 120px;
        width: 120px;
        line-height: 120px;
        border-radius: 50%;
        color: #fff;
        font-size: 60px;
        position: relative;
        padding: 0;
        margin-bottom: 15px ;
    }
    .value .icon::after  {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        content: "";
        box-sizing: content-box;
        top: 0;
        left: 0;
        padding: 0;
        z-index: -1;
        box-shadow: 0 0 0 2px rgba(255,255,255,.1);
        opacity: 0;
        transform: scale(.9);
        display: inline-block;
        animation: fusionSonarEffect 1.3s ease-out 75ms;
        animation-iteration-count: infinite;
    }
    .value .heading:hover .icon  {
        background-color: var(--main-color) !important;
        border-color: var(--main-color) !important;
        transition: background-color .3s,color .3s;
        transform: scale(.93);
    }
    .value .heading:hover .icon::after  {
        box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 2px, var(--main-color) 0px 0px 10px 10px, rgba(255, 255, 255, 0.5) 0px 0px 0px 10px
    }
    .value .heading h2 {
        font-size: 16px;
        line-height: 1.3;
        color: rgb(51, 51, 51);
        font-weight: 500;

    }
    .value .heading:hover h2 {
        color: var(--main-color);
    }

    .value .content .separator {
        border-color: rgb(143, 143, 143);
        border-top-width: 2px;
        border-style: solid;
        flex-grow: 2;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 20px;
        width: 100%;
        max-width: 20px;
        border-bottom: none;
        border-left: none;
        border-right: none;
    }
    .value .content p {
        color: rgb(116, 116, 116);
        font-size: 15px;
        font-weight: 600;
        line-height: 34.05px
    }

    @keyframes fusionSonarEffect {
        0%{opacity:.3}
        40%{opacity:.5}
        100%{transform:scale(1.5);opacity:0}
    }


</style>