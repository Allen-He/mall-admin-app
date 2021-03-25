<template>
  <a-form-model
    ref="BasicForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-model-item label="标题" prop="title" required>
      <a-input v-model="form.title" />
    </a-form-model-item>
    <a-form-model-item label="商品描述" prop="desc">
      <a-input v-model="form.desc" />
    </a-form-model-item>
    <a-form-model-item label="商品类目" prop="category" required>
      <a-select
        v-model="form.category"
        placeholder="请选择相应的商品类目"
        @change="changeCategoryHandle"
      >
        <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">
          {{ c.name }}
        </a-select-option>
      </a-select>
      <a-select v-model="form.c_item" placeholder="请选择相应的子类目">
        <a-select-option
          v-for="item in categoryCItems"
          :key="item"
          :value="item"
        >
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item label="标签" prop="tags">
      <a-select
        mode="tags"
        placeholder="请选择或自定义标签"
        :default-value="['包邮、最晚次日达']"
        v-model="form.tags"
      >
        <a-select-option value="包邮、最晚次日达">
          包邮、最晚次日达
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 17, offset: 4 }">
      <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm"> 重置 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import categoryApi from '@/api/category';

export default {
  props: {
    form: Object,
  },
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
      other: '',
      categoryList: [], // 商品类目列表
      categoryCItems: [], // 商品子类目列表
      rules: {},
    };
  },
  methods: {
    onSubmit() {
      this.$refs.BasicForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm() {
      this.$refs.BasicForm.resetFields();
    },
    changeCategoryHandle(val) {
      const list = this.categoryList;
      for (let i = 0; i < list.length; i += 1) {
        if (list[i].id === val) {
          this.categoryCItems = list[i].c_items;
        }
      }
    },
  },
  created() {
    categoryApi.list().then((res) => {
      this.categoryList = res.data;
    });
  },
};
</script>
