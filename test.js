var poson = require('./index')

async function go(){
    url = 'https://api.vc.bilibili.com/link_setting/v1/link_setting/get'
    r = await poson[url]()
    console.log(r)
}
go()