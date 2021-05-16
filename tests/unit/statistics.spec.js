import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Statistics from '@/components/Statistics.vue'
import { storeMocked } from '../__mocks__/store.js'

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeMocked);

describe('Statistics.vue', () => {
  it('renders default', () => {
    const wrapper = shallowMount(Statistics, { store, localVue });
    expect(wrapper).toMatchSnapshot();
  })
})
