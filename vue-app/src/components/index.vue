<template>
  <el-main name="el-fade-in-linear" class="home">
    <router-link class="dbdk" to="/classroom/modular/0"><img src="@/assets/images/dbkt.png" class="img-circle"  alt=""></router-link>
    <router-link class="dbkt" to="/bigshot"><img src="@/assets/images/dbdk.png" class="img-circle"  alt=""></router-link>
  </el-main>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 100%;
  margin-top: -60px;
  padding-top: 60px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(../assets/images/shouye.png);
  position: relative;
  background-color: rgb(255,218,68);
}
.dbdk {
  display: block;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 35%;
  left: 30%;
  transform: scale3d(0.7, 0.7, 0.7);
}
.dbkt {
  display: block;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  bottom: 20%;
  right: 20%;
  transform: scale3d(0.7, 0.7, 0.7);
}
.img-circle {
  border-radius: 50%;
}
</style>


