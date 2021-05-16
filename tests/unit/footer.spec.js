import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper).toMatchSnapshot();
  })
})
