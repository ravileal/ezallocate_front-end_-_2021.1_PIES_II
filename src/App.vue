<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify';

export default {
  name: 'App',
  data() {
    return {
      signedIn: false,
    };
  },
  beforeCreate() {
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signIn') {
        this.signedIn = true;
        this.$router.push('/');
      }
      if (payload.event === 'signOut') {
        this.$router.push('/login');
        this.signedIn = false;
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => {
        // console.log(data.attributes);
        this.signedIn = true;
      })
      .catch(() => {
        this.signedIn = false;
      });
  },
};
</script>

<style>
#app {
  height: 600px;
  background-image: url('https://www.quixada.ufc.br/wp-content/uploads/2017/09/37172226552_7f640d31c8_h.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.nav {
  display: flex;
}
.nav p {
  padding: 0px 30px 0px 0px;
  font-size: 18px;
  color: #000;
}
.nav p:hover {
  opacity: 0.7;
}
.nav p a {
  text-decoration: none;
}
</style>
