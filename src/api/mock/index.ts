import chocolates from '@/api/mock/data/chocolate-data.json'
import { ChocolateData } from '@/types'
const fetch = (mockData: ChocolateData, time = 0): Promise<ChocolateData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}
export default {
    fetchChocolates(): Promise<ChocolateData> {
        return fetch(chocolates, 1000).then((data) => data) // wait 1s before returning data
    }
}