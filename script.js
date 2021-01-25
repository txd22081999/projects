window.onload = () => {
  const card = document.querySelector("#card1");
  const video = document.querySelector("#vid1");
  const text = card.querySelector(".text");
  const videoContainer = card.querySelector(".video-container");

  console.log(videoContainer);

  card.addEventListener("mouseenter", () => {
    setTimeout(() => {
      text.classList.add("blur");

      //   video.style.visibility = "visible";
      //   video.currentTime = 0;
      //   video.play();

      //   videoContainer.classList.add("black");

      console.log(video);
    }, 1000);
  });

  card.addEventListener("mouseleave", () => {
    videoContainer.classList.remove("black");
    text.classList.remove("blur");
    video.pause();
    video.style.visibility = "hidden";
  });
};
