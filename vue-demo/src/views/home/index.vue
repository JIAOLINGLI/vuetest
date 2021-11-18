<template>
  <div class="banner">
    <img src="@/assets/a2.jpg" alt="" width="100%" />
    <div class="oneList">
      <div
        class="center"
        style=" display: flex;
            justify-content: space-between;"
      >
        <div class="onelist-left">
          <h1 class="list-wr">RELAXED</h1>
          <img :src="oneList.img" class="onelist-pho" />
        </div>
        <div class="oneList-right">
          <p class="zjsvr">{{ oneList.title }}</p>
          <ul>
            <li
              class="banner-txt"
              v-for="(item, idx) in oneList.list"
              :key="idx"
            >
              <p class="rhombus"></p>
              <p class="in4">{{ item.title }}</p>
              <p class="col-5 in5">{{ item.des }}</p>
            </li>
          </ul>
          <button class="banner-btn">免费使用</button>
        </div>
      </div>
    </div>
    <div class="oneList in7">
      <div
        class="center"
        style="display: flex;
                justify-content: space-between;"
      >
        <div class="oneList-right">
          <p class="in8">更便捷进销存管理</p>
          <div class="banner-txt" v-for="(item, idx) in list2" :key="idx">
            <p class="linxing"></p>
            <p class="in9">{{ item.title }}</p>
            <p class="in10">
              {{ item.des }}
            </p>
          </div>

          <div class="onelist-left in11">
            <img src="@/assets/a4.jpg" style="margin-top: 180px;" />
          </div>
          <button class="banner-btn" style="margin-top: 140px;">
            免费使用
          </button>
        </div>
      </div>
    </div>
    <div class="oneList h-self">
      <div class="center" style="display: flex;justify-content: space-between;">
        <div class="onelist-left">
          <h1 class="in12"></h1>
          <img src="@/assets/a5.jpg" />
        </div>
        <div class="oneList-right">
          <p class="in12">更智能Amazon运营</p>
          <div class="banner-txt" v-for="(item, idx) in list3" :key="idx">
            <p class="rhombus maing-t30"></p>
            <p class="in4">{{ item.title }}</p>
            <p class="in13">
              {{ item.des }}
            </p>
          </div>
          <button class="banner-btn">免费使用</button>
        </div>
      </div>
    </div>

    <div class="oneList in14">
      <div class="center" style="display: flex;justify-content: space-between;">
        <div class="oneList-right">
          <p class="in8">更实用财务管理</p>

          <div class="banner-txt" v-for="(item, idx) in list4" :key="idx">
            <p class="linxing"></p>
            <p class="in9">{{ item.title }}</p>
            <p class="in10">
              {{ item.des }}
            </p>
          </div>
          <div class="onelist-left in11">
            <img src="../../assets/a6.jpg" style="margin-top: 180px;" />
          </div>
          <button class="banner-btn" style="margin-top: 140px;">
            免费使用
          </button>
        </div>
      </div>
    </div>
    <div class="banner-4">
      <div class="center">
        <div class="banner-4s">
          <div class="banner-txt1" v-for="(item, idx) in list5" :key="idx">
            <img :src="item.imgUrl" class="maing-l120" />
            <p class="in15">{{ item.title }}</p>
            <p class="in16">
              {{ item.des }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div
        class="center"
        style=" display: flex;
        justify-content: space-between;"
      >
        <div class="footer-1">
          <p>联系我们:</p>
          <p class="ff1">
            <img src="@/assets/a15.jpg" class="ff2" />3270288655
          </p>
          <p class="ff1">
            <img src="@/assets/a16.jpg" class="ff2" />13728754631
          </p>
        </div>
        <div class="footer-2">
          <p>深圳市海量信息科技有限公司</p>
          <p class="ff3">Copyright © 2018</p>
          <p class="ff4">深圳市海量信息技术有限公司</p>
          <p class="ff4">粤ICP备18077198号-1</p>
        </div>
        <div class="footer-3">
          <div>
            <p>联系邮箱：</p>
            <p class="ff4">hailiang-erp@foxmail.com</p>
            <p class="ff5">公司地址：</p>
            <p class="ff4">深圳市宝安区宝源路1009号 互联网产业基地A区5栋B606</p>
          </div>
          <div>
            <p>二维码：</p>
            <img src="@/assets/a13.jpg" class="maing-t20" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      oneList: {
        img: require("@/assets/a3.jpg"),
        title: "专注服务Amazon跨境卖家",
        list: [
          {
            title: "管理系统化",
            des: "一站式解决卖家全业务难题，系统化管理"
          },
          {
            title: "业务流程化",
            des: "业务流转有固定流程，避免无规则混乱"
          },
          {
            title: "处理自动化",
            des: "自定义规则、智能化预警等自动化处理"
          },
          {
            title: "利益最大化",
            des: "多渠道开源节流，帮助实现公司盈利"
          }
        ]
      },
      list2: [
        {
          title: "基础资料更详实",
          des:
            "满足商品关联报价信息、供应商合同信息等多项资料录入，且一次录入，全系统通用"
        },
        {
          title: "采购备货更智能",
          des:
            "多规则设置安全库存，智能生成采购单，降低库存占用资金，备货更理性"
        },
        {
          title: "商品库存更清晰",
          des:
            "通过商品关联，实现FBA库存与内部库存的统一，满足各维度的商品库存查询"
        },
        {
          title: "采购跟踪更便捷",
          des:
            "下单、入库、退货、付款等信息单个页面即可查看；并专为供应商设置往来记录、对账单等页面"
        }
      ],
      list3: [
        {
          title: "客户管理体系化",
          des:
            "通过订单、评价等历史记录让用户表现更清晰，并借助客户标签帮助建立用户体系，提升服务质量"
        },
        {
          title: "邮件收发更智能",
          des:
            "   多店铺邮件一站式管理，支持多个邮件模版以及推送规则，发送邮件更快速"
        },
        {
          title: "评论处理更及时",
          des:
            "发现差评，快速提醒，并关联到用户订单，客服处理更快速，大大降低差评影响"
        },
        {
          title: "广告管理更省心",
          des:
            "广告定时自动开关，异常预警，降低广告费用；关键词优化，提升广告业绩"
        },
        {
          title: "订单查看更清晰",
          des:
            " 深度对接Amazon系统，快速查看订单商品以及业绩信息，销售业绩判定更快速"
        }
      ],
      list4: [
        {
          title: "多项成本精准计算",
          des:
            " 移动加权平均法计算产品成本，近30项成本精确计算，一键导出，细化到店铺-产品，产品表现一目了然"
        },
        {
          title: "财务软件功能替代",
          des:
            "通过业务订单一键生成凭证，账簿报表齐全，快速出账，替代并优于财务软件"
        },
        {
          title: "专注跨境电商业务",
          des:
            "支持多店铺-多品类-多帐套财务需求；支持多国家币种业务数据处理，满足跨境电商业务需求"
        },
        {
          title: "真正关注公司运作",
          des:
            "在原有财务报表的基础上，更增加公司资产报表、经营报表等实用报表，帮助确认公司运作经营情况"
        }
      ],
      list5: [
        {
          imgUrl: require("../../assets/a7.jpg"),
          title: "直击痛点",
          des:
            "  功能设置直击用户痛点：费用利润细化到店铺产品&nbsp;资产报表当天即可出具；人员业绩实时更新"
        },
        {
          imgUrl: require("../../assets/a8.jpg"),
          title: "业财合一",
          des:
            " 常用功能无需更换系统：业务、财务、管理等&nbsp;多模块数据自动同步；原始数据快速反查"
        },
        {
          imgUrl: require("../../assets/a9.jpg"),
          title: "数据精准",
          des: " 基础数据来源精准、业务数据计算精准 系统数据相互校对精准"
        },
        {
          imgUrl: require("../../assets/a10.jpg"),
          title: "专注盈利",
          des:
            "开源节流提升企业竞争力：规范化流程控制成本&nbsp;高质量运营提升业绩，助力卖家轻松盈利。"
        },
        {
          imgUrl: require("../../assets/a11.jpg"),
          title: "深度对接",
          des:
            "深度对接亚马逊打造企业精品路线&nbsp;库存广告等深度对接Amazon，助力企业打造精品路线"
        },
        {
          imgUrl: require("../../assets/a12.jpg"),
          title: "灵活部署",
          des:
            "  独立部署&云平台满足企业所需：多种部署方式&nbsp;根据企业需求自动选择，满足企业发展所需。"
        }
      ]
    };
  },
  mounted() {
    // var urls = require("@/components/imgList.json");
    // console.log(urls);
    // this.list = urls.data;
    //			this.$axios.get('./components/imgList.json','').then(res=>{
    //				console.log(res)
    //			})
  },
  create() {}
};
</script>
<style scoped>
/*.time:hover{
		transform: scale(.5);
		font-size:33px;
		transition: .5s linear all;
	}*/
