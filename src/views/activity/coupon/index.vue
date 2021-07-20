<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <!-- 新增 -->
      <div style="display: inline-block;margin: 0px 2px;">
        <el-button
          v-permission="['admin','YXSTORECOUPON_ALL','YXSTORECOUPON_CREATE']"
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="add"
        >新增</el-button>
      </div>
    </div>
    <!--表单组件-->
    <eForm ref="form" :is-add="isAdd" />
    <eIForm ref="form2" :is-add="isAdd" />
    <!--表格渲染-->
    <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
      <!--<el-table-column prop="id" label="ID"/>-->
      <el-table-column prop="title" label="优惠券名称" />
      <el-table-column prop="type" label="优惠券类型">
        <template slot-scope="scope">
          <div>
            <el-tag v-if="scope.row.type === 1" style="cursor: pointer" :type="''">商品券</el-tag>
            <el-tag v-else :type=" 'info' ">普通券</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="发送限制">
        <template slot-scope="scope">
          <div>
            <el-tag v-if="scope.row.getLimit === 0"  :type="'success'">全员发放</el-tag>
            <el-tag v-else-if="scope.row.getLimit === 1"  :type="'danger'">新用户</el-tag>
            <el-tag v-else :type="'info' ">特定人员</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="couponPrice" label="优惠券面值" />
      <el-table-column prop="useMinPrice" label="优惠券最低消费" />
      <el-table-column label="优惠券有效期限">
        <template slot-scope="scope">
          <span>{{ scope.row.couponTime }}天</span>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100" />
      <el-table-column label="状态" width="100" align="center">
        <template slot-scope="scope">
          <div>
            <el-tag v-if="scope.row.status === 1" style="cursor: pointer" :type="''">开启</el-tag>
            <el-tag v-else :type=" 'info' ">关闭</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="checkPermission(['admin','YXSTORECOUPON_ALL','YXSTORECOUPON_EDIT','YXSTORECOUPON_DELETE'])" width="200" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            v-permission="['admin','YXSTORECOUPON_ALL','YXSTORECOUPON_EDIT']"
            size="mini"
            type="primary"
            @click="edit2(scope.row)"
          >
            发布
          </el-button>
          <el-dropdown size="mini" split-button type="primary" trigger="click">
            操作
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button
                  v-permission="['admin','YXSTORECOUPON_ALL','YXSTORECOUPON_EDIT']"
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  @click="edit(scope.row)"
                >编辑</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-popover
                  :ref="scope.row.id"
                  v-permission="['admin','YXSTORECOUPON_ALL','YXSTORECOUPON_DELETE']"
                  placement="top"
                  width="180"
                >
                  <p>确定删除本条数据吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="$refs[scope.row.id].doClose()">取消</el-button>
                    <el-button :loading="delLoading" type="primary" size="mini" @click="subDelete(scope.row.id)">确定</el-button>
                  </div>
                  <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                </el-popover>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-pagination
      :total="total"
      :current-page="page + 1"
      style="margin-top: 8px;"
      layout="total, prev, pager, next, sizes"
      @size-change="sizeChange"
      @current-change="pageChange"
    />
    <el-dialog
      :visible.sync="visible"
      title="特定人员优惠券"
      v-if="visible"
      :width="'30%'"
      destroy-on-close
      append-to-body
    >
      <el-form :model="form" :rules="rules" ref="form" label-width="110px" :size="'mini'">
        <el-form-item label="优惠券名称">
          <el-input v-model="form.cname"  :disabled="true" />
        </el-form-item>
        <el-form-item label="发布数量">
          <el-input v-model="form.totalCount"  />
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="手机号码">
              <el-input v-model="form.starName" placeholder="名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button  :size="'mini'" type="success" @click="query" icon="el-icon-search">查询</el-button>
          </el-col>
        </el-row>
        <el-row :span="20">
          <div>
            <span class="font-small">选择人员</span>
          </div>
          <el-col :span="24">
            <el-table class="list-main" height="200px" :data="list" border size="mini" :highlight-current-row="true" @row-click="listClick" >
              <el-table-column
                v-for="(t,i) in columns"
                :key="i"
                align="center"
                :prop="t.name"
                :label="t.text"
                v-if="t.default!=undefined?t.default:true"
                :width="t.width?t.width:''"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <div style="margin-top: 20px">
          <span class="font-small">兑换码</span>
        </div>
        <el-row :span="20">
          <el-col :span="24" style="text-align: center">
            <el-image
              style="width: 100px; height: 100px"
              :src="furl"
              :preview-src-list="srcList">
            </el-image>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" style="text-align:center;padding-top: 15px">
        <el-button type="primary" @click="handleChange">生成二维码</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import checkPermission from '@/utils/permission'
