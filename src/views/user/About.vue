<template>
  <div class="about">
    <div class="container pt-4 pt-lg-5">
      <div class="row">
        <div class="col-12 col-lg-6">
          <img src="../../assets/static/team-banner.jpg" class="img-fluid" />
        </div>
        <div class="col-12 col-lg-6 pt-3 pt-lg-0 text-right">
          <h3>TiTAN ESPORTS</h3>
          <h1>FOUNDED IN 2019</h1>
          <h3>BY TAWSIF MAHBUB</h3>
          <p class="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro rem ea provident error nesciunt nulla recusandae eum, eveniet repellendus atque quas adipisci ipsum. Facilis cum optio beatae facere obcaecati natus quibusdam, totam eveniet laborum explicabo ipsam corrupti iste quidem et, dolor odio asperiores accusantium dignissimos quia excepturi! Aliquid, tempora.
            <br />
            <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, natus magnam officia voluptate deserunt blanditiis dolore tenetur nihil voluptatem vitae vero facilis, explicabo recusandae laborum aliquid exercitationem dignissimos placeat porro neque repellendus. Voluptatum quisquam nesciunt, tempora nemo laboriosam corporis beatae ratione quod eos maiores cum provident sit, consectetur aperiam obcaecati.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted(){
    window.scrollTo(0, 0);
  }
};
</script>
<style lang="scss" scoped>
.about {
  h3 {
    color: #ffffff;
    font-family: Anton;
    margin-bottom: 0;
  }
  h1 {
    color: #ffffff27;
    font-family: Anton;
    margin-bottom: 0;
  }
  p {
    color: #ffffff48;
    font-size: 17px;
    line-height: 1.8rem;
  }
}
</style>