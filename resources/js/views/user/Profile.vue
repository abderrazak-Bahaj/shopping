<template>
  <!-- Account details card-->
  <div class="card mb-4">
    <div class="card-header">
      <span class="text-center h2 wow fadeInLeft" data-wow-delay="0.1s">Account Details</span>
      <span class="float-end">
        <div class="cls-toggle-container wow fadeInLeft" data-wow-delay="0.2s">
          <input type="checkbox" id="fast" v-model="canEdit" class="cls-toggle" />
          <label for="fast" class="cls-label"> <div class="cls-ball"></div> </label>
          <span>Edit</span>
        </div>
      </span>
    </div>
    <div class="card-body container">
      <!-- Alert Errors  -->
      <div class="alert alert-danger small" role="alert" v-if="allErrors">
        <span v-for="errors in allErrors" :key="errors">
          <span v-for="error in errors" :key="error"> - {{ error }} </span ><br />
        </span>
      </div>
      <div>
        <!-- Form Row-->
        <div class="row gx-3 mb-3 wow fadeInLeft" data-wow-delay="0.3s">
          <!-- Form Group (first name)-->
          <div class="col-md-6">
            <label class="small mb-1 wow fadeInLeft" data-wow-delay="0.4s" for="first_name">First name</label>
            <input class="form-control" v-model="data.first_name" :disabled="!canEdit" id="first_name" type="text" placeholder="Enter your first name" />
          </div>
          <!-- Form Group (last name)-->
          <div class="col-md-6">
            <label class="small mb-1 wow fadeInLeft" data-wow-delay="0.5s" for="last_name">Last name</label>
            <input class="form-control" v-model="data.last_name" :disabled="!canEdit" id="last_name" type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <!-- Form Group (address)-->
        <div class="mb-3 wow fadeInLeft" data-wow-delay="0.6s">
          <label class="small mb-1" for="address">Address</label>
          <input class="form-control" v-model="data.address" :disabled="!canEdit" id="address" type="text" placeholder="Enter your address" autocomplete="address-line1" />
        </div>
        <!-- Form Row-->
        <div class="row gx-3 mb-3 wow fadeInLeft" data-wow-delay="0.7s">
          <!-- Form Group (phone number)-->
          <div class="col-md-6">
            <label class="small mb-1" for="phone_number">Phone number</label>
            <input class="form-control" v-model="data.phone_number" :disabled="!canEdit" id="phone_number" type="tel" placeholder="+21260000000" />
          </div>
          <!-- Form Group (birthday)-->
          <div class="col-md-6">
            <label class="small mb-1" for="Date_birth">Birthday</label>
            <input class="form-control" v-model="data.Date_birth" :disabled="!canEdit" id="Date_birth" type="text" placeholder="1980-01-01" />
          </div>
        </div>
        <!-- Form Group (password)-->
        <div class="mb-3" v-if="canEdit">
          <label class="small mb-1" for="password">Password</label>
          <input class="form-control" v-model="data.password" id="password" type="password" placeholder="Enter your password"/>
        </div>
        <!-- Save changes button-->
        <button class="btn btn-primary wow fadeInLeft" data-wow-delay="0.9s" @click="editUser" v-if="canEdit"> Save changes </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: {
        phone_number: "",
        Date_birth: "",
        address: "",
        last_name: "",
        first_name: "",
        password: "",
      },
      canEdit: false,
      allErrors: "",
    };
  },
  methods: {
    //#region Validation Front End return boolean
    validation: async function () {
      /* Do Smoothing */
      return true;
    },
    editUser: async function () {
      this.allErrors = "";
      let isValid = await this.validation();
      if (isValid) {
        let formData = new FormData();
        formData.append("phone_number", this.data.phone_number);
        formData.append("Date_birth", this.data.Date_birth);
        formData.append("address", this.data.address);
        formData.append("last_name", this.data.last_name);
        formData.append("first_name", this.data.first_name);
        formData.append("password", this.data.password);
        await this.$store
          .dispatch("updateProfile", formData)
          .then((response) => {
            this.$helpers.showToast("Profile has been edit success");
            this.canEdit = false;
            this.allErrors = "";
          })
          .catch((error) => {
            if (error == false) {
              this.$helpers.showErrorsPopup("Password Incorrect");
              return;
            }
            this.allErrors = error;
          });
      }
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    this.data = this.userInfo;
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
  font-weight: 500;
}
.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background-color: rgba(33, 40, 50, 0.03);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control,
.dataTable-input {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c5ccd6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>>
