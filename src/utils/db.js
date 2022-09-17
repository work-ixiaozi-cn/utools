const db = window.utools.db
import _ from "lodash"
import { v4 as uuid } from "uuid"

export const fetchEnvironments = () => {
    const environments = db.allDocs()
    console.log(environments)
    const envs = _.sortBy(environments, ["key_sort", "value_sort"]);
    let data = [];
    envs.forEach((env, env_index) => {
        if(Object.keys(data).indexOf(`${env.key_sort}`) < 0){
            data[env.key_sort] = {key: env.key, values: []}
        }
        data[env.key_sort].values.push(env)
        console.log(data)
    })
    return data
}

export const updateEnvironments = (items) => {
    let data = _.flatMap(items, (item) => item.values)
    db.bulkDocs(data)
}
export const addEnvironment = () => {
    db.bulkDocs([
        {
            _id: uuid(),
            key: 'ANDROID_HOME',
            value: 'D:\\Dev\\SDK\\Android',
            key_sort: 0,
            value_sort: 0,
        },
        {
            _id: uuid(),
            key: 'Path',
            value: 'C:\\Users\\Admin\\.cargo\\bin',
            key_sort: 1,
            value_sort: 0,
        },
        {
            _id: uuid(),
            key: 'Path',
            value: 'C:\\Users\\Admin\\.cargo\\bin',
            key_sort: 1,
            value_sort: 1,
        },
    ]);
}
export const deleteEnvironment = () => {
    db.remove("152963e6dc3e6bb53ccfce9c8c4ce6bbTimedPlan")
    db.remove("506b7be4-ec79-4709-bc5e-a624b9008989")
    db.remove("8d207aa7-680f-432f-9ef5-890609aec7c0")
    db.remove("a6648133-24c6-4cf8-b49a-92f9ebd4c6bf")
}