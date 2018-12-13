<template>
  <el-container class="el-container" name="el-fade-in-linear" direction='vertical'>
    <el-container>
      <el-main id='blocklyDiv'></el-main>
    </el-container>
    <button class="position-fixed" type="button" id="codebutton"  @click="openCode" >
      <i :class="icon"></i>
    </button>
    <div id="rightCode" v-show='code' class="position-fixed">
      <div id="rightBorderLeft" v-on="{ mousedown: movey, mouseup: mouseupy }" class=" pull-left"></div>
      <div class="pull-right rightcon" id="rRight">
        <div id='code_size'></div>
        <div id="rightBorderRight" v-on="{ mousedown: moveX, mouseup: mouseupX }"></div>
        <div id="logText">
          <textarea name="" readonly id="arduinoLog" ></textarea>
        </div>
      </div>
    </div>
    <el-dialog title="请选择串口" :visible.sync="port" width="30%" :before-close="portfalse">
      <div class="form-check btn  btn-lg btn-block" v-for="(v,i) in portlist" v-bind:class="{'btn-primary':v.comName == clickport,'btn-secondary':v.comName != clickport }"  @click="clickport = v.comName;btnBlock=i" :key="i">
        <input class="form-check-input" type="radio" v-model='clickport' :value="v.comName" checked>
        <label class="form-check-label bigshotradio" v-text='v.comName'>
          
        </label>
        <i class="el-icon-success "  v-show="v.comName==clickport" ></i>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="portfalse">取 消</el-button>
        <el-button type="primary" @click="portClose">确 定</el-button>
      </span>
    </el-dialog>
    <bigFooter v-on:openCode="openCode" v-on:openPort = "openPort" v-on:cupload = "cupload" v-on:openCodeTrue="openCodeTrue" ></bigFooter>
  </el-container>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import bigBlock from "@/components/bigShot/block.vue";
