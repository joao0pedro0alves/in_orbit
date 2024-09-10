import { db } from '../db'
import { goals } from '../db/schema'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal(request: CreateGoalRequest) {
  const { title, desiredWeeklyFrequency } = request

  const result = await db
    .insert(goals)
    .values({
      title,
      desiredWeeklyFrequency,
    })
    .returning()

  const [goal] = result

  return {
    goal,
  }
}
