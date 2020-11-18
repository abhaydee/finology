export let navList=[
    {id:"1",title:"Home"},
    {id:"2",title:"About Us"},
    {id:"3",title:"Services"},
    {id:"4",title:"Pricing"},
    {id:"5",title:"Careers"}
]

export const componentCheckSize=()=>{
    let isMobile=false
    if(window.outerWidth<768){
        isMobile=true
    }
    return isMobile
}