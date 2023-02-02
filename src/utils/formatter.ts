import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const dateFormatDistanceToNow = (date: Date) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })

export const ellipsesText = (text: string, maxLength: number) => {
  if (!text) {
    return ''
  }

  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}
