const images = [
  "resources/blendermodel/ab_swordfrontviewuntextured.jpg",
  "resources/blendermodel/a_swordfrontviewcloseup.jpg",
  "resources/blendermodel/ba_gununtexturedtopologyview.jpg",
  "resources/blendermodel/bb_gunrenderfullview.jpg",
  "resources/blendermodel/ca_scytheuntextured.jpg",
  "resources/blendermodel/cb_scytheuntexturedbladeview.jpg",
  "resources/blendermodel/cc_scythebottomuntexturedview.jpg",
  "resources/blendermodel/cd_scythetexturedtopview.jpg",
  "resources/blendermodel/ce_scythebottomtexturedview.jpg",
  "resources/blendermodel/scythetexturerenderview.jpg",
];

class Carousel {
  constructor(img, imgs_list, left_btn, right_btn, slide_counter) {
    this.img = img;
    this.current_image = 0;
    this.imgs_list = imgs_list;
    this.slide_counter = slide_counter;
    this.left_btn = left_btn;
    this.right_btn = right_btn;

    this.slide_counter.innerHTML = `${this.current_image + 1}/${
      this.imgs_list.length
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

    this.slide_counter.innerHTML = `${this.current_image + 1}/${
      this.imgs_list.length
    }`;
  }
}

carousel_A = new Carousel(
  document.getElementById("Blender_model_img"),
  images,
  document.getElementById("blender_model_left"),
  document.getElementById("blender_model_right"),
  document.getElementById("blender_model_slide_int")
);
