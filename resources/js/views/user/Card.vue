<template>
  <div class="row">
    <div class="col-12 col-lg-11">
      <div class="card card0 rounded-0">
        <div class="row">
          <div class="col-md-6 p-0 box">
            <card-left />
          </div>
          <div class="col-md-6 p-0 box">
            <card-right />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardLeft from "../../components/Card/CardLeft.vue";
import CardRight from "../../components/Card/CardRight.vue";
export default {
  components: { CardRight, CardLeft },
};
</script>

<style>
.card0 {
  margin: 40px 12px 15px 12px;
  border: 0;
}

.card1 {
  margin: 0;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 0px;
  border-radius: 15px !important;
  height: 100%;
}

.bill-head {
  color: #ffffff;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 1.2em;
}

.line {
  border-right: 1px grey solid;
}

.bill-date {
  color: #bdbdbd;
}

.heading1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  font-size: 2em;
}

.card2 {
  padding: 25px;
  margin: 0;
  height: 100%;
}

.form-card .pay {
  font-weight: bold;
}

.form-card input,
.form-card textarea {
  padding: 10px 8px 10px 8px;
  border: none;
  border: 1px solid lightgrey;
  border-radius: 0px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

.form-card input:focus,
.form-card textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: none;
  font-weight: bold;
  border: 1px solid gray;
  outline-width: 0;
}

.radio {
  display: inline-block;
  width: 204;
  height: 64;
  border-radius: 0;
  background: lightblue;
  box-sizing: border-box;
  border: 2px solid lightgrey;
  cursor: pointer;
  margin: 8px 25px 8px 0px;
}

.radio:hover {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
}

.radio.selected {
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.4);
}

.fit-image {
  width: 100%;
  object-fit: cover;
}
</style>