.banner{
  width: 100%;
  height: 100%;

  }

.oneList {
  width: 100%;
  height: 490px;
  margin-top: 60px;
}
.list-wr {
  font-size: 60px;
  color: rgb(235, 232, 204);
}
.onelist-left {
  width: 50%;
  height: 490px;
}
.onelist-pho {
  position: absolute;
  margin-top: -30px;
}
.center {
  width: 1200px;
  margin: 0 auto;
  border: 1px solid transparent;
}

.h-self {
  height: 610px !important;
}

.onelist-left img {
  position: absolute;
  margin-top: -30px;
}
.oneList-right {
  width: 50%;
  height: 490px;
}
.rhombus {
  width: 10px;
  height: 10px;

  background: blue;
  margin-left: 120px;
  margin-top: 45px;
}
.linxing {
  width: 10px;
  height: 10px;

  background: blue;
  margin-top: 45px;
}
.banner-btn {
  border-radius: 6px;
  width: 160px;
  height: 50px;
  background: rgb(0, 101, 250);
  color: rgb(255, 255, 255);
  border: 1px white;
  margin-left: 120px;
  margin-top: 20px;
}
.banner-4 {
 
  display: flex;

  align-content: center;
  width: 100%;
  height: 700px;
}
.banner-4s {
  border: 1px solid white;
  height: 340px;
  width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.banner-5 {
  border: 1px solid white;
  height: 336px;
  width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
}

.footer {
  width: 100%;
  height: 260px;
  background: rgb(19, 26, 34);
}
.footer-1 {
  color: rgb(255, 255, 255);
  margin-top: 70px;
  width: 175px;
  height: 105px;
  background: rgb(19, 26, 34);
  border-right: 1px dashed rgb(255, 255, 255);
}
.footer-2 {
  color: rgb(255, 255, 255);
  margin-top: 70px;
  width: 305px;
  height: 105px;
  background: rgb(19, 26, 34);
  border-right: 1px dashed rgb(255, 255, 255);
}
.footer-3 {
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  width: 530px;
  height: 105px;
  background: rgb(19, 26, 34);
}
.banner-txt1 {
  margin-top: 50px;
  font-size: 14px;
  width: 30%;
  height: 300px;
}

.in1 {
  width: 27px;
  height: 27px;
  margin-top: 20px;
  margin-left: 10px;
}
.in2 {
  float: right;
  margin-top: 55px;
  margin-left: -25px;
  font-size: 10px;
  color: #8665e2;
}

.zjsvr {
  font-size: 40px;
  text-align: right;
  margin-top: 10px;
}
.in4 {
  font-size: 20px;
  margin-left: 135px;
  margin-top: -20px;
}
.in5 {
  font-size: 14px;
  margin-left: 120px;
}
.list-wr {
  font-size: 60px;
  color: rgb(235, 232, 204);
}
.in7 {
  background: rgb(241, 245, 258);
  height: 610px;
}
.in8 {
  font-size: 40px;
  text-align: left;
  margin-top: 100px;
}

.in9 {
  font-size: 20px;
  margin-left: 15px;
  margin-top: -20px;
}
.in10 {
  font-size: 14px;
  margin-left: 0px;
  color: rgb(170, 170, 170);
}
.in11 {
  margin-left: 600px;
  margin-top: -600px;
}
.in12 {
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
}
.in13 {
  font-size: 14px;
  margin-left: 120px;
  color: rgb(170, 170, 170);
}

.in14 {
  background: rgb(241, 245, 258);
  height: 650px;
}
.in15 {
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
}
.in16 {
  margin-top: 20px;
  text-align: center;
  color: rgb(170, 170, 170);
}
</style>
