import { Context, Schema, Random } from 'koishi'
import { regions, locations, specialLocations, getSpecialIdentities } from './list'

export const name = 'remake-life'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('remake', '重开你的人生')
     .alias("重开")
     .action(({ session }) => {
    const region = Random.pick(regions)
    if (region) {
      let location: string
      let identity: string
      if(Object.keys(specialLocations).includes(region)) {
        // 随机在普通和特殊之间抽取
        location = Random.pick([
          ...specialLocations[region],
          ...locations
        ])
      } else {
        location = Random.pick(locations)
      }

      identity = Random.pick(getSpecialIdentities(location))

      return `<quote id="${session.messageId}"/>重开成功！你出生在<b>${region}</b>的<b>${location}</b>，是<b>${identity}</b>！`
    }
    return `<quote id="${session.messageId}"/>重开失败！你没能出生！`
  })
}