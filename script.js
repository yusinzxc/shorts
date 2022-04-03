function showPost(videos) {
   let htmlBlocks = ``;
   videos.map(function (video, index) {
      if (index < 25) {
         htmlBlocks += `<div class="post">
                     <div class="row">
                        <div class="col-10 d-flex flex-column" style="gap: 15px;">
                           <!-- POSTED BY -->
                           <div >
                              <div class="d-flex justify-content-between">
                                 <div class="d-flex" style="gap: 10px;">
                                    <img src="${video.image}" alt="" style="height: 50px; width: 50px;" class="rounded-circle">
                                    <div class="d-flex flex-column ">
                                       <span class="fw-bold">${video.user.name}</span>
                                       <small class="text-muted">@${video.user.name.split(" ")[0]}</small>
                                    </div>
                                 </div>
                                 <div class="d-flex my-auto">
                                    <button class="btn btn-outline-danger">Follow</button>
                                 </div>
                              </div>
                           </div>
                           <!-- VIDEO -->
                           <div class="video-wrapper bg-black d-flex justify-content-center align-items-center w-100" style="height: 560px; overflow: hidden;">
                              <video src="${video.video_files[0].link}" class="w-100" style="object-fit: cover; max-height: 560px;" controls></video>
                           </div>
                        </div>
                        <div class="col-2 d-flex flex-column justify-content-end align-items-center text-secondary" style="gap: 20px;">
                           <!-- BUTTONS -->
                           <div class="d-flex flex-column justify-content-center align-items-center">
                              <i class="fa-light fa-heart fs-4"></i>
                              <small>${video.user.id}</small>
                           </div>
                           <div class="d-flex flex-column justify-content-center align-items-center">
                              <i class="fa-light fa-message fs-4"></i>
                              <span>${video.duration}</span>
                           </div>
                           <div class="d-flex flex-column justify-content-center align-items-center">
                              <i class="fa-light fa-share-nodes fs-4"></i>
                              <small>Share</small>                           
                           </div>
                        </div>
                     </div>
                     <hr>
                  </div>`;
      }
   });
   document.querySelector("#posts").innerHTML = htmlBlocks;
}
function showSuggestion(users) {
   let htmlBlocks = ``;
   users.map(function (user, index) {
      if(index < 5){
         htmlBlocks += `<div>
                           <a href="" class="d-flex align-items-center text-decoration-none text-dark" style="gap: 10px;">
                              <img src="${user.image}" alt="" style="height: 50px; width: 50px;" class="rounded-circle">
                              <div class="d-flex flex-column ">
                                 <span class="fw-bold">${user.user.name}</span>
                                 <small class="text-muted">@${user.user.name.split(" ")[0]}</small>
                              </div>
                           </a>
                        </div>`; 
      }
  });
   document.querySelector("#suggestion-container").innerHTML = htmlBlocks;

}
function showTrendingNow(trends){
   let htmlBlocks = ``;
   trends.map(function(trend, index){
      if(index < 10){
         htmlBlocks += `<li>
                           <a href="" class="text-decoration-none">#${trend.id}</a>
                        </li>`
      }
   })
   document.querySelector('#trends').innerHTML = htmlBlocks;
}
fetch("https://api.pexels.com/videos/search?query=animals+portrait", {
   headers: {
      Authorization: "563492ad6f91700001000001105e9d365e0243de86ee26089e871463",
   },
})
   .then((resp) => {
      return resp.json();
   })
   .then((data) => {
      let allData = data.videos;
      showPost(allData);
      showSuggestion(allData);
      showTrendingNow(allData);
   });
