<template>
  <div class="steps-wrap">
    <a-steps :current="current" class="steps-line">
      <a-step v-for="item in steps" :key="item.title" :title="item.title" />
    </a-steps>
    <div class="steps-content">
      <BasicDetail v-if="current === 0" @next="nextHandle" :form="formData" />
      <SaleDetail
        v-else-if="current === 1"
        @next="nextHandle"
        :form="formData"
        @prev="prevHandle"
      />
    </div>
  </div>
</template>

<script>
import BasicDetail from '@/components/BasicDetail.vue';
import SaleDetail from '@/components/SaleDetail.vue';
import productsApi from '@/api/products';

export default {
  components: {
    BasicDetail,
    SaleDetail,
  },
  data() {
    return {
      current: 0,
      steps: [
        {
          title: '填写商品基本信息',
        },
        {
          title: '填写商品销售信息',
        },
      ],
      formData: {
        title: '',
        desc: '',
        category: '',
        c_item: '',
        tags: [],
        price: 0,
        price_off: 0,
        unit: '',
        inventory: 0,
        images: [],
        status: 1,
      },
    };
  },
  methods: {
    nextHandle(val) {
      this.formData = {
        ...this.formData,
        ...val,
      };
      if (this.current === 1) {
        // 提交数据
        if (this.$route.params.id) {
          productsApi.edit(this.formData).then(() => { // 判断当前是否为“编辑商品”页面
            this.$message.success('修改成功！');
            this.$router.push({
              name: 'ProductsList',
            });
          });
        } else {
          productsApi.add(this.formData).then(() => {
            this.$message.success('新增成功！');
            this.$router.push({
              name: 'ProductsList',
            });
          });
        }
      } else {
        this.current += 1;
      }
    },
    prevHandle() {
      this.current -= 1;
    },
  },
  created() {
    if (this.$route.params.id) {
      // 如果是当前路由为动态路由，且参数id存在，则为编辑商品页面，需要做表单回填
      productsApi.lookup(this.$route.params.id).then((res) => {
        this.formData = res;
      });
    }
  },
};
</script>

<style lang="less" scoped>
.steps-wrap {
  padding: 20px 30px;

  .steps-line {
    width: 500px;
    height: 35px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
}
</style>
