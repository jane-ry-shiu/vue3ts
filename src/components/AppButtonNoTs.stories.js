import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import Component from './AppButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Component,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {
    default: `Button`,

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn()
  }
}

export default meta
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  args: {
    color: 'primary'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Y6zpsT3gKsYVu3wRlWSFym/Plugins-for-Dev-Mode-Playground-(Copy)?m=dev&node-id=327-187&t=1C8bZTxq2vTrfnpP-1'
    }
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Button can be clicked ', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })

    await waitFor(() => expect(args.onClick).toHaveBeenCalled())
  }
}

export const Secondary = {
  args: {
    color: 'secondary'
  }
}

export const Large = {
  args: {
    size: 'large'
  }
}

export const Small = {
  args: {
    size: 'small'
  }
}
