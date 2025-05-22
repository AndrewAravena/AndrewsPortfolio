
const images_chan_fusion = [
  'resources/chandiddy/chain.jpg', 'resources/chandiddy/ChainConnecttionchandiddy1.jpg', 'resources/chandiddy/chainshowhowworky.jpg', 'resources/chandiddy/chandiddylierhalfsecctionview.jpg', 'resources/chandiddy/chandiddylierlightoverall.jpg', 'resources/chandiddy/chandiddyligthcloseuporientation.jpg', 'resources/chandiddy/chandiddyligthview.jpg', 'resources/chandiddy/halfsectionofthechandiddylier.jpg'

];

class Carousel {
  constructor(img, imgs_list, left_btn, right_btn, slide_counter) {
    this.img = img;
    this.current_image = 0;
    this.imgs_list = imgs_list;
    this.slide_counter = slide_counter;
    this.left_btn = left_btn;
    this.right_btn = right_btn;

    this.slide_counter.innerHTML = `${this.current_image + 1}/${this.imgs_list.length
      }`;
    this.left_btn.addEventListener("click", () => this.set_image(-1));
    this.right_btn.addEventListener("click", () => this.set_image(1));
  }

  set_image(i) {
    this.current_image += i;

    if (this.current_image < 0) {
      this.current_image = this.imgs_list.length - 1;
    }
    if (this.current_image > this.imgs_list.length - 1) {
      this.current_image = 0;
    }

    this.img.src = this.imgs_list[this.current_image];

    this.slide_counter.innerHTML = `${this.current_image + 1}/${this.imgs_list.length
      }`;
  }
}

carousel_chan = new Carousel(
  document.getElementById("chan_fusion_project_images"),
  images_chan_fusion,
  document.getElementById("chan_fusion_project_left"),
  document.getElementById("chan_fusion_project_right"),
  document.getElementById("chan_fusion_slide_int")
);
