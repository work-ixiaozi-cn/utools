<template>
  <div>
    <el-menu 
      :default-active="current" 
      class="menu" 
      @select="handleSelect" :collapse="false">
      <el-menu-item
        v-for="item in top"
        :key="item.key"
        :index="item.key">
        <i class="el-icon-star-on" />
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-menu-item-group>
        <div slot="title">
          <el-row class="title">
            <el-col :span="16">
              <span>选择</span>
            </el-col>
            <el-col :span="8">
              <el-button size="mini" icon="el-icon-plus" circle />
            </el-col>
          </el-row>
        </div>
        <el-menu-item
          v-for="item in diy"
          :key="item.key"
          :index="item.key"
          @dblclick.native="itemToggled(item)">
          <div slot="title">
            <el-row class="title">
              <el-col :span="20">
                <i class="el-icon-check" v-if="item.checked" />
                <span>{{ item.label }}</span>
              </el-col>
              <el-col :span="4">
                <el-button class="delete-button" size="mini" icon="el-icon-delete" circle />
              </el-col>
            </el-row>
          </div>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <div slot="title">
          <el-row class="title">
            <el-col :span="16">
              版本切换
            </el-col>
            <el-col :span="8">
              <el-button size="mini" icon="el-icon-plus" circle />
            </el-col>
          </el-row>
        </div>
        <el-menu-item
          v-for="item in version"
          :key="item.key"
          :index="item.key"
          @dblclick.native="itemSelected(item)">
          <div slot="title">
            <el-row class="title">
              <el-col :span="20">
                <i class="el-icon-check" v-if="item.checked" />
                <span>{{ item.label }}</span>
              </el-col>
              <el-col :span="4">
                <el-button class="delete-button" size="mini" icon="el-icon-delete" circle />
              </el-col>
            </el-row>
          </div>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
    <div>
      
    </div>
  </div>
</template>

<script>
  import _ from "lodash"
  export default {
    name: "LeftAside",
    data(){
      return {
        current: 'system',
        top: [
          {
            key: 'system',
            label: '当前系统',
          },
          {
            key: 'default',
            label: '系统默认',
          }
        ],
        diy: [
          {
            key: 'system',
            label: '系统',
            checked: false,
          },
          {
            key: 'default',
            label: '默认',
            checked: false,
          }
        ],
        version: [
          {
            key: 'node',
            label: 'Node.JS',
            checked: false,
          }
        ],
      }
    },
    methods:{
      handleSelect(){

      },
      itemToggled(item){
        this.diy.forEach((value, index) => {
          value.checked = value.key === item.key ? !value.checked : false
          this.$set(this.diy, index, value)
        })
      },
      itemSelected(item){
        const index = this.version.indexOf(item)
        item.checked = !item.checked
        this.$set(this.version, index, item)
      }
    }
  }
</script>
<style lang="scss" scoped>
.menu {
  background-color: rgba(255,255,255, 0);
  .title {
    display: flex;
    align-items: center;
  }
  .delete-button ::v-deep([class^=el-icon-]){
    margin-right: inherit;
    width: inherit;
    text-align: inherit;
    font-size: inherit;
    vertical-align: inherit;
  }

}
</style>