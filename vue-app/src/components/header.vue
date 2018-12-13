<template>
  <el-header class="header-wrap">
    <div class="pull-left" alt="">
      <img class="img-logo" src="@/assets/images/whitelogo_.png"/>
    </div>
    <div class="pull-right">
      <div>
        <el-dropdown >
          <span class="el-dropdown-link">
            <img class="right-icon" src="@/assets/images/home.png" height="30">
          </span>
          <el-dropdown-menu slot="dropdown" trigger="click">
            <el-dropdown-item onclick="website()">官网</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <img class="right-icon" src="@/assets/images/shopcat.png" onclick="taobao()" height="30" alt=""><br>
      </div>
      <div class="help">
        <el-dropdown >
          <span class="el-dropdown-link">
            <img class="right-icon" src="@/assets/images/user.png" height="30">
          </span>
          <el-dropdown-menu slot="dropdown" trigger="click">
            <el-dropdown-item>暂未开通</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-show="false" class="help" @click="$emit('dialog')" >
        <i class="el-icon-mobile-phone"></i>
        <br>
        <span>登陆</span>
      </div>
    </div>

    <div class="clearfix"></div>

  </el-header>
</template>

<script>
export default {

};
</script>

<style scoped >
.img-logo{
  height: 40px;
  line-height: 40px;
  margin-bottom: 5px;
}
.right-icon{
  margin-bottom: 15px;
}
i {
  cursor: pointer;
}
img {
  cursor: pointer;
}
.el-header {
  z-index: 10;
  padding: 1px;
  background-color: rgba(29, 85, 159, 1);
}
.pull-right {
  height: 60px;
  line-height: 60px;
}
.pull-left {
  font-size: 24px;
  line-height: 60px;
  padding: 0 15px;
}
.pull-right div {
  display: inline-block;
  width: 60px;
  text-align: center;
  padding-top: 3px;
}
.el-dropdown {
}
.home {
}
</style>
