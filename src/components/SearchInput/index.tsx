import * as React from 'react'
import debounce from 'debounce'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Input } from './styles'

const searchFormSchemma = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchemma>

interface SearchInputProps {
  onSearch: (query: string) => void
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchemma),
    defaultValues: {
      query: '',
    },
  })

  const [debouncedQuery, setDebouncedQuery] = React.useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDebouncedQuery(event.target.value)
  }

  React.useEffect(() => {
    onSearch(debouncedQuery)
  }, [onSearch, debouncedQuery])

  return (
    <Input
      type="text"
      placeholder="Buscar conteúdo"
      {...register('query', {
        onChange: debounce(handleInputChange, 700),
      })}
    />
  )
}
