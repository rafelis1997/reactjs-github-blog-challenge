import { SearchForm, SearchFormButton, SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface SearchBarProps {
  numberOfPosts: number
  fetchPosts: (query?: string) => void
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormProps = z.infer<typeof searchFormSchema>

export function SearchBar({ numberOfPosts, fetchPosts }: SearchBarProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchFormSubmit(data: SearchFormProps) {
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchFormSubmit)}>
      <div>
        <h2>Publicações</h2>
        <p>
          {numberOfPosts > 1
            ? `${numberOfPosts} publicações`
            : `${numberOfPosts} publicação`}
        </p>
      </div>

      <SearchForm>
        <input
          type="text"
          placeholder="Buscar artigos por palavras chave"
          {...register('query')}
        />

        <SearchFormButton type="submit" disabled={isSubmitting}>
          Buscar
        </SearchFormButton>
      </SearchForm>
    </SearchFormContainer>
  )
}
