<template>
  <div class="home">
    <div class="logo" title="image downloader">
      <img src="../assets/logo.png" alt="image downloader" />
    </div>
    <ImageItem :dataList="receiveList" />
  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem.vue";

export default {
  name: "Home",
  components: {
    ImageItem,
  },
  data() {
    return {
      name: "Image downloader",
      receiveList: [],
    };
  },
  methods: {
    initListener() {
      chrome &&
        chrome.runtime &&
        chrome.runtime.onMessage.addListener(
          (message, sender, sendResponse) => {
            if (message.action === "popup") {
              this.handleListener(message, sender, sendResponse);
            }
          }
        );
    },
    handleListener(message, sender, sendResponse) {
      console.log(message, sender, sendResponse);
      if (message.content) {
        this.receiveList = message.content;
      }
    },
  },
  created() {
    window.vm = this;
    this.initListener();
  },
};
</script>

<style lang="scss" scoped>
.home {
  .logo {
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    transition: box-shadow 0.5s ease-in-out;
    &:hover {
      // outline: solid 1px rgba(211, 211, 211, 0.514);
      box-shadow: 0 0 3pt 2pt rgba(211, 211, 211, 0.514);
    }
    img {
      max-height: 40px;
    }
  }
}
</style>