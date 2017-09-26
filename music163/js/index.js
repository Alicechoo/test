console.log("hello kim");
window.onload = function init() { 
  console.log("hello world");
  //选中发现音乐
  var findMusic = document.getElementById("findMusic");
  findMusic.style.background = "rgb(0,0,0)";
  var triangle = document.createElement("div");
  triangle.classList.add("triangle-up");
  findMusic.appendChild(triangle);
  // var triangles = document.getElementsByClassName("triangle-up");
  // for(let i = 0; i < triangles.length; i++) {
  //   triangles[i].style.visibility = 'hidden';
  // }
  
  // for(let i = 0; i < triangles.length; i++) {
  //   if(triangles[i].parentNode.id == "findMusic") {
  //     triangles[i].style.visibility = 'visible';
  //   }
  var clicks = document.getElementsByClassName("click");
  
  //添加head中的点击事件
  for(let i = 0; i < clicks.length; i++) {
    clicks[i].parentNode.addEventListener("click", function(event) {
      console.log(i);
      hideShowTriangle(event.target);
    });
  }

  function hideShowTriangle(domDiv) {
    //清除小三角，恢复背景颜色
    var triangles = document.getElementsByClassName("triangle-up");
    console.log("triangles is", triangles);
    for ( let i = 0; i < triangles.length; i++) {
      triangles[i].parentNode.style.background = "rgb(40,40,40)";
      triangles[i].parentNode.removeChild(triangles[i]);
    }

    //点击元素添加小三角，并设置背景颜色为黑色
    console.log("domDiv is", domDiv);
    var targetNode = domDiv.parentNode;
    console.log("targetNode is", targetNode);
    targetNode.style.background = "rgb(0,0,0)";
    var triangle = document.createElement("div");
    triangle.classList.add("triangle-up");
    targetNode.appendChild(triangle);
    
    //如果不为发现音乐，则g_top无内容
    var g_top = document.getElementById("g_top");
    if(domDiv.innerHTML != "发现音乐") {
      console.log("domDiv,innerHTML is", domDiv.innerHTML);
      g_top.style.height = "5px";
    } else {
      g_top.style.height = "35px";
    }
  }

  //添加推荐列表
  var rcmdList = document.getElementById("rec_list_content");
  var rowNum = 6;
  var colNum = 2;
  var rcmdCon = [
    { id: 0, title: "泡一壶稍浓的秋茶，品之", userNum: 2900000, image: "http://p1.music.126.net/72BVDE_AVAoxXAwTJnkiHQ==/18524571905077671.jpg?param=140y140"},
    { id: 1, title: "「Acapella」空灵至幻 迷境失若绿茵林", userNum: 210000, image: "http://p1.music.126.net/9EHl0lDnN0vIgT8AYjiTxQ==/18929192184112281.jpg?param=140y140"},
    { id: 2, title: "随遇而安 | 云村民谣旅行指南", userNum: 2730000, image: "http://p1.music.126.net/tUBJmAWjoq_7r312SZkIlg==/109951162978430843.jpg?param=140y140"},
    { id: 3, title: "这就是一个男生彻底喜欢上你的时候", userNum: 700000, image: "http://p1.music.126.net/l-I77h76Tk8g0H9JwJwCEA==/19198572532868360.jpg?param=140y140"},
    { id: 4, title: "对唱里的悲喜苦甜", userNum: 36626, image: "http://p1.music.126.net/z4vu9oBex7WzF0VL5Up_Bg==/18643319162435026.jpg?param=140y140"},
    { id: 5, title: "韩语丨开嗓沉迷 但愿长醉不复醒", userNum: 18701, image: "http://p1.music.126.net/nhMcm-8EhOOg-BaO6x-Muw==/109951163007934549.jpg?param=140y140"},
    { id: 6, title: "四十首精选钢琴曲①", userNum: 20380000, image: "http://p1.music.126.net/b9crd5rI4lgnVnqQgWnf4w==/5812018464427983.jpg?param=140y140"},
    { id: 7, title: "从军记02", userNum: 8755, image: "http://p1.music.126.net/qrr82Tm_1oL4BIcP8QDkjw==/18697195232361163.jpg?param=140y140"},
    { id: 8, title: "致前任 | 予你后妈般的关怀", userNum: 2040000, image: "http://p1.music.126.net/N-KeRkmkBr1rr_I0hh32eg==/109951162983152556.jpg?param=140y140"},
    { id: 9, title: "村上春树： 爱与性在迷茫中分离（共读）", userNum: 76396, image: "http://p1.music.126.net/M43pwDudy8J1SuZE_o5m0g==/19056735532921168.jpg?param=140y140"},
    { id: 10, title: "唱一首情歌 | 喜欢你是我做过最好的事", userNum: 920000, image: "http://p1.music.126.net/t2SP65jMGFXXrOjCz_Yjug==/109951163013596216.jpg?param=140y140"},
    { id: 11, title: "极致深情 | 音律入耳 我仿佛又失恋了千百次", userNum: 2580000, image: "http://p1.music.126.net/f1qGvnm6tcVfbrmCFENNvQ==/109951163010401721.jpg?param=140y140"},
  ]
  // for(let i = 0; i < rowNum * colNum; i++) {
  //   var newLi = document.createElement("li");
  //   var div = document.createElement("div");
  //   var img = document.createElement("img");
  //   var p = document.createElement("p");
  //   var a = document.createElement("a");
  //   var text = document.createTextNode(rcmdCon[i].title);
  //   a.appendChild(text);
  //   p.appendChild(a);
  //   console.log("rcmdCon is", rcmdCon[i]);
  //   img.src = rcmdCon[i].image;
  //   newLi.appendChild(img);
  //   newLi.appendChild(p);
  //   rcmdList.appendChild(newLi);
  // }

  var recImages = document.getElementsByClassName("rec_img");
  var recTitles = document.getElementsByClassName("rec_title");
  var recDesc = document.getElementsByClassName("rec_des");
  for(let i = 0; i < rowNum * colNum; i++) {
    recImages[i].src = rcmdCon[i].image;
    recTitles[i].title = rcmdCon[i].title;
    recDesc[i].innerHTML = rcmdCon[i].title;
  }
} 