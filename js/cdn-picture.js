(function($){
  var banner_element = document.querySelector("div#banner")
  var img_element = document.querySelector("img[alt]")
  console.log(img_element.src)
  if (img_element && banner_element && img_element.src.startsWith("https://blog.yaonas.space")){
    var new_img_src = ("https://res-yaonas.cn-nb1.rains3.com/hexo-blog" + img_element.src.replace(location.href.split("/").slice(0, 3).join("/"), ""))
    console.log(img_element.src)
    banner_element.style.background = "url('"+new_img_src+"')"+"center center / cover no-repeat; transform: translate3d(0px, 3.86667px, 0px)"
    img_element.src =  new_img_src
  }
}(jQuery))
