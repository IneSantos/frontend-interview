import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Board from '@/components/tic-tac-toe/Board.vue'
import { storeMocked } from '../../__mocks__/store.js'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeMocked);

describe('Board.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount( Board, { store, localVue });
    expect(wrapper).toMatchSnapshot();
  })

  it('renders finished', async () => {
    const wrapper = mount( Board, { store, localVue });
    await wrapper.setData({ finished5rounds: true});

    expect(wrapper).toMatchSnapshot();
  })

  it('Should call playMove when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board.methods, 'playMove');
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call checkWinner when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board.methods, 'checkWinner');
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call checkStalemate when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board.methods, 'checkStalemate');
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call updateScore when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board.methods, 'updateScore');
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should change player when cell is clicked', async () => {
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    expect(wrapper.vm.$data.player).toBe('o');
  })  

  it('Should increment score of player1 when game is finished', async () => {
    const wrapper = mount( Board, { store, localVue });

    await wrapper.findComponent({ ref: "cell-0-0" }).trigger('click');
    await wrapper.findComponent({ ref: "cell-0-1" }).trigger('click');
    await wrapper.findComponent({ ref: "cell-1-1" }).trigger('click');
    await wrapper.findComponent({ ref: "cell-1-0" }).trigger('click');
    await wrapper.findComponent({ ref: "cell-2-2" }).trigger('click');
    
    expect(wrapper.vm.$data.finished).toBeTruthy();
    expect(wrapper.vm.$data.player1).toBe(1);
  })
})
