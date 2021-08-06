<template>
  <el-dialog :append-to-body="true" :close-on-click-modal="false" :before-close="cancel" :visible.sync="dialog" :title="isAdd ? '新增' : '编辑'" width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="140px">
      <el-form-item label="分类名称">
        <el-input v-model="form.name" style="width: 300px;" />
      </el-form-item>
     <!-- <el-form-item label="跳转url">
        <el-input v-model="form.url" style="width: 300px;" />
      </el-form-item>-->
      <!--<el-form-item label="内部链接">
        <el-input v-model="form.uniapp_url" style="width: 300px;" />
      </el-form-item>-->
      <el-form-item :label="'内部链接'">
        <el-select v-model="form.uniapp_url" class="width-full" placeholder="请选择">
          <el-option :label="t[0]" :value="t[1]" v-for="(t,i) in levelFormat" :key="i"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类图标(90*90)">
        <MaterialList v-model="form.imageArr" style="width: 300px" type="image" :num="1" :width="150" :height="150" />
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
import MaterialList from '@/components/material'
export default {
  components: { picUpload, MaterialList },
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
        groupName: 'yshop_home_menus',
        name: '',
        url: '',
        wxapp_url: '',
        uniapp_url: '',
        pic: '',
        imageArr: [],
        sort: 0,
        status: 1
      },
      levelFormat: [
        ['全部商品', '/pages/shop/GoodsList/index?type=1'],
        ['心水达首页', '/pages/delivery/index/index'],
        ['我的快递', '/pages/delivery/my-courier/my-courier'],
        ['我要寄件', '/pages/delivery/send-delivery/send-delivery'],
        ['我的寄件', '/pages/delivery/my-delivery/my-delivery '],
        ['鲜奶到家', '/pages/shop/GoodsList/index?type=2'],
        ['30分钟达', '/pages/shop/JSD/menu'],
        ['优惠券', '/pages/user/coupon/GetCoupon/index'],
        ['拼团专区', '/pages/activity/GoodsGroup/index'],
        ['砍价专区', '/pages/activity/GoodsBargain/index'],
        ['秒杀专区', '/pages/activity/GoodsSeckill/index'],
        ['满减专区', '/pages/activity/fullReduction/list'],
        ['积分商城', '/pages/shop/GoodsList/index?title=积分商城&isIntegral=true&type=0']],
      rules: {

      }
    }
  },
  watch: {
    'form.imageArr': function(val) {
      if (val) {
        this.form.pic = val.join(',')
      }
    }
  },
  methods: {
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
        groupName: 'yshop_home_menus',
        name: '',
        url: '',
        wxapp_url: '',
        uniapp_url: '',
        pic: '',
        imageArr: [],
        sort: 0,
        status: 1
      }
    }
  }
}
</script>

<style scoped>

</style>
