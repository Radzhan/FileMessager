import {promises as fs} from 'fs'

const date = new Date;
const filName = './test.txt'

const run = async () => {
    try {
        await fs.writeFile(filName, 'hello, world')
        console.log('file was written')
    } catch (err) {
        console.log(err)
    }
}
run().catch(console.error)