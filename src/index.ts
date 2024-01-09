import { Context, Schema } from 'koishi'
import { regions, locations, identities } from './list'

export const name = 'remake-life'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('remake', '重开人生').action(() => {
    const region = randomSelect(regions)
    if (region) {
      const location = randomSelect(locations)
      const identity = randomSelect(identities)
      return `重开成功！你出生在<b>${region}</b>的<b>${location}</b>，是<b>${identity}</b>`
    } else {
      return '重开失败！你没能出生！'
    }
  })
}

function randomSelect<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}