import { beforeEach, describe, expect, it, vi } from 'vitest'

import AppButton from '@/components/AppButton.vue'
import { mount } from '@vue/test-utils'
import { vuetify } from '@/main'

describe('AppButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppButton, {
      props: {},
      global: {
        plugins: [vuetify]
      }
    })

    vi.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    expect(wrapper.props().color).toBe('primary')
    expect(wrapper.props().size).toBe('default')
  })

  it('button be clicked', async () => {
    const mockClickHandler = vi.fn()
    const wrapper = mount(AppButton, {
      props: {
        onClick: mockClickHandler
      },
      global: {
        plugins: [vuetify]
      }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(mockClickHandler).toHaveBeenCalled()
  })

  it('renders slots correctly', () => {
    const wrapper = mount(AppButton, {
      global: {
        plugins: [vuetify]
      },
      slots: {
        default: '<div>default slot</div>',
        named: '<div>named slot</div>',
        noBind: '<div>noBind slot</div>',
        vbind: '<div>vbind slot</div>'
      }
    })

    expect(wrapper.html()).toContain('default slot')
    expect(wrapper.html()).toContain('named slot')
    expect(wrapper.html()).toContain('noBind slot')
    expect(wrapper.html()).toContain('vbind slot')
  })
})