import initData from '@/mixins/crud'
import { del } from '@/api/yxStoreCoupon'
import eForm from './form'
import eIForm from '../couponissue/form'
import { formatTime } from '@/utils/index'
import QRCode from 'qrcodejs2'
export default {
  components: { eForm, eIForm },
  mixins: [initData],
  data() {
    return {
      delLoading: false,
      visible: false,
      furl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      ],
      form: {
        starSex: null,
        starName: null, // 名称
        starProfile: null,
        starPhotoUrl: null,
      },
      list: [],
      checkData: {},
      columns: [
        {text: "名称", name: "starName"},
        {text: "手机号码", name: "roleType"},
      ],
      rules: {
        starName: [
          {required: true, message: '请输入值', trigger: 'blur'},
        ],starProfile: [
          {required: true, message: '请输入值', trigger: 'blur'},
        ],
        starSex: [
          {required: true, message: '请选择', trigger: 'change'}
        ],
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
    creatQrCode(element,val) {
      var deleteNode =document.getElementById(element).innerText ='';
      var qrcode = new QRCode(element, {
        text: val, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    handleChange(val) {
      let that = this
      this.multipleSelection = val;
      this.$nextTick(() => {
        this.multipleSelection.forEach((item,index)=>{
          that.creatQrCode('qrCode'+index,'https://cfzx.gzfzdev.com/groupTicket?exchangeCode='+item.memberCdkeyShare)
        })
      })
    },
    //查询
    query(){
      getStarList(this.qFilter()).then(res => {
        if (res.flag) {
          this.list2 = res.data
        }
      })
    },
    //列表表选中
    listClick(obj){
      this.checkData = obj
    },
    beforeInit() {
      this.url = 'mall/yxStoreCoupon'
      const sort = 'id,desc'
      this.params = { page: this.page, size: this.size, sort: sort, isDel: 0 }
      return true
    },
    subDelete(id) {
      this.delLoading = true
      del(id).then(res => {
        this.delLoading = false
        this.$refs[id].doClose()
        this.dleChangePage()
        this.init()
        this.$notify({
          title: '删除成功',
          type: 'success',
          duration: 2500
        })
      }).catch(err => {
        this.delLoading = false
        this.$refs[id].doClose()
        console.log(err.response.data.message)
      })
    },
    add() {
      this.isAdd = true
      this.$refs.form.dialog = true
    },
    edit(data) {
      this.isAdd = false
      const _this = this.$refs.form
      _this.form = {
        id: data.id,
        title: data.title,
        integral: data.integral,
        getLimit: data.getLimit,
        couponPrice: data.couponPrice,
        useMinPrice: data.useMinPrice,
        couponTime: data.couponTime,
        sort: data.sort,
        status: data.status,
        type: data.type,
        productId: data.productId,
        product: data.product
      }
      _this.dialog = true
    },
    edit2(data) {
      console.log(data)
      if(data.getLimit==2){
        this.visible = true
      }else{
        this.isAdd = true
        const _this = this.$refs.form2
        _this.form = {
          cid: data.id,
          cname: data.title,
          ctype: data.type,
          getLimit: data.getLimit,
          isPermanent: 0,
          status: 1,
          totalCount: 0,
          remainCount: 0,
          isDel: 0
        }
        _this.dialog = true
      }
    }
  }
}
</script>

<style scoped>

</style>
