import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Board4inRow from '@/components/4-in-a-row/Board4inRow';
import { storeMocked } from '../../__mocks__/store.js'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeMocked);

describe('Board.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount( Board4inRow, { store, localVue });
    expect(wrapper).toMatchSnapshot();
  })

  it('renders finished', async () => {
    const wrapper = mount( Board4inRow, { store, localVue });
    await wrapper.setData({ finished5rounds: true});

    expect(wrapper).toMatchSnapshot();
  })

  it('Should call playMove when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board4inRow.methods, 'playMove');
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call checkWinner when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board4inRow.methods, 'checkFourConnected');
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call checkStalemate when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board4inRow.methods, 'checkStalemate');
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should call updateScore when cell is clicked', async () => {
    const mockMethod = jest.spyOn(Board4inRow.methods, 'updateScore');
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })

  it('Should change player when cell is clicked', async () => {
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    expect(wrapper.vm.$data.player).toBe('g');
  })  

  it('Should increment score of player1 when game is finished', async () => {
    const wrapper = mount( Board4inRow, { store, localVue });

    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    await wrapper.findComponent({ ref: "col-1" }).trigger('click');
    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    await wrapper.findComponent({ ref: "col-1" }).trigger('click');
    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    await wrapper.findComponent({ ref: "col-1" }).trigger('click');
    await wrapper.findComponent({ ref: "col-0" }).trigger('click');
    
    expect(wrapper.vm.$data.finished).toBeTruthy();
    expect(wrapper.vm.$data.player1).toBe(1);
  })
})
