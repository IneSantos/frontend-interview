import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GamesToggle from '@/components/GamesToggle.vue'
import { storeMocked } from '../__mocks__/store.js'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeMocked);

describe('GamesToggle.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(GamesToggle);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should should emmit toggle when toggle button is clicked', async () => {
    const wrapper = mount( GamesToggle, { store, localVue }  );

    await wrapper.findComponent({ ref: "tic-tac-toe" }).trigger('click');
    expect(wrapper.emitted().toggle).toBeTruthy();
  })

  it('Should should call toggle when toggle button is clicked', async () => {
    const mockMethod = jest.spyOn(GamesToggle.methods, 'toggle');
    const wrapper = mount( GamesToggle, { store, localVue });

    await wrapper.findComponent({ ref: "tic-tac-toe" }).trigger('click');
    expect(mockMethod).toHaveBeenCalled();
  })
})
