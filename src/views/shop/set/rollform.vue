<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="140px">
      <el-form-item label="滚动文字">
        <el-input v-model="form.info" style="width: 300px;" />
      </el-form-item>
     <!-- <el-form-item label="跳转url">
        <el-input v-model="form.url" style="width: 300px;" />
      </el-form-item>-->
     <!-- <el-form-item label="类型">
        <el-radio v-model="form.status" :label="1">内部url</el-radio>
        <el-radio v-model="form.status" :label="0">商品</el-radio>
        <el-radio v-model="form.status" :label="0">外部url</el-radio>
      </el-form-item>
      <el-form-item label="选择商品" >
        <cgood v-model="form.product" @selectGoods="getGoods"></cgood>
      </el-form-item>-->
      <!--<el-form-item label="内部链接">
        <el-input v-model="form.uniapp_url" style="width: 300px;" />
      </el-form-item>-->
      <el-form-item :label="'内部链接'">
        <el-select v-model="form.uniapp_url" class="width-full" placeholder="请选择">
          <el-option :label="t[0]" :value="t[1]" v-for="(t,i) in levelFormat" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="form.sort" style="width: 300px;" />
      </el-form-item>
      <el-form-item label="是否显示">
        <el-radio v-model="form.status" :label="1">是</el-radio>
        <el-radio v-model="form.status" :label="0" style="width: 200px;">否</el-radio>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <!--<el-input v-model="form.groupName" />-->
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { add, edit } from '@/api/yxSystemGroupData'
import picUpload from '@/components/pic-upload'
import cgood from '@/views/components/goods'
export default {
  components: { picUpload ,cgood},
  props: {
    isAdd: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: false, dialog: false,
      form: {
        id: '',
        groupName: 'yshop_home_roll_news',
        info: '',
        wxapp_url: '',
        uniapp_url: '',
        url: '',
        sort: 0,
        status: 1
      },
      levelFormat: [
        ['图片列表', '/pages/shop/news/NewsList/index'],
        ['我的快递', '/pages/delivery/my-courier/my-courier'],
        ['我要寄件', '/pages/delivery/send-delivery/send-delivery'],
        ['我的寄件', '/pages/delivery/my-delivery/my-delivery '],
        ['优惠券', '/pages/user/coupon/UserCoupon/index'],
        ['拼团专区', '/pages/activity/GoodsGroup/index'],
        ['砍价专区', '/pages/activity/GoodsBargain/index'],
        ['秒杀专区', '/pages/activity/GoodsSeckill/index'],
        ['满减专区', '/pages/activity/fullReduction/list'],
        ['积分商城', '/pages/shop/GoodsList/index?title=积分商城&isIntegral=true&type=0'],
        ['积分签到', '/pages/user/signIn/Sign/index'],
        ['预售配送', '/pages/order/Distribution/index'],
        ['会员中心', '/pages/user/UserVip/index'],
        ['我的推广', '/pages/user/promotion/UserPromotion/index'],
      ],
      rules: {
      }
    }
  },
  watch: {
    "form.product":function(val){
      if(val){
        this.getGoods(val)
      }
    }
  },
  methods: {
    getGoods(p) {
      var ids = []
      p.forEach((item,index) => {
        ids.push(item.id)
      })
      this.form.productId = ids.join(",")
    },
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      this.loading = true
      if (this.isAdd) {
        this.doAdd()
      } else this.doEdit()
    },
    doAdd() {
      add(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '添加成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    doEdit() {
      edit(this.form).then(res => {
        this.resetForm()
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.$parent.init()
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: '',
        groupName: 'yshop_home_roll_news',
        info: '',
        wxapp_url: '',
        uniapp_url: '',
        url: '',
        sort: 0,
        status: 1
      }
    }
  }
}
</script>

<style scoped>

</style>
