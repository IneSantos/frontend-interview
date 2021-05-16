import { shallowMount } from '@vue/test-utils'
import Cell from '@/components/tic-tac-toe/Cell.vue'

describe('Cell.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Cell);
    expect(wrapper).toMatchSnapshot();
  })
})
