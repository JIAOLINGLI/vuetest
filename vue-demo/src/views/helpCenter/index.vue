<template>
  <div class="help-body">
    <div class="center hh3">
      <div class="help-body1">
        <p
          v-for="(item, idx) in list1"
          :key="idx"
          @click="getNavName(item.title)"
        >
          <img :src="item.imgUrl" />
          <span>{{ item.title }}</span>
        </p>

        <p class="ing-25" @click="getNavName('1 基础信息维护')">
          1 基础信息维护
        </p>
        <p
          class="ing-35"
          v-for="item in firstChildren"
          :key="item"
          @click="getNavName(item)"
        >
          <a class="a-none">{{ item }}</a>
        </p>
        <p
          class="ing-1"
          v-for="item in menuList"
          :key="item.id"
          @click="getNavName(item.title)"
        >
          {{ item.title }}
        </p>
      </div>

      <contentbox :title="title" :lis="lis"></contentbox>
    </div>
  </div>
</template>

<script>
import contentbox from "./components/content.vue";
export default {
  components: {
    contentbox
  },
  data() {
    return {
      list1: [
        {
          imgUrl: require("@/assets/5.png"),
          title: "海量ERP介绍"
        },
        {
          imgUrl: require("@/assets/6.png"),
          title: "新人教程"
        },
        {
          imgUrl: require("@/assets/7.png"),
          title: "使用帮助"
        }
      ],
      menuList: [
        {
          title: "2 供应链相关功能",
          id: 4
        },
        {
          title: "3 运营/销售相关",
          id: 43
        },
        {
          title: "4 财务业务模块相关功能",
          id: 432
        },
        {
          title: "5 财务会计模块相关功能",
          id: 6
        },
        {
          title: " 6 公司整体经营情况",
          id: 90
        }
      ],
      firstChildren: [
        "1.1 创建系统角色",
        "1.2 创建系统用户",
        "1.3 店铺MWS授权"
      ],
      lis: [
        "只能管理自己权限以下的角色",
        "只能为下级角色授予自己所属角色的权限"
      ],
      title: "海量ERP介绍"
    };
  },
  methods: {
    getNavName(val) {
      this.title = val;
      console.log(val);
    }
  },

  mounted() {},
  create() {}
};
</script>
<style>
.home {
  width: 100%;
  height: 100%;
}
.header-all {
  display: flex;
  justify-content: space-between;
}

.help-body {
  width: 100%;
  background: rgb(246, 246, 246);
}
.help-body1 {
  width: 260px;
  height: 600px;
  background: rgb(255, 255, 255);
  border: 1px solid white;
  flex-shrink: 0;
}
.help-body1 p {
  height: 33px;

  line-height: 33px;
  padding-left: 20px;
  margin: 10px 0;
}
.hh1 {
  width: 27px;
  height: 27px;
  margin-top: 20px;
  margin-left: 10px;
}
.help-body2 {
  width: calc(100% - 260px);
  height: 1120px;
  margin-left: 20px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
}
.help-body2s {
  width: 100%;
  height: 725px;
  border-top: 1px dashed rgb(194, 194, 194);
}

.ing-t20 {
  padding: 30px 40px;
}
.ing-t20 li {
  line-height: 30px;
  margin: 5px 0;
}
.hh2 {
  float: right;
  margin-top: 55px;
  margin-left: -25px;
  font-size: 10px;
  color: #8665e2;
}

.hh3 {
  margin-top: 20px;
  background: rgb(246, 246, 246);
  display: flex;
  justify-content: space-between;
}
.hh4 {
  font-size: 24px;
  line-height: 60px;
  padding-left: 40px;
  height: 60px;
}
.js1 {
  text-align: center;
  width: 865px;
  height: 335px;
}
.js2 {
  text-align: center;
  width: 865px;
  height: 515px;
  padding-top: 30px;
}
</style>
