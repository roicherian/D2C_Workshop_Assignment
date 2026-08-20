import { useState } from 'react'
import { Field } from '@acko/field'
import { TextInput } from '@acko/textinput'
import { Typography } from '@acko/typography'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './Modal'
import { SegmentedToggleGroup } from './SegmentedToggleGroup'
import { CtaCheckPricesButton } from './CtaCheckPricesButton'
import './quote-lead-modal.css'

export function QuoteLeadModal({ open, onClose }) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('male')
  const [smoker, setSmoker] = useState('no')

  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader title="Let's build a perfect life insurance cover for you" onClose={onClose} />
      <ModalBody>
        <TextInput
          id="lead-name"
          label="Your name"
          placeholder="John  Paul "
          value={name}
          onChange={setName}
        />

        <Field label="Your gender">
          <SegmentedToggleGroup
            name="lead-gender"
            value={gender}
            onChange={setGender}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
        </Field>

        <Field label="Have you smoked in the past 12 months?">
          <SegmentedToggleGroup
            name="lead-smoker"
            value={smoker}
            onChange={setSmoker}
            options={[
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ]}
          />
        </Field>
      </ModalBody>
      <ModalFooter>
        <CtaCheckPricesButton />
        <Typography variant="caption" color="secondary" align="center" className="quote-lead-modal__fine-print">
          *T&Cs Apply
        </Typography>
      </ModalFooter>
    </Modal>
  )
}
