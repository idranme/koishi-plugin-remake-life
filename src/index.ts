import { Context, Schema, Random } from 'koishi'
import { regions, locations, specialLocations, getSpecialIdentities, specialRegions, identities } from './list'

export const name = 'remake-life'

export interface Config {
  enableSpecialLocations: boolean
  enableSpecialIdentities: boolean
}

export const Config: Schema<Config> = Schema.object({
  enableSpecialLocations: Schema.boolean().default(false).description('是否启用特殊地点，如「幻想乡的博丽神社」'),
  enableSpecialIdentities: Schema.boolean().default(false).description('是否启用特殊身份，如「博丽灵梦」'),
})

export function apply(ctx: Context, cfg: Config) {
  ctx.command('remake', '重开你的人生')
    .action(({ session }) => {
      const region = Random.pick(cfg.enableSpecialLocations ? [...regions, ...specialRegions] : regions)
      if (region) {
        let location: string
        if (cfg.enableSpecialLocations && specialLocations[region]) {
          // 随机在普通和特殊之间抽取
          location = Random.pick([
            ...specialLocations[region],
            ...locations
          ])
        } else {
          location = Random.pick(locations)
        }
        const identity = Random.pick(cfg.enableSpecialIdentities ? getSpecialIdentities(location) : identities)
        return `<quote id="${session.messageId}"/>重开成功！你出生在<b>${region}</b>的<b>${location}</b>，是<b>${identity}</b>！`
      }
      return `<quote id="${session.messageId}"/>重开失败！你没能出生！`
    })
}