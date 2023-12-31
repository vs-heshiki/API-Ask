import { QuestionAttachment } from '@/domain/forum/enterprise/entities'

export interface QuestionAttachmentRepository {
    findManyByQuestionId: (questionId: string) => Promise<QuestionAttachment[]>
    deleteManyByQuestionId: (questionId: string) => Promise<void>
}
