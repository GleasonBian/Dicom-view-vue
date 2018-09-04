<template>
  <div id="dicomImage">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    //当点击加载图像时 调用 loadAndViewImage 加载 Dicom 图像
    loadAndViewImage(imageId) {
      //找到 要放置 Dicom Image 的元素
      var element = document.getElementById("dicomImage");
      // cornerstone.loadAndCacheImage 函数 负责加载图形 需要 图像地址 imageId
      cornerstone.loadAndCacheImage(imageId).then(
        function(image) {
          var viewport = cornerstone.getDefaultViewportForImage(element, image);
          cornerstone.displayImage(element, image, viewport);
        },
        function(err) {
          console.dir(err);
        }
      );
    }
  },
  mounted() {
    const _this = this;
    var element = document.getElementById("dicomImage");
    console.log("cornerstone:", cornerstone);
    console.log("dicomParser:", dicomParser);
    console.log("cornerstoneWADOImageLoader:", cornerstoneWADOImageLoader);
    cornerstone.enable(element);
    let url = "wadouri:" + "http://127.0.0.1/testDICOM/CTStudy/1.5191KB.DCM";
    this.loadAndViewImage(url);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dicomImage {
  height: 96vh;
}
</style>
