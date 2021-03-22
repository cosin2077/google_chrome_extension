<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    className: String,
    content: String,
  },
};
</script>

<style scoped lang="scss">
* {
  background: #f4f4f0;
}

/* general button style */
button {
  border: 0;
  // width: 270px;
  padding: 10px;
  // margin: 20px auto;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: block;
  text-decoration: none;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1.2em;
  outline: none;
  cursor: pointer;
  &:hover {
    -webkit-transition:all 0.1s ease-in;
    -moz-transition:all 0.1s ease-in;
    -o-transition:all 0.1s ease-in;
    transition:all 0.1s ease-in;
  }
  &:active {
    margin-top: 6px;
    margin-bottom: -2px;
  }
}
/* Control the colour scheme */

.green {
  color: #fff;
  background: #8bbc37;
  -webkit-box-shadow: 0 3px 1px #64950d;
  -moz-box-shadow: 0 3px 1px #64950d;
  box-shadow: 0 3px 1px #64950d;
  &:hover {
    background: #85b237;
    color: whitesmoke;
  }
  &:active {
    -webkit-box-shadow: 0 1px 1px #64950d;
    -moz-box-shadow: 0 1px 1px #64950d;
    box-shadow: 0 1px 1px #64950d;
  }
}

.red {
  color: #fff;
  background: #bc3737;
  -webkit-box-shadow: 0 3px 1px #950d0d;
  -moz-box-shadow: 0 3px 1px #950d0d;
  box-shadow: 0 3px 1px #950d0d;
  &:hover {
    background: #b23737;
  }
  &:active {
    margin-top: 22px;
    -webkit-box-shadow: 0 1px 1px #950d0d;
    -moz-box-shadow: 0 1px 1px #950d0d;
    box-shadow: 0 1px 1px #950d0d;
  }
}
</style>
