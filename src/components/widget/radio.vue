<!--radio-->
<template>
  <label class="mint-radiolist-label" @change="$emit('change', value)">
    <span class="mint-radio">
      <input
        class="mint-radio-input"
        type="radio"
        :name="name"
        :disabled="disabled"
        :value="value">
      <span class="mint-radio-core"></span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'radio',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    data () {
      return {}
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      modelValue: {},
      name: {
        type: String
      },
      value: {}
    },
    components: {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .mint-radiolist-label
    padding-left 0
</style>
