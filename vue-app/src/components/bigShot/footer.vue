<template>
  <nav class="fixed-bottom navbar-light  bottom-h">
    <button type="button" class="btn float-right btn-img" onclick="Blockly.mainWorkspace.undo(1)">
      <img src="@/assets/images/forward.png"  class="img-forward revoke" height="20" alt="撤销" srcset="">
    </button>
    <button type="button" class="btn float-right btn-img" onclick="Blockly.mainWorkspace.undo(0)">
      <img src="@/assets/images/back.png" class="img-back revoke" height="20" alt="恢复" srcset="">
    </button>
    <button type="button" class="btn float-right" @click="$emit('openCode')" >代码<i class="el-icon-caret-top"></i></button>
    <button type="button" class="btn float-right" onclick='openWin()'>串口监视器</button>
    <button type="button" class="btn float-right" onclick="openFile()">打开</button>
    <button type="button" class="btn float-right" onclick="discard()">新建</button>
    <button type="button" class="btn float-right" onclick="saveXml()">保存</button>
    <!--<button type="button" class="btn float-right" onclick="save()">保存</button>-->
    <button type="button" class="btn float-right" @click='$emit("openPort",1)'>下载</button>
    <button type="button" class="btn float-right" @click='$emit("openPort",0)'>验证</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    };
  },
  mounted() {
  },
  methods: {
    
  },
  watch: {
    changePic1() {
      var forward = document.getElementById('forward');
      forward.src = '@/assets/images/forward-2.png';
    },
    changePic2() {
      var back = document.getElementById('back');
      back.src = '@/assets/images/back-2.png';
    }
  }
};
</script>

<style scoped>
.float-right {
  margin: 7px;
}

.bottom-h {
  height: 52px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 1);
  padding-right: 35px;
}

.btn{
  color: #fff;
  background: rgba(29, 85, 159, 1);
  border-color: rgba(29, 85, 159, .8);
}

.btn:hover{
  background: rgba(11, 66, 140, 1)!important;
  box-shadow: none!important;
}

.revoke {
  line-height: 52px;
}

.btn-img{
  width: 74px;
  height: 38px;
  line-height: 24px;
}

.btn-img img{
  margin-bottom: 5px;
}
</style>
