export const regions = [null, '法国', '中国', '德国', '加拿大', '缅甸', '日本', '英国', '美国', '韩国', '朝鲜', '印度', '西班牙', '巴西', '冰岛', '挪威', '丹麦', '瑞典', '芬兰', '交界地']

export const locations = ['大学', '县城', '首都', '农村', '市区']

export const identities = ['女孩子', '鼠鼠', '鲨鲨', '猫猫', '男孩子', '狗狗', '鸽子', 'xyn']

// 特殊地点
export const specialLocations = {
    "日本": ["穗织村", "鹫逗市"],
    "交界地": ["宁姆格福", "史东薇尔城", "盖利徳"]
    // 可扩展（笑）
}
    

// 特殊身份，通过地点判断，如果匹配不上返回基本的
export function getSpecialIdentities(location: string) {
    if(specialLocations["交界地"].includes(location)) {
        return ["褪色者", "菈妮", "拉塔恩"]
    } else {
        switch( location ){
            case "穗织村":
                return [
                    "朝武芳乃", "常陆茉子", "有地将臣", "丛雨", "蕾娜·列支敦瑙尔", 
                    "鞍马小春", "马庭芦花", "鞍马廉太郎", "鞍马玄十郎"
                ]
            case "鹫逗市":
                return [
                    "三司绫濑", "在原七海", "二条院羽月", "式部茉优", "壬生千咲", "在原晓",
                    "周防恭平"
                ]
            default:
                return identities
        }
    }
}