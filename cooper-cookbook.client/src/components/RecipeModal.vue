<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header justify-content-center table-bg p-4">
          <slot name="modal-header" />
        </div>
        <div class="modal-body table-bg pt-0 px-4 pb-4">
          <slot name="modal-body" />
          <button
            type="button"
            class="btn bg-light col-12 px-4 mt-4 shadow "
            data-dismiss="modal"
            aria-label="Close"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['modalActive'],
  setup() {
    return {

    }
  }
}
</script>
