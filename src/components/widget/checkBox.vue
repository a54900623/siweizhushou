<!--checkbox-->
<template>
  <label class="mint-checklist-label" @change="$emit('change', $event.target.checked)">
    <span class="mint-checkbox">
      <input
        class="mint-checkbox-input"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled">
      <span class="mint-checkbox-core"></span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'checkbox',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    data () {
      return {}
    },
    props: {
      modelValue: {},
      disabled: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .mint-checklist-label
    padding-left 0
</style>
