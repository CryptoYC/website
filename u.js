const fs =require('fs')
const i =fs.readdirSync('./static/images') 
for(let key of i ){
    const path=`./static/images/${key}`
    const images=fs.readdirSync(path)
    for(let i in  images){
        const keyy =images[i]
        if(/png/.test(keyy))
        fs.rename(`${path}/${keyy}`,`${path}/${i}.png`,(err)=>{console.log(err)})
    }
}