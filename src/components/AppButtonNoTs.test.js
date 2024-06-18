import { beforeEach, describe, expect, it, vi } from 'vitest'

import AppButton from './AppButton.vue'
import { mount } from '@vue/test-utils'

describe('AppButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppButton, {
      props: {
        color: 123
      }
    })

    vi.clearAllMocks()
  })

  it('renders correctly with default props', () => {
    expect(wrapper.props().color).toBe('primary')
    expect(wrapper.props().size).toBe('default')
  })

  it.only('set props color to 123', () => {
    wrapper.setProps({ color: 'secondary' })
    expect(wrapper.props().color).toBe('secondary')
  })

  it('button be clicked', async () => {
    const mockClickHandler = vi.fn()
    const wrapper = mount(AppButton, {
      props: {
        onClick: mockClickHandler
      }
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(mockClickHandler).toHaveBeenCalled()
  })

  it('renders slots correctly', () => {
    const wrapper = mount(AppButton, {
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
