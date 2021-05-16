import { shallowMount } from '@vue/test-utils'
import StopWatch from '@/components/tic-tac-toe/StopWatch.vue'

describe('StopWatch.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(StopWatch);
    expect(wrapper).toMatchSnapshot();
  })
})
