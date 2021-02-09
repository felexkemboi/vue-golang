<template>
  <div class="flexible-content">
    <mdb-navbar class="flexible-navbar blue text-white" position="top" >
      <mdb-navbar-nav>
        <mdb-nav-item href="#"  active >
         <p class="text-white">
           <mdb-icon icon="chevron-left" class="mr-3 ml-3"/>Badge
          </p>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar>

    <div class="sidebar-fixed position-fixed">
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'"><mdb-icon icon="home"          class="mr-3"/>Home</mdb-list-group-item>
        </router-link>
        <router-link to="/404">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'"><mdb-icon icon="user-friends"  class="mr-3" />Users</mdb-list-group-item>
        </router-link>
        <router-link to="/table">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'"><mdb-icon icon="briefcase"     class="mr-3" />Business</mdb-list-group-item>
        </router-link>
        <router-link to="/404">
          <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'"><mdb-icon icon="th-large"       class="mr-3" />Adverts</mdb-list-group-item>
        </router-link>
        <router-link to="/404">
          <mdb-list-group-item :action="true" :class="activeItem === 5 && 'active'"><mdb-icon icon="th-large"       class="mr-3" />Survey</mdb-list-group-item>
        </router-link>
        <router-link to="/404">
          <mdb-list-group-item :action="true" :class="activeItem === 6 && 'active'"><mdb-icon icon="dollar-sign"    class="mr-3" />Account</mdb-list-group-item>
        </router-link>
        <router-link to="/register">
          <mdb-list-group-item :action="true" :class="activeItem === 7 && 'active'"><mdb-icon icon="user"          class="mr-3" />Register</mdb-list-group-item>
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import { mdbNavbar,mdbIcon,mdbListGroup,mdbListGroupItem,waves,mdbNavItem, mdbNavbarNav } from "mdbvue";
import store from "@/store";
export default {
  name: "Dasboard",
  components: { mdbNavbar,mdbListGroup,mdbListGroupItem,mdbIcon,mdbNavItem,mdbNavbarNav},
  data() {
    return {
      activeItem: 1
    };
  },
  created() {
    setInterval(function(){
    store.dispatch('changeValues')
    }, 10000)
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 0px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  /* border-radius: 5px; */
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
