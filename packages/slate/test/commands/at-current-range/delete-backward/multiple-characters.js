/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.deleteBackward(3)
}

export const input = (
  <value>
    <document>
      <paragraph>
        word<cursor />
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        w<cursor />
      </paragraph>
    </document>
  </value>
)
