

video_info={

    img: ["https://static.webteb.net/images/content/video_video_747_840b655db16-1805-492a-85c3-b475f970f198.jpg",
    "https://static.webteb.net/images/content/video_video_744_919a0bf4d0a-760e-4378-8412-ce2c588f2e78.jpg",
    "https://static.webteb.net/images/content/video_video_746_908044708a3-41b9-4c29-9564-5c60fcb8bccd.jpg",
    "https://static.webteb.net/images/content/video_video_744_919a0bf4d0a-760e-4378-8412-ce2c588f2e78.jpg",
    "https://static.webteb.net/images/content/video_video_746_908044708a3-41b9-4c29-9564-5c60fcb8bccd.jpg",
    "https://static.webteb.net/images/content/video_video_747_840b655db16-1805-492a-85c3-b475f970f198.jpg",
],
    video: ["https://static.webteb.net/video/grafot_636893215236368094.mp4","https://static.webteb.net/video/grafot_636893215236368094.mp4",
    "https://static.webteb.net/video/motherday_636893214884439034.mp4","https://static.webteb.net/video/gazat_636893214784444971.mp4",
    "https://static.webteb.net/video/motherday_636893214884439034.mp4","https://static.webteb.net/video/gazat_636893214784444971.mp4"],
    title:["الرابط العجيب بين الجريب فروت والأدوية","الرابط العجيب بين الجريب فروت والأدوية",
  "شكرا ماما على كل شيء" , "الم الصدر ووجود غازات بالجسم ","شكرا ماما على كل شيء" , "الم الصدر ووجود غازات بالجسم "]
};

var video_html =""
create_video_html();
function create_video_html(){


    for(i = 0 ; i <= (video_info.img.length)-1 ; i++)
    {
    
        video_html =  video_html + `
        
    <div class="video-card">
      

 

    <span class="video-title">
    `+ video_info.title[i]  +`
    </span>

    <div class="embed-responsive embed-responsive-4by3">
    <iframe class="embed-responsive-item " src=` + video_info.video[i]  +` allowfullscreen></iframe>
    </div>

    


    </div> `



    }

video_html +=  video_html 
$(".card-wrapper").html(video_html)

}









