//NPM Modules

const color=require(`cli-color`)

console.log(color.red(`Hello Node js`))

console.log(color.yellow(`Hello Node js`))


// const register=require(`./auth`)

// register(`areeba`)


//file system module

const fs=require(`fs`)
const path=require(`path`)
//make a directory
fs.mkdir(path.join(__dirname,`/test`),(err)=>{

    if(err){
        console.log(`something went wrong`)

        return
    }
    console.log(`Folder Created`)
   
})


//Events Module

const Emitter=require(`events`)

const myEmitter=new Emitter()

myEmitter.on(`somename`,()=>{
    console.log(data)
})


myEmitter.emit(`somename`,{
    name:`Areeba`
})