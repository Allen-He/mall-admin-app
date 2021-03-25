<template>
  <div class="products-table" style="margin-top: 15px">
    <a-table
      :columns="columns"
      :data-source="tableDateRender"
      :pagination="pageConfig"
      @change="pageChange"
      @showSizeChange="pageSizeChange"
    >
      <div slot="operation" slot-scope="text, record">
        <a-button @click="editProduct(record)">编辑</a-button>
        <a-button
          @click="removeProduct(record)"
          style="margin-left: 5px"
        >
          删除
        </a-button
        >
      </div>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'categoryName',
    key: 'category',
    ellipsis: true,
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
    ellipsis: true,
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: '上加状态',
    dataIndex: 'status',
    key: 'status',
    customRender(text, record) {
      return record.status === 0 ? '下架' : '上架';
    },
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 200,
    scopedSlots: { customRender: 'operation' },
  },
];

export default {
  props: {
    tableDate: Array, // 表格渲染所需要得源数据
    pageConfig: Object, // 接收分页组件需要的数据
  },
  data() {
    return {
      columns,
    };
  },
  computed: {
    tableDateRender() {
      return this.tableDate.map((it) => ({
        ...it,
        key: it.id,
      }));
    },
  },
  methods: {
    editProduct(record) {
      this.$emit('editProduct', record);
    },
    removeProduct(record) {
      this.$emit('removeProduct', record);
    },
    pageChange(page) {
      this.$emit('change', page);
    },
    pageSizeChange(current, size) {
      this.$emit('showSizeChange', size);
    },
  },
};
</script>
