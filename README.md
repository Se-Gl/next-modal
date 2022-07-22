# SSR Modal Component

[![Prettier](https://github.com/Se-Gl/next-modal/actions/workflows/prettier.yml/badge.svg)](https://github.com/Se-Gl/next-modal/actions/workflows/prettier.yml)
[![Downloads p/week](https://badgen.net/npm/dw/next-modal)](https://badgen.net/npm/dw/next-modal)
[![NPM version](https://badgen.net/npm/v/next-modal)](https://badgen.net/npm/v/next-modal)
[![minified + gzip](https://badgen.net/bundlephobia/minzip/next-modal)](https://badgen.net/bundlephobia/minzip/next-modal)
[![License](https://badgen.net/npm/license/next-modal)](https://badgen.net/npm/license/next-modal)

This is a sustainable React modal component project based on [greenCSS](https://github.com/Se-Gl/greenCSS), which also works SSR with Next.js. greenCSS is an animated, responsive, lightweight and sustainable CSS library. It is recommended that you also use greenCSS in your project. If you don't want to, just style your modal with your own classes.

![modal preview](/img/modal-preview.gif)

## Features

- Press CTRL + k to open the modal
- Press ESC key to close the modal
- On Chrome browser the background is blurred. In Firefox this feature is not available, there the background has an opacity of 75%.
- Click on the background or the close icon (top right corner) to close the modal.
- The Modal component use a default greenCSS fade in animation with a duration of 500ms `fade-in animation-duration-500ms animation-forwards`. If you want to animate the Modal.Header or Modal.Body, just add your greenCSS or your custom animation as a class to the `className`. Here can find all [greenCSS animations](https://www.greencss.dev/examples/animation). p.e. `<Modal.Body className='clip-circle-in-left animation-duration-800ms animation-forwards'>`
- Do you want to use your own close icon on the top right corner? Add `closeIcon` with your own (svg-) component. `<Modal toggle={toggleModal} setToggle={setToggleModal} closeIcon={<div>X</div>}>` The recommended size for an svg is 20x20px.
- People who do not want animations will automatically not be shown any animations. As it will be blocked by default `prefers-reduced-motion: reduce`

## Getting Started

First, install the Modal dependency:

```bash
npm i next-modal
```

### Next.js

In the pages directory, add `_document.js`. It is important to add `<div id='modal-portal' />` below the `<Main />` component. Otherwise your SSR Modal will not work. Learn more about the custom [document](https://nextjs.org/docs/advanced-features/custom-document).

```js
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modal-portal' />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
```

### Example Page

The following jsx file is based on greenCSS. If you don't want to use it, you can add your own `classNames`.

```js
import React, { useState } from 'react'
import { Modal } from 'next-modal'

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <div className='min-h-100vh bg-gray-9'>
      {/* Modal Toggle Button */}
      <button onClick={() => setToggleModal((prev) => !prev)} className='bg-red-9 px-20px py-10px rounded-10px hover:bg-red-7'>
        Toggle Modal
      </button>

      {/* Modal */}
      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header className='sans font-900 text-30px fade-in-left animation-duration-500ms animation-forwards'>
          <h3>👋 Hi, I'm your modal</h3>
        </Modal.Header>
        <Modal.Body className='sans font-400 text-15px text-gray fade-in animation-duration-800ms animation-forwards'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Quis vel eros donec ac. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique senectus.
          </p>
          <p>
            Nunc non blandit massa enim nec dui nunc. Sed elementum tempus egestas sed sed risus. Senectus et netus et malesuada
            fames ac turpis egestas maecenas. Urna nec tincidunt praesent semper feugiat. Est ante in nibh mauris cursus mattis
            molestie. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
          </p>
        </Modal.Body>
        <Modal.Footer className='sans font-400 text-10px'>
          <h3>copyright</h3>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
```

### Summary

1. Import the modal.
2. Next.js: Adjust pages/\_document.js
3. In your page/component:

- Set the react useState to toggle the modal.
- Create a button to activate the modal with one click.
- Create and adjust your personal modal.

4. Have fun with the sustainable Next.js Modal

## Props

| Name                  | Default Value                                         | Description                                                                                                             |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| toggle                | -                                                     | useState toggle state                                                                                                   |
| setToggle             | -                                                     | useState toggle setToggle                                                                                               |
| className             | ""                                                    | Use your own className to style the modal content                                                                       |
| backgroundAnimation   | 'fade-in animation-duration-500ms animation-forwards' | Add your custom animation className in order to overwrite the default fade in animation for the background              |
| modalContentAnimation | 'fade-in animation-duration-500ms animation-forwards' | Add your custom animation className in order to overwrite the default fade in animation for the modal content component |
| closeIcon             | `<CloseIcon /> `                                      | Add your own close icon on the top right, may be an svg or your custom component                                        |
| useKeyInput           | true                                                  | Use the default key inputs "CTRL + k" to open the modal and "ESC" to close the modal                                    |
| `<Modal>`             | `<Modal>{children}</Modal>`                           | This is the Modal component. Add your own child element(s) or use the `<Modal.Header>` and `<Modal.Body>` inside.       |
| `<Modal.Header>`      | `<Modal.Header>{children}</Modal.Header>`             | Add a header text                                                                                                       |
| `<Modal.Body>`        | `<Modal.Body>{children}</Modal.Body>`                 | Add body elements                                                                                                       |
| `<Modal.Footer>`      | `<Modal.Footer>{children}</Modal.Footer>`             | Add footer elements                                                                                                     |
