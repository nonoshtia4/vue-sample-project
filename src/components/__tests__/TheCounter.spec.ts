import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheCounter from '../TheCounter.vue'

describe('TheCounter', () => {
  it('renders with an initial count of 0', () => {
    const wrapper = mount(TheCounter)
    expect(wrapper.text()).toContain('count is 0')
  })

  it('increments the count when clicked', async () => {
    const wrapper = mount(TheCounter)
    await wrapper.find('button').trigger('click')
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('count is 2')
  })
})
