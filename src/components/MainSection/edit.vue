<template>
  <div class="section">
    <el-form id="form" label-width="120px">
      <el-form-item
        v-for="(environment, key_sort) in form"
        :key="key_sort"
        :label="environment.key">
        <div
          v-for="(attribute) in environment.values"
          :key="attribute.value_sort"
          class="form-item__content">
          <el-input v-model="attribute.value" />
          <el-button icon="el-icon-folder-opened" @click="setAttribute(attribute)"></el-button>
          <el-button icon="el-icon-delete" @click="deleteAttribute(attribute)" ></el-button>
        </div>
        <el-card
                class="add-attribute"
                shadow="never"
                @click.native="addAttribute(key_sort)">
          <i class="el-icon-plus" />
        </el-card>
      </el-form-item>
      <el-card
        class="add-environment"
        shadow="never"
        @click.native="addEnvironment">
        <i class="el-icon-plus" />
        <div>add a item</div>
      </el-card>
    </el-form>
    <div class="footer">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
  
<script>

import * as db from "@/utils/db"
import { v4 as uuid } from "uuid"
import _ from "lodash"
export default {
  name: "MainSectionEdit",
  data(){
    return {
      form: []
    }
  },
  created() {
    // db.deleteEnvironment()
    // db.updateEnvironments()
    this.form = db.fetchEnvironments()
  },
  methods:{
    setAttribute(attribute){
      let attrs = this.$utools.showOpenDialog({
        properties: ['openDirectory'],
      })
      if(attrs != null) {
        console.log(this.form)
        this.$set(this.form[attribute.key_sort].values[attribute.value_sort], "value", attrs[0])
      }
    },
    addAttribute(key_sort){
      let last = _.last(this.form[key_sort].values)
      this.form[key_sort].values.push({
        _id: uuid(),
        key: last.key,
        value: '',
        key_sort: last.key_sort,
        value_sort: last.value_sort + 1,
      })
      console.log(this.form)
    },
    deleteAttribute(attribute){
      let attributes = this.form[attribute.key_sort]["values"]
      attributes.splice(attribute.value_sort, 1)
      if(attributes.length === 0) {
        let environments = this.form
        environments.splice(attribute.key_sort, 1)
        this.form = environments
      } else {
        this.$set(this.form[attribute.key_sort], "values", attributes)
      }
    },
    addEnvironment(){
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.form.push({
          key: value,
          values: [{
            _id: uuid(),
            key: value,
            value: '',
            key_sort: this.form.length,
            value_sort: 0,
          }]
        })
      }).catch();
      console.log('aaaaaaaaaaaa')
    },
    onSubmit(){
      db.updateEnvironments(this.form)
    }
  }
}
</script>
<style lang="scss" scoped>
  .section {
    #form{
      .form-item__content {
        display: flex;
        margin-bottom: 5px;
        :first-child {
          flex: 1;
        }
        :not(:first-child){
          margin-left: 5px;
          padding: 12px;
        }
      }
      .add-attribute {
        text-align: center;
        ::v-deep(.el-card__body) {
          padding: 0;
        }
        &:hover{
          cursor: pointer;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        }
      }
      .add-environment {
        text-align: center;
        &:hover{
          cursor: pointer;
          box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        }
      }
    }
  }
</style>