import bigFooter from "@/components/bigShot/footer.vue";
export default {
  name: "bigShot",
  data() {
    return {
      code: false,
      log: false,
      port: false,
      disX: 500,
      btnBlock: null,
      portlist: [],
      clickport: null,
      icon: "el-icon-arrow-left"
    };
  },



  async mounted() {

    
    changeDivHeight();
    this.init();
    let currentRoute = this.$router.currentRoute;
    let result;
    let { cgqid, nameid, codeid } = currentRoute.query;
    if (cgqid !== undefined && nameid !== undefined && codeid !== undefined) {
      let ele = new Ele();
      let url = modulars[cgqid].mode[nameid].rightcon.study.code[codeid].xml;
      result = await ele.getxml(url);
    } else {
      result =
        '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="base_setup" id="lw^YX2*Pn.]Jce-ij-L-" x="236" y="149"></block></xml>';
    }
    let xml = Blockly.Xml.textToDom(result);
    Blockly.Xml.appendDomToWorkspace(xml, Blockly.mainWorkspace);
  },
  watch: {
    code(v, o) {
      if (v) {
        setTimeout(() => {
          document.getElementById("codebutton").style.right =
            document.getElementById("rightCode").offsetWidth + "px";
          this.icon = "el-icon-arrow-right";
        }, 200);
      } else {
        document.getElementById("codebutton").style.right = 0;
        this.icon = "el-icon-arrow-left";
      }
    }
  },
  methods: {
    ...mapActions({
      getportlist: "selectPlay"
    }),
    ...mapMutations({
      init: "SET_BIGSHOTINIT",
      save1: "SET_PORT"
    }),
    openCodeTrue() {
      this.code = true;
    },
    openCode() {
      this.code = !this.code;
    },
    openLog() {
      this.log = !this.log;
    },
    portClose() {
      if (!this.clickport) {
        this.$message("没有串口！请检查是否插入控制器");
        return;
      }
      this.port = false;
      this.save1(this.clickport);
      this.cupload(1);
    },
    async openPort(i) {
      //this.port = true;

      if (i === 0) {
        this.cupload(0);
      } else {
        this.portlist = [];
        let list = await Ele.getport();
        for (let v of list) {
          let productId = parseInt(v.productId, 16);
          let vendorId = parseInt(v.vendorId, 16);
          if (productId === 29987 && vendorId === 6790) {
            this.portlist.push(v);
          }
        }
        this.port = true;
      }
    },
    async portfalse() {
      this.port = false;
    },
    movey(event) {
      this.disX = event.clientX;
      const rightcode = document.getElementById("rightCode");
      this.offwidth = rightcode.offsetWidth;
      document.addEventListener("mousemove", this.movemovuey, false);
    },
    mouseupy() {
      document.removeEventListener("mousemove", this.movemovuey);
    },
    movemovuey(event) {
      let y = this.disX - event.clientX + this.offwidth;
      document.getElementById("rightCode").style.width = y + "px";
      document.getElementById("rRight").style.width = y - 3 + "px";
      document.getElementById("codebutton").style.right =
        document.getElementById("rightCode").offsetWidth + "px";
    },
    moveX(event) {
      this.disY = event.clientY;
      this.codesizeh = document.getElementById("code_size").style.height;
      document.addEventListener("mousemove", this.movemovueX, false);
    },
    mouseupX() {
      document.removeEventListener("mousemove", this.movemovueX);
    },
    movemovueX(event) {
      const rightcode = document.getElementById("rightCode");
      let offheight = parseInt(rightcode.style.height);
      let y = this.disY - event.clientY;
      let a = document.getElementById("code_size");
      let b = document.getElementById("logText");
      a.style.height = parseInt(this.codesizeh) - y + "px";
      b.style.height = offheight - parseInt(this.codesizeh) + y - 3 + "px";
    },
    async cupload(i) {
      let inspec = Ele.inspectxml()
      if(inspec.state != 0) {
        this.$notify({
          title: '警告',
          message: inspec.err,
          type: 'warning'
        });
        return
      }
      this.code = true;
      const loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.$emit("openCodeTrue");
      let ele = new Ele({ COMV: this.$store.state.savePort });
      let x;
      let text;
      try {
        x = await ele.cupload(i);
      } catch (err) {
        console.log(err);
        x = false;
        text = err;
      }
      loading.close();
      this.open(x, i, text);
    },
    open(x, i, text = "") {
      let text1;
      let title;
      let text2;
      title = "提示";

      if (i) {
        text1 = "下载";
      } else {
        text1 = "验证";
      }
      if (x) {
        text2 = "成功";
      } else {
        text2 = "失败";
      }
      this.$alert(`${text1}${text2} ${text} `, title, {
        confirmButtonText: "确定"
      });
    }
  },
  components: {
    bigBlock,
    bigFooter
  }
};
</script>

<style>
#blocklyDiv{
  height: 100%;
  background: #fff;
}

.el-icon-success {
  display: inline-block;
  text-align: right;
  float: right;
}
#codebutton {
  top: 45%;
  right: 0;
  height: 100px;
  width: 30px;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  z-index: 1;
  padding: 0;
  margin: 0;
  background: grey;
  box-shadow: none !important;
}
#codebutton:hover {
  background-color: rebeccapurple;
}
.bigshotradio {
  margin-left: 50px;
}
#blocklyDiv {
  padding: 0;
}
.blocklySvg {
  background-image: url(../../assets/images/bgc.png);
  background-size: 90%;
}
#rightCode {
  width: 500px;
  right: 0;
  top: 60px;
}
#rightBorderLeft {
  height: 100%;
  width: 3px;
  cursor: w-resize;
  background-color: rgba(37, 37, 37, 1);
  z-index: 10;
}
#rightBorderRight {
  width: 100%;
  height: 3px;
  cursor: s-resize;
  background-color: rgba(37, 37, 37, 1);
}

#logText {
  background-color: #ffffff;
}
.rightcon {
  height: 100%;
  width: 497px;
}
.img-f {
  top: 60px;
  left: 0px;
  z-index: 100;
  height: 62px;
  padding: 1px;
  background: rgb(255, 224, 99);
}
#arduinoLog {
  width: 100%;
  height: 100%;
  overflow: scroll;
  font-size: 12px;
  background-color: #000000;
  color: #fff;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
