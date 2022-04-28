import React, { useEffect, useState, useRef } from 'react'
import { Meta, Story } from '@storybook/react'
// import StoriesLayout from "StoriesLayout";

import ButtonComponent from './button'

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {},
  argTypes: {
    backColor: {
      control: {
        type: 'select',
        options: ['primary', 'gradient', 'black'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['submit', 'none'],
      },
    },
  },
} as Meta

const Template: Story<any> = (args) => (
  <>
    <span className="info">Primary</span>
    <ButtonComponent
      children={args.children}
      onClick={args.onClick}
      type={args.type}
      backColor={args.color}
      {...args}
    />

    <span className="info">Submit</span>
    <ButtonComponent
      children={args.children}
      onClick={args.onClick}
      type={args.type}
      backColor="tomato"
    />

    <span className="info">Black</span>
    <ButtonComponent
      children={args.children}
      onClick={args.onClick}
      type={args.type}
      backColor="black"
    />
  </>
)

export const Default = Template.bind({})
Default.parameters = {}
Default.args = {
  width: '300px',
  children: 'TEST',
  type: 'none',
  backColor: 'Primary',
}

export const Submit = Template.bind({})
Submit.parameters = {}
Submit.args = {
  width: '300px',
  children: 'Submit',
  type: 'submit',
  backColor: 'tomato',
}
