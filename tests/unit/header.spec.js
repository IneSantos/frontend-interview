import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Footer.vue'

describe('Header.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper).toMatchSnapshot();
  })
})
