<template>
  <div>
    <MenuBar>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <header>
                <!-- Background image -->
                <div
                  class="p-5 text-center bg-image"
                  style="
                    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg');
                    height: 500px;
                  "
                >
                  <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
                    <div class="d-flex justify-content-center align-items-center h-200">
                      <div class="text-white">
                        <h1 class="mb-3">Welcome to my shop</h1>
                        <h4 class="mb-3">Have fun</h4>
                        <a class="btn btn-outline-light btn-lg" href="#!" role="button"
                          >Keep Going</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Background image -->
              </header>
            </div>
          </div>
        </div>


    </MenuBar>
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
export default {
  components: {
    MenuBar,
  },
  name: "Home",
};
</script>
