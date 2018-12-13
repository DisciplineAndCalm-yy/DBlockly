<template>
  <el-container direction='vertical' class="b">
    <header1 v-on:dialog="dialog" ></header1>
    <router-view></router-view>
  <el-dialog
  title="登陆"
  :visible.sync="dialogVisible"
  width="400px"
  :before-close="handleClose">
  <el-form :model="form"   label-position="top" :rules="rules">
    <el-form-item label="手机号码" prop="tel" :label-width="formLabelWidth">
      <el-input v-model="form.tel" ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
      <el-input v-model="form.pass"></el-input>
    </el-form-item>
    <el-form-item class="text-right text-primary">
        <span class="pointer" onclick="" >注册账号 </span>
        <span class="pointer"> 忘记密码</span>
    </el-form-item>
    <el-form-item class="text-center" >
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('form')">确 定</el-button>
  </el-form-item>
  </el-form>
</el-dialog>

  </el-container>
</template>

<script>
import header1 from "@/components/header.vue";

export default {
  name: "App",
  data() {
    return {
      form: {
        tel: "",
        pass: ""
      },
      dialogVisible: false,
      formLabelWidth: "120px",
      rules: {
        tel: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            message: "请输入正确手机号",
            trigger: "blur"
          }
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9_-]{6,16}$/,
            message: "6到16位（字母，数字，下划线，减号）",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    dialog() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    login() {},
    telval() {
      console.log(123);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    header1
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {font-family: sans-serif!important;}
.b {
  height: 100%;
}
@font-face {
  font-family: "Microsoft YaHei", 微软雅黑;
  /* font-family: cat;
  src: url(./assets/font/cat.ttf); */
}
* {
  font-family: "Microsoft YaHei", 微软雅黑;
}

.bgcolorsh {
  background-color: rgb(255, 218, 68);
}
.bgcolorqi {
  background-color: rgb(255, 247, 153);
}
.bgcolorqi1 {
  background-color: rgb(255, 242, 187);
}
a:hover {
  text-decoration: none;
}
.pointer {
  cursor: pointer;
}
</style>
