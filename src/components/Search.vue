<template>
  <a-form-model
    layout="inline"
    :model="searchForm"
    @submit="handleSubmit"
    @submit.native.prevent
  >
    <a-form-model-item>
      <a-input v-model="searchForm.searchWord" placeholder="请输入产品关键词">
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-select
        allowClear
        show-search
        placeholder="请选择产品类目"
        option-filter-prop="children"
        style="width: 200px"
        :filter-option="filterOption"
        @change="handleChange"
      >
        <a-select-option
            v-for="item in selectData"
            :key="item.id"
            :value="item.id"
        >
            {{ item.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit"> 搜索 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  props: {
    selectData: Array, // 渲染类目选择列表所需要的数组数据
  },
  data() {
    return {
      searchForm: {
        searchWord: '',
        category: '',
      },
    };
  },
  methods: {
    // 提交表单时触发的事件函数
    handleSubmit() {
      this.$emit('submit', this.searchForm);
    },
    // 选择类目时触发的事件函数
    handleChange(value) {
      this.searchForm.category = value;
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
