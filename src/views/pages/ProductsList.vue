<template>
  <div class="products-list">
    <Search
      @submit="submitHandle"
      :selectData="categoryList"
    />
    <a-button class="addBtn">
      <router-link :to="{ name: 'ProductsAdd' }">添加商品</router-link>
    </a-button>
    <ProductsTable
      :tableDate="tableDate"
      @editProduct="editProduct"
      @removeProduct="removeProduct"
      :pageConfig="pageConfig"
      @change="pageChange"
      @showSizeChange="pageSizeChange"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import ProductsTable from '@/components/ProductsTable.vue';
import categoryApi from '@/api/category';
import productsApi from '@/api/products';

export default {
  components: {
    Search,
    ProductsTable,
  },
  data() {
    return {
      searchForm: {}, // 用户输入的搜索关键词列表
      categoryList: [], // 类目列表
      tableDate: [], // 表格所需的全部数据
      pageConfig: {
        pageSizeOptions: ['10', '20', '30'],
        current: 1,
        pageSize: 10,
        total: 0,
        showSizeChanger: true,
      },
    };
  },
  methods: {
    submitHandle(val) {
      this.searchForm = { ...val };
      this.getTableData();
    },
    getTableData() {
      productsApi.list({
        page: this.pageConfig.current,
        size: this.pageConfig.pageSize,
        ...this.searchForm,
      }).then((res) => {
        this.pageConfig.total = res.total; // 配置总数据条数
        this.tableDate = res.data.map((item) => ({
          ...item,
          categoryName: this.categoryList[item.category - 1].name,
        }));
      });
    },
    editProduct(record) {
      this.$router.push({
        name: 'ProductEdit',
        params: {
          id: record.id,
        },
      });
    },
    removeProduct(record) {
      console.log(record);
      this.$confirm({
        title: '注意',
        content: () => <div>确定要删除标题为"{ record.title }"的商品吗？</div>,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: () => {
          productsApi.remove({ id: record.id }).then(() => {
            this.getTableData();
          });
        },
        onCancel() {
          return false;
        },
      });
    },
    pageChange(page) {
      this.pageConfig = page;
      this.getTableData();
    },
    pageSizeChange(current, size) {
      this.pageConfig.pageSize = size;
    },
  },
  created() {
    categoryApi.list().then((res) => {
      this.categoryList = res.data;
    });
    this.getTableData();
  },
};
</script>

<style lang="less" scoped>
.products-list {
  padding: 10px 30px;
  position: relative;

  .addBtn {
    position: absolute;
    right: 30px;
    top: 15px;
  }
}
</style>
