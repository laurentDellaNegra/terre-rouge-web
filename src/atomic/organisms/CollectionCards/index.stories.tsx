import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Component from '.'

export default {
  title: 'Organisms/CollectionCards',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = () => <Component />

export const Primary = Template.bind({})
