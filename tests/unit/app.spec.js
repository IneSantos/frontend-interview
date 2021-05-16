import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  })
})
