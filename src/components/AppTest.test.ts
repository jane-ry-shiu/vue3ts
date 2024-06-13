import { describe, expect, it } from 'vitest'

import AppTest from '@/components/AppTest.vue'
import { mount } from '@vue/test-utils'

describe('AppTest.vue', () => {
  it('renders a p tag', () => {
    const wrapper = mount(AppTest)
    expect(wrapper.find('p').exists()).toBe(true)
  })

  it('renders p tag with correct text', () => {
    const wrapper = mount(AppTest)
    expect(wrapper.find('p').text()).toBe('ppp')
  })

  it('has a p tag with the data-test attribute', () => {
    const wrapper = mount(AppTest)
    expect(wrapper.find('[data-test="p"]').exists()).toBe(true)
  })

  it('binds attrs correctly to p tag', async () => {
    const wrapper = mount(AppTest, {
      attrs: {
        id: 'testId',
        class: 'testClass'
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.find('p').attributes('id')).toBe('testId')
    expect(wrapper.find('p').attributes('class')).toContain('testClass')
  })
})
