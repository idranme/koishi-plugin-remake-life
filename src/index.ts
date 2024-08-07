import { Context, Schema, Random } from 'koishi'
import { regions, locations, identities } from './list'

export const name = 'remake-life'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('remake', '重开你的人生').action(({ session }) => {
    const region = Random.pick(regions)
    if (region) {
      const location = Random.pick(locations)
      const identity = Random.pick(identities)
      return `<quote id="${session.messageId}"/>重开成功！你出生在<b>${region}</b>的<b>${location}</b>，是<b>${identity}</b>！`
    }
    return `<quote id="${session.messageId}"/>重开失败！你没能出生！`
  })
}