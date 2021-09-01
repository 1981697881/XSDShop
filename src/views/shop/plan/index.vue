<template>
  <div class="app-container" style="position: relative; height: calc(100vh - 117px);">
    <div class="container">
      <!--工具栏-->
      <div class="head-container">
        <el-button
          type="danger"
          class="filter-item"
          size="mini"
          icon="el-icon-refresh"
          @click="toQuery"
        >刷新
        </el-button>
      </div>
      <!--表单组件-->
      <ePrint ref="form5" :is-add="isAdd" :print-list="checkList" :to-query="toQuery"/>
      <!--表格渲染-->
      <el-table ref="multipleTable" v-loading="loading" :data="data" size="small" style="width: 100%;"
                @selection-change="handleSelectionChange">
        <el-table-column :selectable="checkboxT" type="selection" width="50"/>
        <el-table-column prop="orderId" label="主订单号"/>
        <el-table-column prop="expressBill" label="子订单号"/>
        <el-table-column prop="putPeopleName" label="配送员"/>
        <el-table-column prop="storeName" label="商品名称"/>
        <el-table-column prop="allCount" label="商品总数"/>
        <el-table-column prop="putCount" label="派送数量"/>
        <el-table-column prop="putDate" label="派送日期"/>
        <el-table-column prop="sku" label="商品规格"/>
        <el-table-column prop="unitName" label="单位"/>
        <el-table-column prop="realName" label="用户"/>
        <el-table-column prop="userPhone" label="用户手机"/>
      </el-table>
    </div>
    <!--添加订单打印及订单导出功能 2020.04.13 changxh-->
    <el-footer class="footer-contains">
      <div class="footer-search">
        <el-checkbox v-model="printChecked" @change="batchSelection" style="margin-right: 20px;"></el-checkbox>
        <el-select v-model="batchHandle" @change="handlePrintOption" clearable placeholder="批量操作" class="filter-item"
                   style="width: 130px; margin-right: 8px;">
          <el-option
            v-for="item in handleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="batchExport" @change="handleExportOption" clearable placeholder="批量导出" class="filter-item"
                   style="width: 130px">
          <el-option
            v-for="item in exportOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <!--分页组件-->
      <el-pagination
        :total="total"
        :current-page="page + 1"
        style="margin-top: 8px;"
        layout="total, prev, pager, next, sizes"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </el-footer>
  </div>
</template>

<script>
  import checkPermission from '@/utils/permission'
  import initData from '@/mixins/crud'
  import ePrint from './print'
  import {formatTime} from '@/utils/index'

  export default {
    components: { ePrint},
    mixins: [initData],
    data() {
      return {
        delLoading: false,
        status: '-9',
        orderType: '0',
        createTime: '',
        checkList: [],
        printChecked: false,
        batchHandle: '',
        batchExport: '',
        listContent: [],
        handleOptions: [
          {value: '', label: '批量操作'},
          {value: '0', label: '批量打印'},
        ],
        exportOptions: [
          {value: '', label: '批量导出'},
          {value: '0', label: '导出全部'},
          {value: '1', label: '导出选中'},
        ],
        caculateInfo: {
          orderNum: 0,
          storeNum: 0,
          orderPrice: 0,
          userNum: 0,
        },
      }
    },
    created() {
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      formatTime,
      checkPermission,
      beforeInit() {
        this.url = 'mall/getPojectOdForm'
        const sort = 'id,desc'
        this.params = {
          page: this.page,
          size: this.size,
          sort: sort,
          listContent: this.listContent
        }
        const query = this.query
        const type = query.type
        const value = query.value
        if (type && value) {
          this.params[type] = value
        }
        return true
      },
      clearCaculateInfo() {
        this.caculateInfo = {
          orderPrice: 0,
          storeNum: 0,
          orderNum: 0,
          userNum: 0,
        };
      },
      handleSelectionChange(val) {
        this.checkList = val;
        let orderPrice = 0, storeNum = 0, orderNum = 0, userNum = 0;
        if (val.length != 0) {
          this.printChecked = true;
          let user = [];
          val.forEach((item, index) => {
            orderNum += 1;
            orderPrice += item.totalPrice;
            storeNum += item.totalNum;
            user.push(item.userDTO.nickname);
          })
          user = Array.from(new Set(user));
          this.caculateInfo = {
            orderPrice: orderPrice.toFixed(2),
            storeNum: storeNum,
            orderNum: orderNum,
            userNum: user.length,
          };
        } else {
          this.printChecked = false;
          this.clearCaculateInfo();
          // this.getCaculateInfo();
        }
      },
      batchSelection(val) {
        let rows = this.data;
        if (val) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handlePrintOption(val) {
        switch (val) {
          case '0':
            this.getPrintList();
            this.batchHandle = '';
            break;
          default:
            break;
        }
      },
      handleExportOption(val) {
        let list = this.checkList;
        this.page = 0;
        this.size = 10000;
        switch (val) {
          case "0":
            this.listContent = "";
            this.beforeInit();
            this.downloadMethod();
            break;
          case "1":
            if (list.length == 0) {
              this.$message({
                message: '请选择订单',
                type: 'warning'
              });
            } else {
              this.listContent = [];
              list.forEach((item) => {
                this.listContent.push(item.orderId);
              })
              this.listContent = JSON.stringify(this.listContent);
              this.beforeInit();
              this.downloadMethod();
            }
            break;
          default:
            break;
        }
        this.batchExport = "";
      },
      getPrintList() {
        let list = this.checkList;
        if (list.length == 0) {
          this.$message({
            message: '请选择订单',
            type: 'warning'
          });
        } else {
          const _this = this.$refs.form5;
          _this.dialog = true
        }
      },
      checkboxT(row, rowIndex) {
        return row.id !== 1
      },
    }
  }
</script>

<style scoped lang="scss">
  .container {
    height: calc(100% - 80px);
    position: absolute;
    overflow: auto;
    width: calc(100% - 20px);

    .order-caculate {
      font-size: 14px;
      color: #909399;
      border-top: 1px solid #f0f0f0;
      padding: 20px 10px;

      .caculate-title {
        display: inline-block;
        margin-right: 50px;
      }

      .caculate-num {
        font-size: 20px;
        color: #ff4949;
      }
    }

    .el-table th {
      background-color: #fafafa;
    }
  }

  .footer-contains {
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    background-color: #f6f6f6;
    bottom: 0;
    flex-align: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 999;
    padding: 0 20px 0 13px;
  }

  /*打印单样式编辑*/
  .order-list {
    /*  height: 297mm;*/
    margin: 0 auto;
    width: 210mm;

    .order-title {
      height: 16mm;
      line-height: 16mm;
      font-size: 8mm;
      font-weight: bolder;
      text-align: center;
    }

    .order-info {
      span {
        display: inline-block;
        padding: 0 0 10px 0;
        font-size: 3mm;
      }

      span.info {
        width: 60mm;
      }
    }

    .el-table--small th, .el-table--small td {
      padding: 4px 0;
    }
  }
</style>
