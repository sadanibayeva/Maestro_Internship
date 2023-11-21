let array=[
    { 
       id:1,
       img: "./img/Logo.png",
       img1: "./img/image3.png", 
       img11:"./img/image4.png",
       img111:"./img/image5.png",
       img2: "./img/image6.png",
       img3: "./img/OTTO.png",
       nov: "WEIMAR - 40MM",
       img4: "./img/Frame4.png",
       ad: "PRICE:",
       qiymet:"2.299.000 đ",
       melumat:"Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể hiện trên nền của sự kết hợp màu sắc tinh tế và hiện đại. Cặp dây da màu Sand cùng chi tiết kim xanh chính là điểm nhấn giúp bạn kết hợp hoàn hảo với bất kì bộ trang phục nào.",
       yoxlama:"THÊM VÀO GIỎ",
       tesdiq:"MUA NGAY"
    },
    { 
        id:2,
        img: "./img/Logo.png",
        img1: "./img/image3.png", 
        img11:"./img/image4.png",
        img111:"./img/image5.png",
        img2: "./img/image6.png",
        img3: "./img/OTTO.png",
        nov: "WEIMAR - 40MM",
        img4: "./img/Frame4.png",
        ad: "PRICE:",
        qiymet:"2.299.000 đ",
        melumat:"Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể hiện trên nền của sự kết hợp màu sắc tinh tế và hiện đại. Cặp dây da màu Sand cùng chi tiết kim xanh chính là điểm nhấn giúp bạn kết hợp hoàn hảo với bất kì bộ trang phục nào.",
        yoxlama:"THÊM VÀO GIỎ",
        tesdiq:"MUA NGAY"
     },  
     { 
        id:3,
        img: "./img/Logo.png",
        img1: "./img/image3.png", 
        img11:"./img/image4.png",
        img111:"./img/image5.png",
        img2: "./img/image6.png",
        img3: "./img/OTTO.png",
        nov: "WEIMAR - 40MM",
        img4: "./img/Frame4.png",
        ad: "PRICE:",
        qiymet:"2.299.000 đ",
        melumat:"Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể hiện trên nền của sự kết hợp màu sắc tinh tế và hiện đại. Cặp dây da màu Sand cùng chi tiết kim xanh chính là điểm nhấn giúp bạn kết hợp hoàn hảo với bất kì bộ trang phục nào.",
        yoxlama:"THÊM VÀO GIỎ",
        tesdiq:"MUA NGAY"
     },   
     { 
        id:4,
        img: "./img/Logo.png",
        img1: "./img/image3.png", 
        img11:"./img/image4.png",
        img111:"./img/image5.png",
        img2: "./img/image6.png",
        img3: "./img/OTTO.png",
        nov: "WEIMAR - 40MM",
        img4: "./img/Frame4.png",
        ad: "PRICE:",
        qiymet:"2.299.000 đ",
        melumat:"Thiết kế Bauhaus tối giản của Weimar Otto được Curnon thể hiện trên nền của sự kết hợp màu sắc tinh tế và hiện đại. Cặp dây da màu Sand cùng chi tiết kim xanh chính là điểm nhấn giúp bạn kết hợp hoàn hảo với bất kì bộ trang phục nào.",
        yoxlama:"THÊM VÀO GIỎ",
        tesdiq:"MUA NGAY"
     }
]
array.forEach(x=>{
    document.querySelector(".umumi").innerHTML+=
    
    `<div class="div">
    <img class="ilkimg" src=${x.img}>
    <div class="uclu">
        <div class="div1">
            <img src=${x.img1}>
            <img src=${x.img11}>
            <img src=${x.img111}>
        </div>
        <div class="div2">
            <img src=${x.img2}>
        </div>
        <div class="div3">
            <img class="otto" src=${x.img3}>
            <h3>${x.nov}</h3>
            <img class="ulduz" src=${x.img4}>
            <div class="ikili">
                <h4>${x.ad}</h4>
                <h3>${x.qiymet}</h3>
            </div>
            <p>${x.melumat}</p>
            <div class="qara">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53367 6C7.82766 3.81519 10.011 2 12.5001 2C14.9891 2 17.1725 3.81519 17.4665 6H20.3471C21.4516 6 22.3471 6.89543 22.3471 8C22.3471 8.09464 22.3404 8.18916 22.327 8.28284L20.6127 20.2828C20.4719 21.2681 19.6281 22 18.6328 22H6.36737C5.37207 22 4.52823 21.2681 4.38747 20.2828L2.67319 8.28284C2.51698 7.18937 3.27678 6.17631 4.37024 6.0201C4.46393 6.00672 4.55845 6 4.65309 6H7.53367ZM15.428 6C15.124 4.93808 13.8981 4 12.5001 4C11.102 4 9.87619 4.93808 9.5722 6H15.428ZM4.65309 8H7.50008V10H9.50008V8H15.5001V10H17.5001V8H20.3471L18.6328 20H6.36737L4.65309 8Z" fill="white"/>
                    </svg>
                    <h5>${x.yoxlama} </h5>
            </div>
        <h1>${x.tesdiq}</h1>
        </div>
        </div>
    </div>`

})


