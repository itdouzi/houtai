<template>
<div class="grid">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}
 
.item {
  width: 44%;
  height: 200px;
  background-color: rebeccapurple;
  margin: 10px;
  border: 1px solid blue;
}
 
@media (min-width: 576px) {
  .item {
    width: 36%;
  }
}
 
@media (min-width: 1024px) {
  .item {
    width: 23%;
  }
}
@media (min-width: 1366px) {
  .item {
    width: 18%;
  }
}

</style>
