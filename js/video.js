const video = Array.from(document.querySelectorAll(".video"));

video.forEach((item) => {
  const videoItem = item.querySelector("video");

  item.addEventListener("mouseenter", () => {
    !videoItem.play() ? videoItem.play() : "";
  });
  item.addEventListener("mouseleave", () => {
    videoItem.play() ? videoItem.pause() : "";
  });
});
