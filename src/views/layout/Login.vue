<template>
  <div class="login">
    <a-form-model
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      id="components-form-demo-normal-login"
      class="login-form"
    >
      <a-form-model-item has-feedback prop="email">
        <a-input v-model="loginForm.email" placeholder="Email">
          <a-icon
            slot="prefix"
            type="mail"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="password">
        <a-input-password
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="Password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input-password>
      </a-form-model-item>

      <a-form-model-item>
        <a-checkbox style="float: left"> 记住密码 </a-checkbox>
        <router-link style="float: right" :to="{ name: 'Findback' }">
          忘记密码
        </router-link>
        <a-button
          type="primary"
          @click="submitForm('loginForm')"
          class="login-form-button"
        >
          登录
        </a-button>
        Or
        <router-link :to="{ name: 'Register' }"> register now! </router-link>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import api from '@/api/user';

export default {
  data() {
    const checkEmail = (rule, value, callback) => {
      const emailRegx = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (!value) {
        return callback(new Error('请输入邮箱'));
      }
      if (!emailRegx.test(value)) {
        return callback(new Error('邮箱格式错误'));
      }
      return callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'));
      }
      if (value.length !== 6) {
        return callback(new Error('密码长度必须为6位'));
      }
      return callback();
    };
    return {
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: checkEmail, trigger: 'change' }],
        password: [{ validator: validatePass, trigger: 'change' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .login(this.loginForm)
            .then((res) => {
              // console.log(res);
              this.$store.dispatch('setUserInfo', res);
              this.$router
                .push({
                  name: 'Home',
                })
                .catch((err) => new Error(err));
            })
            .catch((error) => {
              this.$message.error(error);
            });
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
  },
};
</script>
<style>
@import url("~@/assets/css/login.less");
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
