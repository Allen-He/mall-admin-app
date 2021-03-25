<template>
  <div class="sale-detail">
    <a-form-model
      ref="SaleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="商品售价" prop="price" required>
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="商品折扣价" prop="price_off" required>
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" prop="inventory" required>
        <a-input v-model="form.inventory" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="unit" required>
        <a-input v-model="form.unit" />
      </a-form-model-item>
      <a-form-model-item label="计量单位" prop="images">
        <div class="clearfix">
          <a-upload
            :action="
              'https://mallapi.duyiedu.com/upload/images?appkey=' +
              $store.state.userInfo.appkey
            "
            name="avatar"
            list-type="picture-card"
            :file-list="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 8">
              <a-icon type="plus" />
              <div class="ant-upload-text">Upload</div>
            </div>
          </a-upload>
          <a-modal
            :visible="previewVisible"
            :footer="null"
            @cancel="handleCancel"
          >
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 12, offset: 4 }">
        <a-button style="margin-right: 10px" @click="$emit('prev')">
          上一步
        </a-button>
        <a-button type="primary" @click="onSubmit"> 提交 </a-button>
        <a-button style="margin-left: 10px" @click="resetForm"> 重置 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  props: {
    form: Object,
  },
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
      other: '',
      rules: {},
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  methods: {
    onSubmit() {
      this.$refs.SaleForm.validate((valid) => {
        if (valid) {
          this.$emit('next', this.form);
          return true;
        }
        console.log('error submit!!');
        return false;
      });
    },
    resetForm() {
      this.$refs.SaleForm.resetFields();
    },
    changeCategoryHandle(val) {
      const list = this.categoryList;
      for (let i = 0; i < list.length; i += 1) {
        if (list[i].id === val) {
          this.categoryCItems = list[i].c_items;
        }
      }
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const temp = file;
      if (!temp.url && !temp.preview) {
        temp.preview = await getBase64(temp.origintempObj);
      }
      this.previewImage = temp.url || temp.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') {
        this.form.images.push(file.response.data.url);
      } else if (file.status === 'removed') {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((it) => it !== url);
      }
      this.fileList = fileList;
    },
  },
  created() {
    // 初始化fileList
    this.fileList = this.form.images.map((imgUrl, index) => ({
      uid: index,
      name: `${index}.png`,
      status: 'done',
      url: imgUrl,
    }));
  },
};
</script>

<style lang="less" scoped>
.sale-detail {
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
