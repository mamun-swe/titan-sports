<template>
  <div class="team-registration">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 text-center">
          <h1>Team Registration</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "team-registration"
};
</script>
<style lang="scss" scoped>
.team-registration {
  h1 {
    color: rgb(61, 60, 60);
    font-weight: 900;
    font-family: "Kanit", sans-serif;
  }
}

@media (max-width: 768px) {
  .team-registration {
    h1 {
      font-size: 25px;
    }
  }
}
</style>