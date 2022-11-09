<template>
    <div class="user-area pt-100 pb-70">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="user-img">
                        <img src="/assets/images/user-img.jpg" alt="Images">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="user-form">
                        <div class="contact-form">
                            <h2>Register Now</h2>
                            <form>
                                <div class="row">
                                    <div class="col-lg-12 ">
                                        <div class="form-group">
                                            <input type="text" class="form-control" required="" data-error="Please enter your Username" placeholder="Enter Your Username">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input type="email" class="form-control" required="" data-error="Please enter your Username or Email" placeholder="Enter Your Email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" type="password" name="password" placeholder="Password">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 ">
                                        <button type="submit" class="default-btn btn-bg-two">
                                            Register Now
                                        </button>
                                    </div>
                                    <div class="col-12">
                                        <p class="account-desc">
                                            Already have an account? 
                                            <router-link to="login">Log In</router-link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppRegisterForm'
}
</script>

<style>
.contact-form-area {
    text-align: start;
}
.contact-form-area .section-title h2 {
    font-weight: 400;
    line-height: 41.6px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: #252525;
}
.contact-form-area .section-title .seprator {
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 206px;
    border-color: var(--main-color);
    border-top-width: 2px;
    border-top-style: solid;
}
.contact-form-area h2 {
    font-size: 35px;
    font-weight: 600;
    margin-top: 0;
    line-height: 1.2;
    color:var(--main-color);
    margin-bottom: 0;
}
.contact-info::before {
  content: '';
  position: absolute;
  opacity: .1;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url(/assets/images/call-shap1.png);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.contact-form-area .contact-info {
    margin-bottom: 30px;
    background-color:var(--main-color);
    padding: 52px 35px 22px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
}

.agree-label {
  display: flex;
  justify-content: space-between;
}

.contact-form-area .contact-info span {
    color: #252525;
    display: block;
    margin-bottom: 5px;
}
.contact-form-area .contact-info h2 {
  color: #252525;
  font-size: 26px;
  margin-bottom: 15px;
}
.contact-form-area .contact-info p {
  color: #252525;
  margin-bottom: 20px;
}
.contact-form-area .contact-info ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.contact-form-area .contact-info ul li {
  display: block;
  margin-bottom: 30px;
  padding-left: 60px;
  position: relative;
}
.contact-info ul li .content .icon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  background-color: #252525;
  font-size: 20px;
  color:var(--main-color);
  border-radius: 50px;
  border: 1px solid #252525;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
}
.contact-info ul li .content h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #252525;
  display: block;
}
.contact-form-area .contact-info ul li .content a {
  color: #252525;
  display: block;
  font-weight: 400;
  font-size: 15px;
}
.contact-form .form-group label {
  color: #252525;
  font-size: 15px;
  margin-bottom: 15px;
  font-weight: 500;
}
.contact-form .form-group label span {
  color: var(--main-color);
}
.contact-form .form-group .form-control {
  height: 50px;
  color: #252525;
  border: 1px solid var(--main-color);
  background-color: #fff;
  font-size: 15px;
  padding: 10px 20px;
  width: 100%;
  border-radius: 0;
  font-weight: 500;
}
.contact-form .form-group {
  margin-bottom: 20px;
  position: relative;
}
.contact-form .agree-label {
  margin-bottom: 15px;
  position: relative;
}
.contact-form .agree-label input#chb1 {
  position: absolute;
  top: 5px;
  left: 0;
  width: auto;
height: auto;
}
.contact-form .agree-label label {
  font-weight: 500;
  color: #252525;
  margin-left: 25px;
}
.contact-form .agree-label label a,
.contact-form  a {
  color: var(--main-color);
}

.contact-form .default-btn, .contact-form .default-btn:hover {
  background-color: var(--main-color);
  border-radius: 0px;
  color: #252525;
  padding: 10px 16px;
  font-weight: bold;
  border: none;
}

button {
  margin-bottom: 20px;
}
</style>