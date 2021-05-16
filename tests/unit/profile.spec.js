import { shallowMount } from '@vue/test-utils'
import Profile from '@/components/Footer.vue'

describe('Profile.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Profile);
    expect(wrapper).toMatchSnapshot();
  })
})
