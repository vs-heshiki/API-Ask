import { AnswerRepository } from '@/domain/forum/application/repositories'
import { Answer } from '@/domain/forum/enterprise/entities'
import { UniqueEntityId } from '@/core/entities'

export type AnswerQuestionInput = {
    instructorId: string
    questionId: string
    content: string
}

export class AnswerQuestion {

    constructor (private readonly answerRepository: AnswerRepository) { }

    async execute ({ instructorId, questionId, content }: AnswerQuestionInput): Promise<Answer> {
        const answer = Answer.create({
            content,
            authorId: new UniqueEntityId(instructorId),
            questionId: new UniqueEntityId(questionId)
        })

        await this.answerRepository.create(answer)

        return answer
    }
}