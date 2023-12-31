import { PaginationParams } from '@/core/repositories'
import { AnswerCommentRepository } from '@/domain/forum/application/repositories'
import { AnswerComment } from '@/domain/forum/enterprise/entities'

export class AnswerCommentRepositoryStub implements AnswerCommentRepository {
    public items: AnswerComment[] = []

    async create (answerComment: AnswerComment): Promise<void> {
        this.items.push(answerComment)
    }

    async findById (commentId: string): Promise<AnswerComment | null> {
        const comment = this.items.find(item => item.id.toString === commentId)

        return comment ? comment : null
    }

    async delete (answerComment: AnswerComment): Promise<void> {
        const commentIndex = this.items.findIndex(item => item.id === answerComment.id)

        this.items.splice(commentIndex, 1)
    }

    async findManyComments (answerId: string, { page }: PaginationParams): Promise<AnswerComment[]> {
        const comments = this.items
            .filter(item => item.answerId.toString === answerId)
            .splice((page - 1) * 20, page * 20)

        return comments
    }
}
