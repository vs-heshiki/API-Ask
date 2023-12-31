import { PaginationParams } from '@/core/repositories'
import { Answer } from '@/domain/forum/enterprise/entities'

export interface AnswerRepository {
    create: (answer: Answer) => Promise<void>
    delete: (answerId: string) => Promise<void>
    findById: (answerId: string) => Promise<Answer | null>
    findManyAnswers: (questionId: string, { page }: PaginationParams) => Promise<Answer[]>
    save: (answer: Answer) => Promise<void>
}
