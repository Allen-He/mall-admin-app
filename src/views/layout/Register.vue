<template>
  <div class="register">
    <a-form-model
      ref="registerForm"
      :model="registerForm"
      :rules="rules"
      id="components-form-demo-normal-login"
      class="login-form"
    >
      <a-form-model-item has-feedback prop="username">
        <a-input v-model="registerForm.username" placeholder="UserName">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="email">
        <a-input v-model="registerForm.email" placeholder="Eamil">
          <a-icon
            slot="prefix"
            type="mail"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="password">
        <a-input-password
          v-model="registerForm.password"
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

      <a-form-model-item prop="role">
        <a-input
          value="用户角色"
          style="width: 100%"
          disabled
        >
          <a-icon
            slot="prefix"
            type="question-circle"
            style="color: rgba(0, 0, 0, 0.25)"
          />
          <a-select
            slot="addonAfter"
            placeholder="Please select your role"
            @change="handleRoleChange"
            style="width: 275px;"
          >
            <a-select-option value="admin"> 管理员 </a-select-option>
            <a-select-option value="customer"> 商家 </a-select-option>
          </a-select>
        </a-input>
      </a-form-model-item>

      <a-form-model-item prop="code">
        <a-row :gutter="10">
          <a-col :span="17">
            <a-input v-model="registerForm.code" placeholder="请输入验证码" />
          </a-col>
          <a-col :span="6">
            <a-button @click="getCodeHandle('registerForm')"
              >获取验证码</a-button
            >
          </a-col>
        </a-row>
      </a-form-model-item>

      <a-form-model-item>
        <a-button
          type="primary"
          @click="submitForm('registerForm')"
          class="login-form-button"
        >
          立即注册
        </a-button>
        Or
        <router-link :to="{ name: 'Login' }"> Login now! </router-link>
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
      registerForm: {
        email: '',
        password: '',
        code: '',
        username: '',
        role: '',
      },
      rules: {
        email: [{ validator: checkEmail, trigger: 'change' }],
        password: [{ validator: validatePass, trigger: 'change' }],
        code: [{ required: true, message: '验证码不能为空' }],
        username: [{ required: true, message: '用户名不能为空' }],
        role: [{ required: true, message: '用户角色不能为空' }],
      },
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 3 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
    };
  },
  methods: {
    handleRoleChange(val) {
      this.registerForm.role = val;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api
            .register(this.registerForm)
            .then(() => {
              this.$message.success('注册成功！立即登录吧！');
              this.$router.push({
                name: 'Login',
              });
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
    getCodeHandle(formName) {
      this.$refs[formName].validateField('email', (valid) => {
        if (!valid) {
          api.getCode({ email: this.registerForm.email });
          return true;
        }
        return false;
      });
    },
  },
};
</script>
<style>
@import url("~@/assets/css/register.less");
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
