<template>
  <div class="box">
    <div
      @mouseenter="mmove"
      @mousemove="mmove"
      @mouseleave="mmove"
      class="left"
      :style="{ width: width, height: height }"
    >
      <img :src="props.imgs[active].beforeImg" class="front" />
      <div
        class="back ani"
        :key="active"
        :style="{
          backgroundImage: `url(${props.imgs[active].afterImg})`,
          backgroundSize: width + ' ' + height,
          width: imgw,
        }"
      >
        <span class="right-arrow-box">
          <i class="right-arrow1"></i>
          <i class="right-arrow2"></i>
        </span>
      </div>
    </div>
    <div class="right" :style="{ height: height }">
      <ul class="check-box">
        <li
          v-for="(item, index) in props.imgs"
          :key="index"
          :class="{ active: active === index }"
          @click="clickRightItem(index)"
        >
          <span
            class="img"
            :style="{ backgroundImage: `url(${item.beforeImg})` }"
          ></span>
          <span class="title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MousePic',
  props: {
    imgs: Array,
    width: {
      type: [Number, String],
      default: 600,
    },
    height: {
      type: [Number, String],
      default: 350,
    },
  },
  data() {
    return {
      imgw: '50%',
      active: 0,
      gwidth: this.getSize().width,
      gheight: this.getSize().height
    }
  },
  methods: {
    clickRightItem(index) {
      active.value = index;
      imgw.value = "50%";
    },
    mmove(e) {
      let mwidth = e.offsetX;
      const nwidth = this.gwidth.replace('px','');
      if(e.offsetX >= nwidth) {
        mwidth = nwidth;
      };

      if(e.offsetX < 0) {
        mwidth = 0;
      };

      this.imgw = mwidth + "px";
    },
    getSize() {
      let  width, height;
      if (typeof this.width === "number") {
        width = this.width + "px";
      } else if (typeof this.width === "string" && !this.width.endsWith("px")) {
        width = 600 + "px";
      }

      if (typeof this.height === "number") {
        height = this.height + "px";
      } else if (typeof this.height === "string" && !this.height.endsWith("px")) {
        height = 350 + "px";
      }

      const obj = {
        width: width,
        height: height,
      };
      return obj;
    }
  }
}

// const props = defineProps({
//   imgs: Array,
//   width: {
//     type: [Number, String],
//     default: 600,
//   },
//   height: {
//     type: [Number, String],
//     default: 350,
//   },
// });

// const imgw = ref("50%");
// const active = ref(0);
// const { width, height } = getSize();

// function clickRightItem(index) {
//   active.value = index;
//   imgw.value = "50%";
// }

// function mmove(e) {
//   let mwidth = e.offsetX;
//   const nwidth = width.replace('px','');
//   if(e.offsetX >= nwidth) {
//     mwidth = nwidth;
//   };

//   if(e.offsetX < 0) {
//     mwidth = 0;
//   };

//   imgw.value = mwidth + "px";
// }

// function getSize() {
//   let { width, height } = props;
//   if (typeof width === "number") {
//     width = width + "px";
//   } else if (typeof width === "string" && !width.endsWith("px")) {
//     width = 600 + "px";
//   }

//   if (typeof height === "number") {
//     height = height + "px";
//   } else if (typeof height === "string" && !height.endsWith("px")) {
//     height = 350 + "px";
//   }

//   const obj = {
//     width: width,
//     height: height,
//   };
//   return obj;
// }
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  .left {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-block;
    .front {
      height: 100%;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
    }
    .back {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      z-index: 11;
    }
    .back::after {
      content: "";
      position: absolute;
      right: 0;
      width: 2px;
      height: 100%;
      background: #fff;
    }
    .back::before {
      content: "";
      position: absolute;
      right: -12px;
      width: 24px;
      height: 100%;
      z-index: 11;
    }
    .ani {
      animation: widthgroup 0.6s;
    }
    .right-arrow-box {
      width: 20px;
      height: 20px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 50%;
      margin-right: -10px;
      margin-top: -10px;
      z-index: 10;
      font-size: 20px;
      border-radius: 20px;
      background: #fff;
      color: #999;
      .right-arrow1,
      .right-arrow2 {
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 4px;
        top: 2px;
        border-top: 8px transparent dashed;
        border-right: 8px transparent dashed;
        border-bottom: 8px transparent dashed;
        border-left: 8px #fff solid;
        overflow: hidden;
        z-index: 10;
      }

      .right-arrow1 {
        left: 6px;
        border-left: 8px #666 solid;
      }
      .right-arrow2 {
        border-left: 8px #fff solid;
      }
    }
  }
  .right {
    position: relative;
    width: 108px;
    height: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    box-shadow: -3px 0 8px 0 rgb(27 25 26 / 72%);
    background-color: #1b1819;
    .check-box {
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      position: relative;
      flex-direction: column;
      transition: all 0.3s ease-out 0s;
      & > li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88px;
        overflow: hidden;
        position: relative;
        flex: 1;
        width: 100%;
        background-color: #dadada;
        color: #fff;
        .img {
          background-position: center center;
          width: 100%;
          height: 100%;
          display: block;
          background-repeat: no-repeat;
          background-size: cover;
          cursor: pointer;
          transition: all 0.3s ease-out 0s;
        }
        .img:hover {
          transform: scale(1.1);
        }
        .title {
          position: absolute;
          cursor: pointer;
          width: 100%;
          margin-left: 0;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          color: #fff;
          background-image: linear-gradient(
            180deg,
            rgba(56, 56, 56, 0),
            #1a1a1a
          );
          text-align: center;
          z-index: 2;
          bottom: 0;
        }
      }
      .active {
        box-shadow: 0 0 0 1px #ff6a00;
        z-index: 10;
      }
    }
  }
}

@keyframes widthgroup {
  from {
    width: 0%;
  }
  to {
    width: 50%;
  }
}
</style>
