import type { AIMessage } from '../types'
import { openai } from './ai'

export const runLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  temperature = 0.1,
}: {
  model?: string // Type of model to use
  messages: AIMessage[] // Messages to send to the model
  temperature?: number // How random the model should be
}) => {
  const response = await openai.chat.completions.create({
    model,
    temperature,
    messages,
  })

  return response.choices[0].message
}
