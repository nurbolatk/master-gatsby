import React from 'react'
import PatchEvent, {
  set,
  unset,
} from 'part:@sanity/form-builder/patch-event'

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format

export default function PriceInput({
  value,
  onChange,
  type,
  inputComponent,
}) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
      />
    </div>
  )
}
