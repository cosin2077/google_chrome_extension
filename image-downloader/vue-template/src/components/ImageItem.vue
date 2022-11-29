<template>
  <div class="image-item-container">
    <div class="download-all" >
      <div class="total">Total: <span>{{ dataList.length }}</span></div>
      <Button className="green" @click.native="downloadImages">DOWNLOAD ALL</Button>
    </div>
    <div class="reload" v-if="!dataList.length">Please reload page</div>
    <div class="image-item" v-for="(item, index) in dataList" :key="index">
      <div class="head">
        {{ item.filename }}
        <img
          @click="downloadImage(item)"
          src="../assets/download.svg"
          alt="download"
          title="download this image"
        />
      </div>
      <div class="preview">
        <img :src="item.previewUrl" :alt="item.filename" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
function downloadFile(fileList) {
    chrome.runtime.sendMessage({
        action: "background",
        type: 'download',
        content: fileList,
    });
}
export default {
  name: "ImageItem",
  components: { Button },
  props: {
    dataList: Array,
  },
  methods: {
    downloadImage(item) {
      console.log(item)
      downloadFile([item])
    },
    downloadImages() {
      console.log(this.dataList)
      downloadFile(this.dataList)
    },
  },
};
</script>

<style scoped lang="scss">
@mixin flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
$height: 300px;
$width: 360px;
$head: 40px;
$imgHeight: $height - $head;
.image-item-container {
  min-height: $height;
  .reload{
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-size: 2em;
  }
  .download-all {
    padding: 0 30px;
    border-bottom: solid 1px lightgrey;
    padding-bottom: 6px;
    overflow: hidden;
    height: 60px;
    @include flex-box;
    span{
      color: #64950d;
      font-weight: bold;
    }
  }
  .image-item {
    margin: auto;
    margin-top: 8px;
    border: solid 1px lightgrey;
    border-radius: 5px;
    height: $height + $head;
    width: $width;
    .head {
      @include flex-box;
      padding: 5px;
      height: $head;
      line-height: $head;
      img {
        height: $head - 1;
        cursor: pointer;
        transition: height 0.1s ease-in;
        &:hover {
          height: $head;
        }
        &:active {
          height: $head - 3;
        }
      }
    }
    .preview {
      height: $imgHeight + $head;
      width: 100%;
      border-top: solid 1px lightgrey;
      padding: 10px;
      @include flex-box;
      justify-content: center;
      img {
        max-height: $imgHeight;
        max-width: $imgHeight;
      }
    }
  }
}
</style>
