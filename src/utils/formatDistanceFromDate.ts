import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export function FormatDistanceFromDate(date: Date): string {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true
  })
}
