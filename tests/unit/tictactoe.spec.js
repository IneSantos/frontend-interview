import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TicTacToe from '@/components/TicTacToe.vue'
import { storeMocked } from '../__mocks__/store.js'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeMocked);

describe('TicTacToe.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(TicTacToe);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should should call toggle when toggle button is clicked', async () => {
    const mockMethod = jest.spyOn(TicTacToe.methods, 'toggleGames');
    const wrapper = mount( TicTacToe, { store, localVue } );

    await wrapper.findComponent({ ref: "gameToggle" }).vm.$emit('toggle');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should should change option shown when toggle button is clicked', async () => {
    const wrapper = mount( TicTacToe, { store, localVue } );

    expect(wrapper.vm.$data.showTicTacToe).toBeTruthy();
    await wrapper.findComponent({ ref: "gameToggle" }).vm.$emit('toggle');
    expect(wrapper.vm.$data.showTicTacToe).toBeFalsy();
  })

})
