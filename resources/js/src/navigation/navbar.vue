<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="nav-main">
    <b-navbar-brand href="#">VUE-AUTH</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
            <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{name: 'register'}">Register</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{name: 'login'}">Login</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link :to="{name: 'admindashboard'}">Admin Dashboard</router-link>
        </b-nav-item>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">    
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav-main{
        padding: 4px 10px;
    }
    a.nav-link a{
        text-decoration: none !important;
        color:aliceblue
    }
        a.nav-link a:hover{
        
        color:yellow
    }
    a.nav-link a.router-link-active{
        color:yellow
    }
</style>