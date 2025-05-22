const images = [
  "resources/TechProductDesgin/allparts.jpg",
  "resources/TechProductDesgin/arduinocontrollerrecievingpower.jpg",
  "resources/TechProductDesgin/athomeprototyping.jpg",
  "resources/TechProductDesgin/beforesoldering.jpg",
  "resources/TechProductDesgin/button-test.jpg",
  "resources/TechProductDesgin/controller-test-1.jpg",
  "resources/TechProductDesgin/endproduct.jpg",
  "resources/TechProductDesgin/final view.jpg",
  "resources/TechProductDesgin/Finished-Project .jpg",
  "resources/TechProductDesgin/howthearduinoisheld.jpg",
  "resources/TechProductDesgin/insideveiws.jpg",
  "resources/TechProductDesgin/jointcloseup.jpg",
  "resources/TechProductDesgin/Key-Captest.jpg",
  "resources/TechProductDesgin/KeycapPress.jpg",
  "resources/TechProductDesgin/Mock-Ups.jpg",
  "resources/TechProductDesgin/MockUpViews.jpg",
  "resources/TechProductDesgin/moreproof.jpg",
  "resources/TechProductDesgin/MStand-FlatPack.jpg",
  "resources/TechProductDesgin/MStand-Joint12mmHold.jpg",
  "resources/TechProductDesgin/MStand-Joint12mmholdview.jpg",
  "resources/TechProductDesgin/MStand-Jointmiddlehold.jpg",
  "resources/TechProductDesgin/MStand-Jointrighthold.jpg",
  "resources/TechProductDesgin/MStand-Wire-test.jpg",
  "resources/TechProductDesgin/MStand-Wire-testview.jpg",
  "resources/TechProductDesgin/proofofstrength.jpg",
  "resources/TechProductDesgin/toppartandbottom.jpg",
  "resources/TechProductDesgin/uglywiremanagemnt.jpg",
  "resources/TechProductDesgin/volumecontrollerandmonitorstand.jpg",
];
const images_b = [
  "resources\\fusion360\\ArduinoController3dModel.jpg",
  "resources\\fusion360\\arduinoinsidetoprender.jpg",
  "resources\\fusion360\\arduinorender1.jpg",
  "resources\\fusion360\\Finaljoinoverviewrender.jpg",
  "resources\\fusion360\\finaljointbottomviewrender.jpg",
  "resources\\fusion360\\Finaloveralldrawing.jpg",
  "resources\\fusion360\\Finalrender1.jpg",
  "resources\\fusion360\\finalrender2.jpg",
  "resources\\fusion360\\finalrender3.jpg",
  "resources\\fusion360\\joint1fusiondrawing.jpg",
  "resources\\fusion360\\joint2fusiondrawing.jpg",
  "resources\\fusion360\\joint3fusiondrawing.jpg",
  "resources\\fusion360\\jointfinalrndertopview.jpg",
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
console.log("Left A:", document.getElementById("physical_project_left"));
console.log("Right A:", document.getElementById("physical_project_right"));
console.log("Left B:", document.getElementById("fusion_project_left"));
console.log("Right B:", document.getElementById("fusion_project_right"));

carousel_A = new Carousel(
  document.getElementById("physical_project_images"),
  images,
  document.getElementById("phys_img_left"),
  document.getElementById("phys_img_right"),
  document.getElementById("phys_img_num")
);

carousel_B = new Carousel(
  document.getElementById("fusion_project_images"),
  images_b,
  document.getElementById("fusion_project_left"),
  document.getElementById("fusion_project_right"),
  document.getElementById("fusion_slide_int")
);
