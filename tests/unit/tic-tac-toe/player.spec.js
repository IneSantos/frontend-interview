import { shallowMount } from '@vue/test-utils'
import Player from '@/components/tic-tac-toe/Player.vue'

describe('Player.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Player);
    expect(wrapper).toMatchSnapshot();
  })
})
